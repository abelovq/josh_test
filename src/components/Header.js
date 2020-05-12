import React from 'react';
import { emphasize, withStyles, makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Avatar from './Avatar'

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    borderBottom: '1px solid black'
  },
  ol: {
    justifyContent: 'space-between',
    padding: '0 0.5rem',
    height: '80px'
  },

}));

export default function ActiveLastBreadcrumb() {
  const classes = useStyles();

  return (
    <Breadcrumbs separator="" aria-label="breadcrumb" classes={{ root: classes.root, ol: classes.ol, li: classes.li }}>
      <Link color="inherit" href="/" onClick={handleClick}>
        <Avatar />
      </Link>
      <CustomizedBreadcrumbs />
    </Breadcrumbs>
  );
}





const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(4),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
  label: {
    paddingRight: 0
  },

}))(Chip); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

function CustomizedBreadcrumbs() {
  return (
    <StyledBreadcrumb
      component="a"
      href="#"
      icon={<NotificationsIcon fontSize="default" />}
      onClick={handleClick}
    />
  );
}