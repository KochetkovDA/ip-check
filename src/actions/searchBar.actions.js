export const changeSearchQuery = query => {
  return {
    type: 'CHANGE_QUERY',
    payload: {
      Ip: query.Ip,
      Api: query.Api,
    },
  };
};

// export const changeQueryHistoryList = api => {
//   return {
//     type: 'CHANGE_QUERY_HISTORY_LIST',
//     payload: {
//       Api: query.Api,
//     },
//   };
// };

export const sendSearchQuery = query => {
  return {
    type: 'FIND_IP',
    payload: {
      Ip: query.Ip,
      Api: query.Api,
    },
  };
};
export const searchQuerySuccess = (data, Api) => {
  return {
    type: 'FIND_IP_SUCCEEDED',
    payload: {
      responseData: {Api, ...data},
    },
  };
};
export const searchQueryError = err => {
  console.log(err);
  return {
    type: 'FIND_IP_FAILED',
  };
};

export const fetchIp = query => {
  return dispatch => {
    dispatch(sendSearchQuery(query));
    fetch(`https://api.2ip.ua/${query.Api}.json?ip=${query.Ip}`)
      .then(res => res.json())
      .then(data => dispatch(searchQuerySuccess(data, query.Api)), err => dispatch(searchQueryError(err)));
  };
};
