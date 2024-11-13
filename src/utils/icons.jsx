import React from 'react';
// import { FaExclamationCircle, FaRegCircle, FaAdjust, FaCheckCircle, FaTimes, FaUser } from 'react-icons/fa';

export const getGroupIcon = (grouping, title) => {
  switch (grouping) {
    case 'status':
      return null; // Status icon will be handled separately
    case 'priority':
      return getPriorityIcon(getPriorityValue(title));
    case 'user':
      return getUserIcon(title);
    default:
      return null;
  }
};

export const getStatusIcon = (status) => {
  const lowerCaseStatus = status.toLowerCase();
  switch (lowerCaseStatus) {
    case 'todo': 
      return <img className="icon status-icon" src='/images/To-do.svg' alt='todo' />;
    case 'in progress': 
      return <img className="icon status-icon" src='/images/in-progress.svg' alt='in progress' />;
    case 'done': 
      return <img className="icon status-icon" src='/images/done.svg' alt='done' />;
    case 'canceled': 
      return <img className="icon status-icon" src='/images/canceled.svg' alt='canceled' />;
    case 'backlog': 
      return <img className="icon status-icon" src='/images/backlog.svg' alt='backlog' />;
    default: 
      return null;
  }
};

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 4: 
      return <img className="icon priority-icon" src='/images/urgent-priority-colour.svg' alt='urgent' />;
    case 3: 
      return <img className="icon priority-icon" src='/images/HighPriority.svg' alt='high' />;
    case 2: 
      return <img className="icon priority-icon" src='/images/MediumPriority.svg' alt='medium' />;
    case 1: 
      return <img className="icon priority-icon" src='/images/LowPriority.svg' alt='low' />;
    default: 
      return <img className="icon priority-icon" src='/images/No-priority.svg' alt='no-priority' />;
  }
};

export const getUserIcon = (name) => {
  const initials = name.split(' ').map(word => word[0]).join('').toUpperCase();
  return <div className="user-icon">{initials}</div>;
};

const getPriorityValue = (priorityName) => {
  const priorityLevels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
  return priorityLevels.indexOf(priorityName);
};
