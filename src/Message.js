import { Typography } from '@material-ui/core'
import React, { forwardRef } from 'react'
import './message.css'

const Message = forwardRef (({username,message}, ref) => {

    const isUser = username === message.username;
    return (
        
            <div ref= {ref} id="message" className={isUser ? 'user_message' : 'guest_message'} variant="outlined">
                
                    <Typography>
                       <p>{message.username}: {message.message}</p>
                    </Typography>
               
            </div>
    )   
})

export default Message
