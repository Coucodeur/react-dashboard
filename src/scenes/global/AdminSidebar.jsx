import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
// import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from '../../theme';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';

const Item = ({ title, thelink, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const thislink = thelink;
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={{ thislink }} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const AdminSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState('Dashboard');

  const handleMenuItemClick = (item) => {
    setSelected(item);
  };
  return (
    <Box
      sx={{
        '& .ps-sidebar-container': {
          height:"100vh",
          background: `${colors.primary[400]} !important`,
        },
        '& .ps-menuitem-root': {
          backgroundColor: 'transparent !important',
        }, //////////////////////////// A VOIR PAR LA SUITE SI UTILE
        '& .ps-menu-button': {
          padding: '5px 35px 5px 20px !important',
        },
        '& .ps-menu-button:hover': {
          color: '#FF0000  !important',
        },
        '& .ps-menu-button.ps-active': {
          color: '#6870fa  !important',
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: '10px 0 20px 0',
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/d9a1058910_50163142_elon-musk1.jpg`}
                  style={{ cursor: 'pointer', borderRadius: '50%' }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: '10px 0 0 0' }}
                >
                  Ed Roh
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  VP Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : '10%'}>
            
          <MenuItem
              active={selected === "Dashboard"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => setSelected("Dashboard")}
              icon={<HomeOutlinedIcon/>}
              component={<Link to={"/"} />}
            >
              <Typography>Dashboard</Typography>
            </MenuItem>
            
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Data
            </Typography>
            
            <MenuItem
              active={selected === "Manage Team"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => setSelected("Manage Team")}
              icon={<PeopleOutlinedIcon/>}
              component={<Link to={"/team"} />}
            >
              <Typography>Manage Team</Typography>
            </MenuItem>
            
            <MenuItem
              active={selected === "Contacts Information"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => setSelected("Contacts Information")}
              icon={<ContactsOutlinedIcon/>}
              component={<Link to={"/contacts"} />}
            >
              <Typography>Contacts Information</Typography>
            </MenuItem>

            <MenuItem
              active={selected === "Invoices Balances"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => setSelected("Invoices Balances")}
              icon={<ReceiptOutlinedIcon/>}
              component={<Link to={"/invoices"} />}
            >
              <Typography>Invoices Balances</Typography>
            </MenuItem>
            


            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Pages
            </Typography>

            <MenuItem
              active={selected === "Profile Form"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => setSelected("Profile Form")}
              icon={<PersonOutlinedIcon/>}
              component={<Link to={"/form"} />}
            >
              <Typography>Profile Form</Typography>
            </MenuItem>
            
            <MenuItem
              active={selected === "Calendar"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => setSelected("Calendar")}
              icon={<CalendarTodayOutlinedIcon/>}
              component={<Link to={"/calendar"} />}
            >
              <Typography>Calendar</Typography>
            </MenuItem>
            
            <MenuItem
              active={selected === "FAQ Page"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => setSelected("FAQ Page")}
              icon={<HelpOutlineOutlinedIcon/>}
              component={<Link to={"/faq"} />}
            >
              <Typography>FAQ Page</Typography>
            </MenuItem>
            

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: '15px 0 5px 20px' }}
            >
              Charts
            </Typography>

            <MenuItem
              active={selected === "Bar Chart"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => setSelected("Bar Chart")}
              icon={<BarChartOutlinedIcon/>}
              component={<Link to={"/bar"} />}
            >
              <Typography>Bar Chart</Typography>
            </MenuItem>
            


              <MenuItem
              active={selected === "Pie Chart"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => setSelected("Pie Chart")}
              icon={<PieChartOutlineOutlinedIcon/>}
              component={<Link to={"/pie"} />}
            >
              <Typography>Pie Chart</Typography>
            </MenuItem>
            


            <MenuItem
              active={selected === "Line Chart"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => setSelected("Line Chart")}
              icon={<TimelineOutlinedIcon/>}
              component={<Link to={"/line"} />}
            >
              <Typography>Line Chart</Typography>
            </MenuItem>
            

            <MenuItem
              active={selected === "Geography Chart"}
              style={{
                color: colors.grey[100],
              }}
              onClick={() => setSelected("Geography Chart")}
              icon={<MapOutlinedIcon/>}
              component={<Link to={"/geography"} />}
            >
              <Typography>Geography Chart</Typography>
            </MenuItem>
            

            
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default AdminSidebar;
