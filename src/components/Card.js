import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faEllipsis, faTriangleExclamation, faArrowUp,faArrowRight, faArrowDown, 
          faUser, faSpinner, faCircleExclamation, faCircleCheck, faCircleXmark, faCircleNotch} from '@fortawesome/free-solid-svg-icons';

function Card({ ticket, selectedGroup, ticketStatus }) {
  const renderGroupContent = () => {
    switch (selectedGroup) {
      case 'user':
        return (
          <><div className='column-cont'>
              <div className='row-cont'>
                <p className='tickid'>{ticket.id}</p>
              </div>
              <div className='row-cont'>
                <p className='status-symbol'>{getStatusSymbol(ticketStatus)}</p>
                <h3 className='title'>{ticket.title}</h3>
              </div>
              <div className='row-cont'>
                <p className='priority-symbol'>{getPrioritySymbol(ticket.priority)}</p>
                {ticket.tag && (
                  <p className='tag'>
                    <FontAwesomeIcon icon={faCircle} className='tag-ic' /> 
                    {ticket.tag.join(', ')}
                  </p>
                )}
              </div>
              
            </div>
          </>
        );
      case 'priority':
        return (
          <>
            <div className='column-cont'>
              <div className='row-cont'>
                <p className='tickid'>{ticket.id}</p>
                <span className='user-icon'><FontAwesomeIcon icon={faUser} /></span>
              </div>
              <div className='row-cont'>
                <p className='status-symbol'>{getStatusSymbol(ticketStatus)}</p>
                <h3 className='title'>{ticket.title}</h3>
              </div>
              <div className='row-cont'>
                {ticket.tag && (
                  <p className='tag'>
                    <FontAwesomeIcon icon={faCircle} className='tag-ic' /> 
                    {ticket.tag.join(', ')}
                  </p>
                )}
              </div>
              
            </div>
          </>
        );
      case 'status':
        return (
          <><div className='column-cont'>
              <div className='row-cont'>
                <p className='tickid'>{ticket.id}</p>
                <span className='user-icon'><FontAwesomeIcon icon={faUser} /></span>
              </div>
              <div className='column-cont'>
                <h3>{ticket.title}</h3>
              <div className='row-cont'>
                <p className='priority-symbol'>{getPrioritySymbol(ticket.priority)}</p>
                {ticket.tag && (
                  <p className='tag'>
                    <FontAwesomeIcon icon={faCircle} className='tag-ic' /> 
                    {ticket.tag.join(', ')}
                  </p>
                )}
              </div>
              </div>
            </div>
          </>
        );
      default:
        return <h3>{ticket.title}</h3>;
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        
        <div className="card-header-left">
          {renderGroupContent()}
        </div>
      </div>
    </div>
  );
}

// function getPriorityLabel(priorityValue) {
//   switch (priorityValue) {
//     case 4:
//       return 'Urgent';
//     case 3:
//       return 'High';
//     case 2:
//       return 'Medium';
//     case 1:
//       return 'Low';
//     case 0:
//       return 'No priority';
//     default:
//       return '';
//   }
// }

function getPrioritySymbol(priorityValue) {
  switch (priorityValue) {
    case 4:
      return <FontAwesomeIcon icon={faTriangleExclamation} />; // Symbol for Urgent
    case 3:
      return <FontAwesomeIcon icon={faArrowUp} />; // Symbol for High
    case 2:
      return <FontAwesomeIcon icon={faArrowRight} />; // Symbol for Medium
    case 1:
      return <FontAwesomeIcon icon={faArrowDown} />; // Symbol for Low
    case 0:
      return <FontAwesomeIcon icon={faEllipsis} />;  // Symbol for No priority
    default:
      return '';
  }
}

function getStatusSymbol(ticketStatus) {
  switch (ticketStatus) {
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
}




export default Card;