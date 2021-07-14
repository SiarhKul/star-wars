import React from 'react';
import { useDispatch } from 'react-redux';
import { LOAD_MORE } from '../../redux/actions/actions';
import { useSelector } from 'react-redux';

export const ButtonLoadMore = () => {
  const isLoaded = useSelector(state => state.app.isLoaded);

  const dispatch = useDispatch();
  return (
    <div className="btn-load-more_center">
      <button
        disabled={isLoaded}
        className={isLoaded ? `btn-load-more` : `btn-load-more active`}
        onClick={() => {
          dispatch({ type: LOAD_MORE });
        }}
      >
        Load more
      </button>
    </div>
  );
};
