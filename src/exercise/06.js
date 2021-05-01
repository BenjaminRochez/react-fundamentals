// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

//   const [error, setError] = React.useState(null);

//   const inputEl = React.useRef();
//   //- 1 , 2  & 3- handleSubmit, useRef & error with useState
//   function handleSubmit(e){
    
//     e.preventDefault();
//     //let usernameInput = e.target.elements.usernameInput.value;
//     onSubmitUsername(inputEl.current.value);
//   }

//   function handleChange(event){
//     const {value} = event.target;
//     const isLowerCase = value  === value.toLowerCase()
//     setError(isLowerCase ? null : 'Username must be lower case');
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="usernameInput">Username:</label>
//         <input type="text" name="usernameInput" id="usernameInput" ref={inputEl} onChange={handleChange}/>
//       </div>
//       <div style={{color: 'red'}}>{error}</div>
//       <button disabled={Boolean(error)} type="submit">Submit</button>
//     </form>
//   )
// }

  //- 4 - 
  const [username, setUsername] = React.useState('');
  function handleSubmit(e){
    
    e.preventDefault();
    //let usernameInput = e.target.elements.usernameInput.value;
    onSubmitUsername(username);
  }

  function handleChange(event){
    const {value} = event.target;
    setUsername(value.toLowerCase());

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input type="text" name="usernameInput" id="usernameInput" value={username} onChange={handleChange}/>
      </div>
      
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
