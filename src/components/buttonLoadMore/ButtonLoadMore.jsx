import React from 'react';
import { useDispatch } from 'react-redux';
import { LOAD_MORE } from '../../redux/actions/actions';

export const ButtonLoadMore = () => {
  const dispatch = useDispatch();
  return (
    <div className="btn-load-more_center">
      <button
        className="btn-load-more"
        onClick={() => {
          dispatch({ type: LOAD_MORE });
        }}
      >
        Load more
      </button>
    </div>
  );
};
