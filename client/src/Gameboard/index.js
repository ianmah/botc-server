import React from 'react'

const DISCONNECT = 'DISCONNECT'

export const Gameboard = (props) => {
    const onDisconnect = () => {
        doSend({
            command: DISCONNECT
        })
    }
    
    const doSend = (data) => {
        if (props.websocket) {
            props.websocket.send(JSON.stringify(data))
        }
    }

    return (
        <React.Fragment>
            <header>IN BOTC GAME</header>
            {props.users ? props.users.map (user=> {
                return <li key={user.name}>{user.name}</li>
            }): null}
            <button onClick={() => onDisconnect()}>
              Disconnect
            </button>
        </React.Fragment>
    )
}