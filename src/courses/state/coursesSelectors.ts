import { CoursesState } from '~/courses/types/CoursesState';
import { Course } from '~/courses/types/Course';

interface AppState {
    coursesState: CoursesState;
}

const getCourses = (state: AppState): Course[] => state.coursesState.courses;

const getByCourseId = (courseId: number) => (state: AppState): Course =>
    state.coursesState.courses.find(c => c.courseId === courseId)!;

export const coursesSelectors = {
    getCourses,
    getByCourseId,
};
