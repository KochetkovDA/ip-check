function setInitialState() {
  console.log(sessionStorage)
    const initState = {
      query: {
        Ip: sessionStorage.Ip || '',
        Api: sessionStorage.Api || 'geo',
      }
    };
    return initState;
  }

  export default function searchBarReducer(state = setInitialState(), action) {
    switch (action.type) {
      case 'CHANGE_QUERY':
      sessionStorage.Ip = action.payload.Ip;
      sessionStorage.Api = action.payload.Api;
      return { ...state, query: action.payload  };
      case 'FIND_IP':
        console.log(state);
        return { ...state };
      default:
        return state;
    }
  }