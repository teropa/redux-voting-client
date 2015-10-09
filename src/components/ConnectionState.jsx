import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {Map} from 'immutable';

export const ConnectionState = React.createClass({
  mixins: [PureRenderMixin],
  isVisible: function() {
    return !this.props.connected;
  },
  getMessage: function() {
    return `Not connected (${this.props.state})`;
  },
  render: function() {
    return <div className="connectionState"
                style={{display: this.isVisible() ? 'block' : 'none'}}>
      {this.getMessage()}
    </div>
  }
});


export const ConnectionStateContainer = connect(
  state => state.get('connection', Map()).toJS()
)(ConnectionState);
