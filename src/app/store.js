import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'; // Corrigindo a importação
import movieReducer from '../features/movie/movieSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});