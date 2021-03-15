"use strict";

const config = {
    get: name => {
        return {
            'tinkoff:auto:apiUrl': 'production',
            'tinkoff:auto:terminalKey': '',
            'tinkoff:auto:secretKey': '',
            'tinkoff:auto:publicKey': '',
        }[name];
    }
}

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
        const PaymentId = await hi.doPay(
            1, {
                pan: '4300000000000777',
                expDate: '1122',
                cardHolder: 'IVAN PETROV',
                cvv: '111',
            },
            1000,
            20,
            'https://3a4c414d0084.ngrok.io/payments/notification',
            'https://3a4c414d0084.ngrok.io/payments/success',
            'https://3a4c414d0084.ngrok.io/payments/fail'
        )
        console.log(PaymentId)
    } catch (err) {
        console.log(JSON.stringify(err))
    }
}

run()