import { Card, Typography } from '@material-ui/core'
import React from 'react'
import './message.css'

function Message({username,message}) {

    const isUser = username === message.username;
    return (
        <div>
            <div id="message" className={isUser ? 'user_message' : 'guest_message'} variant="outlined">
                
                    <Typography>
                       <p>{message.username}: {message.message}</p>
                    </Typography>
               
            </div>
        </div>
    )
}

export default Message
