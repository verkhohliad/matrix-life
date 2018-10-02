import { findAliveNeighbours, copyTable } from './index';

const tickAlgorithm = table => {
  // avoid link's changes which can destroy algorithm
  const resultTable = copyTable(table);
  
  table.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      const isAlive = !!column;
      
      const currentCell = {
        rowIndex,
        columnIndex
      };
      const aliveNieghboursNum = findAliveNeighbours(currentCell, table);
      
      const isUnderpopulation = aliveNieghboursNum < 2;
      const isOvercrowding = aliveNieghboursNum > 3;
      const isReproduction = aliveNieghboursNum === 3;
      
      if (isAlive && (isUnderpopulation || isOvercrowding)) {
        // kill ceil
        resultTable[rowIndex][columnIndex] = 0;
      } else if (!isAlive && isReproduction) {
        // renaissance of ceil
        resultTable[rowIndex][columnIndex] = 1;
      }
    });
  });
  
  return resultTable;
};

export default tickAlgorithm;
