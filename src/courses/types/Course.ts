export interface Course {
    studentIds: number[];
    coursePlanId: number | null;
    coursePeriodId: number;
    instructorId: number;
    name: string;
    courseId: number;
    schedule: string;
    studentProjects: StudentProject[];
}

interface StudentProject {
    studentId: number;
    projectId: number;
    result: Result | null;
}

type Result = 'evaluating' | 'satisfactory';
