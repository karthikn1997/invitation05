import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Video, Download, Check, AlertCircle, Play, Loader2 } from 'lucide-react';

export default function VideoExportModal({ isOpen, onClose, config }) {
  const [status, setStatus] = useState('idle'); // 'idle' | 'rendering' | 'completed' | 'error'
  const [progress, setProgress] = useState(0);
  const [currentSceneLabel, setCurrentSceneLabel] = useState('');
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const canvasRef = useRef(null);
  const isCancelledRef = useRef(false);

  if (!isOpen) return null;

  // Helper to load an image onto an HTMLImageElement
  const loadImage = (src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve(img);
      img.onerror = () => {
        console.warn('Failed to load image for render:', src);
        resolve(null);
      };
      img.src = src;
    });
  };

  const handleStartRender = async () => {
    setStatus('rendering');
    setProgress(0);
    setDownloadUrl(null);
    setErrorMessage('');
    isCancelledRef.current = false;

    try {
      const canvas = canvasRef.current;
      if (!canvas) throw new Error('Canvas not available');
      const ctx = canvas.getContext('2d');

      // Video dimensions: 720 x 1280 (Fast, crisp 9:16 vertical video)
      canvas.width = 720;
      canvas.height = 1280;

      setCurrentSceneLabel('ஆவணங்களை தயார் செய்கிறது (Loading Assets)...');

      // Preload all assets
      const [
        gopuramImg,
        chakkaraImg,
        titleImg,
        brideImg,
        groomImg,
        coupleBgImg,
        coupleImg,
        leafLeftImg,
        leafRightImg,
      ] = await Promise.all([
        loadImage('/scenes/gopuram_cutout@2x.png'),
        loadImage('/scenes/rotating_chakkara@2x.png'),
        loadImage('/scenes/thirumana_azhaippithazh_transparent@2x.png'),
        loadImage(config?.bride?.photo || '/scenes/bride_cutout@2x.png'),
        loadImage(config?.groom?.photo || '/scenes/groom_cutout@2x.png'),
        loadImage(config?.couple?.bgPhoto || '/scenes/scene4_bg_clean.jpg'),
        loadImage(config?.couple?.photo || '/scenes/scene4_couple_cutout_clean@2x.png'),
        loadImage('/scenes/scene4_leaf_left.png'),
        loadImage('/scenes/scene4_leaf_right.png'),
      ]);

      // Set up Canvas Stream & MediaRecorder
      const fps = 30;
      const stream = canvas.captureStream(fps);

      // Audio setup (load BGM and pipe into recorder stream)
      let audioCtx = null;
      let audioDest = null;
      try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (AudioContextClass && config?.music?.file) {
          audioCtx = new AudioContextClass();
          const response = await fetch(config.music.file);
          const arrayBuffer = await response.arrayBuffer();
          const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
          const sourceNode = audioCtx.createBufferSource();
          sourceNode.buffer = audioBuffer;
          sourceNode.loop = true;
          audioDest = audioCtx.createMediaStreamDestination();
          sourceNode.connect(audioDest);
          sourceNode.start(0);

          audioDest.stream.getAudioTracks().forEach((track) => {
            stream.addTrack(track);
          });
        }
      } catch (audioErr) {
        console.warn('Audio stream mix failed, continuing with video only:', audioErr);
      }

      // Detect supported mimeType
      let mimeType = 'video/webm;codecs=vp9';
      if (!MediaRecorder.isTypeSupported(mimeType)) {
        mimeType = 'video/webm';
        if (!MediaRecorder.isTypeSupported(mimeType)) {
          mimeType = 'video/mp4';
        }
      }

      const recorder = new MediaRecorder(stream, {
        mimeType: MediaRecorder.isTypeSupported(mimeType) ? mimeType : '',
        videoBitsPerSecond: 3500000,
      });

      const recordedChunks = [];
      recorder.ondataavailable = (e) => {
        if (e.data && e.data.size > 0) {
          recordedChunks.push(e.data);
        }
      };

      recorder.start();

      // Total scene breakdown (frames at 30 fps)
      // Scene 1: 120 frames (4s)
      // Scene 2: 120 frames (4s)
      // Scene 3: 120 frames (4s)
      // Scene 4: 140 frames (4.6s)
      // Scene 5: 170 frames (5.6s)
      const framesPerScene = [120, 120, 120, 140, 170];
      const totalFrames = framesPerScene.reduce((a, b) => a + b, 0);
      let currentFrame = 0;

      // Render Loop
      for (let sceneIdx = 0; sceneIdx < 5; sceneIdx++) {
        if (isCancelledRef.current) break;

        const sceneLabels = [
          'Scene 1/5: கோபுரம் & விநாயகர் சக்கரம் (Temple Intro)',
          'Scene 2/5: மணமகள் அறிமுகம் (Bride Photo)',
          'Scene 3/5: மணமகன் அறிமுகம் (Groom Photo)',
          'Scene 4/5: மணமக்கள் தரிசனம் (Couple Palace & Door)',
          'Scene 5/5: சுபமுகூர்த்த விவரங்கள் (Wedding Details)',
        ];
        setCurrentSceneLabel(sceneLabels[sceneIdx]);

        const framesInThisScene = framesPerScene[sceneIdx];

        for (let f = 0; f < framesInThisScene; f++) {
          if (isCancelledRef.current) break;

          currentFrame++;
          const progressPercent = Math.round((currentFrame / totalFrames) * 100);
          setProgress(progressPercent);

          const sceneProgress = f / framesInThisScene;

          // Clear Frame
          ctx.clearRect(0, 0, 720, 1280);

          // DRAW SCENE CONTENT
          if (sceneIdx === 0) {
            // SCENE 1: Mint Sky + Temple + Rotating Chakra + Tamil Calligraphy
            // Mint Gradient Background
            const skyGrad = ctx.createLinearGradient(0, 0, 0, 1280);
            skyGrad.addColorStop(0, '#98D7C8');
            skyGrad.addColorStop(0.4, '#B9E5DB');
            skyGrad.addColorStop(0.8, '#D8EED8');
            skyGrad.addColorStop(1, '#FFF5BF');
            ctx.fillStyle = skyGrad;
            ctx.fillRect(0, 0, 720, 1280);

            // Birds flying
            ctx.fillStyle = '#1E3B30';
            const birdX = 80 + sceneProgress * 220;
            const birdY = 500 - sceneProgress * 40;
            ctx.beginPath();
            ctx.arc(birdX, birdY, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(birdX + 25, birdY + 15, 3, 0, Math.PI * 2);
            ctx.fill();

            // Temple Gopuram with subtle push-in
            if (gopuramImg) {
              const gScale = 1 + sceneProgress * 0.04;
              ctx.save();
              ctx.translate(360, 1280);
              ctx.scale(gScale, gScale);
              ctx.drawImage(gopuramImg, -360, -960, 720, 960);
              ctx.restore();
            }

            // Rotating Chakra
            if (chakkaraImg) {
              const angle = sceneProgress * Math.PI * 2 * 2; // Spins smoothly
              ctx.save();
              ctx.translate(360, 180);
              ctx.rotate(angle);
              ctx.drawImage(chakkaraImg, -90, -90, 180, 180);
              ctx.restore();
            }

            // Tamil Calligraphy Title
            if (titleImg) {
              ctx.drawImage(titleImg, 90, 310, 540, 150);
            } else {
              ctx.fillStyle = '#112F1B';
              ctx.font = 'bold 44px sans-serif';
              ctx.textAlign = 'center';
              ctx.fillText('திருமண அழைப்பிதழ்', 360, 380);
            }
          } else if (sceneIdx === 1) {
            // SCENE 2: Bride Photo
            // Mint Sky
            const skyGrad = ctx.createLinearGradient(0, 0, 0, 1280);
            skyGrad.addColorStop(0, '#98D7C8');
            skyGrad.addColorStop(1, '#D8EED8');
            ctx.fillStyle = skyGrad;
            ctx.fillRect(0, 0, 720, 1280);

            // Background Temple
            if (gopuramImg) {
              ctx.globalAlpha = 0.35;
              ctx.drawImage(gopuramImg, 0, 320, 720, 960);
              ctx.globalAlpha = 1.0;
            }

            // Bride Photo
            if (brideImg) {
              const bScale = (config?.bride?.scale || 1) * (1 + sceneProgress * 0.02);
              const bOffsetY = config?.bride?.offsetY || 0;
              ctx.save();
              ctx.translate(460, 1280 + bOffsetY);
              ctx.scale(bScale, bScale);
              ctx.drawImage(brideImg, -260, -1000, 520, 1000);
              ctx.restore();
            }

            // Typography
            ctx.fillStyle = '#153E23';
            ctx.font = 'bold 24px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('— மணமகள்', 60, 160);

            ctx.font = 'bold 50px sans-serif';
            ctx.fillStyle = '#0F2B17';
            ctx.fillText(config?.bride?.tamilName || 'மணமகள்', 60, 230);

            ctx.font = 'italic 28px serif';
            ctx.fillStyle = '#1D4526';
            ctx.fillText(config?.bride?.englishName || '', 60, 280);
            ctx.font = '22px sans-serif';
            ctx.fillText(config?.bride?.qualificationTamil || '', 60, 315);
          } else if (sceneIdx === 2) {
            // SCENE 3: Groom Photo
            // Mint Sky
            const skyGrad = ctx.createLinearGradient(0, 0, 0, 1280);
            skyGrad.addColorStop(0, '#98D7C8');
            skyGrad.addColorStop(1, '#D8EED8');
            ctx.fillStyle = skyGrad;
            ctx.fillRect(0, 0, 720, 1280);

            // Softly Blurred Bride in Background
            if (brideImg) {
              ctx.globalAlpha = 0.3;
              ctx.drawImage(brideImg, -50, 400, 450, 880);
              ctx.globalAlpha = 1.0;
            }

            // Groom Photo
            if (groomImg) {
              const gScale = (config?.groom?.scale || 1) * (1 + sceneProgress * 0.02);
              const gOffsetY = config?.groom?.offsetY || 0;
              ctx.save();
              ctx.translate(470, 1280 + gOffsetY);
              ctx.scale(gScale, gScale);
              ctx.drawImage(groomImg, -270, -1020, 540, 1020);
              ctx.restore();
            }

            // Typography
            ctx.fillStyle = '#153E23';
            ctx.font = 'bold 24px sans-serif';
            ctx.textAlign = 'left';
            ctx.fillText('— மணமகன்', 60, 160);

            ctx.font = 'bold 50px sans-serif';
            ctx.fillStyle = '#0F2B17';
            ctx.fillText(config?.groom?.tamilName || 'மணமகன்', 60, 230);

            ctx.font = 'italic 28px serif';
            ctx.fillStyle = '#1D4526';
            ctx.fillText(config?.groom?.englishName || '', 60, 280);
            ctx.font = '22px sans-serif';
            ctx.fillText(config?.groom?.qualificationTamil || '', 60, 315);
          } else if (sceneIdx === 3) {
            // SCENE 4: Couple Reveal & Mandapam Entrance
            ctx.fillStyle = '#1E0805';
            ctx.fillRect(0, 0, 720, 1280);

            // 1. Heritage Mandapam Background
            if (coupleBgImg) {
              const bgScale = 1.0 + sceneProgress * 0.04;
              ctx.save();
              ctx.translate(360, 640);
              ctx.scale(bgScale, bgScale);
              ctx.drawImage(coupleBgImg, -360, -640, 720, 1280);
              ctx.restore();
            }

            // 1.5. Dynamic Animated Swaying Banana Leaves (Left & Right)
            if (leafLeftImg) {
              const swayL = Math.sin(sceneProgress * Math.PI * 5) * 0.035;
              ctx.save();
              ctx.translate(40, 760);
              ctx.rotate(swayL);
              ctx.drawImage(leafLeftImg, -40, -600, 260, 600);
              ctx.restore();
            }
            if (leafRightImg) {
              const swayR = Math.sin(sceneProgress * Math.PI * 5 + 1.2) * 0.035;
              ctx.save();
              ctx.translate(680, 760);
              ctx.rotate(swayR);
              ctx.drawImage(leafRightImg, -220, -600, 260, 600);
              ctx.restore();
            }

            // 2. Animated Seated Couple Entrance onto Steps
            if (coupleImg && sceneProgress > 0.18) {
              const enterProg = Math.min(1, (sceneProgress - 0.18) / 0.28);
              const cScale = (config?.couple?.scale || 1) * (0.96 + enterProg * 0.04);
              const slideY = 35 * (1 - enterProg);

              ctx.save();
              ctx.globalAlpha = enterProg;
              ctx.translate(360, 640 + slideY);
              ctx.scale(cScale, cScale);
              ctx.drawImage(coupleImg, -360, -640, 720, 1280);
              ctx.restore();
              ctx.globalAlpha = 1.0;
            }

            // Bottom Vignette
            const vig = ctx.createLinearGradient(0, 800, 0, 1280);
            vig.addColorStop(0, 'transparent');
            vig.addColorStop(1, 'rgba(15, 4, 3, 0.95)');
            ctx.fillStyle = vig;
            ctx.fillRect(0, 800, 720, 480);

            // Names
            ctx.textAlign = 'center';
            ctx.font = 'bold 22px serif';
            ctx.fillStyle = '#E8C77F';
            ctx.fillText('TOGETHER WITH THEIR FAMILIES', 360, 1080);

            ctx.font = 'bold 44px sans-serif';
            ctx.fillStyle = '#FFF5DB';
            ctx.fillText(config?.couple?.tamilNames || '', 360, 1140);

            ctx.font = 'italic 28px serif';
            ctx.fillStyle = '#E6C687';
            ctx.fillText(config?.couple?.englishNames || '', 360, 1190);
          } else if (sceneIdx === 4) {
            // SCENE 5: Wedding Details
            const bgGrad = ctx.createLinearGradient(0, 0, 0, 1280);
            bgGrad.addColorStop(0, '#1E0705');
            bgGrad.addColorStop(1, '#0C0302');
            ctx.fillStyle = bgGrad;
            ctx.fillRect(0, 0, 720, 1280);

            // Gold Card
            ctx.fillStyle = 'rgba(38, 12, 8, 0.9)';
            ctx.strokeStyle = '#E6C687';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.roundRect(60, 140, 600, 980, 32);
            ctx.fill();
            ctx.stroke();

            ctx.textAlign = 'center';
            ctx.fillStyle = '#E8C77F';
            ctx.font = 'bold 22px sans-serif';
            ctx.fillText(config?.wedding?.tamilTitle || 'சுபமுகூர்த்தம்', 360, 220);

            ctx.font = 'bold 44px serif';
            ctx.fillStyle = '#FFF5DB';
            ctx.fillText(config?.wedding?.title || 'WEDDING', 360, 280);

            ctx.font = 'bold 54px serif';
            ctx.fillStyle = '#F5D98A';
            ctx.fillText(`${config?.wedding?.dayOrdinal} ${config?.wedding?.monthYear}`, 360, 380);

            ctx.font = 'bold 30px serif';
            ctx.fillStyle = '#FFF5DB';
            ctx.fillText(`Between ${config?.wedding?.muhurthamTimeFormatted}`, 360, 440);

            // Mandapam
            ctx.font = 'bold 22px serif';
            ctx.fillStyle = '#E8C77F';
            ctx.fillText('SACRED VENUE', 360, 580);

            ctx.font = 'bold 34px sans-serif';
            ctx.fillStyle = '#FFF8E7';
            ctx.fillText(config?.venue?.tamilName || '', 360, 640);

            ctx.font = 'italic 26px serif';
            ctx.fillStyle = '#E6C687';
            ctx.fillText(config?.venue?.name || '', 360, 690);

            ctx.font = '20px sans-serif';
            ctx.fillStyle = '#FAF0D7';
            ctx.fillText(config?.venue?.city || '', 360, 730);

            ctx.font = 'bold 24px sans-serif';
            ctx.fillStyle = '#E8C77F';
            ctx.fillText('இரு இல்லங்களின் இனிய அழைப்பு', 360, 880);
          }

          // Small yield to allow browser rendering & smooth progress
          if (f % 5 === 0) {
            await new Promise((r) => setTimeout(r, 12));
          }
        }
      }

      // Finish recording
      setCurrentSceneLabel('வீடியோவை தயார் செய்கிறது (Finalizing MP4/WebM)...');
      recorder.stop();

      await new Promise((resolve) => {
        recorder.onstop = () => {
          const blob = new Blob(recordedChunks, { type: mimeType });
          const url = URL.createObjectURL(blob);
          setDownloadUrl(url);
          setStatus('completed');
          setProgress(100);
          if (audioCtx) {
            audioCtx.close();
          }
          resolve();
        };
      });
    } catch (err) {
      console.error('Render error:', err);
      setErrorMessage(err.message || 'Video rendering failed');
      setStatus('error');
    }
  };

  const handleDownload = () => {
    if (!downloadUrl) return;
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = `${config?.slug || 'wedding-invitation'}_9x16.mp4`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[130] flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative z-10 w-full max-w-lg p-5 sm:p-7 rounded-3xl bg-[#160705] border-2 border-[#E6C687]/70 text-[#FFF8E7] shadow-[0_25px_90px_rgba(0,0,0,0.95)] flex flex-col items-center text-center"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#35100B] text-[#E6C687] hover:bg-[#4D1710] border border-[#E6C687]/40 cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Icon Header */}
          <div className="w-16 h-16 rounded-full border-2 border-[#E6C687]/60 bg-[#42140D] flex items-center justify-center mb-3 text-[#F5D98A] shadow-[0_0_30px_rgba(230,198,135,0.4)]">
            <Video className="w-8 h-8" />
          </div>

          <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#FFF5DB]">
            MP4 Video Export Pipeline
          </h2>
          <p className="font-serif text-xs text-[#E6C687]/80 mt-1 max-w-sm">
            Renders exact 9:16 vertical video (720x1280 @ 30fps) with Tamil fonts, customer photos, and ceremonial audio track.
          </p>

          {/* Offscreen / Hidden Render Canvas */}
          <canvas ref={canvasRef} className="hidden" />

          {/* Status Display Area */}
          <div className="my-6 w-full p-4 rounded-2xl bg-[#220B08] border border-[#E6C687]/30 flex flex-col items-center">
            {status === 'idle' && (
              <div className="space-y-2">
                <span className="text-xs font-serif text-[#FAF0D7]/80">
                  Ready to render invitation video for:
                </span>
                <p className="font-tamil font-bold text-sm text-[#F5D98A]">
                  {config?.displayName || config?.couple?.tamilNames}
                </p>
                <div className="text-[11px] font-mono text-[#E6C687]/70 pt-1">
                  Format: 9:16 Vertical • 30 FPS • MP4/WebM with BGM
                </div>
              </div>
            )}

            {status === 'rendering' && (
              <div className="w-full space-y-3">
                <div className="flex items-center justify-between text-xs font-serif text-[#E8C77F]">
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-[#F5D98A]" />
                    <span>{currentSceneLabel}</span>
                  </span>
                  <span className="font-mono font-bold text-[#FFF5DB]">{progress}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2.5 rounded-full bg-[#3D140F] overflow-hidden border border-[#E6C687]/30">
                  <div
                    className="h-full bg-gradient-to-r from-[#DDA74A] to-[#F5D98A] transition-all duration-150"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}

            {status === 'completed' && (
              <div className="space-y-2 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-emerald-900/60 border border-emerald-400 text-emerald-300 flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-base text-[#FFF5DB]">
                  Video Render Completed!
                </h3>
                <p className="font-serif text-xs text-emerald-300/90">
                  Your vertical 9:16 wedding invitation video is ready for download.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="space-y-2 flex flex-col items-center text-red-300">
                <AlertCircle className="w-8 h-8 text-red-400" />
                <p className="text-xs font-serif">{errorMessage || 'An error occurred during rendering'}</p>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="w-full flex items-center justify-center gap-3">
            {status === 'idle' && (
              <button
                type="button"
                onClick={handleStartRender}
                className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#DDA74A] via-[#F5D98A] to-[#C99738] text-[#1A0704] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Start Video Render (ரெண்டர் தொடங்குக)</span>
              </button>
            )}

            {status === 'rendering' && (
              <button
                type="button"
                onClick={() => {
                  isCancelledRef.current = true;
                  setStatus('idle');
                }}
                className="py-2.5 px-4 rounded-xl bg-[#3D140F] text-[#FAF0D7]/70 font-serif text-xs cursor-pointer"
              >
                Cancel
              </button>
            )}

            {status === 'completed' && (
              <div className="flex items-center gap-3 w-full">
                <button
                  type="button"
                  onClick={handleStartRender}
                  className="py-3 px-4 rounded-xl bg-[#2D100C] border border-[#E6C687]/40 text-[#E6C687] font-serif text-xs font-semibold cursor-pointer"
                >
                  Re-Render
                </button>
                <button
                  type="button"
                  onClick={handleDownload}
                  className="flex-1 py-3 px-6 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1EAA52] text-[#0A2E14] font-serif font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-102 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download MP4 Video</span>
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
