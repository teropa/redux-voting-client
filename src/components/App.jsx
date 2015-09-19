import React from 'react';
import {RouteHandler} from 'react-router';
import {ConnectionStateContainer} from './ConnectionState';

export default React.createClass({
  render: function() {
    return <div>
      <ConnectionStateContainer />
      <RouteHandler />
    </div>
  }
});
