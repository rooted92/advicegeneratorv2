// Pedro Castaneda
// 03-14-2023
// Description: In this assignment we are to replicate an Advice Generator website from frontendmentor.io. Using react and bootstrap I have replicated the design as close as possible to the one provided. The advice text comes from an API that generates a random piece of advice when fetched. Must be responsive for desktop and mobile.
// Peer Review: Brandon Le - Really good job overall. I did not even notice that the quotation marks were special until Pedro pointed it out, so really good attention to detail. I thought it was very close to the original, if anything the mobile height could have been adjusted a little bit as well as the divider width on the desktop version. I also see a 404 error for the favicon when I'm looking on the azure host. I also thought it was really interesting how he set up the separate components and also a separate folder for just the hook. The code is well organized and I'll definitely take inspiration for my next project.  10/10 would come back!



import Display from './components/display/Display';
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Display />
    </div>
  );
}

export default App;
