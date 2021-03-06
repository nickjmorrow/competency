import { TodosPage } from '~/todos/components/TodosPage';
import { Home } from '~/landing/Home';
import { CoursePlanListPage } from '~/courses/components/CoursePlanListPage';
import { CoursePlanPage } from '~/courses/components/CoursePlanPage';
import { CourseListPage } from '~/courses/components/CourseListPage';
import { CoursePage } from '~/courses/components/CoursePage';
import { StudentCourseInfo } from '~/courses/components/StudentCourseInfo';
import { StudentListPage } from '~/students/components/StudentListPage';
import { StudentPage } from '~/students/components/StudentPage';

export const componentRouteMappings = [
    {
        component: Home,
        route: '/',
        label: 'Home',
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
    {
        component: CoursePlanListPage,
        route: '/course-plans',
        label: 'Course Plans',
        isVisible: true,
    },
    {
        component: CoursePlanPage,
        route: '/course-plans/:coursePlanId',
        isVisible: false,
    },
    {
        component: StudentCourseInfo,
        route: '/courses/:courseId/students/:studentId',
        isVisible: false,
    },
    {
        component: StudentListPage,
        route: '/students',
        label: 'Students',
        isVisible: true,
    },
    {
        component: StudentPage,
        route: '/students/:studentId',
        isVisible: false,
    },
];
