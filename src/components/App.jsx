import React from 'react';
import {ConnectionStateContainer} from './ConnectionState';

export default React.createClass({
  render: function() {
    return <div>
      <ConnectionStateContainer />
      {this.props.children}
    </div>
  }
});
