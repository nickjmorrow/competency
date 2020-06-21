import { combineReducers } from 'redux';
import { todosReducer } from '~/todos/state/todosReducer';
import { coursesApi } from '~/courses';
import { studentsApi } from '~/students';
import { instructorsApi } from '~/instructors';

export const rootReducer = combineReducers({
    todosState: todosReducer,
    coursesState: coursesApi.reducer,
    studentsState: studentsApi.reducer,
    instructorsState: instructorsApi.reducer,
});
