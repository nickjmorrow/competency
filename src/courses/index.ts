import { coursesReducer } from '~/courses/state/coursesReducer';
import { coursesSelectors } from '~/courses/state/coursesSelectors';

export const coursesApi = {
    reducer: coursesReducer,
    selectors: coursesSelectors,
};
