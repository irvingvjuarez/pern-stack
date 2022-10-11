import { createSlice, configureStore } from "@reduxjs/toolkit";
import { EActionTypes } from "./actions.enum";
import { appInitialState } from "./initialState";

const AppSlice = createSlice({
	name: "global",
	initialState: appInitialState,
	reducers: {
		[EActionTypes.setMsg](state, action) {
			state.message = action.payload.message;
			state.status = action.payload.status
		},
		[EActionTypes.removeMsg](state) {
			state.message = ""
			state.status = undefined
		}
	}
})

export const actions = AppSlice.actions;

export const AppStore = configureStore({
	reducer: AppSlice.reducer
})