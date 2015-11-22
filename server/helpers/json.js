var fs = require('fs');

/**
 * Read JSON
 *
 * @param path
 */
exports.read = function (path, transform) {
  var content = fs.readFileSync(path).toString();

  if (transform) {
    content = transform(content);
  }

  var json = exports.parse(content);

  return json;
};

/**
 * Write JSON
 *
 * @param path
 * @param content
 */
exports.write = function (path, content) {
  fs.writeFile(path, JSON.stringify(content, null, 4), function (err) {
    if (err) return console.log(err);
    console.log('writing out new file > ' + path);
  });
};

exports.parse = function (content) {
  try {
    return JSON.parse(content);
  } catch (err) {
    console.log(err);
    return null;
  }
};
