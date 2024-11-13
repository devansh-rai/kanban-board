import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { getPriorityIcon, getUserIcon, getStatusIcon } from '../utils/icons';

const Card = ({ ticket, users, grouping }) => {
  const assignedUser = users.find(user => user.id === ticket.userId);

  return (
    <div className="card">
      <div className="card-header">
        <span className="card-id">{ticket.id}</span>
        {grouping !== 'user' && (
          <span className="user-icon">{getUserIcon(assignedUser.name)}</span>
        )}
      </div>
      <div className="card-title">
        {grouping !== 'status' && (
          <span className="status-icon">{getStatusIcon(ticket.status)}</span>
        )}
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-footer">
        {grouping !== 'priority' && getPriorityIcon(ticket.priority)}
        <span className="card-tag">
          <FaCircle className="icon" />
          {ticket.tag[0]}
        </span>
      </div>
    </div>
  );
};

export default Card;
