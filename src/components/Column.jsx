import React from 'react';
import Card from './Card';
import { getStatusIcon } from '../utils/icons';

const Column = ({ title, tickets, users, grouping, groupIcon }) => {
  return (
    <div className="column">
      <h2>
        {groupIcon}
        {grouping === 'status' && getStatusIcon(title)}
        {title}
        <span className="ticket-count">{tickets.length}</span>
        <div className="ticket-count-1">
          <img src="/images/add.svg" alt="add" className="col-img-right" />
          <img src="/images/3-dot-menu.svg" alt="3-dot-menu" className="col-img-right" />
        </div>
      </h2>
      {tickets.map((ticket) => (
        <Card 
          key={ticket.id} 
          ticket={ticket} 
          users={users} 
          grouping={grouping}
        />
      ))}
    </div>
  );
};

export default Column;
