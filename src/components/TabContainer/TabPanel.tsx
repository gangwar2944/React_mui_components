// TabPanel.tsx
import React, { ReactNode } from 'react';
import { Box } from '@mui/material';

interface TabPanelProps {
  children: ReactNode;
}

const TabPanel: React.FC<TabPanelProps> = ({ children }) => {
  return (
    <Box>
      {children}
    </Box>
  );
};

export default TabPanel;
