import * as React from 'react';
import { useParams } from 'react-router';
import { Typography } from '~/core/Typography';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { studentsApi } from '~/students';
import { Link } from '~/core/Link';

export const StudentCourseInfo: React.FC = () => {
    const { courseId, studentId } = useParams();
    console.log(courseId, studentId);
    const course = useSelector(coursesSelectors.getByCourseId(parseInt(courseId, 10)))!;
    const coursePlan = useSelector(coursesSelectors.getByCoursePlanId(course.coursePlanId));
    const projects = coursePlan?.learningObjectives.map(lo => lo.projects).flat() ?? [];
    const student = useSelector(studentsApi.selectors.getByStudentId(parseInt(studentId, 10)))!;
    return (
        <StudentCardContainer>
            <Typography variant={'h2'}>
                <Link route={`/students/${student.studentId}`}>{student.name}</Link> |{' '}
                <Link route={`/courses/${course.courseId}`}>{course.name}</Link>
            </Typography>

            {projects.length ? (
                <>
                    <Typography variant={'h3'}>Projects</Typography>
                    <table>
                        <thead>
                            <tr>
                                <Th>
                                    <Typography>Name</Typography>
                                </Th>
                                <Th>
                                    <Typography>Result</Typography>
                                </Th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(p => {
                                const result = course.studentProjects.find(
                                    sp => sp.projectId === p.projectId && sp.studentId === student.studentId,
                                )?.result;
                                return (
                                    <tr key={p.projectId}>
                                        <Td>
                                            <Typography>{p.title}</Typography>
                                        </Td>
                                        <Td>
                                            <Typography>{result ?? 'Unsubmitted'}</Typography>
                                        </Td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </>
            ) : (
                <Typography variant={'h3'}>No Projects Found</Typography>
            )}
        </StudentCardContainer>
    );
};

const StudentCardContainer = styled.div``;

const Th = styled.th`
    text-align: left;
    padding-bottom: 12px;
`;

const Td = styled.td`
    padding-right: 24px;
    padding-bottom: 6px;
`;
