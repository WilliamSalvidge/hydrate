import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server.js";
import App from "./App.js";

const app = express();

app.use("/static", express.static("public"));

app.get("/", (req, res) => {
  res.send("<h1>Hey Will</h1>");
});

app.get("/test", (req, res) => {
  console.log(
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(
        App,
        { name: "Will" },
        null
      )
    )
  );

  const component =
    ReactDOMServer.renderToStaticMarkup(
      React.createElement(
        App,
        { name: "Will" },
        null
      )
    );

  const html = `<!doctype html>
  <html>
  <head>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  </head>
  <body>
  <div id="root">${component}</div>
  <script src="/static/HydrateApp.js"></script>
</body>
</html>`;

  res.send(html);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
