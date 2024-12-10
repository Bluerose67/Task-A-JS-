const cards = document.querySelectorAll('.card');
let isDragging = false;
let startY;
let threshold = 50; // Minimum distance to trigger a scroll
let hasScrolled = false; // Flag to prevent multiple scrolls per drag
let currentCardIndex = 0;

function showCard(index) {
    cards.forEach((card, i) => {
        if (i === index) {
            card.style.opacity = 1;
            card.style.transform = 'translateY(0%) scale(1)';
            card.style.pointerEvents = 'auto';
        } else if (i < index) {
            card.style.opacity = 0.4;
            card.style.transform = 'translateY(-100%) scale(0.7)';
        } else {
            card.style.opacity = 0.4;
            card.style.transform = 'translateY(100%) scale(0.7)';
        }
    });
}

function getNextIndex(current, direction) {
    if (direction === 'up') {
        return (current + 1) % cards.length; // Loop back to the first card
    } else if (direction === 'down') {
        return (current - 1 + cards.length) % cards.length; // Loop back to the last card
    }
    return current;
}

document.addEventListener('mousedown', (e) => {
    isDragging = true;
    startY = e.clientY;
    hasScrolled = false; // Reset scroll flag at the start of a drag
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging || hasScrolled) return;

    const diff = e.clientY - startY;

    if (diff > threshold) {
        // Scroll down
        currentCardIndex = getNextIndex(currentCardIndex, 'down');
        showCard(currentCardIndex);
        hasScrolled = true; // Prevent further scrolling during this drag
    } else if (diff < -threshold) {
        // Scroll up
        currentCardIndex = getNextIndex(currentCardIndex, 'up');
        showCard(currentCardIndex);
        hasScrolled = true; // Prevent further scrolling during this drag
    }
});
