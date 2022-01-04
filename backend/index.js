const express = require("express");

const server = express();
server.use(express.json()); // faz com que o express entenda JSON

server.listen(3333);

server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE",
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
  );
  next();
});

const profiles = [
  {
    name: "Alex Teixeira",
  },
];

const movies = [
  {
    id: "1",
    name: "Shang Chi",
    bannerUrl: "https://i.ibb.co/NZSLNfJ/shang-Chi-Film-Image.png",
    duration: "2h 52m",
  },
  {
    id: "2",
    name: "Wish Dragon",
    bannerUrl: "https://i.ibb.co/pbRVdKq/wish-Dragon-Film-Image.png",
    duration: "2h 53m",
  },
  {
    id: "3",
    name: "Loki",
    bannerUrl: "https://i.ibb.co/rystMmT/loki-Film-Image.png",
    duration: "1h 43m",
  },
  {
    id: "4",
    name: "Spider Man",
    bannerUrl: "https://i.ibb.co/rbdLrnw/spider-Man-Film-Image.png",
    duration: "3h 59m",
  },
  {
    id: "5",
    name: "The Witcher",
    bannerUrl: "https://i.ibb.co/C1LfpX7/the-Witcher-Film-Image.png",
    duration: "3h 33m",
  },
];

server.get("/profiles", (req, res) => {
  return res.json(profiles);
});

server.get("/movies", (req, res) => {
  return res.json(movies);
});

server.post("/addNewProfile", (req, res) => {
  profiles.push(req.body);

  return res.json({ message: "profile successfully added" });
});
