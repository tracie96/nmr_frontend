import { configureStore } from '@reduxjs/toolkit'
// ...
import counterReducer from "./increase";

export default configureStore({
  reducer: {
    counter: counterReducer,
  }
})