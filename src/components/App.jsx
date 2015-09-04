import React from 'react/addons';
import {RouteHandler} from 'react-router';
import {List, Map} from 'immutable';

const pair = List.of('Trainspotting', '28 Days Later');
const tally = Map({'Trainspotting': 5, '28 Days Later': 4});

export default React.createClass({
  render: function() {
    return <RouteHandler pair={pair}
                         tally={tally} />
  }
});
