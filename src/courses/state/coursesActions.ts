import { action } from 'typesafe-actions';

export enum CoursesActionTypeKeys {
    CREATE_COURSE = 'CREATE_COURSE',
}

const createCourse = (payload: string) => action(CoursesActionTypeKeys.CREATE_COURSE, payload);

export const coursesActions = {
    createCourse,
};
