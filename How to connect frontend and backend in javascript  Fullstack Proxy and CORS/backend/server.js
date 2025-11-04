const express = require("express");

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Programmer's Coffee",
      content: "Why do programmers prefer dark mode? Because light attracts bugs!",
    },
    {
      id: 2,
      title: "Math Joke",
      content: "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else.",
    },
    {
      id: 3,
      title: "Database Humor",
      content: "Why did the developer go broke? Because he used up all his cache!",
    },
    {
      id: 4,
      title: "AI Joke",
      content: "I asked my AI to tell me a joke... it said, 'You’re still doing my job manually?'",
    },
    {
      id: 5,
      title: "Wi-Fi Struggle",
      content: "My Wi-Fi suddenly stopped working, then I realized I was on airplane mode… while sitting on the couch.",
    },
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`serve at http://localhost:${PORT}/`);
});
