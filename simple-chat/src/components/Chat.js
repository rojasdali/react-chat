import React from 'react'

class Chat extends React.Component {
    render() {
        return (
            <div>
             <form action="" className="send-msg" onSubmit={this.goToChat}> 
                <input type="text" ref={this.myName} required placeholder="Type a message"/>
                <button type ="submit">Submit</button>
                
            </form>
            <p>{this.props.messages.map((msg,i) => `${msg.id}: ${msg.text}`)}</p>
            
            </div>
        )
    }
}

export default Chat