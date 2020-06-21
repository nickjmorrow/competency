import { InstructorsState } from '~/instructors/types/InstructorsState';

interface AppState {
    instructorsState: InstructorsState;
}

const getByInstructorId = (instructorId: number) => (state: AppState) =>
    state.instructorsState.instructors.find(i => i.instructorId === instructorId)!;

export const instructorsSelectors = { getByInstructorId };
