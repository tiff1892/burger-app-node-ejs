const express = require("express");
const router = express.Router();

router.get("/user/:id", (req, res, next) => {
  console.log("req: ", req.params);
});

router.get("/users/:id/:name", (req, res, next) => {
  const { id, name } = req.params;

  console.log("id: ", id);
  console.log("name: ", name);
});

router.get("/user2/:id/:name", (req, res, next) => {
  const { title, age } = req.query;
  console.log("title: ", title);
  console.log("age: ", age);
});

/* Using BODY and GET*/
router.get("/user3/:id/:name", (req, res, next) => {
  const { name, age } = req.body;
  console.log("name: ", name);
  console.log("age: ", age);

  res.status(404);

  //FOR RES, can be customized like using json. instead of seeing SENDING REQUEST:
  res.json({
    message: `Your name is ${name}`,
  });
});

//=========
/*BODY or QUERY and POST*/
router.post("/jobs", (req, res, next) => {
  try {
    const { id } = req.query;
    req.status(200).json({
      message: "Your request is successful!",
      data: id,
    });
  } catch (err) {
    res.status(500).json({
      message: "Your request has failed!",
    });
  }
});

router.get("/job", (req, res, next) => {
  console.log("job");
});

module.exports = router;
