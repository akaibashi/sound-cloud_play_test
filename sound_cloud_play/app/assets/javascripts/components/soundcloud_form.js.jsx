var SoundcloudForm = React.createClass({
  handleSubmit: function(event){

console.log("submited!!");
    event.preventDefault();
    var url = this.refs.url.value.trim();
    if(!url){
      return;
    }

console.log(url);

//    this.props.onMessageSubmit({user: user,text: text});
    this.props.onHoge({url: url});
    this.props.onTestFunc({url: url});

    this.refs.url.value = '';
  },
  render: function(){
    return (
      <form className="soundcloudForm" onSubmit={this.handleSubmit}>
        <input className="soundcloudFormInput" type="text" placeholder="soundcloud url" ref="url" />
        <input className="btn btn-default soundcloudFormSubmitBtn" type="submit" value="Post" />
      </form>
    );
  }
});
