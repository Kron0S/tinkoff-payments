"use strict";

const {
    requestMethod
} = require("../utils")

const finishAuthorize = function (params) {
    return requestMethod('FinishAuthorize', params)
}

module.exports = finishAuthorize