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

const low = require("../low")
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
        const res = await low.getCardList({
            CustomerKey: 1
        })
        console.log(res)
    } catch (err) {
        console.log('Error')
        console.log(err)
    }
}

run()