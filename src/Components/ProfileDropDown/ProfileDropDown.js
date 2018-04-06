import React from 'react';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  margin: '16px 32px 16px 0',
};

const ProfileDropDown = () => (
  <div style={{width: "200px", height: "200px"}}>
    <h1 style={{fontSize: "80px"}}>TESTING</h1>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Maps" />
        <MenuItem primaryText="Books" />
        <MenuItem primaryText="Flights" />
        <MenuItem primaryText="Apps" />
      </Menu>
    </Paper>
    <Paper style={style}>
      <Menu>
        <MenuItem primaryText="Refresh" />
        <MenuItem primaryText="Help &amp; feedback" />
        <MenuItem primaryText="Settings" />
        <MenuItem primaryText="Sign out" />
      </Menu>
    </Paper>
  </div>
);

export default ProfileDropDown;