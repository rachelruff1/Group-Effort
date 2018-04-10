import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
<<<<<<< HEAD
=======
import './ProfileDropDown.css';
>>>>>>> 7ab6a1cee9a5c85bb0f403b959f101e08012c910

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const ProfileDropDown = () => (
<<<<<<< HEAD
  <div>
=======
  <div className="drop-down-main">
>>>>>>> 7ab6a1cee9a5c85bb0f403b959f101e08012c910
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Maps" />
        <MenuItem primaryText="Books" />
        <MenuItem primaryText="Flights" />
        <MenuItem primaryText="Apps" />
      </Menu>
    </Paper>
<<<<<<< HEAD
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help &amp; feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Sign out" />
      </Menu>
    </Paper>
=======
>>>>>>> 7ab6a1cee9a5c85bb0f403b959f101e08012c910
  </div>
);

export default ProfileDropDown;