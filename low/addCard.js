"use strict";

const {
    requestMethod
} = require("../utils")

const addCard = function (params) {
    return requestMethod('AddCard', params)
}

module.exports = addCard