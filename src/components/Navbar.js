import GroupingOptions from './GroupingOptions';
import SortingOptions from './SortingOptions';
import './Navbar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faChevronDown} from '@fortawesome/free-solid-svg-icons';

function Navbar({ selectedGroup, onSelectGroup, selectedSort, onSelectSort }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="display-dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faSliders} className='icon'/> Display
          <FontAwesomeIcon icon={faChevronDown} className='icon'/>
        </button>
        {showDropdown && (
          <div className="dropdown-content">
            <GroupingOptions selectedGroup={selectedGroup} onSelectGroup={onSelectGroup} />
            <SortingOptions selectedSort={selectedSort} onSelectSort={onSelectSort} />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

