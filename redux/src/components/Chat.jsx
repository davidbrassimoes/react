import React from 'react'
import { useSelector } from 'react-redux'
import MessageInput from './MessageInput'
import MessageView from './MessageView'

export default function Chat() {

    const messages = useSelector(state => state.messages);

    return (
        <section>
            <h2>CHAT</h2>
            <article className='message-view' >
                <MessageView messages={messages} />
            </article>
            <article className='message-input' >
                <MessageInput />
            </article>
        </section>
    )
}
