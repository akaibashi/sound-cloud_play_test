var MessageForm = React.createClass({
  handleSubmit: function(event){

console.log("submited!!");
    event.preventDefault();
    var user = this.refs.user.value.trim();
    var text = this.refs.text.value.trim();
    if(!user || !text){
      return;
    }

console.log(user);
console.log(text);

//    this.props.onMessageSubmit({user: user,text: text});
    this.props.onHoge({user: user,text: text});
    this.props.onTestFunc({user: user,text: text});

    this.refs.user.value = '';
    this.refs.text.value = '';
  },
  render: function(){
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="yourself name" ref="user" />
        <input type="text" placeholder="Message" ref="text" />
        <input type="submit" value="Post" />
      </form>
    );
  }
});
