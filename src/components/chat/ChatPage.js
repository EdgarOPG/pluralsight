import React from 'react';
import io from 'socket.io-client';
import * as chatActions from '../../actions/chatActions';
import {connect} from 'react-redux';

class ChatPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state={
            chatMessage:{body:''},
            messages:[]    
           };
        this.handleOnclick = this.handleOnclick.bind(this);  
        this.onMessageChange = this.onMessageChange.bind(this);
        let that =this;
        this.socket =io(`${location.protocol}//${location.hostname}:3000`);
        this.socket.on('chat message', function(msg){
                that.props.fetchMessage(msg);
            });
    }
   
   
   handleOnclick(socket){
      socket.emit('chat message', this.state.chatMessage);
      this.setState({
          chatMessage: {body:""}
      });
   }
   
   onMessageChange(event){
       const msj = this.state.chatMessage;
       msj.body = event.target.value;
       this.setState({chatMessage:msj});
   }
   
    render(){
        
        return (
            <div>
                <h2>chat room</h2>
                <ul>
                    {this.props.messages.map((msj, index)=>(
                        <li key={index}>{msj.body}</li>
                    ))}
                </ul>
                <input type="text" value={this.state.chatMessage.body} onChange={this.onMessageChange} />
                <button onClick={()=>this.handleOnclick(this.socket) } >Send ! </button>
            </div>
        )
    }
}

function mapStateToPros(state, ownProps){
    return {
        messages: state.messages
    };
}

function mapDispatchToProps(dispatch){
    return {
            fetchMessage: msg => dispatch(chatActions.fetchMessage(msg))
    };
}

export default  connect(mapStateToPros,mapDispatchToProps)(ChatPage);