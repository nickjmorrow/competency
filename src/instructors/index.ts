import { instructorsReducer } from '~/instructors/redux/instructorsReducer';
import { instructorsSelectors } from '~/instructors/redux/instructorsSelectors';

export const instructorsApi = {
    reducer: instructorsReducer,
    selectors: instructorsSelectors,
};
