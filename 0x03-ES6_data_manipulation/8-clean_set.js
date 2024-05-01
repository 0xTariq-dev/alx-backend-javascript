export default function cleanSet(set, startString) {
  return (!startString || typeof startString !== 'string') ?
  '' : Array.from(set)
    .filter((item) => item.startsWith(startString))
    .map((item) => item.replace(startString, ''))
    .join('-');
}
