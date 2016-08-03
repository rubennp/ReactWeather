var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Error'
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message: React.PropTypes.string.isRequired
  },
  componentDidMount: function () {
    var {title, message} = this.props;
    var modalMarkup =  (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="" data-reset-on-close="true">
        <h2>{title}</h2>
        <h4>{message}</h4>
        <p>
          <button className="button hollow" data-close="">
            Okay!
          </button>
        </p>
        <p>
          (press ESC or click outside this modal window to close it)
        </p>
      </div>
    );

    // Remove node if there is one
    $('.reveal').remove();

    //build html and render to string
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));

    // Attach to DOM Node
    $(ReactDOM.findDOMNode(this)).html($modal);

    // Create new instance of a modal
    var modal = new Foundation.Reveal($('#error-modal'));

    // open modal
    modal.open();
  },
  render: function () {
    return (
      <div>
      </div>
    );

  }
});

module.exports = ErrorModal;
