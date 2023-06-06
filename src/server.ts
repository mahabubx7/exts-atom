import { app } from "./app";
import { port } from "./config";

app.listen(port, () =>
  console.log(`🚀 EX-TS is running at http://localhost:${port}`)
);
