"use strict";

const {
    requestMethod
} = require("../utils")

const submit3DSAuthorization = function (params) {
    return requestMethod('Submit3DSAuthorization', params)
}

module.exports = submit3DSAuthorization