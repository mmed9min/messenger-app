import './App.css';
import {useEffect, useState} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message'

function App() {

  const [input, setInput] = useState('')

  const [messages, setMessages] = useState([{username : 'amin' ,text: 'hey you'},
         {username: 'moudi',text: 'fine and you'},
         {username: 'amin', text: 'super good !'}
        ])

  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt('Please enter your username !'))
  }, [])

  const sendMessage = (e) =>{
    e.preventDefault();
    setMessages([...messages , {username : username, text: input}])
    setInput('')
  }



  return (
    <div className="App">
      <h1>Messenger-App</h1>
      <h2>Hello {username}</h2>
      <form>
          <FormControl>
            <InputLabel>Enter a message ...</InputLabel>
            <Input value={input} onChange={e =>setInput(e.target.value)} />
            <Button type="submit" color="primary" variant="contained" disabled={!input}  onClick={sendMessage}>Send</Button>
          </FormControl>
      </form>


      {
        messages.map(message =>(
          <Message username={username} message = {message} />
        ))
      }
    </div>

    
  );
}

export default App;
