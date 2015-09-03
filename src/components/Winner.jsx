import React from 'react/addons';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],
  render: function() {
    return <div className="winner">
      Winner is {this.props.winner}!
    </div>;
  }
});
