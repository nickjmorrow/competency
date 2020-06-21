import { CoursesState } from '~/courses/types/CoursesState';

export const coursesInitialState: CoursesState = {
    courses: [
        {
            studentIds: [1, 2, 3],
            coursePlanId: null,
            coursePeriodId: 1,
            instructorId: 1,
            name: 'Pre-Calculus',
            courseId: 1,
            schedule: 'M/W/F 3-4',
            studentProjects: [{ studentId: 2, projectId: 1, result: 'satisfactory' }],
        },
        {
            studentIds: [4, 5],
            coursePlanId: null,
            coursePeriodId: 1,
            instructorId: 1,
            name: 'Pre-Calculus',
            courseId: 2,
            schedule: 'M/W/F 4-5',
            studentProjects: [],
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
            name: 'Math ECB Method',
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
                            projectId: 4,
                            title: 'Project 4',
                            description: 'For this project, students will ...',
                        },
                        {
                            projectId: 5,
                            title: 'Project 5',
                            description: 'For this project, students will ...',
                        },
                        {
                            projectId: 6,
                            title: 'Project 6',
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
                            projectId: 7,
                            title: 'Project 7',
                            description: 'For this project, students will ...',
                        },
                        {
                            projectId: 8,
                            title: 'Project 8',
                            description: 'For this project, students will ...',
                        },
                        {
                            projectId: 9,
                            title: 'Project 9',
                            description: 'For this project, students will ...',
                        },
                    ],
                },
            ],
        },
        {
            coursePlanId: 2,
            name: 'Math AHA Method',
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
