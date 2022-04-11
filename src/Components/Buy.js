import React from "react";

export default function Buy() {
  return (
    <div className="buy" id="howtobuy">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1>How to Buy</h1>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-7">
            <div className="row ">
              <div className="col-1">
                <h6>1</h6>
              </div>
              <div className="col-11">
                <h5>Create MetaMask Wallet</h5>
                <p>
                  Create a MetaMask Wallet using either a desktop computer or an
                  iOS/Android mobile device.
                </p>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-1">
                <h6>2</h6>
              </div>
              <div className="col-11">
                <h5>Send ETH to Your Wallet</h5>
                <p>
                  You can buy Ethereum (ETH) directly on MetaMask or transfer it
                  to your MetaMask Wallet from exchanges like Bitmart, Ethereum,
                  etc.
                </p>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-1">
                <h6>3</h6>
              </div>
              <div className="col-11">
                <h5>Connect Your Wallet to Uniswap</h5>
                <p>
                  Connect your wallet to UniSwap by clicking ‘Connect wallet’
                  and selecting MetaMask.
                </p>
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-1">
                <h6>4</h6>
              </div>
              <div className="col-11">
                <h5>Swap ETH for Okabe</h5>
                <p>
                  You can start swapping as soon as you have ETH available!
                  Press "Select a token" and enter the token address or search
                  for it on the tokens list.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className="embeded-page">
              <iframe
                src="https://app.uniswap.org/#/swap?outputCurrency=0x5f20f15d40f24dae50a72be3b5edddddfb5a5bd0&amp;chain=mainnet&amp;inputCurrency=ETH"
                height="560px"
                width="100%"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
