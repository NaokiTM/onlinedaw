// audioEngine.js
/*
    Context Dictionary:

    AudioContext: Browser audio engine
    GainNode: Volume adjustment (individual track and master)
    Track: One instrument row (contains its own GainNode and list of clips to play)
    Clip: One individual play of a sound. Which sample to play and when
    AudioBuffer: Audio sample stored in memory
    BufferSource: A temporary non-reusable node that takes an AudioBuffer and plays it once
*/

export class AudioEngine {
    // Creates a new instance of AudioEngine with an empty track list
    constructor() {
        this.audioContext = new AudioContext;
        this.masterGain = this.audioContext.createGain();
        this.masterGain.connect(this.audioContext.destination)
        // @ts-ignore
        this.tracks = [];
    }

    // Creates a new empty track with its own GainNode and clip list
    addTrack() {
        // Create a new gain node
        const trackGain = this.audioContext.createGain();
        trackGain.gain.value = 1.0;
        trackGain.connect(this.masterGain);

        // Store track state: gain + clips
        const track = {
            gainNode: trackGain,
            clips: [] // each clip = {buffer, startTime}

        }
        this.tracks.push(track);
        return track;
    }

    // Decodes an audio file and returns an AudioBuffer
    async loadBuffer(url) {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioContext.decodeAudioData(arrayBuffer);

        return audioBuffer;
    }

    addClip(track, buffer, options = {}) {
        const clip = {
            buffer,
            startTime: options.startTime || 0, 
            gain: options.gain ?? 1.0, 
            pan: options.pan ?? 0,
            velocity: options.velocity ?? 1.0
        }

        track.clips.push(clip);
        return clip;
    }

    play() {
        const now = this.audioContext.currentTime;

        //play every clip of every track
        for (const track of this.tracks) {
            for (const clip of track.clips) {
                const sourceNode = this.audioContext.createBufferSource();
                sourceNode.buffer = clip.buffer;
                sourceNode.connect(track.gainNode);
                sourceNode.start(now + clip.startTime);
            }
        }

        console.log("audioEngine is playing!")
    }
}