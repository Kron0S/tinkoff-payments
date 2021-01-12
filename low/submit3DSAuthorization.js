"use strict";

const {
    requestMethod
} = require("../utils")

const submit3DSAuthorization = function (params) {
    return requestMethod('Submit3DSAuthorization', params, {
        headers: [
            {
                name: 'content-type',
                value: 'application/x-www-form-urlencoded'
            }
        ],
    })
}

module.exports = submit3DSAuthorization