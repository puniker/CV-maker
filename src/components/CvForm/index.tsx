import React, { useState } from 'react'
import SectionGeneral from './SectionGeneral'
import SectionEstudios from './SectionEstudios'
import SectionExperiencia from './SectionExperiencia'
import { Box, Container, Tabs, Tab, Typography} from '@mui/material'
import PropTypes from 'prop-types';

function TabPanel(props: any) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

function CvForm ( props: any ) {
    
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <>
            
            <Box sx={{ width: '100%' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs value={value} onChange={handleChange} aria-label="Tablas de contenido">
                    <Tab label="Datos generales" {...a11yProps(0)} />
                    <Tab label="Estudios" {...a11yProps(1)} />
                    <Tab label="Experiencia laboral" {...a11yProps(2)} />
                    {/* <Tab label="Puntos fuertes" {...a11yProps(3)} /> */}
                  </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                      <SectionGeneral />
              </TabPanel>
              <TabPanel value={value} index={1}>
                      <SectionEstudios />
              </TabPanel>
              <TabPanel value={value} index={2}>
                  <SectionExperiencia />
              </TabPanel>
              <TabPanel value={value} index={3}>
                  Son los puntos fuertes del usuario
              </TabPanel>
            </Box>

        </>
    )
}

export default CvForm