import { createSlice } from '@reduxjs/toolkit';

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
  },
});

export const {
  setSelectedSubreddit,
  addPreviousSelectedSubreddit,
  removePreviousSelectedSubreddit,
} = redditSlice.actions;
export default redditSlice.reducer;

export const addSelectedSubreddit = subreddit => async dispatch => {
  dispatch(setSelectedSubreddit(subreddit));
  dispatch(addPreviousSelectedSubreddit(subreddit));
};

export const getSelectedSubreddit = state => state.reddit.selectedSubreddit;
export const getPreviousSelectedSubreddit = state => state.reddit.previousSelectedSubreddit;
