import Message from "./Message";
import db from "./Firebase";
import { useState , useEffect } from "react";
import { Button, TextField } from "@material-ui/core";
import firebase from 'firebase';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import IconButton from '@material-ui/core/IconButton';
import messenger from './messenger.png';

function App() {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const [username,setUsername] = useState('');
  
  useEffect(()=>{
  db.collection('messages')
  .orderBy('timestamp','desc')
  .onSnapshot(snapshot=>{
      setMessage(snapshot.docs.map(doc=>({id: doc.id, message: doc.data()})));
    })
  },[])

  useEffect(()=>{
    setUsername(prompt("Enter your Name!"));
  },[])
  const handleClick=(e)=>{
    e.preventDefault();
      db.collection('messages').add({
        message:input,
        username:username,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      })
      setInput(''); 
  }
  return (
    <div className="App">
      <img src={messenger} alt="sory" className="image"></img>
      <h1 className="h1">Welcome To Our Messenger!</h1>
      <h2 className="h1">Welcome {username}</h2>
      
      <form className="app_form">
        <TextField label="Enter" variant="filled" value={input} onChange={(e)=>setInput(e.target.value)}/>

        <IconButton disable={!input} variant="contained" color="primary" type='submit' className="btn" onClick={handleClick}>
            <SendRoundedIcon></SendRoundedIcon>
        </IconButton>



        {/* <Button variant="contained" color="secondary" type='submit' className="btn" onClick={handleClick}>Send</Button> */}
        
      </form>
      
        {
          message.map(({id,message})=>(
            <Message key={id} message={message} username={username}></Message>
            ))
        }
      
    </div>
  );
}

export default App;
