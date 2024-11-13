import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import KanbanBoard from './components/KanbanBoard';
import { fetchTickets } from './api';
import './App.css';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  
  const [grouping, setGrouping] = useState(() => {
    const storedState = localStorage.getItem('viewState');
    return storedState ? JSON.parse(storedState).grouping : 'status';
  });
  
  const [sorting, setSorting] = useState(() => {
    const storedState = localStorage.getItem('viewState');
    return storedState ? JSON.parse(storedState).sorting : 'priority';
  });

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const data = await fetchTickets();
        setTickets(data.tickets);
        setUsers(data.users);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Optionally set error state for user feedback
      }
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    localStorage.setItem('viewState', JSON.stringify({ grouping, sorting }));
  }, [grouping, sorting]);

  return (
    <div className="App">
      <Header
        grouping={grouping}
        setGrouping={setGrouping}
        sorting={sorting}
        setSorting={setSorting}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        grouping={grouping}
        sorting={sorting}
      />
    </div>
  );
};

export default App;
