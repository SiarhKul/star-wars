import React from 'react';

export const ButtonLoadMore = () => {
  return (
    <div className="btn-load-more_center">
      <button
        className="btn-load-more"
        onClick={() => {
          console.log('Click');
        }}
      >
        Load more
      </button>
    </div>
  );
};
