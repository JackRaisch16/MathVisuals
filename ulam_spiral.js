var ulam_spiral = (p) => {
    let primes = [];
    let gridSize = 40;
    let cellSize = 15;
  
    p.setup = () => {
      p.createCanvas(600, 600).parent('sketch-holder');
      p.background(255);
      p.noLoop();
  
      for (let i = 2; i < 10000; i++) {
        if (isPrime(i)) primes.push(i);
      }
    };
  
    p.draw = () => {
      p.translate(p.width / 2, p.height / 2);
      let x = 0, y = 0;
      let dx = 1, dy = 0;
      let step = 1;
      let stepsTaken = 0;
      let turnCounter = 0;
  
      for (let i = 1; i < gridSize * gridSize; i++) {
        if (primes.includes(i)) {
          p.fill(0);
        } else {
          p.fill(220);
        }
        p.rect(x * cellSize, y * cellSize, cellSize - 1, cellSize - 1);
  
        x += dx;
        y += dy;
        stepsTaken++;
  
        if (stepsTaken === step) {
          stepsTaken = 0;
          let temp = dx;
          dx = -dy;
          dy = temp;
          turnCounter++;
          if (turnCounter % 2 === 0) {
            step++;
          }
        }
      }
    };
  
    function isPrime(n) {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return true;
    }
  };
  