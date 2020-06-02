"use strict";

const {
    requestMethod
} = require("../utils")

const removeCard = function (params) {
    return requestMethod('RemoveCard', params)
}

module.exports = removeCard