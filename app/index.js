var React = require('react');
var ReactDOM = require('react-dom');

// This is how you define a component
var HelloWorld = React.createClass({
  // Render method specifies the UI of the component using JSX
  render: function () {
    return (
      <div>Hello World</div>
    );
  }
});

ReactDOM.render(
  // This is how you invoke a component
  <HelloWorld />,
  // Where to put the component
  document.getElementById('app')
)
