// import Head from 'next/head';
// import React from 'react';
// import {AppBar, Container, Toolbar, Typography} from '@mui/material'
 
//  const Layout = ({Children}) => {
//    return (
//        <div>
//            <Head>
//                <title>Amazona</title>
//            </Head>
//            <AppBar position='static'>
//                <Toolbar>
//                    <Typography>Amazona</Typography>
//                </Toolbar>
//            </AppBar>
//            <Container>{Children}</Container>
//            <footer>
//                <Typography>
//                    All rights reserved. Amazona.
//                </Typography>
//            </footer>
//        </div>
//    )
//  };
 
//  export default Layout;
import React from 'react';
import Head from 'next/head';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';
import useStyles from '../utils/styles';


export default function Layout({ children }) {
    const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Next Amazona.</Typography>
      </footer>
    </div>
  );
}
 