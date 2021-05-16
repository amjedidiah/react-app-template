// API import
import {hideLoading, showLoading} from 'react-redux-loading';

// Action creator imports
import {receivePosts} from 'redux/actions/posts';
import {receiveUsers} from 'redux/actions/users';
import hudphiAPI from 'utils/hudphiAPI';

/**
 * Gets initial data
 * @return {promise}
 */
export const getInitialData = () =>
  Promise.all([
    hudphiAPI.get(`/article`),
    hudphiAPI.get(`/communityHealth`),
    hudphiAPI.get(`/project`),
    hudphiAPI.get(`/user`),
  ]).then(([articles, communityHealth, projects, users]) => ({
    articles,
    communityHealth,
    projects,
    users,
  }));

/**
 * Async action creator to handle initial data
 * @return {actionCreator}
 */
export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
  return getInitialData().then(
      ({articles, communityHealth, projects, users}) => {
        const a = articles?.data?.data;
        const c = communityHealth?.data?.data;
        const p = projects?.data?.data;
        const u = users?.data?.data;

        dispatch(receivePosts([...a, ...c, ...p]));
        dispatch(receiveUsers(u));
        dispatch(hideLoading());
      },
  );
};
