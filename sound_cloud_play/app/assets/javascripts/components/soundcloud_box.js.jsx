var SoundcloudBox = React.createClass({
  getInitialState : function(){
    return { urls: [], isLoading: true};
  },

  componentDidMount: function(){
console.log(this.props.api_url);
console.log("soundcloud_box componentDidMount!");

    $.ajax({
      url: this.props.api_url,
      dataType: 'Json',
      cache: false,
      success: function(urls){
console.log("soundcloud_box componentDidMount success!");
console.log(urls);
        this.setState({ urls: urls, isLoading: false});
      }.bind(this),
      error: function(_xhr, status, err){
console.log("soundcloud_box componentDidMount error!");
        console.error(this.props.api_url, status, err.toString());
      }.bind(this)
    });
  },

  handleMessageSubmit: function(url){
console.log("parent!!");

    $.ajax({
      url: this.props.api_url,
      dataType: 'Json',
      type: 'POST',
      data: url,
      success: function(url){
console.log("post success!");

        var newUrls = this.state.urls.concat(url);
console.log(newUrls);
        // sort
        newUrls.sort(function(a, b){
          if(a.id < b.id){
            return 1;
          }
          if(a.id > b.id){
            return -1;
          }
          return 0;
        });

        this.setState({ urls: newUrls });
      }.bind(this),
      error: function(_xhr, status, err){
console.log("post failed!");
        console.error(this.props.api_url, status, err.toString());
      }.bind(this)
    });
 },

  testFunc: function(){
    console.log("test func!");
  },

  render : function(){

console.log("soundcloud_box render!");
console.log(this.state.urls);
   var test = this.state.urls.map(function(url) {
console.log(url);
    });


   var soundcloudItems = this.state.urls.map(function(url) {
      return (
        <SoundcloudItem key={url.id} sc_url={url} />
      );
    });

console.log("soundcloud_box render!2");
    if(this.state.isLoading){
      return (
        <div>ロード中</div>
      );
    }else{
      return (
        <div className="messageBox">
          <SoundcloudForm onTestFunc={this.testFunc} onHoge={this.handleMessageSubmit} />
          {soundcloudItems}
        </div>
      );
    }
  }
});
