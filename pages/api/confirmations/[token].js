const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: "./data.sqlite3",
  },
});
export default function handler(req, res) {
  const query = req.query;
  knex("pendingCredentials")
    .select()
    .where({ token: query.token })
    .then((credentials) => {
      knex("users")
        .insert({ ...credentials[0] })
        .then(() => {
          knex("pendingCredentials")
            .delete()
            .where({ token: query.token })
            .then(() => res.json({ message: "email confirmed" }));
        })
        .catch((err) => console.log(err));
    });
}
