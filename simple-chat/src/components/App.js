import React, { Component } from 'react';
// import logo from '../logo.svg';
// import '../App.css';
import Chat from './Chat'
import ChatPicker from './ChatPicker'
import NotFound from './NotFound'
import PropTypes from 'prop-types'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {

  state = {
    messages: []
  }

  addName = (name) => {
     const messages = [...this.state.messages]
      messages.push({id: name, text:''})
      alert(JSON.stringify(messages))
     this.setState({
        messages: messages
     })
}

// addMessage = (msg, name) => {
//   const messages ={...this.state.messages}
//   messages[`${name}`] = msg
//   this.setState({
//     messages:messages
//   })
// }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
              <Switch> 
                  <Route exact path='/' render=
                  {(props) => <ChatPicker {...props} addName={this.addName} />} />
                  <Route exact path="/chat/:chatId" render=
                  {(props) => <Chat {...props} messages={this.state.messages} addMessage={this.props.addMessage}/>}/>
                  <Route component={NotFound} />
              </Switch>
          </BrowserRouter>
        </header>
      </div>
    );
  }
}

export default App;
