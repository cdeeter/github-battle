var React = require('react');

function ConfirmBattle (props) {
  // Conditionally render the confirm battle page
  // depending on if isLoading is true or not
  return props.isLoading === true
    ? <p> Loading! </p>
    : <p> CONFIRM BATTLE! </p>
}

module.exports = ConfirmBattle;
