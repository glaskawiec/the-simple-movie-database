export default function cloneObject(obj) {
  if (obj == null || typeof obj !== 'object') return obj;
  const copy = obj.constructor();
  Object.keys(obj).forEach((key) => {
    copy[key] = obj[key];
  });
  return copy;
}
