import { combineReducers } from 'redux'
import queryHistoryReducer  from './queryHistory.reducer'
import searchBarReducer from './serachBar.reducer'

export default combineReducers({
    queryHistoryState: queryHistoryReducer,
    searchBarState: searchBarReducer
})