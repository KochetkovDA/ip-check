function setInitialState() {
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

      case 'FIND_IP':
      return { ...state, query: action.payload  }

      case 'CHANGE_QUERY':
        sessionStorage.Ip = action.payload.Ip;
        sessionStorage.Api = action.payload.Api;
      return { ...state, query: action.payload  };

      default:
        return state;
    }
  }