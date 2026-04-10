const { Jimp } = require('jimp');

async function removeBackground() {
  try {
    const image = await Jimp.read('public/mobile-mockup.png');
    
    const targetColor = 0xFFFFFFFF; // White
    const replacementColor = 0x00000000; // Transparent
    const tolerance = 15; // Allow slight variations of white/gray in the studio background
    
    // Custom Flood Fill from edges
    const width = image.bitmap.width;
    const height = image.bitmap.height;
    
    const visited = new Set();
    const queue = [];
    
    // Start from the four corners
    const startPoints = [
      {x: 0, y: 0},
      {x: width - 1, y: 0},
      {x: 0, y: height - 1},
      {x: width - 1, y: height - 1}
    ];

    for (const p of startPoints) {
      queue.push(p);
      visited.add(`${p.x},${p.y}`);
    }

    const colorDistance = (c1, r2, g2, b2) => {
      const r1 = (c1 >> 24) & 255;
      const g1 = (c1 >> 16) & 255;
      const b1 = (c1 >> 8) & 255;
      return Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));
    };

    while(queue.length > 0) {
      const {x, y} = queue.shift();
      const color = image.getPixelColor(x, y);
      
      // If it's close to white
      if (colorDistance(color, 255, 255, 255) < tolerance * 3) {
        image.setPixelColor(replacementColor, x, y);
        
        const neighbors = [
          {x: x+1, y: y}, {x: x-1, y: y},
          {x: x, y: y+1}, {x: x, y: y-1}
        ];
        
        for (const n of neighbors) {
          if (n.x >= 0 && n.x < width && n.y >= 0 && n.y < height) {
            const key = `${n.x},${n.y}`;
            if (!visited.has(key)) {
              visited.add(key);
              queue.push(n);
            }
          }
        }
      }
    }

    image.autocrop({ cropOnlyFrames: false, tolerance: 0.01 });
    await image.writeAsync('public/mobile-mockup-transparent.png');
    console.log("Successfully removed background, cropped cleanly, and saved to mobile-mockup-transparent.png!");
  } catch (err) {
    console.error("Error processing image:", err);
  }
}

removeBackground();
