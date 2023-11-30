let bitCount = 0;
let clickerLevel = 0;
let clickerCost = 10;

const incrementBit = () => {
  bitCount++;
  updateBitDisplay();
};

const buyClickerBit = () => {
  if (bitCount >= clickerCost) {
    bitCount -= clickerCost;
    clickerLevel++;
    clickerCost *= 2;
    updateClickerDisplay();
    updateBitDisplay();

    if (clickerLevel >= 1) {
      setInterval(incrementBit, 2000);
    }
  }
};

const updateBitDisplay = () => {
  const bitCostElement = document.querySelector('.bit-cost');
  bitCostElement.textContent = bitCount;
};

const updateClickerDisplay = () => {
  const clickerLevelElement = document.querySelector('.level');
  const clickerCostElement = document.querySelector('.clicker-cost');

  clickerLevelElement.textContent = clickerLevel;
  clickerCostElement.textContent = clickerCost;
};

window.addEventListener('load', () => {
  updateBitDisplay();
  updateClickerDisplay();
});

const upgradeClickerBtn = document.querySelector('.upgrade-btn');
upgradeClickerBtn.addEventListener('click', buyClickerBit);

const backgroundImage = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Bitcoin_symbol.svg/1200px-Bitcoin_symbol.svg.png';
document.body.style.backgroundImage = `url(${backgroundImage})`;

const levelCost = (clickerLevel + 1) * 10;
const levelUpgradeBtn = document.querySelector('.level-double-bit-btn');
levelUpgradeBtn.textContent = 'Level Double Bit (' + levelCost + ')';
