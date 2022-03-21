import React, { useState, useEffect } from "react";
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3";
import getWeb3 from "./../common/getWeb3";
import useStyles from "./../common/useStyles";
import NFTContract from "./../contracts/NFT.json";
// Cardコンポーネントを読み込む
import Box from "@mui/material/Box"
import Typography  from '@mui/material/Typography';
import Button from '@material-ui/core/Button';

/**
 * Homeコンポーネント
 */
const Home = () => {
    // スタイルシートを使用するための設定
    const classes = useStyles();
    // 諸々必要なステート変数を宣言
    const [ totalsupply, setTotalSupply ] = useState(0);
    const [ nftAddress, setNftAddress] = useState("0x85e3F0f512a2E67A6CC962376b3FDaFBdAC398eb");
    const [ metaMaskFlag, setMetaMaskFlag ] = useState(false);
    const [ web3, setWeb3 ] = useState(null);
    const [ accounts, setAccounts ] = useState(null);
    // const [ isConnected, setIsConnected ] = useState(false);
    // 変数を宣言
    var currentsupply = 0;

    /**
     * 副作用フック
     */
    useEffect(() => {
		var tmpFlag = window.ethereum && window.ethereum.isMetaMask;
        console.log("tmpFlag", tmpFlag)
		setMetaMaskFlag(tmpFlag);
	},[]);

    /**
     * 「ConnectWallet」ボタンを押した時の処理
     */
    const connectWalletButton = async () => {
        // MetaMaskに接続し、アカウント情報などを取得する。
        window.ethereum.request({ method: "eth_requestAccounts" })
		        .then((result) => {
			        setAccounts(result);
                })
                .catch((error) => {
                    alert("connect wallet failed");
                    console.error(error);
                }); 
    }

    /**
     * 「MINT」ボタンを押した時の処理
     */
    const mintButton = () => {
        // NFTコントラクト情報を取得する。
        
    }

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
                    <strong>総発行数： {totalsupply} / 10000</strong>
                </Box>
                <br/>
                <Box sx={{p: 4}}>
                    { accounts != null && (totalsupply <= 10000) ?
                        <Button variant="contained" color="secondary" className={classes.button} onClick={mintButton}>
                            Mint
                        </Button>
                    :
                        <Button variant="contained" color="primary" className={classes.button} onClick={connectWalletButton}>
                            connectWallet
                        </Button>
                    }
                </Box>
            </Box>
        </div>
    )
}

export default Home;