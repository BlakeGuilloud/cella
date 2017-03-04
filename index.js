function createEntry(key, value) {
  return localStorage.setItem(key, value);
}

function readEntry(key) {
  return localStorage.getItem(key);
}

function destroyEntry(key) {
  return localStorage.removeItem(key);
}

module.exports = {
  createEntry,
  readEntry,
  destroyEntry,
};
