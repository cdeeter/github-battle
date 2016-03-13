var React = require('react');

var Main = React.createClass({
  // this.props.children seems similar to
  // outlet in Ember and ui-view in Angular
  render: function() {
    return (
      <div className='main-container'>
        {this.props.children}
      </div>
    )
  }

})

module.exports = Main;
