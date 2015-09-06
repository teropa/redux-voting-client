import objectAssign from 'object-assign';

export default socket => store => next => action => {
  if (action.meta && action.meta.remote) {
    const clientId = store.getState().get('clientId');
    socket.emit('action', objectAssign({}, action, {clientId}));
  }
  return next(action);
}
