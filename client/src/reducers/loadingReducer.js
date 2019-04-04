export default (state = false, { type }) => {
  const matches = /(.*)_(REQUEST|SUCCESS|FAILED)/.exec(type);

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) return state;

  const [, , requestState] = matches;

  return requestState === 'REQUEST';
};
