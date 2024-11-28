const http = require('http');
const countStudents = require('./2-read_file');

const port = 1245;
const host = 'localhost';
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end('');
  }
  if (req.url === '/students') {
    // res.write('This is the list of our students\n');
    // try {
    //   const result = countStudents(process.argv[2]);
    //   res.write(result);
    // } catch (err) {
    //   res.write('Cannot load the database');
    // }

    // res.end();

    countStudents(process.argv[2])
      .then((data) => {
        res.writeHead(200);
        res.end(`This is the list of our students\n${data}`);
      })
      .catch((error) => {
        res.writeHead(404);
        res.end(`This is the list of our students\n${error.message}`);
      });

  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

module.exports = app;
