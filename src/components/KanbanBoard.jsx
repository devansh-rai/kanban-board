import React, { useMemo } from 'react';
import Column from './Column';
import { getGroupIcon } from '../utils/icons';

const KanbanBoard = ({ tickets, users, grouping, sorting }) => {
  const groupedAndSortedTickets = useMemo(() => {
    let groupedTickets = {};

    // Group tickets based on the selected grouping criteria
    if (grouping === 'status') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        (acc[ticket.status] = acc[ticket.status] || []).push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'user') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        const assignedUser = users.find(user => user.id === ticket.userId);
        (acc[assignedUser.name] = acc[assignedUser.name] || []).push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      const priorityLevels = ['No priority', 'Low', 'Medium', 'High', 'Urgent'];
      groupedTickets = tickets.reduce((acc, ticket) => {
        (acc[priorityLevels[ticket.priority]] = acc[priorityLevels[ticket.priority]] || []).push(ticket);
        return acc;
      }, {});
    }

    // Sort the grouped tickets based on the selected sorting criteria
    Object.keys(groupedTickets).forEach(group => {
      groupedTickets[group].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groupedTickets;
  }, [tickets, users, grouping, sorting]);

  return (
    <div className="kanban-board">
      {Object.entries(groupedAndSortedTickets).map(([title, groupTickets]) => (
        <Column 
          key={title}
          title={title}
          tickets={groupTickets}
          users={users}
          grouping={grouping}
          groupIcon={getGroupIcon(grouping, title)}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
