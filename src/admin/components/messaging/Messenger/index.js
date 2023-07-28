import React from 'react';
import MessageList from '../MessageList';
import './Messenger.css';

export default function Messenger(props) {
    return (
      <div className="messenger" style={{margin:"auto"}}>
        <div className="scrollable content">
          <MessageList />
        </div>
      </div>
    );
}