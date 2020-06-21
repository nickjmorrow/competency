import * as React from 'react';
import styled from 'styled-components';
import { CoursePlan } from '~/courses/types/CoursePlan';
import { Typography } from '~/core/Typography';
import { Link } from '~/core/Link';
import { ButtonBar } from '~/courses/components/ButtonBar';

export const CoursePlanButtonBar: React.FC<{ course: CoursePlan }> = ({ course }) => {
    return (
        <Link route={`/courses/${course.coursePlanId}`}>
            <ButtonBar>
                <Typography colorVariant={'inherit'}>{course.name}</Typography>
            </ButtonBar>
        </Link>
    );
};
