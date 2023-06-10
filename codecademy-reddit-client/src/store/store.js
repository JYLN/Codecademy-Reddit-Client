import { configureStore } from '@reduxjs/toolkit';

import redditReducer from './redditSlice';

export default configureStore({
  reducer: {
    reddit: redditReducer,
  },
});
