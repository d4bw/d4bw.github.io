// css class combiner

type BaseArg = string | Record<string, boolean> | boolean | undefined
type Arg = BaseArg | Arg[]

const resolve = (arg: Arg): string => {
  // base case
  if (typeof arg === 'string') { return arg }
  
  // array - recurse back to `c`
  if (Array.isArray(arg)) { return c(arg) }

  // object - only include the keys (i.e. the classes) whose values are truthy
  if (typeof arg === 'object') {
    const included: string[] = []
    for (const val in arg) {
      if (arg[val]) {
        included.push(val)
      }
      return included.join(' ')
    }
  }

  // graceful fallback
  return ''
}

/**
 * combines a sequence of class or `{ class: boolean }` objects into a single html classlist string
 * @param args class names to combine
 * @returns combined html classlist string
 */
const c = (...args: Arg[]): string => {
  const stringified: string[] = []
  // resolve each argument as a string
  for (const arg of args) {
    const resolved = resolve(arg)
    if (resolved.length > 0) {
      stringified.push(resolved)
    }
  }
  // combine the resolved arguments
  return stringified.join(' ')
}

export default c