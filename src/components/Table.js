import React, { Component } from 'react';
import { number } from 'prop-types';
import styled from 'styled-components';

import Cell from './Cell';
import { initTable, tickAlgorithm } from '../utils';

const TableStyleWrapper = styled.div`
  font-size: 0;
`;

class Table extends Component {
  constructor(props) {
    super(props);
    
    const { rowsNum, columnsNum } = props;
    
    this.state = {
      table: initTable({ rowsNum, columnsNum })
    };
    
    this.interval = setInterval(() => {
      this.setState({
        table: tickAlgorithm(this.state.table)
      })
    }, props.updateTime);
  }
  
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() {
    const { table } = this.state;
    
    return (
      <TableStyleWrapper>
        {
          table.map((row, rowIndex) => (
              <div key={rowIndex}>
                {
                  row.map((column, columnIndex) => <Cell key={`${rowIndex}#${columnIndex}`} isAlive={!!column} />)
                }
              </div>
            )
          )
        }
      </TableStyleWrapper>
    )
  }
}

Table.propTypes = {
  rowsNum: number.isRequired,
  columnsNum: number.isRequired,
  updateTime: number.isRequired
};

Table.defaultProps = {
  rowsNum: 50,
  columnsNum: 50,
  updateTime: 1000
};

export default Table;
