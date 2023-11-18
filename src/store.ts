import {configureStore, MiddlewareArray} from '@reduxjs/toolkit'
import {SECTION_LIST_REDUCER_NAME, sectionsListReducer} from "./modules/SectionsList/store/slice.ts";
import {useDispatch, useSelector} from "react-redux";
import type {TypedUseSelectorHook} from 'react-redux'
import logger from 'redux-logger';

const middleware =
    import.meta.env.DEV
        ? new MiddlewareArray().concat(logger)
        : new MiddlewareArray();

export const store = configureStore({
    reducer: {
        [SECTION_LIST_REDUCER_NAME]: sectionsListReducer,
    },
    // middleware
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector