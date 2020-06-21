import { LearningObjective } from '~/courses/types/LearningObjective';
import { Project } from '~/courses/types/Project';
import { Student } from '~/students';

export interface CoursePlan {
    coursePlanId: number;
    name: string;
    learningObjectives: LearningObjective[];
}

interface CourseFeedback {
    feedbackId: number;
    content: string;
    student: Student;
    course: CoursePlan;
    date: Date;
}

interface ProjectFeedback {
    projectFeedbackId: number;
    content: string;
    student: Student;
    date: Date;
    project: Project;
}
