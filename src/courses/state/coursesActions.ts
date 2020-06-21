import { action } from 'typesafe-actions';
import { Course } from '~/courses/types/Course';
import { CoursePlan } from '~/courses/types/CoursePlan';

export enum CoursesActionTypeKeys {
    CREATE_COURSE = 'CREATE_COURSE',
    ASSIGN_COURSE_PLAN_TO_COURSE = 'ASSIGN_COURSE_PLAN_TO_COURSE',
}

const createCourse = (payload: string) => action(CoursesActionTypeKeys.CREATE_COURSE, payload);

const assignCoursePlanToCourse = (payload: { course: Course; coursePlan: CoursePlan }) =>
    action(CoursesActionTypeKeys.ASSIGN_COURSE_PLAN_TO_COURSE, payload);

export const coursesActions = {
    createCourse,
    assignCoursePlanToCourse,
};
