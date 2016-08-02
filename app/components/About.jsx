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
      <h1 className="text-center page-title">About</h1>
      <p>
        Welcome! My name is Rubèn and this is my first web app using React!
        Is a weather application for The Complete React Web App Developer Course.
      </p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> was the JavaScript framework used.
        </li>
        <li>
          I used <a href="http://openweathermap.org">Open Weather Map</a> to search for weather data by city name.
        </li>
        <li>
          And <a href="http://foundation.zurb.com/">Zurb Foundation</a> as a front-end framework
          with <a href="http://sass-lang.com/">Sass Language</a>.
        </li>
      </ul>
      <hr></hr>
      <p className="text-center"><strong>Feel free to search for the weather in your city! See you soon!</strong></p>
    </div>
  );
};

module.exports = About;
