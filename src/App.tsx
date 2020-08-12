import './App.scss';

import Layout from './layouts/default';
import React, { Component } from 'react';
import Icon, { Stack } from '@mdi/react';
import { mdiAccount } from '@mdi/js';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

class App extends Component<{}> {
  render() {
    return (
      <Layout>
        <div className="test">

          <Icon path={mdiAccount} size="48px" />
        </div>
        <Button variant="contained" color="primary">
          Hello World
              </Button>
        <Typography variant="subtitle1" gutterBottom>
          subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
          <div className="main">ssd</div>
        </Typography>
      </Layout>
    );
  }
}

export default App;