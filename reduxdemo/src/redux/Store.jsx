import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userLoginSlice from "./Slices/UserLoginSlice";
import HomeSlice from "./Slices/HomeSlice";
import AddGameSlice from "./Slices/AddGameSlice";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import DowloadSlice from "./Slices/DowloadSlice";

const persistConfig = {
  key: "root",
  storage,
};

const reducer = combineReducers({
  userLogin: userLoginSlice,
  gameDetails: HomeSlice,
  addGame: AddGameSlice,
  downloadGames: DowloadSlice
});

const perisistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer :perisistedReducer
});

export const persistor = persistStore(store)

export default store;
