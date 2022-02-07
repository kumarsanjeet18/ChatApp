import {ChatEngine } from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import React from 'react';
import Loginform from './components/LoginForm';

 const App = () => {
   
  if(!localStorage.getItem('username')) return <Loginform/>

  
  
  return (
  
    <ChatEngine
    height='100vh'
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    projectID='8f7308f8-20b0-447f-860f-b31addf236be'
    renderChatFeed={(chatAppProps)=><ChatFeed{...chatAppProps}/>}
/>
);
}
export default App;
