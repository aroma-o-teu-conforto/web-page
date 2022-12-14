import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-scroll'

import './SideDrawer.css';

const styles = {
  list: {
    width: 250,
  },
  sideList: {
    width: 'auto',
  },
};




class SwipeableTemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
    anchorEl: null,
    selectedIndex: 0,
  };

 toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        <List>
          {['Home'].map((option1, index) => (
            <Link 
              to="home_content"
              smooth={true}

                  offset={0}
              duration={500}
              key={option1}>
                <MenuItem 
                    onClick={this.toggleDrawer('right', false)}>
                    {option1}
                </MenuItem>
            </Link>
          ))}
          {['Quem somos'].map((option2, index) => (
            <Link 
              to="about_us"
              smooth={true}

                  offset={0}
              duration={500}
              key={option2}>
                <MenuItem 
                  onClick={this.toggleDrawer('right', false)}>
                  {option2}
                </MenuItem>
            </Link>
          ))}
          {['As nossas velas'].map((option3, index) => (
            <Link 
              to="candles"
              smooth={true}

                  offset={0}
              duration={500}
              key={option3}>
                <MenuItem 
                  onClick={this.toggleDrawer('right', false)}>
                  {option3}
                </MenuItem>
            </Link>
            ))}
          {['Contactos'].map((option4, index) => (
            <Link 
              to="footer"
                  offset={0}
                  smooth={true}

              duration={500}
              key={option4}>
                <MenuItem 
                  onClick={this.toggleDrawer('right', false)}>
                  {option4}
                </MenuItem>
            </Link>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        <IconButton onClick={this.toggleDrawer('right', true)} className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
        </IconButton>
        
        <SwipeableDrawer
          anchor="right"
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >

          
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

SwipeableTemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeableTemporaryDrawer);