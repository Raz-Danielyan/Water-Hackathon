export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('hackatoon_state');
    if (serializedState === null) {
      return {
        user: {
          role: 'guest',
        },
      };
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
      localStorage.setItem('hackatoon_state', serializedState);
    }
  } catch (e) {
    // ignore errors
  }
};

export const emptyState = () => {
  localStorage.removeItem('hackatoon_state');
};

export const getAccessToken = () => {
  const state = loadState();
  return (state && state.jwt) || '';
};
