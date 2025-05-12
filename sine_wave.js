var sine_wave = (p) => {
    let amplitudeSlider, frequencySlider;
  
    p.setup = () => {
      p.createCanvas(600, 300).parent('sketch-holder');
      amplitudeSlider = p.createSlider(10, 100, 50);
      amplitudeSlider.position(10, 320);
      frequencySlider = p.createSlider(0.01, 0.2, 0.05, 0.01);
      frequencySlider.position(10, 350);
    };
  
    p.draw = () => {
      p.background(255);
      p.stroke(0);
      p.noFill();
      p.textSize(12);
      p.text(`Amplitude: ${amplitudeSlider.value()}`, 150, 330);
      p.text(`Frequency: ${frequencySlider.value()}`, 150, 360);
  
      p.beginShape();
      for (let x = 0; x < p.width; x++) {
        let angle = x * frequencySlider.value();
        let y = p.height / 2 + p.sin(angle) * amplitudeSlider.value();
        p.vertex(x, y);
      }
      p.endShape();
    };
  };
  