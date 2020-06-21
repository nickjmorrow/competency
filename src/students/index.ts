import { studentsReducer } from '~/students/redux/studentsReducer';
import { studentsSelectors } from '~/students/redux/studentsSelectors';

export const studentsApi = {
    reducer: studentsReducer,
    selectors: studentsSelectors,
};

export * from '~/students/types/Student';
