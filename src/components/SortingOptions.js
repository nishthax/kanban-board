import React from 'react';
import './Options.css';

function SortingOptions({ selectedSort, onSelectSort }) {
  return (
    <div className="sorting-options">
      <label>Sort By:</label>
      <select value={selectedSort} onChange={event => onSelectSort(event.target.value)} className='ops'>
        <option value="priority">Priority</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
}

export default SortingOptions;
