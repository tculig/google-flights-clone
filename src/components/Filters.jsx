// src/components/Filters.jsx
import React from 'react';

const Filters = ({ onFilterChange, filters }) => {
  const handlePriceChange = (e) => {
    onFilterChange({
      ...filters,
      maxPrice: e.target.value,
    });
  };

  return (
    <div className="filters">
      <label>
        Max Price:
        <input
          type="number"
          value={filters.maxPrice || ''}
          onChange={handlePriceChange}
        />
      </label>
    </div>
  );
};

export default Filters;
