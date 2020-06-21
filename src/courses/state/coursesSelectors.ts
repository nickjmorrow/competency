import { CoursesState } from '~/courses/types/CoursesState';
import { CoursePlan } from '~/courses/types/CoursePlan';
import { Course } from '~/courses/types/Course';
import { CoursePeriod } from '~/courses/types/CoursePeriod';

interface AppState {
    coursesState: CoursesState;
}

const getCoursePlans = (state: AppState): CoursePlan[] => state.coursesState.coursePlans;

const getByCoursePlanId = (coursePlanId: number | null) => (state: AppState): CoursePlan | undefined =>
    state.coursesState.coursePlans.find(c => c.coursePlanId === coursePlanId);

const getCourses = (state: AppState): Course[] => state.coursesState.courses;

const getByCoursePeriodId = (coursePeriodId: number) => (state: AppState): CoursePeriod =>
    state.coursesState.coursePeriods.find(cp => cp.coursePeriodId === coursePeriodId)!;

const getByCourseId = (courseId: number) => (state: AppState): Course =>
    state.coursesState.courses.find(c => c.courseId === courseId)!;

export const coursesSelectors = {
    getCoursePlans,
    getByCoursePlanId,
    getCourses,
    getByCoursePeriodId,
    getByCourseId,
};
