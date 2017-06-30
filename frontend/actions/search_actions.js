export const RECEIVE_SEARCH = 'RECEIVE_SEARCH';
import * as SearchUtil from '../util/search_api_util';

export const receiveSearch = results => ({
    type: RECEIVE_SEARCH,
    results
});

export const fetchSearch = search => dispatch => (
  SearchUtil.fetchSearch(search)
  .then(results => dispatch(receiveSearch(results)))
);
