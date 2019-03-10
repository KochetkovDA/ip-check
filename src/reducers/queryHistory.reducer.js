function setInitialState() {
  let queryHistoryList = [];
  if (localStorage.queryHistoryList) {
    queryHistoryList = JSON.parse(localStorage.queryHistoryList);
  }
  return queryHistoryList;
}

export default function queryHistoryReducer(state = setInitialState(), action) {
  switch (action.type) {
    case 'FIND_IP_SUCCEEDED':
      localStorage.queryHistoryList = JSON.stringify([...state, action.payload.responseData]);
      return [...state, action.payload.responseData];
    case 'FIND_IP_FAILED':
      return state;

    default:
      return state;
  }
}
