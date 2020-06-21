import * as React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { Typography } from '~/core/Typography';

export const CoursePage: React.FC = () => {
    const { courseId } = useParams();
    const course = useSelector(coursesSelectors.getByCourseId(parseInt(courseId, 10)));
    return (
        <Container>
            <Typography>{course.name}</Typography>
        </Container>
    );
};

const Container = styled.div``;
