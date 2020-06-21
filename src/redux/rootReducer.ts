import { combineReducers } from 'redux';
import { todosReducer } from '~/todos/state/todosReducer';
import { coursesApi } from '~/courses';

export const rootReducer = combineReducers({
    todosState: todosReducer,
    coursesState: coursesApi.reducer,
});
