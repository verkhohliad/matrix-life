import { bool } from 'prop-types';
import { pure } from 'recompose';
import styled  from 'styled-components';

const Cell = pure(styled.div`
  border: 1px solid grey;
  display: inline-flex;
  background-color: ${({ isAlive, theme }) => isAlive ? theme.aliveColor || 'black' : theme.deadColor || 'white'};
  width: ${({ theme }) => theme.cellWidth || '14px'};
  height: ${({ theme }) => theme.cellHeight || '14px'};
`);

Cell.propTypes = {
  isAlive: bool
};

Cell.defaultProps = {
  isAlive: false
};

export default Cell;
