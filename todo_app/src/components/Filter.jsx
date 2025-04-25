// components/Filter.jsx
import React from 'react';

const Filter = ({ currentFilter, onChangeFilter }) => {
  const filters = ['all', 'completed', 'pending'];

  return (
    <div className="mb-4 d-flex gap-2">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => onChangeFilter(f)}
          className={`btn ${currentFilter === f ? 'btn-primary' : 'btn-secondary'}`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filter;
