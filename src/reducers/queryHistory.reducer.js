function setInitialState() {
    let queryHistoryList = [];
    if(localStorage.queryHistoryList){
        queryHistoryList = [...localStorage.queryHistoryList ];
    }
    return queryHistoryList;
  }
  
  export default function queryHistoryReducer(state = setInitialState(), action) {
    switch (action.type) {
      case 'CREATE_FILE':
        return { ...state };
      case 'DELETE_FILE': {
        console.log(action.payload);
        return { ...state, files: [...state.files.filter(item => item.name !== action.payload.name)], selectedFile: 0 };
      }
      case 'SELECT_FILE': {
        return { ...state, selectedFile: action.payload.index };
      }
      case 'SAVE_FILE': {
        return {
          ...state,
          files: state.files.map(elem => {
            if (elem.name === action.payload.name && elem.extensions === action.payload.extensions) {
              return action.payload;
            }
            return elem;
          }),
        };
      }
      case 'RUN_FILE': {
        return state;
      }
  
      default:
        return state;
    }
  }
  