/**
 * メインコンポーネントファイル
 */
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import useStyles from "./common/useStyles";
import Home from './pages/Home';
// material-ui関連をインポートする。
import AppBar  from '@mui/material/AppBar';
import Toolbar  from '@mui/material/Toolbar';
import Typography  from '@mui/material/Typography';

/**
 * Appコンポーネント
 */
function App() {
  // スタイルシートを使用するための設定
  const classes = useStyles();

  return (
    <Router>
      <AppBar position="static" color="default">
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
              <strong>NFT Demo App</strong>
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="App">
          <Routes>
            <Route path="/" exact element={ <Home/> } />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
