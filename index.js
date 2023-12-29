require("dotenv").config();
const express = require("express");
// import { Express } from "express";
const app = express();

const port = 4000;

const githubData = {
  login: "KundanGangurde",
  id: 130235969,
  node_id: "U_kgDOB8M-QQ",
  avatar_url: "https://avatars.githubusercontent.com/u/130235969?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/KundanGangurde",
  html_url: "https://github.com/KundanGangurde",
  followers_url: "https://api.github.com/users/KundanGangurde/followers",
  following_url:
    "https://api.github.com/users/KundanGangurde/following{/other_user}",
  gists_url: "https://api.github.com/users/KundanGangurde/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/KundanGangurde/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/KundanGangurde/subscriptions",
  organizations_url: "https://api.github.com/users/KundanGangurde/orgs",
  repos_url: "https://api.github.com/users/KundanGangurde/repos",
  events_url: "https://api.github.com/users/KundanGangurde/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/KundanGangurde/received_events",
  type: "User",
  site_admin: false,
  name: "Kundan Gangurde",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 6,
  public_gists: 0,
  followers: 3,
  following: 5,
  created_at: "2023-04-08T15:13:11Z",
  updated_at: "2023-12-29T15:10:19Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("kundangangurde.com");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Kundan Backend</h2>");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
