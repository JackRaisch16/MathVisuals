var cosine_wave = (p) => {
  let amplitudeSlider, frequencySlider;
  let amplitudeLabel, frequencyLabel;
  let amplitudeValue, frequencyValue;
  let formulaDisplay;

  p.setup = () => {
    p.createCanvas(600, 300).parent('sketch-holder');
    p.textSize(12);

    // Display formula
    formulaDisplay = p.createDiv('').style('font-size', '16px').style('margin', '10px 0 10px 10px');

    // Amplitude Slider
    amplitudeLabel = p.createDiv('Amplitude:').style('font-weight', 'bold');
    amplitudeLabel.position(10, 310);
    amplitudeSlider = p.createSlider(10, 100, 100);
    amplitudeSlider.position(120, 310);
    amplitudeValue = p.createDiv('').position(280, 310);

    // Frequency Slider
    frequencyLabel = p.createDiv('Frequency:').style('font-weight', 'bold');
    frequencyLabel.position(10, 340);
    frequencySlider = p.createSlider(0.005, 0.1, 0.01, 0.005);
    frequencySlider.position(180, 340);
    frequencyValue = p.createDiv('').position(340, 340);
  };

  p.draw = () => {
    p.background(255);

    const A = amplitudeSlider.value();
    const B = frequencySlider.value();
    const yCenter = p.height / 2;

    // Update slider values
    amplitudeValue.html(A);
    frequencyValue.html(B.toFixed(3));

    // Display accurate formula
    formulaDisplay.html(`y(x) = ${A} × cos(${B.toFixed(3)}x)`);

    // Draw axes
    p.stroke(200);
    p.line(0, yCenter, p.width, yCenter); // horizontal axis
    p.line(50, 0, 50, p.height);          // vertical axis at x = 50

    // X-axis labels in terms of π
    const pixelsPerPi = Math.PI / B;
    const maxTicks = Math.floor((p.width - 50) / (pixelsPerPi / 2));
    p.fill(0);
    p.textAlign(p.CENTER, p.TOP);

    for (let i = 0; i <= maxTicks; i++) {
      let x = 50 + i * (pixelsPerPi / 2);
      let label;
      switch (i) {
        case 0: label = "0"; break;
        case 1: label = "π/2"; break;
        case 2: label = "π"; break;
        case 3: label = "3π/2"; break;
        case 4: label = "2π"; break;
        default:
          const n = i / 2;
          label = Number.isInteger(n) ? `${n}π` : `${i}π/2`;
      }
      p.line(x, yCenter - 5, x, yCenter + 5);
      p.text(label, x, yCenter + 8);
    }

    // Draw cosine wave
    p.noFill();
    p.stroke('blue');
    p.strokeWeight(2);
    p.beginShape();
    for (let x = 0; x < p.width; x++) {
      let angle = (x - 50) * B;
      let y = A * p.cos(angle);
      p.vertex(x, yCenter - y);
    }
    p.endShape();
  };
};
