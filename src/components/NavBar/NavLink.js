import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-scroll'

class NavLink extends Component {

    render() {
        const { destination, text } = this.props;
        return (
            <Link
                className="navigation__link"
                smooth={true}

                to={destination}
                offset={0}
                duration={500}
            >{text}
            </Link>
        )
    }
}
export default NavLink;

