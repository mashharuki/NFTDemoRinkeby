import React, { useState, useEffect } from "react";
import detectEthereumProvider from '@metamask/detect-provider';
import Web3 from "web3";
import UseStyles from "./../common/useStyles";
import NFTContract from "./../contracts/NFT.json"

/**
 * Homeコンポーネント
 */
const Home = () => {

    // アカウントが切り替わったら画面を更新する。
    window.ethereum.on('accountsChanged', function (accounts) {
        window.location.reload()
    });

    return (
        <div className="App">
            テスト
        </div>
    )
}

export default Home;