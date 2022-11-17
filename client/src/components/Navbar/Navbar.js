import React, { useState, useEffect } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import memories from '../../images/memories.png';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

function Navbar() {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  console.log(user);

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    history.push('/');
    setUser(null);
  };

  useEffect(() => {
    const token = user?.profile.sub;
    // JWT...
    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);
  return (
    <AppBar className={classes.appBar} position='static' color='inherit'>
      <div className={classes.brandContainer}>
        <Typography
          className={classes.heading}
          component={Link}
          to='/'
          variant='h2'
          align='center'
        >
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt='memories'
          height='60'
        />
      </div>
      <Toolbar className={classes.toolbar}>
        {user ? (
          <div className={classes.profile}>
            <Avatar
              className={classes.purple}
              alt={user.profile.given_name}
              src={user.profile.picture}
            >
              {user.profile.given_name.charAt(0)}
            </Avatar>
            <Typography className={classes.userName} variant='h6'>
              {user.profile.given_name}
            </Typography>
            <Button
              vatriant='contained'
              className={classes.logout}
              color='secondary'
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to='/auth'
            variant='contained'
            color='primary'
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
