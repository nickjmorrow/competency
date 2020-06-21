import * as React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { coursesSelectors } from '~/courses/state/coursesSelectors';
import { CoursePlanButtonBar } from '~/courses/components/CoursePlanButtonBar';
import { Typography } from '~/core/Typography';
import { CoursePlan } from '~/courses/types/CoursePlan';

export const ChooseCoursePlanModal: React.FC<{
    isOpen: boolean;
    closeModal: () => void;
    onClick: (coursePlan: CoursePlan) => void;
}> = ({ isOpen, closeModal, onClick: handleClick }) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            padding: '48px',
            minWidth: '280px',
            transform: 'translate(-50%, -50%)',
        },
    };

    const coursePlans = useSelector(coursesSelectors.getCoursePlans);
    const handleClickInternal = (coursePlan: CoursePlan) => {
        handleClick(coursePlan);
        closeModal();
    };
    return (
        <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
            <Typography variant={'h2'}>Course Plans</Typography>
            <Container>
                {coursePlans.map(cp => (
                    <CoursePlanButtonBar
                        key={cp.coursePlanId}
                        coursePlan={cp}
                        onClick={() => handleClickInternal(cp)}
                    />
                ))}
            </Container>
        </Modal>
    );
};

const Container = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 16px;
`;
