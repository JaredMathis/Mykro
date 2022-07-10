import {m_js_merge} from "./../../../../../m/js/merge.mjs";
import {m_js_clone} from "./../../../../../m/js/clone.mjs";
import {m_js_equals} from "./../../../../../m/js/equals.mjs";
import {m_js_assert} from "./../../../../../m/js/assert.mjs";
import {list_single} from "./../../../../../list/single.mjs";
import {list_size} from "./../../../../../list/size.mjs";
import {m_js_arguments_assert} from "./../../../../../m/js/arguments/assert.mjs";
export async function es_import_declaration_default_to_named(node, function_name) {
  await m_js_arguments_assert()(arguments);
  if (node.type === "ImportDeclaration") {
    if (await list_size(node.specifiers) === 1) {
      let specifier = await list_single(node.specifiers);
      if (specifier.type === "ImportDefaultSpecifier") {
        const local = specifier.local;
        await m_js_assert(m_js_equals)(local.type, "Identifier");
        if (local.name === function_name) {
          let imported = await m_js_clone(local);
          await m_js_merge(specifier, {
            type: "ImportSpecifier",
            imported
          });
        }
      }
    }
  }
}
