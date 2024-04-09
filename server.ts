// server ts (compiles to server.js)
// where your node app starts

// init project
import * as express from "express";
const app: express.Application = express();

app.use(express.json())
app.use(cors())

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request: express.Request, response: express.Response) => {
  response.sendFile(__dirname + "/views/index.html");
});

app.post('/access/v1/evaluations', async (req: JWTRequest, res: Response) => {
  const request: AuthZenRequest = req.body
  const identity = request.subject?.identity
  const policyPath = request?.action?.name
  const ownerID = request.resource?.ownerID
  let decision = false
  if (identity && policyPath) {
    try {
      // Call out to Axiomatics PDP
    } catch (e) {
      console.error(e)
    }
  }

  const response = JSON.stringify({
    decision,
  })

  res.status(200).send(response)
})

// listen for requests :)
const port: string = process.env.PORT || "3000";
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
