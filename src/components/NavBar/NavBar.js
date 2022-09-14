import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-scroll'
import SideDrawer from '././SideDrawer/SideDrawer';
import Logo from './Logo/Logo';
import Headroom from 'react-headroom';
import NavLink from './NavLink';

import './NavBar.css';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  }
};

function NavBar(props) {

  const { classes } = props;

  return (
    <div id="navBar" className={classes.root}>
      <Headroom>
        <AppBar position="static">

          <Toolbar className='navBar_toolbar'>
            <Logo />
            <Hidden xsDown>
              <NavLink destination="home_content" text="Home" />
              <NavLink destination="about_us" text="Quem somos" />
              <NavLink destination="candles" text="As nossas velas" />
              <NavLink destination="footer" text="Contactos" />
            </Hidden>
            <Hidden smUp>
              <SideDrawer />
            </Hidden>
          </Toolbar>
        </AppBar>
      </Headroom>

    </div>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);