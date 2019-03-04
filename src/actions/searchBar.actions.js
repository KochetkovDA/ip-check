export function changeSearchQuery(query) {
    console.log(query.Ip);
    return {
      type: 'CHANGE_QUERY',
      payload: {
          Ip: query.Ip,
          Api: query.Api,
        },
    };
}

export function sendSearchQuery(query) {
    return {
      type: 'FIND_IP',
      payload: {
          Ip: query.Ip,
          Api: query.Api,
        },
    };
  }

export function receiveIpInfo(subreddit, json) {
    return {
        type: 'RECEIVE_INFO',
        subreddit,
        posts: json,
        receivedAt: Date.now()
    }
}