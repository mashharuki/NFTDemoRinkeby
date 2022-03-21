import React, { useState, useEffect } from "react";
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3";
import useStyles from "./../common/useStyles";
import NFTContract from "./../contracts/NFT.json";
// Cardコンポーネントを読み込む
import Box from "@mui/material/Box"
import Typography  from '@mui/material/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@mui/material/Grid';

/**
 * Homeコンポーネント
 */
const Home = () => {
    // スタイルシートを使用するための設定
    const classes = useStyles();

    // アカウントが切り替わったら画面を更新する。
    window.ethereum.on('accountsChanged', function (accounts) {
        window.location.reload()
    });

    return (
        <div className="App">
            <Box sx={{ alignItems: 'center', justifyContent: 'center', p: 3}} >
                <Typography variant="h6" color="inherit" sx={{ flexGrow: 1 }}>
                    デモ用のNFT発行サイト
                </Typography>
                <Typography variant="h7" color="inherit" sx={{ flexGrow: 1 }}>
                    下記ボタンからNFTを発行することができます！
                </Typography>
                <Box sx={{p: 4}}>
                    <strong>総発行数： 0 / 10000</strong>
                </Box>
                <br/>
                <Box sx={{p: 4}}>
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Mint
                    </Button>
                </Box>
            </Box>
        </div>
    )
}

export default Home;