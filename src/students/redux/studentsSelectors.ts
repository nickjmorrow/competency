import { StudentsState } from '~/students/types/StudentsState';

interface AppState {
    studentsState: StudentsState;
}

const getByStudentId = (studentId: number) => (state: AppState) =>
    state.studentsState.students.find(s => s.studentId === studentId);

const getStudents = (state: AppState) => state.studentsState.students;

export const studentsSelectors = { getByStudentId, getStudents };
