const initTable = ({ rowsNum, columnsNum }) => {
  const table = [];
  
  for (let indexRow = 0; indexRow < rowsNum; indexRow++) {
    table[indexRow] = [];

    for (let indexColumn = 0; indexColumn < columnsNum; indexColumn++) {
      table[indexRow][indexColumn] = Math.round(Math.random());
    }
  }
  
  return table;
};

export default initTable;
