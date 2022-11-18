import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Contact from './screens/Contact';
import Dial from './screens/Dial';



export default function App() {
  const [activeTab, setActiveTab] = React.useState(0);

  return (
    <Box sx={{ pb: 7, width:400, margin:'auto', background:'#eee'}}>

      {activeTab==0 && <Dial />}
      {activeTab==1 && <Contact />}

      <Paper sx={{  }} elevation={3}>
        <BottomNavigation
          showLabels
          value={activeTab}
          onChange={(event, newValue) => {
            setActiveTab(newValue);
          }}
        >
          <BottomNavigationAction label="Dial" icon={<LocalPhoneIcon />} />
          <BottomNavigationAction label="Contact" icon={<FavoriteIcon />} />
        </BottomNavigation>
      </Paper>

    </Box>
  );
}

