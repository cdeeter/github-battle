var React = require('react');
var Prompt = require('../components/Prompt');

var PromptContainer = React.createClass({
  contextTypes: {
    // Dynamic routing; don't have to pass the router down as props
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function() {
    return {username: ''}
  },

  handleUpdateUser: function(e) {
    this.setState({
      username: e.target.value
    });
  },

  handleSubmitUser: function(e) {
    e.preventDefault();
    var username = this.state.username;
    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      console.log(this.context);
      // go to /battle
      // get playerOne from the routeParams and
      // playerTwo from what the user entered (since currently
      // on the playerTwo route)
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username
        }
      })
    } else {
      // go to /playerTwo; playerOne param will be the
      // username that was just entered
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  },

  render: function() {
    // A new Prompt component was created for rendering.
    // We want to keep our business logic components separate
    // from our rendering components. To do this, we also
    // need to pass in the values needed in the rendering component.
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.route.header}
        username={this.state.username}
      />
    )
  }
});

module.exports = PromptContainer;
