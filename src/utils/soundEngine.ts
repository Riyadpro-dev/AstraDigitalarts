/**
 * Astra Cinematic Web Audio Ambient Engine
 * Procedural generative audio synthesizer for museum-grade atmosphere.
 * Zero external MP3 assets, zero latency, runs offline.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true;
  private masterGain: GainNode | null = null;
  private droneOsc1: OscillatorNode | null = null;
  private droneOsc2: OscillatorNode | null = null;
  private subOsc: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;
  private lfoGain: GainNode | null = null;
  private listeners: Set<(isPlaying: boolean) => void> = new Set();

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public subscribe(listener: (isPlaying: boolean) => void) {
    this.listeners.add(listener);
    listener(!this.isMuted);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(!this.isMuted));
  }

  public toggle(): boolean {
    if (this.isMuted) {
      this.startDrone();
      this.isMuted = false;
    } else {
      this.stopDrone();
      this.isMuted = true;
    }
    this.notify();
    return !this.isMuted;
  }

  public getIsPlaying(): boolean {
    return !this.isMuted;
  }

  private startDrone() {
    try {
      this.initContext();
      if (!this.ctx) return;

      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }

      const now = this.ctx.currentTime;

      // Master gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.001, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.22, now + 3.0); // Gentle 3s swell
      this.masterGain.connect(this.ctx.destination);

      // Low pass resonant filter
      this.filter = this.ctx.createBiquadFilter();
      this.filter.type = 'lowpass';
      this.filter.frequency.setValueAtTime(160, now);
      this.filter.Q.setValueAtTime(3.5, now);
      this.filter.connect(this.masterGain);

      // LFO for slow atmospheric breathing (0.08 Hz = 12.5s cycle)
      this.lfo = this.ctx.createOscillator();
      this.lfo.frequency.setValueAtTime(0.08, now);
      this.lfoGain = this.ctx.createGain();
      this.lfoGain.gain.setValueAtTime(45, now);
      this.lfo.connect(this.lfoGain);
      this.lfoGain.connect(this.filter.frequency);
      this.lfo.start();

      // Sub-bass 55Hz (A1)
      this.subOsc = this.ctx.createOscillator();
      this.subOsc.type = 'sine';
      this.subOsc.frequency.setValueAtTime(55, now);
      const subGain = this.ctx.createGain();
      subGain.gain.setValueAtTime(0.4, now);
      this.subOsc.connect(subGain);
      subGain.connect(this.filter);
      this.subOsc.start();

      // Overtone harmonic 110Hz (A2) with triangle warmth
      this.droneOsc1 = this.ctx.createOscillator();
      this.droneOsc1.type = 'triangle';
      this.droneOsc1.frequency.setValueAtTime(110, now);
      const osc1Gain = this.ctx.createGain();
      osc1Gain.gain.setValueAtTime(0.18, now);
      this.droneOsc1.connect(osc1Gain);
      osc1Gain.connect(this.filter);
      this.droneOsc1.start();

      // Subtle detuned ethereal shimmer (164.81Hz E3 perfect fifth)
      this.droneOsc2 = this.ctx.createOscillator();
      this.droneOsc2.type = 'sine';
      this.droneOsc2.frequency.setValueAtTime(164.81, now);
      const osc2Gain = this.ctx.createGain();
      osc2Gain.gain.setValueAtTime(0.07, now);
      this.droneOsc2.connect(osc2Gain);
      osc2Gain.connect(this.filter);
      this.droneOsc2.start();
    } catch {
      // Graceful fallback if Web Audio is restricted
    }
  }

  private stopDrone() {
    if (!this.ctx || !this.masterGain) return;
    const now = this.ctx.currentTime;
    try {
      this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
      this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      setTimeout(() => {
        try {
          this.subOsc?.stop();
          this.droneOsc1?.stop();
          this.droneOsc2?.stop();
          this.lfo?.stop();
          this.subOsc?.disconnect();
          this.droneOsc1?.disconnect();
          this.droneOsc2?.disconnect();
          this.masterGain?.disconnect();
        } catch {
          // Ignore cleanup errors
        }
      }, 1300);
    } catch {
      // Ignore ramp errors
    }
  }

  public playTactileChime() {
    if (this.isMuted) return;
    try {
      this.initContext();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      // High subtle crystal chime
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(440, now + 0.12);

      gain.gain.setValueAtTime(0.035, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.13);
    } catch {
      // Ignore
    }
  }
}

export const soundEngine = new SoundEngine();
