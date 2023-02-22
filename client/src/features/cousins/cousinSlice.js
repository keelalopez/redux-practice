const initialState = {
    cousins: [],
  };
  
  function cousinsReducer(state = initialState, action) {
    switch (action.type) {
      case "cousins/add":
        console.log("adding", action.payload);
        return {
          ...state,
          cousins: [...state.cousins, action.payload],
        };
  
      default:
        return state;
    }
  }
  
  export default cousinsReducer;
  