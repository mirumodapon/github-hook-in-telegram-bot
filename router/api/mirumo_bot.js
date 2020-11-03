const express = require('express');
const router = express.Router();

router.post(
    '/1217070906:AAHYpyiV9zr9k2Jsxf7Ljt8MBa-cqr4n2Go',
    async (req, res) => {
        console.log(req.body);
        res.status(200).json(
            {
                method: "sendMessage",
                chat_id: 1157109940,
                text: "Server Test"
            }
        );
    }
);
module.exports = router;