import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import authReducer from "./features/auth/authSlice";
import loginReducer from "./features/auth/loginSlice";
import authModalReducer from "./features/auth/authModalSlice";
import userCredentialReducer from "./features/auth/userCredentialSlice";
import carReducer from "./features/car/carSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistUserCredentialConfig = {
  key: "userCredential",
  storage,
};
const persistedUserCrendentialReducer = persistReducer(
  persistUserCredentialConfig,
  userCredentialReducer
);

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,
    login: loginReducer,
    authModal: authModalReducer,
    car: carReducer,
    userCredentialInfo: persistedUserCrendentialReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      baseApi.middleware
    ),
});

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

/*
serializableCheck:{
  ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
}
*/
