"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tsup_1 = require("tsup");
exports.default = (0, tsup_1.defineConfig)({
    entry: ["./src/index.ts"],
    outDir: "./dist",
    target: "es2022",
    format: ["cjs"],
    // map file
    sourcemap: false,
    // clear dist dir
    clean: true,
    minify: false,
    shims: true,
    // generate .d.ts files
    dts: false,
    splitting: false,
});
