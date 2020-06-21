import * as React from 'react';
import { LearningObjective as LearningObjectiveType } from '~/courses/types/LearningObjective';
import styled from 'styled-components';
import { Typography } from '~/core/Typography';
import { Project } from '~/courses/components/Project';

export const LearningObjective: React.FC<{ learningObjective: LearningObjectiveType }> = ({ learningObjective }) => {
    return (
        <Container>
            <Title variant={'h3'}>{learningObjective.title}</Title>
            <Description>{learningObjective.description}</Description>
            <ProjectListContainer>
                {learningObjective.projects.map(p => (
                    <Project key={p.projectId} project={p} />
                ))}
            </ProjectListContainer>
        </Container>
    );
};

const Container = styled.div``;

const ProjectListContainer = styled.div``;

const Title = styled(Typography)`
    display: block;
`;

const Description = styled(Typography)`
    display: block;
`;
