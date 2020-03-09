import React from 'react';
import InputBox from './components/InputBox'
import ListBox from './components/ListBox'
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as inputFunc from './store/modules/input';
import * as dataFunc from './store/modules/data';

const App = ({ work, data, inputFunc, dataFunc }) => {

  const handleChange = e => {
    const { name, value } = e.target;
    inputFunc.setInputValue({ name, value });
  }

  const handleSubmit = () => {
    if (work === "") return;
    
    dataFunc.appendData({
      work
    });
    inputFunc.setInputValue({
      name: 'work',
      value: ''
    });
  }

  const handleRemove = id => {
    dataFunc.removeData(id);
  }
  
  return (
    <div className="container">
      <InputBox 
        work={work}
        onChange={handleChange}
        onSubmit={handleSubmit}	/>
      <ListBox 
        list={data}
        deleteItem={handleRemove} />
    </div>
  );
}

export default connect(
  state => ({
    work: state.input.work,
    data: state.data
  }),
  dispatch => ({
    inputFunc: bindActionCreators(inputFunc, dispatch),
    dataFunc: bindActionCreators(dataFunc, dispatch)
  })
)(App);