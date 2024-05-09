"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _app = require("firebase/app");
var _storage = require("firebase/storage");
var firebaseConfig = (0, _app.initializeApp)({
  apiKey: "AIzaSyA5TF6XtH1IC3EoC9RWnJNuDIlZba2B5Gs",
  authDomain: "portfolio-e1c4f.firebaseapp.com",
  projectId: "portfolio-e1c4f",
  storageBucket: "portfolio-e1c4f.appspot.com",
  messagingSenderId: "930435699277",
  appId: "1:930435699277:web:16a9e6071f4d6fe30f8204"
});
var storage = (0, _storage.getStorage)(firebaseConfig);
var _default = exports["default"] = storage;