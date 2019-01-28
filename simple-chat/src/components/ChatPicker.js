import React from 'react';


class ChatPicker extends React.Component {
    myChat = React.createRef();
    myName = React.createRef();
    chatName = 'fierce-uptight-mice'
    chatNameTwo = 'thoughtless-panicky-men'
    chatNameThree = 'fancy-scary-lives'
    

    goToChat = event => {
        this.props.addName(this.myName.current.value);
        
        // stop the form from submitting
        event.preventDefault();
        
        // get the text from that input
        const chatId = this.myChat.current.value
        // change the page to /chat/:chatId
        this.props.history.push(`/chat/${chatId}`)
    }
    render(){
        return (
                <form action="" className="store-selector" onSubmit={this.goToChat}>
                    <h2>Please Enter Your Name and Select A Chatroom</h2>
                    <input type="text" ref={this.myName} required placeholder="Your Name"/>
                    <select ref={this.myChat} name="Chat-Name" id="chat-name">
                        <option >{this.chatName}</option>
                        <option>{this.chatNameTwo}</option>
                        <option>{this.chatNameThree}</option>
                    </select>
                    <button type ="submit">Visit Chatroom -></button>
                </form>
        )
    }
}

export default ChatPicker;