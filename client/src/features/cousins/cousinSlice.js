const initialState = {
    users: [],
  };
  
  function cousinsReducer(state = initialState, action) {
    switch (action.type) {
      case "cousins/add":
        console.log("adding ", action.payload);
        return {
          ...state,
          users: [...state.users, action.payload],
        };
  
      default:
        return state;
    }
  }
  
  export default cousinsReducer;
  