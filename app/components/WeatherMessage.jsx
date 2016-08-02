var React = require('react');

// var WeatherMessage = React.createClass ({
//   render: function () {
//     var {temp, location} = this.props;
//     // var location = this.props.location;
//     // var temp = this.props.temp;
//
//     return (
//       <h4>It's it {temp} in {location}</h4>
//     );
//   }
// });

// var WeatherMessage = (props) => {
//   var {temp, location} = props;
//
//   return (
//     <h4>It's it {temp} in {location}</h4>
//   );
// }

var WeatherMessage = ({temp, location}) => {
  return (
    <h3 className="text-center">It's it {temp} in {location}</h3>
  );
}

module.exports = WeatherMessage;
