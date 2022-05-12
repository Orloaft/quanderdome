import knex from "knex";
import config from "../knexfile";

const db = knex(config.development);

module.exports = {
  find,
  findById,
  insert,
};

const find = () => {
  return db("users");
};
const findById = (id) => {
  return db("users").where({ id: Number(id) });
};
const insert = (post) => {
  return db("users")
    .insert(post)
    .then((ids) => ({ id: ids[0] }));
};
