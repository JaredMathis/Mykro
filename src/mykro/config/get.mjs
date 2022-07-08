import {mykro_config_path} from "./path.mjs";
import {file_json_read} from "./../../file/json/read.mjs";
import {file_overwrite} from "./../../file/overwrite.mjs";
import {file_exists} from "./../../file/exists.mjs";
import {constant_mykro} from "./../../constant/mykro.mjs";
import {arguments_assert} from "./../../arguments/assert.mjs";
export async function mykro_config_get() {
  await arguments_assert()(arguments);
  const config_path = await mykro_config_path();
  if (!await file_exists(config_path)) {
    await file_overwrite(config_path, `
  {
      "path": {
          "src": {
              "${await constant_mykro()}": "./node_modules/${await constant_mykro()}/src"
          }
      }
  }
        `);
  }
  let config = await file_json_read(config_path);
  return config;
}
