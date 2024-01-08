//authAction.js

export const setAccessToken = (token) => {
    return {
      type: setAccessToken(),
      payload: token,
    };
  };