const express = require('express');
const axios = require('axios');
const router = express.Router();
router.post(
    '/:name',
    (req, res) => {
        switch (req.body.type) {
            //-404228386
            case 'PushEvent': {
                let msg = '';
                const name = req.body.repo.name.slice(req.body.repo.name.indexOf('/') + 1, -1);
                msg += `<b>${req.body.payload.size} commit${(req.body.payload.size > 1) ? 's' : ''} to <a href="${req.body.repo.url.replace('api.', '').replace('/repos', '')}">${name}</a></b>\n`;
                req.body.payload.commits.forEach(element => {
                    msg += '<del>-----------</del>\n'
                    msg += `<a href="${element.url.replace('api.', '').replace('/repos', '').replace('commits', 'commit')}">${element.sha.slice(0, 7)}</a>: ${element.message}\n`;
                    msg += `by ${element.author.name}\n`
                });
                msg += `<del>-----------</del>\nRef: ${req.body.payload.ref}`;
                const axios = require('axios');
                axios.post('https://api.telegram.org/bot1217070906:AAHYpyiV9zr9k2Jsxf7Ljt8MBa-cqr4n2Go/sendMessage',
                    {
                        method: "sendMessage",
                        chat_id: 1157109940,
                        parse_mode: "HTML",
                        text: msg
                    }
                );
                return res.status(204).send('No content');
            }
            default: {
                return res.status(404).send('Not found');
            }
        }

    }
);

module.exports = router;