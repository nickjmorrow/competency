import { ActionType } from 'typesafe-actions';
import { produce } from 'immer';
import { studentsInitialState } from '~/students/redux/studentsInitialState';
import { StudentsState } from '~/students/types/StudentsState';

export const studentsReducer = (
    state: StudentsState = studentsInitialState,
    action: ActionType<any>,
): StudentsState => {
    return state;
};
