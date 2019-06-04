const path = require('path');

// basename
console.log(path.basename('/path/to/file.ext')); // file.ext
console.log(path.basename('/path/to/file.ext', '.ext')); // file

//dirname
console.log(path.dirname('/path/to/file.ext')); // /path/to
console.log(path.dirname('/path/to/file')); // /path/to

//extname
console.log(path.extname('/path/to/file.ext')); // ext
console.log(path.extname('/path/to/file')); // ''


//format
const path1 = path.format({
  root: '/ignored',
  dir: '/path/to/dir',
  base: 'file.ext'
});
console.log(path1); // /path/to/dir/file.ext

const path2 = path.format({
  root: '/',
  base: 'file.ext',
  ext: 'ignored'
});
console.log(path2); // /file.ext

const path3 = path.format({
  dir: '/path/to/dir',
  name: 'file',
  ext: '.ext',
});
console.log(path3); // /path/to/dir/file.ext

// join
console.log(path.join('/root', 'path', 'to', 'file.ext')); // /root/path/to/file.ext
console.log(path.join('/root', 'path', 'useless', '..', 'to', 'file.ext')); // /root/path/to/file.ext


// normalize
console.log(path.normalize('/path/to/useless/../file.ext')); // /path/to/file.ext

// parse
console.log(path.parse('/root/path/to/file.ext')); // { root: '/',
                                                   //   dir: '/root/path/to',
                                                   //   base: 'file.ext',
                                                   //   ext: '.ext',
                                                   //   name: 'file' }

// resolve
console.log(path.resolve('/path/to', './somewhere')); // /path/to/somewhere
console.log(path.resolve('/path/to', '/better/path/to/somewhere')); // /better/path/to/somewhere
console.log(path.resolve('path/to', 'somewhere')); // /path-to-current-dir/path/to/somewhere
