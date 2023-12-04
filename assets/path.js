// File: path.js
const pointsCount = 100; // The number of points to generate
const rx = 200; // The radius along the x-axis
const ry = 100; // The radius along the y-axis
const centerX = 250; // The x-coordinate of the center of the ellipse
const centerY = 250; // The y-coordinate of the center of the ellipse

let path = [];
for (let i = 0; i < pointsCount; i++) {
    let theta = (i / (pointsCount / 2)) * Math.PI; // Angle
    let x = centerX + rx * Math.cos(theta);
    let y = centerY + ry * Math.sin(theta);
    path.push({ x, y });
}

export default path;
