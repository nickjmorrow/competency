import * as React from 'react';
import { Project as ProjectType } from '~/courses/types/Project';
import styled from 'styled-components';
import { Typography } from '~/core/Typography';

export const Project: React.FC<{ project: ProjectType }> = ({ project }) => {
    return (
        <Container>
            <Typography variant={'h4'}>{project.title}</Typography>
            <Typography>{project.description}</Typography>
        </Container>
    );
};

const Container = styled.div``;
