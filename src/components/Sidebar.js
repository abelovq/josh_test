import React, { Fragment } from 'react';
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

// import ListItemIcon from '@material-ui/core/ListItemIcon';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles({
  list: {
    width: 250,
    borderRight: '1px solid black',
    height: '100vh'
  },
  fullList: {
    width: 'auto',
  },
  card: {
    height: '135px',
    marginTop: '0px',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  avatar: {
    minWidth: '40px'
  },
  fakeText: {
    width: '55px',
    height: '10px',
    backgroundColor: '#686161',
    marginBottom: '5px',
  },
  fakeTextLong: {
    width: '110px',
    marginBottom: '0px',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '10px'
  },
  ListItemWrapper: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  colorDefault: {
    backgroundColor: '#fff',
    color: '#686161'
  },
  gear: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  root: {
    minWidth: '0px',
    marginLeft: 'auto'
  },
  buttonsWrapper: {
    display: 'flex',
    width: '170px',
    justifyContent: 'space-between'
  }

});

export default function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      <List>

        <ListItem className={classes.card}>

          <div className={classes.ListItemWrapper}>
            <ListItemAvatar className={classes.avatar} alignitems="flex-start">
              <Avatar
                alt={`Avatar n°${'text' + 1}`}
              />
            </ListItemAvatar>
            <div className={classes.textWrapper}>
              <div className={classes.fakeText}></div>
              <div className={classNames(classes.fakeText, classes.fakeTextLong)}></div>
            </div>
            <ListItemAvatar className={classes.root}>
              <Avatar className={classNames(classes.colorDefault, classes.gear)}>
                <SettingsIcon />
              </Avatar>
            </ListItemAvatar>

          </div>


          <div className={classes.buttonsWrapper}>
            <Button variant="contained" size="small">Default</Button>
            <Button variant="contained" size="small">Default</Button>
          </div>

        </ListItem>
        <Divider />
        {['Dashboard', 'Staff', 'Clients', 'Reports', 'Settings', 'Administration'].map((text, index) => (
          <Fragment key={text}>
            <ListItem button key={text}>
              <ListItemText primary={text} />
              <ListItemAvatar className={classes.avatar}>
                <Avatar
                  alt={`Avatar n°${text + 1}`}
                />
              </ListItemAvatar>
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </div>
  )
}
