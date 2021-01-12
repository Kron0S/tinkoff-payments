"use strict";

const {
    requestMethod
} = require("../utils")

const submit3DSAuthorizationV2 = function (params) {
    return requestMethod('Submit3DSAuthorizationV2', params, {
        headers: [
            {
                name: 'content-type',
                value: 'application/x-www-form-urlencoded'
            }
        ],
    })
}

module.exports = submit3DSAuthorizationV2