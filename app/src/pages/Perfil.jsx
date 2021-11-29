import React, {useState, useContext} from 'react'
import {Tabs, Tab, Box, Typography} from '@mui/material'
import UserContext from '../Context/UserContext'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    )
}



  
function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}
  
export default () => {
    const [value, setValue] = useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const userId = useContext(UserContext).id

    return (
      <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 600 }}
      >
        <Tabs
          orientation="vertical"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: 'divider' }}
        >
          <Tab label="Configuración de cuenta" {...a11yProps(0)} />
          <Tab label="Compartir" {...a11yProps(1)} />
          <Tab label="Ayuda" {...a11yProps(2)} />
          <Tab label="Eliminar Cuenta" {...a11yProps(3)} />
          <Tab label="Tus datos" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Configuración principal de la cuenta
        </TabPanel>
        <TabPanel value={value} index={1}>
          Compartir aplicación
        </TabPanel>
        <TabPanel value={value} index={2}>
          Ayuda cobre la APP
        </TabPanel>
        <TabPanel value={value} index={3}>
          Eliminar la cuenta permanentemente.
        </TabPanel>
        <TabPanel value={value} index={4}>
          Tus datos de cuenta id: {userId}
        </TabPanel>
      </Box>
    )
}