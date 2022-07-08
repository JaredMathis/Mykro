import {run_line} from "./run_line.mjs";
Error.stackTraceLimit = Infinity;
await run_line(process.argv.slice(2).join(" "));
