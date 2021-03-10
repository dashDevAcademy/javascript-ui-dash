const express = require('express');
const app = express();
const path = require('path');

const walletService = require('./services/wallet.service');
const identityService = require('./services/indentity.service');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

app.get('/', async (req, res) => {
    res.render('index');
});

app.get('/wallet', async (req, res) => {
    res.render('wallet');
});

app.get('/identity', async (req, res) => {
    res.render('identity');
});

app.post('/api', async (req, res) => {

    const service = req.body.service;
    const data = req.body.data;

    let result;

    switch(service) {
        case 'createWallet':
            result = await walletService.createWallet();
        break;
        case 'createIdentity':
            result = await identityService.createIdentity(data.mnemonic);
        break;
    }

    res.json(result);

});

console.log('Aplicação iniciada com sucesso.')
app.listen(3000);