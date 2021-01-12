"use strict";

const {
    requestMethod
} = require("../utils")

const submit3DSAuthorizationV2 = function (params) {
    return requestMethod('Submit3DSAuthorizationV2', params, 'form')
}

module.exports = submit3DSAuthorizationV2