import {List, Map} from 'immutable';

function setConnectionState(state, connectionState, connected) {
  return state.set('connection', Map({
    state: connectionState,
    connected
  }));
}

function setState(state, newState) {
  return state.merge(newState);
}

function vote(state, entry) {
  const currentRound = state.getIn(['vote', 'round']);
  const currentPair = state.getIn(['vote', 'pair']);
  if (currentPair && currentPair.includes(entry)) {
    return state.set('myVote', Map({
      round: currentRound,
      entry
    }));
  } else {
    return state;
  }
}

function resetVote(state) {
  const votedForRound = state.getIn(['myVote', 'round']);
  const currentRound = state.getIn(['vote', 'round']);
  if (votedForRound !== currentRound) {
    return state.remove('myVote');
  } else {
    return state;
  }
}

export default function(state = Map(), action) {
  switch (action.type) {
  case 'SET_CLIENT_ID':
    return state.set('clientId', action.clientId);
  case 'SET_CONNECTION_STATE':
    return setConnectionState(state, action.state, action.connected);
  case 'SET_STATE':
    return resetVote(setState(state, action.state));
  case 'VOTE':
    return vote(state, action.entry);
  default:
    return state;
  }
}
