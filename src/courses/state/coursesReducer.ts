import { coursesActions, CoursesActionTypeKeys } from '~/courses/state/coursesActions';
import { ActionType } from 'typesafe-actions';
import { produce } from 'immer';
import { CoursesState } from '~/courses/types/CoursesState';
import { coursesInitialState } from '~/courses/state/coursesInitialState';

export const coursesReducer = (
    state: CoursesState = coursesInitialState,
    action: ActionType<typeof coursesActions>,
): CoursesState => {
    switch (action.type) {
        default:
            return state;
    }
};
