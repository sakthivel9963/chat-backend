const app = require('./src/app');

app.listen(process.env.PORT, () => {
  console.log(
    `app listening on -> http://${process.env.HOST}:${process.env.PORT}`
  );
});
