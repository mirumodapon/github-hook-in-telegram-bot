const express = require('express');
const router = express.Router();
const bots = require("./bots");
router.post(
    '/:token',
    async (req, res) => {
        console.log(req.body);
        const bot = bots[req.params.token];
        res.status(200).json(require(`./action/${bot}/index`)(req));
    }
);
module.exports = router;