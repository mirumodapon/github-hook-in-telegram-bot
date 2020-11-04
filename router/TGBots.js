const express = require('express');
const router = express.Router();
const bots = {
    "1217070906:AAHYpyiV9zr9k2Jsxf7Ljt8MBa-cqr4n2Go": "mirumo_bot"
};
router.post(
    '/:token',
    async (req, res) => {
        console.log(req.body);
        const bot = bots[req.params.token];
        res.status(200).json(require(`./action/${bot}/index`)(req));
    }
);
module.exports = router;