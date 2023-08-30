import { defineConfig } from "tsup"

export default defineConfig({
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
})
