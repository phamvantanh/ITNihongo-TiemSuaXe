import ACTIONS from "../actions/index";

const initialState = {
  user: [],
  isLogged: false,
  isAdmin: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        isLogged: true,
      };

    case ACTIONS.LOGOUT: {
      return initialState;
    }

    case ACTIONS.GET_USER:
      return {
        ...state,
        user: action.payload.user,
        isAdmin: action.payload.isAdmin,
      };
    default:
      return state;
  }
};

export default authReducer;
