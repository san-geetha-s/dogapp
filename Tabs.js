import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Typography from '@mui/joy/Typography';
import Input from '@mui/joy/Input';
import ColorButtons from './ColorButtons';
import ControlledOpenSelect from './ControlledOpenSelect';
// import SearchIcon from '@mui/icons-material/Search';
import PicList from './PicList'
import Content from '../Content/Content';
import ImageAxios from './ImageAxios';
import SelectButtton from '../SelectButton/SelectButtton';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

export default function TabsBasic() {
    const [index, setIndex] = React.useState(0);
    const [state,setState] = React.useState('')
  return (
    <Box
      sx={{
        justifyContent : 'space-between',
        display: "flex",
        flexGrow: 1,
  p: 3, 
 
    
    
        bgcolor: 'background.body',
        flexGrow: 1,
        m: -4,
        p: 5,
        overflowX: 'inherit',
        borderRadius: 'md',
        variant:"fullWidth"
        
      }}
    >
      <Tabs
      
        aria-label="Pipeline"
        value={index}
        variant="fullWidth"
        onChange={(event, value) => setIndex(value)}
        sx={{ '--Tabs-gap': '0px', maxWidth:400 , mx:'' }}
      >
        <TabList
          variant="plain"
          sx={{
            alignSelf: 'flex-start',
            [`& .${tabClasses.root}`]: {
              bgcolor: 'transparent',
              boxShadow: 'none',
              '&:hover': {
                bgcolor: 'transparent',
              },
              [`&.${tabClasses.selected}`]: {
                color: 'primary.plainColor',
                fontWeight: 'lg',
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  zIndex: 1,
                  bottom: '-1px',
                  left: 'var(--List-item-paddingLeft)',
                  right: 'var(--List-item-paddingRight)',
                  height: '3px',
                  borderTopLeftRadius: '3px',
                  borderTopRightRadius: '3px',
                  bgcolor: 'primary.500',
                },
              },
            },
          }}
        >
          <Tab >
            Votes
            <Chip
            maxWidth='100%'
            width="100%"
              size="sm"
              variant="soft"
              color={index === 0 ? 'primary' : 'neutral'}
              sx={{ ml: 1 }}
            >
              
            </Chip>
          </Tab>
          <Tab>
            Breeds
            <Chip
              size="sm"
              variant="soft"
              color={index === 1 ? 'primary' : 'neutral'}
              sx={{ ml: 1 }}
            >
            
            </Chip>
          </Tab>
          
        </TabList>
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.level3,
            height: '1px',
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
          })}
        />
        <Box
          sx={(theme) => ({
            '--bg': theme.vars.palette.background.level1,
            background: 'var(--bg)',
            boxShadow: '0 0 0 100vmax var(--bg)',
            clipPath: 'inset(0 -100vmax)',
            px: 1.5,
            py: 2,
          })}
        >
          <TabPanel value={0}>
            <Typography
              level="h1"
              component="div"
              fontSize="xl2"
              mb={2}
              textColor="text.secondary"
            >
             
             <Content/>
            </Typography>
          </TabPanel>
          <TabPanel value={1}>
            <Typography
              level="h1"
              component="div"
              fontSize="xl2"
              mb={2}
              textColor="text.secondary"
            >
              
              <SelectButtton/>
             
            </Typography>
          </TabPanel>
          
        </Box>
      </Tabs>
    </Box>
  )
}

//how to create dog animation using css?
