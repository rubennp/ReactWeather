var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });
//
// STATELESS FUNCTION:

var About = (props) => {
  return (
    <div>
      <h3>About</h3>
      <p>About me page</p>
    </div>
  );
};

module.exports = About;
