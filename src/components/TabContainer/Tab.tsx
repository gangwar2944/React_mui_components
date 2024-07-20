// Tab.tsx
import React, { ReactNode } from 'react';
import { styled } from '@mui/material';

interface StyledTabProps {
    isActive: boolean;
}

const StyledTab = styled('button')<StyledTabProps>(({ theme, isActive }) => ({
    padding: '10px 20px',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    outline: 'none',
    borderBottom: isActive ? '2px solid #000' : 'none',
    color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
}));

interface TabProps {
    title: string;
    isActive?: boolean;
    onClick?: () => void;
    children?: ReactNode;
}

const Tab: React.FC<TabProps> = ({ title, onClick, isActive, children }) => {
    return (
        <>
            <StyledTab onClick={onClick} isActive={isActive ?? false}>
                {title}
            </StyledTab>
            {isActive && children}
        </>
    );
};

export default Tab;
