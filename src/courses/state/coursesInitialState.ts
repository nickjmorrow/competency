import { CoursesState } from '~/courses/types/CoursesState';

export const coursesInitialState: CoursesState = {
    courses: [
        {
            courseId: 1,
            name: 'Math',
            learningObjectives: [
                {
                    learningObjectiveId: 1,
                    title: 'Divison',
                    description: 'Students should be able to...',
                    projects: [
                        {
                            projectId: 1,
                            description: 'Project 1',
                        },
                    ],
                },
            ],
        },
    ],
};
