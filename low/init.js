"use strict";

const {
    requestMethod
} = require("../utils")


const init = function (params) {
    return requestMethod('Init', params)
}

module.exports = init