const express = require("express");
const { config } = require("dotenv");
const axios = require("axios");

config({ path: ".env" });
const router = express.Router();

// var client_id = "";
// var client_secret = "";

// var authOptions = {
//   url: "https://accounts.spotify.com/api/token",
//   headers: {
//     "Authorization": "Basic " +
//       (new Buffer.from(client_id + ":" + client_secret).toString("base64")),
//     "Content-Type": "application/x-www-form-urlencoded",
//   },
//   data: {
//     grant_type: "client_credentials",
//   },
//   json: true,
// };

// async function getProfile(accessToken) {
//   // let accessToken = localStorage.getItem('access_token');

//   return axios({
//     url: "https://api.spotify.com/v1/me",
//     method: "GET",
//     headers: {
//       "Authorization": "Bearer " + accessToken,
//     },
//   })
//     .then((res) => res.json().then((data) => JSON.stringify(data)))
//     .catch((err) => console.log(err));
// }

router.get("/", (req, res) => {
  console.log("test");
  // axios({
  //   ...authOptions,
  //   method: "POST",
  // }).then((response) => {
  //   if (response.status === 200) {
  //     const token = response.data.access_token;
  //     console.log("token", token);
  //     // getProfile(token).then((data) => res.send(JSON.stringify(data)));
  //   }
  // })
  //   .catch((err) => {
  //     console.log("err", err);
  //   });
});

module.exports = router;
