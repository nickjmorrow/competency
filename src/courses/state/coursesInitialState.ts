import { CoursesState } from '~/courses/types/CoursesState';

export const coursesInitialState: CoursesState = {
    courses: [
        { courseId: 1, name: 'Math' },
        {
            courseId: 2,
            name: 'History',
        },
        { courseId: 3, name: 'English' },
    ],
};
