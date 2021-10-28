import React from 'react';

export const EmptyCard = () => {
  return (
    <div className="empty-card">
      <div className="empty-card__inner">
        <span className="empty-card__icon icon-empty" />

        <p className="font-medium font-size-medium">No data was found!</p>
      </div>
    </div>
  );
};
