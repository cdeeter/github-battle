var USER_DATA = {
  name: 'Celia',
  username: 'cdeeter',
  image: 'https://avatars2.githubusercontent.com/u/8375521?v=3&s=460'
}

var React = require('react');
var ReactDOM = require('react-dom');

/* Components should be:
    Focused
    Independent
    Resuable
    Small
    Testable

  (... aka FIRST)
*/

var ProfilePic = React.createClass({
  render: function() {
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
});

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username}>
          {this.props.username}
        </a>
      </div>
    )
  }
});

var ProfileName = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function() {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
});

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);

// Pure Functions
// Evaluates the same result given the same arguments
// Doesn't depend on and doesn't modify the states of variables out of its scope.
// No side effects (mutations, async reqs)

// fn(d)=v === function that takes in data and outputs a view
