import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function WhatsAppBtn(props) {
  const { classes } = props;

  function sendWhatsAppMessage() {
    const number = "351914860322";
    const messageToSend = "Olá, como poderia obter mais informações?";
    const url = `https://wa.me/${number}?text=${messageToSend}`;
    window.open(url);
  }

  return (
    <div>     
      <IconButton className={classes.margin} onClick={sendWhatsAppMessage}>
        <i className="fab fa-whatsapp" ></i>
      </IconButton>
    </div>
  );
}

WhatsAppBtn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WhatsAppBtn);