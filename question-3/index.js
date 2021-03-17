const http = require("http");
const cheerio = require("cheerio");

const request = require("request");
const [, , input] = process.argv;

const options = {
  method: "GET",
  url: "https://codequiz.azurewebsites.net/",
  headers: {
    Cookie: "hasCookie=true",
    "cache-control": "no-cache",
  },
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  const $ = cheerio.load(body);

  $("body > table > tbody > tr").each((index, element) => {
    const fundName = $(
      `body > table > tbody > tr:nth-child(${index + 1}) > td:nth-child(1)`
    ).text();

    if (fundName.trim() == input) {
      const nav = $(
        `body > table > tbody > tr:nth-child(${index + 1}) > td:nth-child(2)`
      ).text();
      console.log(nav);
    }
  });
});
