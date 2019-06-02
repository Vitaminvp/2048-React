import { create, matrixLength, getRandomCoord, defaultCellValue } from '.';

const populateField = (cells, startNewGame) => {
  const occupiedCoords = new Set();

  cells.forEach(cell => {
    occupiedCoords.add(cell.x * matrixLength + cell.y);
  });

  if (occupiedCoords.size === Math.pow(matrixLength, 2)) {
    alert('all done');
    startNewGame();
    return;
  }
  let x;
  let y;
  let startSize = occupiedCoords.size;
  do {
    x = getRandomCoord();
    y = getRandomCoord();
    const sum = x * matrixLength + y;
    occupiedCoords.add(sum);
  } while (startSize === occupiedCoords.size);

  return [...cells, create(x, y, defaultCellValue)];
};

export { populateField };
