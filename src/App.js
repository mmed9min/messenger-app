import './App.css';
import {useState} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message'

function App() {

  const [input, setInput] = useState('')

  const [messages, setMessages] = useState(['hi', 'how are u', 'fine'])

  const sendMessage = (e) =>{
    e.preventDefault();
    setMessages([...messages , input])
    setInput('')
  }

  console.log(messages);
  return (
    <div className="App">
      <h1>Messenger-App</h1>
      <form>
          <FormControl>
            <InputLabel>Enter a message ...</InputLabel>
            <Input value={input} onChange={e =>setInput(e.target.value)} />
            <Button type="submit" color="primary" variant="contained" disabled={!input}  onClick={sendMessage}>Send</Button>
          </FormControl>
      </form>


      {
        messages.map(message =>(
          <Message text = {message} />
        ))
      }
    </div>

    
  );
}

export default App;
