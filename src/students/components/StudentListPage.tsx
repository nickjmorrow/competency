import * as React from 'react';
import { Typography } from '~/core/Typography';
import { useSelector } from 'react-redux';
import { studentsSelectors } from '~/students/redux/studentsSelectors';
import styled from 'styled-components';
import { Link } from '~/core/Link';

export const StudentListPage: React.FC = () => {
    const students = useSelector(studentsSelectors.getStudents);
    return (
        <Container>
            <Typography variant={'h2'}>Students</Typography>
            <StudentListContainer>
                {students.map(s => (
                    <div key={s.studentId} style={{ width: 'max-content', marginBottom: '16px' }}>
                        <Link route={`/students/${s.studentId}`}>{s.name}</Link>
                    </div>
                ))}
            </StudentListContainer>
        </Container>
    );
};

const StudentListContainer = styled.div``;

const Container = styled.div``;
