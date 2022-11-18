export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('rb_state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const { user, jwt } = state;
    if (jwt) {
      const serializedState = JSON.stringify({
        user,
        jwt,
      });
      localStorage.setItem('rb_state', serializedState);
    }
  } catch (e) {
    // ignore errors
  }
};

export const emptyState = () => {
  localStorage.removeItem('rb_state');
};

export const getAccessToken = () => {
  const state = loadState();
  return (state && state.jwt) || '';
};
