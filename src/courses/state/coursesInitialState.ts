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
