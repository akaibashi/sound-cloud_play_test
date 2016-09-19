var MessageItem = React.createClass({
  render : function(){
    return (
      <div className="message">
        <h2 className="messageUser">{this.props.message.user}</h2>
        <span>{this.props.message.text}</span>
        <span><iframe width="50%" height="250" scrolling="no" frameborder="no" src={this.props.message.text}></iframe></span>
      </div>
    );
  }
});
