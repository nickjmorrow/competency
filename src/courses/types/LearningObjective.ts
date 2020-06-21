import { Project } from '~/courses/types/Project';

export interface LearningObjective {
    learningObjectiveId: number;
    title: string;
    description: string;
    projects: Project[];
}
