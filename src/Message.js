import { Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './message.css'

const Message = forwardRef (({username,message}, ref) => {

    const isUser = username === message.username;
    return (
        
            <div ref= {ref} id="message" className={isUser ? 'user_message' : 'guest_message'} variant="outlined">
                
                    <Typography>
                       {
                        isUser ? <p>{message.message}</p>
                        :<p><b>{message.username}:</b> {message.message}</p>
                       } 
                    </Typography>
               
            </div>
          
        
            
    )   
})

export default Message
