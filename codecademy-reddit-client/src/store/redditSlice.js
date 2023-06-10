import { createSlice } from '@reduxjs/toolkit';
import { getSubredditPosts } from '../api/reddit';

const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    selectedSubreddit: '',
    previousSelectedSubreddit: [],
    posts: [],
    loadingPosts: false,
    failedLoadingPosts: false,
  },
  reducers: {
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
    addPreviousSelectedSubreddit: (state, action) => {
      state.previousSelectedSubreddit = [action.payload, ...state.previousSelectedSubreddit];
    },
    removePreviousSelectedSubreddit: (state, action) => {
      state.previousSelectedSubreddit = state.previousSelectedSubreddit.filter(
        subreddit => action.payload !== subreddit
      );
    },
    startGetPosts: state => {
      state.loadingPosts = true;
      state.failedLoadingPosts = false;
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload;
      state.loadingPosts = false;
      state.failedLoadingPosts = false;
    },
    getPostsFailed: state => {
      state.loadingPosts = false;
      state.failedLoadingPosts = true;
    },
  },
});

export const {
  setSelectedSubreddit,
  addPreviousSelectedSubreddit,
  removePreviousSelectedSubreddit,
  startGetPosts,
  getPostsSuccess,
  getPostsFailed,
} = redditSlice.actions;
export default redditSlice.reducer;

export const addSelectedSubreddit = subreddit => async dispatch => {
  dispatch(setSelectedSubreddit(subreddit));
  dispatch(addPreviousSelectedSubreddit(subreddit));
};

export const fetchPosts = subreddit => async dispatch => {
  dispatch(startGetPosts());
  try {
    const posts = await getSubredditPosts(subreddit);
    dispatch(getPostsSuccess(posts));
  } catch (err) {
    console.log(err);
    dispatch(getPostsFailed());
  }
};

export const getSelectedSubreddit = state => state.reddit.selectedSubreddit;
export const getPreviousSelectedSubreddit = state => state.reddit.previousSelectedSubreddit;
export const getPosts = state => state.reddit.posts;
export const getLoadingPosts = state => state.reddit.loadingPosts;
