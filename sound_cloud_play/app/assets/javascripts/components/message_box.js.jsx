var MessageBox = React.createClass({
  getInitialState : function(){
    return { messages: [], isLoading: true};
/*
    return {
      messages : [
        {id: 1, user: 'hoge1', text: 'hogehoge1'},
        {id: 2, user: 'hoge2', text: 'hogehoge2'},
        {id: 3, user: 'hoge3', text: 'hogehoge3'}
      ]
    };
*/
  },

  componentDidMount: function(){
    $.ajax({
      url: this.props.url,
      dataType: 'Json',
      cache: false,
      success: function(messages){
        this.setState({ messages: messages, isLoading: false});
      }.bind(this),
      error: function(_xhr, status, err){
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },

  handleMessageSubmit: function(message){
console.log("parent!!");

    $.ajax({
      url: this.props.url,
      dataType: 'Json',
      type: 'POST',
      data: message,
      success: function(message){
console.log("post success!");

        var newMessages = this.state.messages.concat(message);
console.log(newMessages);
        // sort
        newMessages.sort(function(a, b){
          if(a.id < b.id){
            return 1;
          }
          if(a.id > b.id){
            return -1;
          }
          return 0;
        });

        this.setState({ messages: newMessages });
      }.bind(this),
      error: function(_xhr, status, err){
console.log("post failed!");
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
 },

  testFunc: function(){
    console.log("test func!");
  },

  render : function(){
   var messageItems = this.state.messages.map(function(message) {
      return (
        <MessageItem key = {message.id} message={message} />
      );
    });

    if(this.state.isLoading){
      return (
        <div>ロード中</div>
      );
    }else{
      return (
        <div className="messageBox">
          <MessageForm onTestFunc={this.testFunc} onHoge={this.handleMessageSubmit} />
          {messageItems}
        </div>
      );
    }
  }
});
