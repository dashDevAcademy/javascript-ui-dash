const Dash = require('dash');

const clientOpts = {
    network: 'testnet',
    wallet: {
      mnemonic: null,              
    }
}

const createWallet = async () => {

    const client = new Dash.Client(clientOpts);

    const account = await client.getWalletAccount();
    const mnemonic = client.wallet.exportWallet();
    const address = account.getUnusedAddress();  
    client.disconnect();

    return {
     address:address.address,
     mnemonic   
    };

}

module.exports = {
    createWallet
}