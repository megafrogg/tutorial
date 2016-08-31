var React = require('react');
var ReactDom = require('react-dom');

var Main = React.createClass({
  render: function(){
    return (
      <div>
        Hello word
      </div>
    )
  }
});

ReactDOM.render(<Main />, document.getElemementById('app'));
