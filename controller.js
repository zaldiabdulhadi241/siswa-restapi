"use strict";

const res = require("./res");
const connection = require("./koneksi");

exports.index = (req, res) => {
  res.ok("Aplikasi Rest Api Ku Berjalan");
};
