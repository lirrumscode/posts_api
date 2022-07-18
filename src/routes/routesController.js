const { default: axios } = require("axios");

const { router } = require("../controllers/homeController");
const {
  get,
  getById,
  post,
  put,
  deleted,
} = require("../controllers/orm/ormController");

router.get("/", async (req, res) => {
  try {
    get("posts")
      .then((response) => {
        res.json({
          code: 200,
          results: response.data,
        });
      })
      .catch((err) => {
        res.json({ code: 404, result: `${err}` });
      });
  } catch (error) {
    console.error(error);
  }
});

router.get("/:id", async (req, res) => {
  try {
    getById("posts", req.params.id)
      .then((response) => {
        if (response.status === 404) throw response;
        else
          res.json({
            code: 200,
            results: response.data,
          });
      })
      .catch((err) => {
        res.json({ code: 404, results: `${err}` });
      });
  } catch (error) {
    console.error(error);
  }
});

router.post("/", async (req, res) => {
  try {
    post("posts", req.body)
      .then((response) => {
        if (response.status === 404) throw response;
        else
          res.json({
            code: 200,
            data: response.data,
          });
      })
      .catch((err) => {
        res.json({ code: 404, result: `${err}` });
      });
  } catch (error) {
    console.error(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    put("posts", req.params.id, req.body)
      .then((response) => {
        if (response.status === 404) throw response;
        else
          res.json({
            code: 200,
            data: response.data,
          });
      })
      .catch((err) => {
        res.json({ code: 404, result: `${err}` });
      });
  } catch (error) {
    console.error(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    deleted("posts", req.params.id)
      .then((response) => {
        if (response.status === 404) {
          throw response;
        } else {
          res.json({
            code: 200,
            data: response.data,
          });
        }
      })
      .catch((err) => {
        res.json({ code: 404, result: `${err}` });
      });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;