import P5 from 'p5';
import P5sound from "p5/lib/addons/p5.sound";


let p5;
let fft;
let sound;

export function main(_p5) {
  p5 = _p5;

  p5.setup = () => {
    p5.createCanvas(500, 500);
    p5.background(100);
    fft = new P5sound.FFT();
    fft.setInput(require(`@/assets/audios/Audio 2.mp3`));
    sound.amp(0.2);
  };
  p5.draw = () => {
    p5.background(220);
    let spectrum = fft.analyze();
    noStroke();
    fill(255, 0, 255);
    for (let i = 0; i < spectrum.length; i++) {
      let x = map(i, 0, spectrum.length, 0, width);
      let h = -height + map(spectrum[i], 0, 255, height, 0);
      rect(x, height, width / spectrum.length, h);
    }

    let waveform = fft.waveform();
    noFill();
    beginShape();
    stroke(20);
    for (let i = 0; i < waveform.length; i++){
      let x = map(i, 0, waveform.length, 0, width);
      let y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
    }
    endShape();
  };
}