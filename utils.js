"use strict";

const debug = require('debug')('tinkoff-payments');
const crypto = require('crypto');
const _ = require('lodash');
const request = require('request');

const {
    getPublicKey,
    getTerminalKey,
    getSecretKey,
    getApiUrl,
} = require("./options")

let requestPr = request
const setRequest = function (_requestPr) {
    if (!_requestPr) {
        throw new Error("Not request")
    }
    requestPr = _requestPr
}
const getRequest = function () {
    if (!requestPr) {
        throw new Error("Not select request")
    }
    return requestPr
}


const requestMethod = function (methodName, params) {
    const methodUrl = `${getApiUrl()}${methodName}`;
    const methodParams = Object.assign({}, params);
    methodParams.TerminalKey = getTerminalKey();
    methodParams.Token = getToken(methodParams);

    const requestPromise = new Promise((resolve, reject) => {
        debug('send \'%s\' with %o', methodUrl, methodParams);

        getRequest()({
            uri: methodUrl,
            method: 'POST',
            body: methodParams,
            json: true,
            gzip: true,
            timeout: 25000
        }, (err, response, body) => {
            if (err) {
                debug('error %s', err.toString());
                reject(err);
            } else {
                if (response.statusCode !== 200) {
                    debug('error statusCode %s', response.statusCode);
                    reject('Error statusCode ' + response.statusCode);
                } else {
                    debug('result %o', body);
                    resolve(body);
                }
            }
        });
    });

    return requestPromise;
}

const getEncryptedCardData = function (pan, expDate, cardHolder, cvv) {
    // Введенные пользователем номер карты, expiry date и secure code 
    //  приводятся к виду: "PAN=%pan%;ExpDate=%month%%year%;CVV=%secure_code%".
    const concatenatedValues = `PAN=${pan};ExpDate=${expDate};CardHolder=${cardHolder};CVV=${cvv}`
    // Выполняется шифрование строк с шага 1 алгоритмом RSA/ECB/PKCS1Padding 
    //  с использованием  publicKey в качестве ключа.
    var buffer = Buffer.from(concatenatedValues, 'utf8');
    var encrypted = crypto.publicEncrypt({
        key: getPublicKey(),
        padding: crypto.constants.RSA_PKCS1_PADDING
    }, buffer)
    // Полученная криптограмма на шаге 2 энкодится алгоритмом Base64
    return encrypted.toString("base64");
}

const getEncryptedCardIdData = function (cardId, cvv) {
    // Введенные пользователем номер карты, expiry date и secure code 
    //  приводятся к виду: "PAN=%pan%;ExpDate=%month%%year%;CVV=%secure_code%".
    const concatenatedValues = `CardId=${cardId};CVV=${cvv}`
    // Выполняется шифрование строк с шага 1 алгоритмом RSA/ECB/PKCS1Padding 
    //  с использованием  publicKey в качестве ключа.
    var buffer = Buffer.from(concatenatedValues, 'utf8');
    var encrypted = crypto.publicEncrypt({
        key: getPublicKey(),
        padding: crypto.constants.RSA_PKCS1_PADDING
    }, buffer)
    // Полученная криптограмма на шаге 2 энкодится алгоритмом Base64
    return encrypted.toString("base64");
}

const getToken = function (params) {
    const tokenParams = Object.assign({}, params);
    tokenParams.Password = getSecretKey();
    const pairs = _.toPairs(tokenParams);
    const sortedPairs = _.sortBy(pairs, pair => pair[0]);
    const concatenatedValues = _.reduce(sortedPairs, (result, pair) => result + pair[1], '');
    const token = crypto.createHash('sha256').update(concatenatedValues).digest('hex');

    return token;
}

module.exports = {
    requestMethod,
    getToken,
    getEncryptedCardData,
    getEncryptedCardIdData,
    setRequest,
    getRequest,
}