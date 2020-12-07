"use strict";

const {
    requestMethod
} = require("../utils")

const submitRandomAmount = function (params) {
    return requestMethod('SubmitRandomAmount', params)
}

module.exports = submitRandomAmount