"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/controller/PagesController.ts
var PagesController_exports = {};
__export(PagesController_exports, {
  default: () => PagesController_default
});
module.exports = __toCommonJS(PagesController_exports);
var import_path = require("path");
var PagesController = class {
  index(req, res) {
    const dir = process.env.NODE_ENV == "production" ? "build" : "src";
    return res.sendFile((0, import_path.resolve)(`./${dir}/views/index.html`));
  }
};
var PagesController_default = new PagesController();
