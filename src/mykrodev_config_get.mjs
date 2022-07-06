import {mykrodev_config_path} from "./mykrodev_config_path.mjs";
import {file_json_read} from "./file_json_read.mjs";
import {file_overwrite} from "./file_overwrite.mjs";
import {file_exists} from "./file_exists.mjs";
import {constant_mykrodev} from "./constant_mykro.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function mykrodev_config_get() {
  await arguments_assert()(arguments);
  const config_path = await mykrodev_config_path();
  if (!await file_exists(config_path)) {
    await file_overwrite(config_path, `
  {
      "path": {
          "src": {
              "${await constant_mykrodev()}": "./node_modules/${await constant_mykrodev()}/src"
          }
      }
  }
        `);
  }
  let config = await file_json_read(config_path);
  return config;
}
