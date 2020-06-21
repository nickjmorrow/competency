import { studentsReducer } from '~/students/redux/studentsReducer';

export const studentsApi = {
    reducer: studentsReducer,
};

export * from '~/students/types/Student';
