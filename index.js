"use strict";

const low = require("./low")
const hi = require("./hi")
const { getToken } = require("./utils")
const {
    setTerminalKey,
    setPublicKey,
    setSecretKey,
    setApiUrl
} = require("./options")

module.exports = {
    low,
    setTerminalKey,
    setPublicKey,
    setSecretKey,
    setApiUrl,
    getToken,
    hi
}