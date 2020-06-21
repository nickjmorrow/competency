import { CoursePlan } from '~/courses/types/CoursePlan';
import { Course } from '~/courses/types/Course';
import { CoursePeriod } from '~/courses/types/CoursePeriod';

export interface CoursesState {
    coursePlans: CoursePlan[];
    courses: Course[];
    coursePeriods: CoursePeriod[];
}
