import { configureStore } from "@reduxjs/toolkit";
import peoplesSlice from "@redux/modules/peoplesSlice";

export const store = configureStore({
  reducer: {
    peoplesSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
