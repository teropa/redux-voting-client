import React from 'react/addons';
import Winner from './Winner';
import Vote from './Vote';

export default React.createClass({
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});
