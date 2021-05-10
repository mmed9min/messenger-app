import './App.css';
import {useEffect, useState, useRef} from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Message from './Message'
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move'
import messenger from './messneger.png' 


function App() {

  //useState hook is like a variable in REACT

  const [input, setInput] = useState('')

  const [messages, setMessages] = useState([])

  const [username, setUsername] = useState('')


  
 //useEffect hook is used to run a bunch of code on a condition in REACT
  
  useEffect(() => {
    setUsername(prompt('Please enter your username !'))
  },[])
  
 
  

  //This useEffect (a listner) will take a picture of the DB every single time the component load and put the data in the messages array
  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id,message: doc.data()})))
    })
  }, [])
  

  //send message function 

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
  

  //this function allows us to see always the last message
  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView());
    return <div ref={elementRef} />;
  };

  return (
    <div className="App">
      <div className="heading">
        <div id="title">
          <h1>Messenger-App</h1>
          <img id="messenger" src={messenger} />
        </div>
          <h2>Hello {username}</h2>

          
      </div>
      
      <div className="messages__area">
           <FlipMove>
             <div>
           {
             messages.map(({id,message}) =>(
               <Message key={id} username={username} message = {message} />
             ))
           }
           <AlwaysScrollToBottom />
           </div>
           </FlipMove>
      </div>
      <form>
              <FormControl className="form">
                <InputLabel>Enter a message ...</InputLabel>
                <Input value={input} onChange={e =>setInput(e.target.value)} />
                <Button type="submit" color="primary" variant="contained" disabled={!input}  onClick={sendMessage}>Send</Button>
              </FormControl>
      </form>
    </div>

    
  );
}

export default App;
