import React from 'react';
import './Options.css';

function GroupingOptions({ selectedGroup, onSelectGroup }) {
  return (
    <div className="grouping-options">
      <label>Group By:</label>
      <select value={selectedGroup} onChange={event => onSelectGroup(event.target.value)} className='ops'>
        <option value="status">Status</option>
        <option value="user">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
}

export default GroupingOptions;
