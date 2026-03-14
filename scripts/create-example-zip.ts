#!/usr/bin/env npx tsx
/**
 * Creates a simple example zip using zip-mcp's compression utility.
 * Run: npx tsx scripts/create-example-zip.ts
 */
import { compressData } from "../src/utils/compression.js";
import * as fs from "fs/promises";
import * as path from "path";

const outPath = path.join(process.cwd(), "example.zip");

const data = [
  { name: "hello.txt", data: "Hello from zip-mcp!\n" },
  { name: "readme.txt", data: "This zip was created with the zip-mcp compression utility.\n" },
  { name: "version.txt", data: "zip-mcp example 1.0\n" },
];

const zipBytes = await compressData(data, { level: 5 });
await fs.writeFile(outPath, zipBytes);
console.log(`Created ${outPath} (${zipBytes.length} bytes)`);
