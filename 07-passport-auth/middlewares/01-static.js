const express = require("express");

exports.init = app => app.use(express.static("src/public"));
