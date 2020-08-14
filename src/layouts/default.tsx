// import React from 'react';
// import  './default.scss'

// const Layout: React.FunctionComponent<{}> = ({ children }) => {
//   return <div className="container">
//     <div>header</div>
//     <div>{children}</div>
//   </div>
// };
// export default Layout

import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Icon from '@mdi/react';
import { mdiAlphaZBoxOutline, mdiBoxShadow } from '@mdi/js';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

}));

const Layout: React.FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();


  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar variant="dense">

          <Icon path={mdiAlphaZBoxOutline} size="38px" />

          <Typography className={classes.title} variant="h6" noWrap>
            Machine Calender
          </Typography>

          <div className={classes.grow} />
          <Typography className={classes.title} variant="h6" noWrap>
            Hassan Mehmood
          </Typography>
          <div className={classes.sectionDesktop}>

            <IconButton
              edge="end"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>

        </Toolbar>
      </AppBar>
      <div>{children}</div>
    </div>
  );
}
export default Layout