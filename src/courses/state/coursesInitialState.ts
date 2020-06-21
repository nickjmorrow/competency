import { CoursesState } from '~/courses/types/CoursesState';

export const coursesInitialState: CoursesState = {
    courses: [
        {
            studentIds: [],
            coursePlanId: null,
            coursePeriodId: 1,
            instructorId: 1,
            name: 'Pre-Calculus',
            courseId: 1,
        },
    ],
    coursePeriods: [
        {
            coursePeriodId: 1,
            label: 'Fall 2020',
            startDate: new Date(2020, 9, 2),
            endDate: new Date(2021, 4, 6),
        },
    ],
    coursePlans: [
        {
            coursePlanId: 1,
            name: 'Math',
            learningObjectives: [
                {
                    learningObjectiveId: 1,
                    title: 'Divison',
                    description: 'Students should be able to...',
                    projects: [
                        {
                            projectId: 1,
                            title: 'Project 1',
                            description: 'For this project, students will ...',
                        },
                        {
                            projectId: 2,
                            title: 'Project 2',
                            description: 'For this project, students will ...',
                        },
                        {
                            projectId: 3,
                            title: 'Project 3',
                            description: 'For this project, students will ...',
                        },
                    ],
                },
                {
                    learningObjectiveId: 2,
                    title: 'Multiplication',
                    description: 'Students should be able to...',
                    projects: [
                        {
                            projectId: 1,
                            title: 'Project 1',
                            description: 'For this project, students will ...',
                        },
                        {
                            projectId: 2,
                            title: 'Project 2',
                            description: 'For this project, students will ...',
                        },
                        {
                            projectId: 3,
                            title: 'Project 3',
                            description: 'For this project, students will ...',
                        },
                    ],
                },
                {
                    learningObjectiveId: 3,
                    title: 'Addition',
                    description: 'Students should be able to...',
                    projects: [
                        {
                            projectId: 1,
                            title: 'Project 1',
                            description: 'For this project, students will ...',
                        },
                        {
                            projectId: 2,
                            title: 'Project 2',
                            description: 'For this project, students will ...',
                        },
                        {
                            projectId: 3,
                            title: 'Project 3',
                            description: 'For this project, students will ...',
                        },
                    ],
                },
            ],
        },
    ],
};
