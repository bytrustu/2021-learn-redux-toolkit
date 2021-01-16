import React, { useEffect, useState } from 'react';
import { createStore } from 'redux';
import { configureStore, createAction, createReducer, createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

function App() {

  // const INCREMENT = 'INCREMENT';
  // const DECREMENT = 'DECREMENT';
  //
  // function increment() {
  //   return { type: INCREMENT };
  // }
  //
  // function decrement() {
  //   return { type: DECREMENT };
  // }

  // const increment = createAction('INCREMENT');
  // const decrement = createAction('DECREMENT');

  // function counter(state = 0, action) {
  //   switch (action.type) {
  //     case increment.type:
  //       return state + 1;
  //     case decrement.type:
  //       return state - 1;
  //     default:
  //       return state;
  //   }
  // }

  // const counter = createReducer(0, {
  //   [increment]: state => state + 1,
  //   [decrement]: state => state - 1,
  // })

  const counterSlice = createSlice({
    name: 'counter',
    initialState:0,
    reducers: {
      increment: state => state + 1,
      decrement: state => state - 1,
    }
  });

  const { actions, reducer } = counterSlice;

  const store = configureStore({
    reducer
  });

  const onClickIncrementHandle = () => {
    store.dispatch(actions.increment());
  };

  const onClickDecrementHandle = () => {
    store.dispatch(actions.decrement());
  };


  return (
    <>
      <button onClick={onClickDecrementHandle}>-</button>
      <button onClick={onClickIncrementHandle}>+</button>

    </>
  );
}

export default App;
