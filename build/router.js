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

// src/router.ts
var router_exports = {};
__export(router_exports, {
  default: () => router_default
});
module.exports = __toCommonJS(router_exports);
var import_express = require("express");

// src/controller/PagesController.ts
var import_path = require("path");
var PagesController = class {
  index(req, res) {
    const dir = process.env.NODE_ENV == "production" ? "build" : "src";
    return res.sendFile((0, import_path.resolve)(`./${dir}/views/index.html`));
  }
};
var PagesController_default = new PagesController();

// src/router.ts
var router = (0, import_express.Router)();
router.get("/", PagesController_default.index);
var router_default = router;
