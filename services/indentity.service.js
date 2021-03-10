const Dash = require('dash');

const createIdentity = async (mnemonic) => {

    try {
        
    const clientOpts = {
        network: 'testnet',
        wallet: {
            mnemonic,
        },
    };

    console.log('mnemonic',mnemonic);

    const client = new Dash.Client(clientOpts);
    const identity = await client.platform.identities.register();
    client.disconnect();
    
    console.log('identity',identity);
    return identity;

    } catch(err) {
        
        console.log('err.message', err.message);
        return err.message;
        
    }

}

module.exports = {
    createIdentity
}