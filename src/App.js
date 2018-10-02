import React, { Component } from 'react';

import Table from './components/Table';
import {
  ROWS_NUM,
  COLUMNS_NUM,
  UPDATE_TIME
} from './config';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table
          rowsNum={ROWS_NUM}
          columnsNum={COLUMNS_NUM}
          updateTime={UPDATE_TIME}
        />
      </div>
    );
  }
}

export default App;
