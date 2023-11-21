const bitImage = document.querySelector('.bit-image');
const bitCostElement = document.querySelector('.bit-cost');
const clickerButton = document.querySelector('.upgrade');
const levelElement = document.querySelector('.level');

bitImage.addEventListener('click', () => {
    let currentBitCount = parseInt(bitCostElement.textContent);
    currentBitCount++;
    bitCostElement.textContent = currentBitCount;
});
clickerButton.addEventListener('click', () => {
    const currentLevel = parseInt(levelElement.textContent);
    const currentBitCount = parseInt(bitCostElement.textContent);

    if (currentBitCount < 10) {
        bitCostElement.textContent = 'Not enough bits, try again.';
        return;
    }

    if (currentLevel === 0) {
        levelElement.textContent = 1;
    } else if (currentLevel === 1) {
        levelElement.textContent = 2;
        bitCostElement.textContent = bitCostElement.textContent * 1.2;
    } else {
        levelElement.textContent = currentLevel + 1;
        bitCostElement.textContent = bitCostElement.textContent * Math.pow(2, currentLevel);
    }

    bitCostElement.textContent = bitCostElement.textContent * 1.2;
});
