import React, { useState } from 'react';
// import { FaChevronDown } from 'react-icons/fa';

const Header = ({ grouping, setGrouping, sorting, setSorting }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
    setDropdownOpen(false);
  };

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
    setDropdownOpen(false);
  };

  return (
    <header>
      <button className="display-button" onClick={toggleDropdown}>
        <img src="/images/Display.svg" alt="display" /> Display{' '}
        <img src="/images/Down.svg" alt="down" />
      </button>
      {dropdownOpen && (
        <div className="dropdown">
          <div>
            <label>Grouping</label>
            <select value={grouping} onChange={handleGroupingChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <label>Ordering</label>
            <select value={sorting} onChange={handleSortingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
