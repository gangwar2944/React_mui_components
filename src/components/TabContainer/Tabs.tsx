import React, { useState } from 'react';
import { Box, styled } from '@mui/material';

const TabsContainer = styled(Box)({
  display: 'flex',
  borderBottom: '1px solid #ccc',
});

const StyledTab = styled(Box)<{ isActive: boolean }>(({ theme, isActive }) => ({
  padding: '10px 20px',
  cursor: 'pointer',
  borderBottom: isActive ? '2px solid #000' : 'none',
  color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const TabContent = styled(Box)({
  padding: '20px',
  backgroundColor: '#f9f9f9',
});

interface TabProps {
  label: string;
  children: React.ReactNode;
}

interface TabsProps {
  children: React.ReactElement<TabProps>[];
  value:number;
}

const CustomTabs: React.FC<TabsProps> = ({ children ,value}) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabsContainer>
        {children.map((child, index) => (
          <StyledTab
            key={index}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            {child.props.label}
          </StyledTab>
        ))}
      </TabsContainer>
      <TabContent>
        {children[activeTab].props.children}
      </TabContent>
    </Box>
  );
};

export default CustomTabs;
