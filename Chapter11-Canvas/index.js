function draw() {
  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const context = document.getElementById("canvas").getContext("2d");
    context.save(); // Save initial state context.fillStyle = '#FF0000'; // Filling color red context.rotate(7);// Rotation (rotation anglein radians)
    context.fillRect(200, 0, 140, 140);
    context.restore();
    context.save();
    context.fillStyle = "#00FF00";
    context.rotate(7); // Rotation (rotation anglein radians) context.fillRect(200,-180,140,140); // Draw green square
    context.restore();
    context.save();
    context.fillStyle = "#0000FF";
    context.rotate(7); // Rotation (rotation anglein radians) context.fillRect(380,-180,140,140); // Draw blue square

    // const context = canvas.getContext("2d");
    // const gradient = context.createRadialGradient(50, 100, 20, 100, 100, 80);
    // gradient.addColorStop(0, "#FF0000");
    // gradient.addColorStop(0.5, "#00FF00");
    // gradient.addColorStop(1, "rgba(0,0,255,0)");
    // context.fillStyle = gradient; // Assign style
    // context.fillRect(10, 10, 200, 200);

    // const context = canvas.getContext("2d");
    // const gradient = context.createLinearGradient(0, 0, 0, 150);
    // gradient.addColorStop(0, "#FF0000");
    // gradient.addColorStop(0.5, "#00FF00");
    // gradient.addColorStop(1, "#0000FF");
    // context.fillStyle = gradient;
    // context.fillRect(20, 20, 460, 240);

    // const context = canvas.getContext("2d");
    // context.font = "48px serif";
    // // Font properties context.fillText('Hello World', 10, 50); // Draw text context.strokeText('Hello World', 10, 100); // Draw text
    // // const context = canvas.getContext('2d');
    // // const path = new Path2D();
    // // path.moveTo(50, 200);
    // // path.lineTo(400, 50);
    // // path.lineTo(400, 200);
    // // path.closePath();
    // // context.stroke(path);

    // // Draw path
    // // Draw path
    // // Draw path
    // // Close path
    // // Color frame
    // // context.fillStyle = "rgb(200, 0, 0)";

    // // context.beignPath();
    // // context.moveTo(50, 200);
    // // context.lineTo(400, 50);
    // // context.lineTo(400, 200);
    // // context.stroke();

    // // context.fillRect(10, 10, 80, 80);
    // // context.fillStyle = "rgba(0, 0, 200, 0.5)";
    // // context.fillRect(100, 10, 80, 80);
    // // context.strokeStyle = "rgb(200,0,0)";
    // // context.strokeRect(190, 10, 80, 80);
    // // context.strokeStyle = "rgba(0, 0, 200, 0.5)"; // Set frame color
    // // context.strokeRect(280, 10, 80, 80);
    // // context.fillStyle = "rgb(200,0,0)";
    // // context.fillRect(370, 10, 80, 80);
    // // context.clearRect(380, 20, 60, 20);
    // // context.fillRect(390, 25, 10, 10);
    // // context.fillRect(420, 25, 10, 10);
    // // context.clearRect(385, 60, 50, 10);
  }
}

draw();

// const canvas = document.getElementById("canvas");
// const context = canvas?.getContext("2d");
