import * as React from 'react';
import { useParams } from 'react-router';
import { studentsSelectors } from '~/students/redux/studentsSelectors';
import styled from 'styled-components';
import { Typography } from '~/core/Typography';
import { useSelector } from 'react-redux';
import { coursesApi } from '~/courses';
import { Link } from '~/core/Link';

export const StudentPage: React.FC = () => {
    const { studentId } = useParams();
    const student = useSelector(studentsSelectors.getByStudentId(parseInt(studentId, 10)))!;
    const courses = useSelector(coursesApi.selectors.getCoursesWithStudent(student));
    return (
        <Container>
            <Typography variant={'h2'}>{student.name}</Typography>
            <Typography variant={'h3'}>Courses</Typography>
            <CourseListContainer>
                {courses.map(c => (
                    <div key={c.courseId} style={{ width: 'max-content' }}>
                        <Link route={`/courses/${c.courseId}`}>{c.name}</Link>
                    </div>
                ))}
            </CourseListContainer>
        </Container>
    );
};

const Container = styled.div``;

const CourseListContainer = styled.div``;
