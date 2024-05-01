export default function cleanSet(set, startString) {
  return !startString ? '' : [...set]
    .filter((item) => item.startsWith(startString))
    .map((item) => item.replace(startString, ''))
    .join('-');
}
