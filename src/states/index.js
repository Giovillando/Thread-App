// index.js
import { configureStore } from "@reduxjs/toolkit";
import { loadingBarReducer } from "react-redux-loading-bar";
import authUserReducer from "./authUser/reducer";
import isPreloadReducer from "./isPreload/reducer";
import leaderboardReducer from "./leaderboard/reducer";
import threadReducer from "./threads/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import usersReducer from "./users/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreloadReducer,
    users: usersReducer,
    threads: threadReducer,
    threadDetail: threadDetailReducer,
    leaderboard: leaderboardReducer,
    loadingBar: loadingBarReducer,
  },
});

export default store;
