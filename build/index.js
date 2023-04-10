"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.ts
var dotenv = __toESM(require("dotenv"));
var import_express2 = __toESM(require("express"));

// src/router.ts
var import_express = require("express");

// src/controller/PagesController.ts
var import_path = require("path");
var PagesController = class {
  index(req, res) {
    const dir2 = process.env.NODE_ENV == "production" ? "build" : "src";
    return res.sendFile((0, import_path.resolve)(`./${dir2}/views/index.html`));
  }
};
var PagesController_default = new PagesController();

// src/router.ts
var router = (0, import_express.Router)();
router.get("/", PagesController_default.index);
var router_default = router;

// src/index.ts
var import_path2 = require("path");
dotenv.config();
var PORT = Number(process.env.PORT || 8080);
var modo = process.env.NODE_ENV;
var dir = modo == "production" ? "build" : "src";
var app = (0, import_express2.default)();
app.use("/public", import_express2.default.static((0, import_path2.resolve)(`./${dir}/public`)));
app.use("/jquery", import_express2.default.static((0, import_path2.resolve)(`./node_modules/jquery/dist`)));
app.use("/bootstrap", import_express2.default.static((0, import_path2.resolve)("./node_modules/bootstrap/dist")));
app.use(router_default);
app.listen(PORT, () => console.log(`servidor rodando na porta ${PORT}, em modo ${modo}`));
