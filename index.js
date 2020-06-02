"use strict";

const low = require("./low")
const hi = require("./hi")
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
    hi
}