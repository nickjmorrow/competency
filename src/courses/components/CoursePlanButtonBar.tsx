import * as React from 'react';
import { CoursePlan } from '~/courses/types/CoursePlan';
import { Typography } from '~/core/Typography';
import { ButtonBar } from '~/courses/components/ButtonBar';

export const CoursePlanButtonBar: React.FC<{ coursePlan: CoursePlan; onClick?: () => void }> = ({
    coursePlan,
    onClick: handleClick,
}) => {
    return (
        <ButtonBar onClick={handleClick}>
            <Typography colorVariant={'inherit'}>{coursePlan.name}</Typography>
        </ButtonBar>
    );
};
