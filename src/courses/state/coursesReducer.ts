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
        case CoursesActionTypeKeys.ASSIGN_COURSE_PLAN_TO_COURSE:
            return produce(state, draftState => {
                const course = draftState.courses.find(c => c.courseId === action.payload.course.courseId)!;
                course.coursePlanId = action.payload.coursePlan.coursePlanId;
            });
        default:
            return state;
    }
};
