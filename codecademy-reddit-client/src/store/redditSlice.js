import { createSlice } from '@reduxjs/toolkit';
import { getSubredditPostComments, getSubredditPosts } from '../api/reddit';

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
    setPosts: (state, action) => {
      state.posts = action.payload;
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
    startGetComments: (state, action) => {
      state.posts[action.payload].loadingComments = true;
      state.posts[action.payload].errorLoadingComments = false;
    },
    getCommentsSuccess: (state, action) => {
      state.posts[action.payload.index].loadingComments = false;
      state.posts[action.payload.index].comments = action.payload.comments;
      state.posts[action.payload.index].errorLoadingComments = false;
    },
    getCommentsFailed: (state, action) => {
      state.posts[action.payload].loadingComments = false;
      state.posts[action.payload].errorLoadingComments = true;
    },
  },
});

export const {
  setSelectedSubreddit,
  addPreviousSelectedSubreddit,
  removePreviousSelectedSubreddit,
  setPosts,
  startGetPosts,
  getPostsSuccess,
  getPostsFailed,
  startGetComments,
  getCommentsSuccess,
  getCommentsFailed,
} = redditSlice.actions;
export default redditSlice.reducer;

export const addSelectedSubreddit = subreddit => async dispatch => {
  dispatch(setSelectedSubreddit(subreddit));
  dispatch(addPreviousSelectedSubreddit(subreddit));
};

export const fetchPosts = subreddit => async dispatch => {
  try {
    dispatch(startGetPosts());
    const posts = await getSubredditPosts(subreddit);
    const postsWithMetaData = posts.map(post => ({
      ...post,
      comments: [],
      loadingComments: false,
      errorLoadingComments: false,
    }));
    dispatch(getPostsSuccess(postsWithMetaData));
  } catch (err) {
    console.log(err);
    dispatch(getPostsFailed());
    dispatch(setSelectedSubreddit(''));
    dispatch(removePreviousSelectedSubreddit(subreddit));
  }
};

export const clearPosts = () => async dispatch => {
  dispatch(setSelectedSubreddit(''));
  dispatch(setPosts([]));
};

export const fetchComments = (index, permalink) => async dispatch => {
  try {
    dispatch(startGetComments(index));
    const comments = await getSubredditPostComments(permalink);
    dispatch(getCommentsSuccess({ index, comments }));
  } catch (err) {
    console.log(err);
    dispatch(getCommentsFailed(index));
  }
};

export const getSelectedSubreddit = state => state.reddit.selectedSubreddit;
export const getPreviousSelectedSubreddit = state => state.reddit.previousSelectedSubreddit;
export const getPosts = state => state.reddit.posts;
export const getLoadingPosts = state => state.reddit.loadingPosts;
export const getLoadingPostsFailed = state => state.reddit.failedLoadingPosts;
export const getPostComments = id => state =>
  state.reddit.posts.find(post => post.id === id).comments;
export const getLoadingComments = id => state =>
  state.reddit.posts.find(post => post.id === id).loadingComments;
