var vector_addition = (p) => {
    let angle1Slider, mag1Slider, angle2Slider, mag2Slider;
  
    p.setup = () => {
      p.createCanvas(600, 400).parent('sketch-holder');
      angle1Slider = p.createSlider(0, 360, 45);
      angle1Slider.position(10, 420);
      mag1Slider = p.createSlider(10, 100, 60);
      mag1Slider.position(10, 450);
      angle2Slider = p.createSlider(0, 360, 135);
      angle2Slider.position(10, 480);
      mag2Slider = p.createSlider(10, 100, 40);
      mag2Slider.position(10, 510);
    };
  
    p.draw = () => {
      p.background(255);
      p.translate(p.width / 2, p.height / 2);
      p.strokeWeight(2);
  
      let angle1 = p.radians(angle1Slider.value());
      let mag1 = mag1Slider.value();
      let angle2 = p.radians(angle2Slider.value());
      let mag2 = mag2Slider.value();
  
      let vec1 = p.createVector(p.cos(angle1) * mag1, p.sin(angle1) * mag1);
      let vec2 = p.createVector(p.cos(angle2) * mag2, p.sin(angle2) * mag2);
      let result = p5.Vector.add(vec1, vec2);
  
      p.stroke('blue');
      p.line(0, 0, vec1.x, vec1.y);
      p.stroke('green');
      p.line(vec1.x, vec1.y, vec1.x + vec2.x, vec1.y + vec2.y);
      p.stroke('red');
      p.line(0, 0, result.x, result.y);
  
      p.noStroke();
      p.fill(0);
      p.text(`Vector 1: angle ${angle1Slider.value()}°, mag ${mag1}`, -290, 20);
      p.text(`Vector 2: angle ${angle2Slider.value()}°, mag ${mag2}`, -290, 40);
      p.text(`Resultant: x=${result.x.toFixed(1)}, y=${result.y.toFixed(1)}`, -290, 60);
    };
  };
  