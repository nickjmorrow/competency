import { TodosPage } from '~/todos/components/TodosPage';
import { Home } from '~/landing/Home';
import { CourseListPage } from '~/courses/components/CourseListPage';
import { CoursePage } from '~/courses/components/CoursePage';

export const componentRouteMappings = [
    {
        component: Home,
        route: '/',
        label: 'Home',
        isVisible: true,
    },
    {
        component: TodosPage,
        route: '/todos',
        label: 'Todos',
        isVisible: true,
    },
    {
        component: CourseListPage,
        route: '/courses',
        label: 'Courses',
        isVisible: true,
    },
    {
        component: CoursePage,
        route: '/courses/:courseId',
        isVisible: false,
    },
];
