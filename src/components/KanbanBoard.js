import React from 'react';
import Card from './Card';
import './KanbanBoard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch, faSpinner, faCircleExclamation, faCircleCheck, faCircleXmark, faArrowUp, faArrowRight, faArrowDown, faUser, faEllipsis } from '@fortawesome/free-solid-svg-icons';


function KanbanBoard({ tickets, selectedGroup, selectedSort, users }) {
  // Grouping logic
  const groupedTickets = tickets.reduce((groups, ticket) => {
    const groupKey = selectedGroup === 'user' ? users.find(user => user.id === ticket.userId).name : ticket[selectedGroup];
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    groups[groupKey].push(ticket);
    return groups;
  }, {});

  // Sorting logic for grouped tickets
  const sortedGroups = Object.keys(groupedTickets).reduce((sorted, groupKey) => {
    sorted[groupKey] = sortTickets(groupedTickets[groupKey], selectedSort);
    return sorted;
  }, {});
  
    // Implement the sortTickets function
    function sortTickets(ticketsToSort, sortKey) {
        if (sortKey === 'priority') {
            return ticketsToSort.slice().sort((a, b) => b.priority - a.priority);
          } else if (sortKey === 'title') {
            return ticketsToSort.slice().sort((a, b) => a.title.localeCompare(b.title));
          }
          // Handle other sorting options here
          return ticketsToSort;
          // Return the sorted array of tickets
    }

    let columnOrder = [];

  if (selectedGroup === 'priority') {
    columnOrder = [4, 3, 2, 1, 0]; // Order of priority levels
  } else if (selectedGroup === 'user') {
    columnOrder = users.map(user => user.name);
  } else if (selectedGroup === 'status') {
    columnOrder = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled'];
  }

  return (
    <div className="kanban-board">
      {columnOrder.map(columnKey => {
        return (
          <div key={columnKey} className="column">
            <p>
              <span className='heading-icon'> {getColumnHeadingIcon(selectedGroup, columnKey)} </span>
              {selectedGroup === 'priority'
                ? getPriorityLabel(columnKey)
                : columnKey}
              <span className="card-count">
                {sortedGroups[columnKey]?.length || 0}
              </span>
            </p>
            {sortedGroups[columnKey]?.sort((a, b) => {
              if (selectedGroup === 'priority') {
                return b.priority - a.priority;
              } else if (selectedSort === 'title') {
                return a.title.localeCompare(b.title);
              }
              return 0;
            }).map(ticket => (
              <Card
                key={ticket.id}
                ticket={ticket}
                selectedGroup={selectedGroup}
                selectedSort={selectedSort}
                users={users} 
                ticketStatus={ticket.status}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
  

}

export default KanbanBoard;

function getPriorityLabel(priorityValue) {
  switch (priorityValue) {
    case 4:
      return 'Urgent';
    case 3:
      return 'High';
    case 2:
      return 'Medium';
    case 1:
      return 'Low';
    case 0:
      return 'No priority';
    default:
      return '';
  }

}


function getColumnHeadingIcon(group, status) {
  if (group === 'status') {
    switch (status) {
      case 'Todo':
        return <FontAwesomeIcon icon={faCircleNotch} />;
      case 'In progress':
        return <FontAwesomeIcon icon={faSpinner} />;
      case 'Backlog':
        return <FontAwesomeIcon icon={faCircleExclamation} />;
      case 'Done':
        return <FontAwesomeIcon icon={faCircleCheck} />;
      case 'Cancelled':
        return <FontAwesomeIcon icon={faCircleXmark} />;
      default:
        return '';
    }
  } else if (group === 'priority') {
    switch (status) {
      case 4:
        return <FontAwesomeIcon icon={faArrowUp} />;
      case 3:
        return <FontAwesomeIcon icon={faArrowRight} />;
      case 2:
        return <FontAwesomeIcon icon={faArrowRight} />;
      case 1:
        return <FontAwesomeIcon icon={faArrowDown} />;
      case 0:
        return <FontAwesomeIcon icon={faEllipsis} />;
      default:
        return '';
    }
  } else if (group === 'user') {
    return <FontAwesomeIcon icon={faUser} />;
  } else {
    return '';
  }
}
