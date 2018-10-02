const findAliveNeighbours = ({ rowIndex, columnIndex }, table) => {
  let aliveNeighboursNum = 0;
  
  for (let i = rowIndex - 1; i <= rowIndex + 1; i++) {
    if (i < 0) {
      continue;
    } else if (i > (table.length - 1)) {
      break;
    }
    
    for (let j = columnIndex - 1; j <= columnIndex + 1; j++) {
      if (j < 0) {
        continue;
      } else if (j > (table[i].length - 1)) {
        break;
      }
      
      if (i !== rowIndex || j !== columnIndex) {
        const isAlive = !!table[i][j];
        
        if (isAlive) {
          aliveNeighboursNum++;
        }
      }
    }
  }
  
  return aliveNeighboursNum;
};

export default findAliveNeighbours;
