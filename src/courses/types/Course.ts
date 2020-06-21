import { LearningObjective } from '~/courses/types/LearningObjective';
import { Project } from '~/courses/types/Project';

export interface Course {
    courseId: number;
    name: string;
    learningObjectives: LearningObjective[];
}

interface Student {
    studentId: number;
    name: string;
}

interface CourseFeedback {
    feedbackId: number;
    content: string;
    student: Student;
    course: Course;
    date: Date;
}

interface ProjectFeedback {
    projectFeedbackId: number;
    content: string;
    student: Student;
    date: Date;
    project: Project;
}
