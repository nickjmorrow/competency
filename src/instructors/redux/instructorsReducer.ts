import { ActionType } from 'typesafe-actions';
import { produce } from 'immer';
import { InstructorsState } from '~/instructors/types/InstructorsState';
import { instructorsInitialState } from '~/instructors/redux/instructorsInitialState';

export const instructorsReducer = (
    state: InstructorsState = instructorsInitialState,
    action: ActionType<any>,
): InstructorsState => {
    return state;
};
