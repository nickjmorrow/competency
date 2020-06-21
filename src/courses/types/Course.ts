export interface Course {
    courseId: number;
    name: string;
    learningObjectives: LearningObjective[];
}

interface LearningObjective {
    learningObjectiveId: number;
    title: string;
    description: string;
    projects: Project[];
}

interface Project {
    projectId: number;
    description: string;
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
