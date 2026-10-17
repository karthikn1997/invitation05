/**
 * Gentle Ceremonial Audio Synthesizer
 * Plays an authentic, serene Indian classical scale (Mohanam Raaga)
 * Uses Web Audio API so it runs without external audio file loading failures.
 */

class AudioSynth {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.timer = null;
    this.droneNodes = [];
    this.scale = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25]; // Sa, Ri2, Ga3, Pa, Dha2, Sa'
    this.notes = [0, 1, 2, 3, 4, 3, 2, 1, 2, 3, 5, 4, 3, 2, 1, 0];
    this.step = 0;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  start() {
    this.init();
    if (!this.ctx) return;
    this.isPlaying = true;
    this.startDrone();

    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (!this.isPlaying || !this.ctx) return;
      const noteIdx = this.notes[this.step % this.notes.length];
      const freq = this.scale[noteIdx];
      this.playFluteNote(freq, 0.8);
      this.step++;
    }, 600);
  }

  stop() {
    this.isPlaying = false;
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.stopDrone();
  }

  playFluteNote(freq, duration) {
    if (!this.ctx || !this.isPlaying) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, this.ctx.currentTime);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(0.001, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.05, this.ctx.currentTime + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio context cleanup
    }
  }

  startDrone() {
    if (!this.ctx) return;
    this.stopDrone();
    const baseFreqs = [130.81, 196.00]; // Low Sa & Pa
    baseFreqs.forEach((freq, idx) => {
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.008 / (idx + 1), this.ctx.currentTime);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        this.droneNodes.push({ osc, gain });
      } catch (e) {}
    });
  }

  stopDrone() {
    this.droneNodes.forEach(({ osc, gain }) => {
      try {
        gain.gain.setTargetAtTime(0.0001, this.ctx.currentTime, 0.1);
        setTimeout(() => osc.stop(), 200);
      } catch (e) {}
    });
    this.droneNodes = [];
  }
}

export const audioSynth = new AudioSynth();
