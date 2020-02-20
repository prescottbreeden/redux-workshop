import React from 'react';
import { connect } from 'react-redux';
import {FETCH_BOOKS} from '../redux/actions/books.actions';

const Dispatchers = ({ dispatch }) => {
  return (
    <div className="dispatchers">
      <button 
        className="dispatch-button"
        onClick={() => {
          dispatch({ type: FETCH_BOOKS });
        }}
      >
        Dispatch
      </button>
    </div>
  );
}

export default connect(null, null)(Dispatchers);
