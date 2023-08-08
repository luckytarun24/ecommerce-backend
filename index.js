import app from "./server/app.js";
import connect from "./server/database.js";

const port = 3000;
connect();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
