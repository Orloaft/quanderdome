import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import knex from "knex";

/* CREATE new user */
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // If any fields are missing, return
  if (!username || !email || !password) {
    return res.status(400).send("Please enter the required fields.");
  }

  const hashedPassword = bcrypt.hashSync(password, 10);

  // Create the new user
  const newUser = {
    ...req.body,
    password: hashedPassword,
  };

  knex("users")
    .insert(newUser)
    .then(() => {
      res.status(201).send("Registered successfully");
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Failed registration");
    });
});

/* LOGIN user */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // If any fields are missing, return
  if (!email || !password) {
    return res.status(400).send("Please enter the required fields.");
  }

  knex("users")
    .where({ email: email })
    .first()
    .then((user) => {
      const isPasswordCorrect = bcrypt.compareSync(password, user.password);

      console.log("Password Correct: ", isPasswordCorrect);

      if (!isPasswordCorrect) {
        return res.status(400).send("Invalid password");
      }

      console.log("Private Key:", process.env.JWT_KEY);

      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_KEY,
        { expiresIn: "24h" }
      );

      res.json({ token });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send("Invalid credentials");
    });
});
