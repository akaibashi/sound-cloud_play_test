var SoundcloudItem = React.createClass({
  render : function(){
    return (
      <div className="soundcloud_item">
        <span><iframe width="50%" height="250" scrolling="no" frameborder="no" src={this.props.sc_url.url}></iframe></span>
      </div>
    );
  }
});
