/**
 * This file contains source code licensed under the MIT license by the RollupJS Plugin Contributors,
 *  found in the license/rollup-plugin-yaml file in the root directory of this package.
 */

import YAML from 'js-yaml';
import toSource from 'tosource';
import { createFilter, makeLegalIdentifier } from '@rollup/pluginutils';

const defaults = {
  documentMode: 'single',
  safe: true,
  transform: null
};
const ext = /\.ya?ml$/;

const relativePathRegex = /^\.\.?\//

export default function yaml(opts = {}) {
  const options = Object.assign({}, defaults, opts);
  const { documentMode, safe } = options;
  const filter = createFilter(options.include, options.exclude);
  let loadMethod = null;

  if (documentMode === 'single') {
    loadMethod = safe ? YAML.load : YAML.safeLoad;
  } else if (documentMode === 'multi') {
    loadMethod = safe ? YAML.loadAll : YAML.safeLoadAll;
  } else {
    this.error(
      `plugin-yaml → documentMode: '${documentMode}' is not a valid value. Please choose 'single' or 'multi'`
    );
  }

  return {
    name: 'yaml',

    transform(content, id) {
      if (!ext.test(id)) return null;
      if (!filter(id)) return null;

      let data = loadMethod(content);

      if (typeof options.transform === 'function') {
        const result = options.transform(data, id);
        // eslint-disable-next-line no-undefined
        if (result !== undefined) {
          data = result;
        }
      }

      ///
      const importsArray = []
      function walk(o, acc = []) {
        if (Array.isArray(o)) { return o.map((x, i) => walk(x, [...acc, i])) }
        if (typeof o === 'object') {
          const res = {}
          for (const k in o) {
            res[k] = walk(o[k], [...acc, k])
          }
          return res
        }
        if (acc.length > 1) {          
          const [gp, p] = acc.slice(-2)
          if (gp === 'image' && p === 'url') {
            if (typeof o === 'string' && relativePathRegex.test(o)) {
              const import_ident = `$image_${importsArray.length}`
              importsArray.push(`import ${import_ident} from "${o}";`)
              return import_ident
            }
          }
          return o
        }
        return o
      }
      data = walk(data)
      ///

      const imports = importsArray.join('\n') + '\n\n'; ///
      const keys = Object.keys(data).filter((key) => key === makeLegalIdentifier(key));
      const code = `var data = ${toSource(data)};\n\n`
        .replace(/(['"])(\$image_.*?)\1/g, '$2'); /// `toSource` wraps the variables in quotes when stringifying them - unwrap them here so they actually refer to the variable
      const exports = ['export default data;']
        .concat(keys.map((key) => `export var ${key} = data.${key};`))
        .join('\n');

      return {
        code: imports + code + exports, ///
        map: { mappings: '' }
      };
    }
  };
}