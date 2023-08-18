import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KanbanBoard from './components/KanbanBoard';
import Navbar from './components/Navbar';
import { Helmet } from 'react-helmet';

function App() {
  const [tickets, setTickets] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('status');
  const [selectedSort, setSelectedSort] = useState('priority');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then(response => {
        setTickets(response.data.tickets);
        setUsers(response.data.users);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Gochi+Hand&family=Rubik&display=swap" rel="stylesheet" />
      </Helmet>
      <Navbar
        selectedGroup={selectedGroup}
        onSelectGroup={setSelectedGroup}
        selectedSort={selectedSort}
        onSelectSort={setSelectedSort}
      />
      <KanbanBoard tickets={tickets} selectedGroup={selectedGroup} selectedSort={selectedSort} users={users} />
    </div>
  );
}


export default App;
