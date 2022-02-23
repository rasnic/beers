import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BeerDisplay from "../BeerDisplay/BeerDisplay"

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          <Typography>{children}</Typography>
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="Extra Pale" {...a11yProps(0)} />
          <Tab label="Caramalt" {...a11yProps(1)} />
          <Tab label="Munich" {...a11yProps(2)} />
          <Tab label="Dark Crystal" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BeerDisplay type="Extra Pale" />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <BeerDisplay type="Caramalt" />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <BeerDisplay type="Munich" />
      </TabPanel>
      <TabPanel value={value} index={3}>
      <BeerDisplay type="Dark Crystal" />
      </TabPanel>
    </Box>
  );
}