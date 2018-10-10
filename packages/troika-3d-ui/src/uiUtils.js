
const UNDEF = undefined

export function getInheritable(owner, prop, defaultValue) {
  let val
  while (owner && (val = owner[prop]) === 'inherit') {
    owner = owner.parentFlexNode
    val = UNDEF
  }
  if (val === UNDEF && defaultValue !== UNDEF) {
    val = defaultValue
  }
  return val
}
