const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./data.sqlite3",
  },
});
export default function handler(req, res) {
  knex("users")
    .select()
    .where({ token: req.body.token })
    .then((users) => {
      res.status(200).json({ username: users[0].username });
    })
    .catch((err) => res.status(500).json(err));
}
