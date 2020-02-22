import React from 'react';


import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <h6>L2. You store a list of usernames in the parent, send it down to child as props, show the list of users in a dropdown ( by default the first user is selected) next to the input field, now when you type a to do in the input field and press submit, you send the username and to do back to the parent, and display all the todos in a list.</h6>
      <br/>
      <Parent/>
    </div>
  );
}

export default App;
