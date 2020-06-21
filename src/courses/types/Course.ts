export interface Course {
    studentIds: number[];
    coursePlanId: number | null;
    coursePeriodId: number;
    instructorId: number;
    name: string;
    courseId: number;
}
