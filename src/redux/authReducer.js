
//authReducer.js

const initialState = {
    accessToken: null,
    user: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case accessToken:
        return {
          ...state,
          accessToken: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  