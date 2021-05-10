import './App.css';
import {useEffect, useState} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'

function App() {

  //useState hook is like a variable in REACT

  const [input, setInput] = useState('')

  const [messages, setMessages] = useState([])

  const [username, setUsername] = useState('')


  //useEffect hook is used to run a bunch of code on a condition in REACT
  useEffect(() => {
    setUsername(prompt('Please enter your username !'))
  }, [])
  

  //This useEffect (a listner) will take a picture of the DB every single time the component load and put the data in the messages array
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id,message: doc.data()})))
    })
  }, [])

  const sendMessage = (e) =>{
    e.preventDefault();
    db.collection('messages').add({
      message : input,
      username : username,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })
    setMessages([...messages , {username : username, message: input}])
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
      

      <FlipMove>
      {
        messages.map(({id,message}) =>(
          <Message key={id} username={username} message = {message} />
        ))
      }
      </FlipMove>
    </div>

    
  );
}

export default App;
