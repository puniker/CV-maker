import React, {useState, useContext} from 'react'
import {Tabs, Tab, Box, Typography} from '@mui/material'
import UserContext from '../../Context/UserContext'

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
            <Tab label="Configuración general" {...a11yProps(0)} />
            <Tab label="Usuarios" {...a11yProps(1)} />
            <Tab label="Plantillas" {...a11yProps(2)} />
            <Tab label="Base de datos" {...a11yProps(3)} />
            <Tab label="Estadísticas" {...a11yProps(4)} />
        </Tabs>
        <TabPanel value={value} index={0}>
            Configuración general de la aplicación
        </TabPanel>
        <TabPanel value={value} index={1}>
            Listado de usuarios
        </TabPanel>
        <TabPanel value={value} index={2}>
            Listado de plantillas
        </TabPanel>
        <TabPanel value={value} index={3}>Configuración de base de datos
        </TabPanel>
        <TabPanel value={value} index={4}>
            Estadísticas de la APP
        </TabPanel>
      </Box>
    )
}