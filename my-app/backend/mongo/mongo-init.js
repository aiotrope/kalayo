db.createUser({
  user: "the_username",
  pwd: "the_password",
  roles: [
    {
      role: "dbOwner",
      db: "myappdb",
    },
  ],
});

db.createCollection("users");

db.users.insert({ username: "username1" });
db.users.insert({ username: "username2" });
