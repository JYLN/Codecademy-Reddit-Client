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
  },
});

export const { setSelectedSubreddit } = redditSlice.actions;
export default redditSlice.reducer;

export const getSelectedSubreddit = state => state.reddit.selectedSubreddit;
export const getPreviousSelectedSubreddit = state => state.reddit.previousSelectedSubreddit;
