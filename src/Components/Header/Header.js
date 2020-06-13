import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import classes from '../Styles/style.module.css';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState('');

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const headerLinks = [
    <div>
      <Hidden xsDown>
        <Link component={RouterLink} to="/about">
          <Button color="textSecondary">About</Button>
        </Link>
        <Link component={RouterLink} to="/World">
          <Button color="textSecondary">World</Button>
        </Link>
        <Link component={RouterLink} to="/USA">
          <Button color="white">USA</Button>
        </Link>
      </Hidden>
      <Hidden smUp>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
      </Hidden>
    </div>,
  ];

  const drawerLinks = [
    <Drawer variant="persistent" anchor="right" open={drawerOpen}>
      <div>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem>
          <Link component={RouterLink} to="/about">
            <Button color="textSecondary">About</Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link component={RouterLink} to="/world">
            <Button color="textSecondary">World</Button>
          </Link>
        </ListItem>

        <ListItem>
          <Link component={RouterLink} to="/USA">
            <Button color="white">USA</Button>
          </Link>
        </ListItem>
      </List>
      <Divider />
    </Drawer>,
  ];

  return (
    <div className="">
      <AppBar style={{ backgroundColor: '#543EF8' }} position="static">
        <Toolbar>
          <Grid container direction="row" justify="left" alignItems="center">
            <Link component={RouterLink} to="/" underline="none">
              <Typography variant="h6" color="textSecondary">
                Covid Tracker
              </Typography>
            </Link>
          </Grid>

          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            {headerLinks}
          </Grid>
        </Toolbar>
      </AppBar>
      {drawerLinks}
    </div>
  );
};

export default Header;
