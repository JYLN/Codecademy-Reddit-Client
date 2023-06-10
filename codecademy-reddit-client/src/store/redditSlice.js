import { createSlice } from '@reduxjs/toolkit';

const redditSlice = createSlice({
  name: 'reddit',
  initialState: {
    selectedSubreddit: '',
  },
  reducers: {
    setSelectedSubreddit: (state, action) => {
      state.selectedSubreddit = action.payload;
    },
  },
});

export const { setSelectedSubreddit } = redditSlice.actions;
export default redditSlice.reducer;

export const getSelectedSubreddit = state => state.reddit.selectedSubreddit;
