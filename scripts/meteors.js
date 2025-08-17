// Meteor shower animation
const meteorBg = document.querySelector('.meteor-bg');
const meteorCount = 18;
const vw = window.innerWidth;
const vh = window.innerHeight;

function randomBetween(a, b) {
    return Math.random() * (b - a) + a;
}

for (let i = 0; i < meteorCount; i++) {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    // Randomize start and end positions for diagonal movement
    const startX = randomBetween(-0.2 * vw, 1.1 * vw);
    const startY = randomBetween(-0.3 * vh, 0.2 * vh);
    const endX = startX + randomBetween(200, 400);
    const endY = startY + randomBetween(400, 700);
    meteor.style.setProperty('--start-x', `${startX}px`);
    meteor.style.setProperty('--start-y', `${startY}px`);
    meteor.style.setProperty('--end-x', `${endX}px`);
    meteor.style.setProperty('--end-y', `${endY}px`);
    meteor.style.animationDelay = `${randomBetween(0, 2.5)}s`;
    meteorBg.appendChild(meteor);
}
