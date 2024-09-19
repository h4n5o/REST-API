const router = require("express").Router();

router.get("/", (req,res)=>{
    res.send("hey, it´s users route")
});

module.exports = router