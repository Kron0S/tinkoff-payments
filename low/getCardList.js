"use strict";

const {
    requestMethod
} = require("../utils")

const getCardList = function (params) {
    return requestMethod('GetCardList', params)
}

module.exports = getCardList