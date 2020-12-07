"use strict";

let publicKey = null
const setPublicKey = function (_publicKey) {
    if (!_publicKey) {
        throw new Error("Not publicKey")
    }
    publicKey = _publicKey
    if (!publicKey.startsWith('-----BEGIN PUBLIC KEY-----\n')) {
        publicKey = '-----BEGIN PUBLIC KEY-----\n' + publicKey + '\n-----END PUBLIC KEY-----'
    }
}
const getPublicKey = function () {
    if (!publicKey) {
        throw new Error("Not select publicKey")
    }
    return publicKey
}

let terminalKey = null
const setTerminalKey = function (_terminalKey) {
    if (!_terminalKey) {
        throw new Error("Not terminalKey")
    }
    terminalKey = _terminalKey
}
const getTerminalKey = function () {
    if (!terminalKey) {
        throw new Error("Not select terminalKey")
    }
    return terminalKey
}

let secretKey = null
const setSecretKey = function (_secretKey) {
    if (!_secretKey) {
        throw new Error("Not secretKey")
    }
    secretKey = _secretKey
}
const getSecretKey = function () {
    if (!secretKey) {
        throw new Error("Not select secretKey")
    }
    return secretKey
}

const apiUrls = {
    development: "https://rest-api-test.tinkoff.ru/v2/",
    production: "https://securepay.tinkoff.ru/v2/",
}
let apiUrl = null
const setApiUrl = function (kind) {
    if (!apiUrls[kind]) {
        throw new Error("Not such kind for apiUrl")
    }
    apiUrl = apiUrls[kind]
}
const getApiUrl = function () {
    if (!apiUrl) {
        throw new Error("Not select apiUrl")
    }
    return apiUrl
}

module.exports = {
    setPublicKey,
    getPublicKey,
    setTerminalKey,
    getTerminalKey,
    setSecretKey,
    getSecretKey,
    setApiUrl,
    getApiUrl,
}