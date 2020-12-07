"use strict";

const config = require('../../config');

const hi = require("../hi")
const {
    setTerminalKey,
    setSecretKey,
    setApiUrl,
    setPublicKey
} = require("../options")

async function run() {
    setApiUrl(config.get('tinkoff:auto:apiUrl'))
    setTerminalKey(config.get('tinkoff:auto:terminalKey'))
    setSecretKey(config.get('tinkoff:auto:secretKey'))
    setPublicKey(config.get('tinkoff:auto:publicKey'))
    try {
        const PaymentId = await hi.doBindingPay(
            37883434,
            '111',
            1000,
            21,
            'https://3a4c414d0084.ngrok.io/payments/notification',
            'https://3a4c414d0084.ngrok.io/payments/success',
            'https://3a4c414d0084.ngrok.io/payments/fail'
        )
        console.log(PaymentId)
    } catch (err) {
        console.log('Error')
        console.log(err)
    }
}

run()