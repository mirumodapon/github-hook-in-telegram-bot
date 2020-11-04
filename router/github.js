const express = require('express');
const axios = require('axios');
const router = express.Router();
router.post(
    '/:id',
    (req, res) => {
        res.status(204).send('No content');
        const { ref, repository, pusher, commits, compare } = req.body;
        const commits_count = commits.length;
        var msg = `<b><a href="${compare}">${commits_count} commit${(commits_count > 1) ? 's' : ''}</a> to <a href="${repository.html_url}">${repository.name}</a></b>\n`;
        commits.forEach(element => {
            msg += '<del>----------</del>\n';
            msg += `<a href="${element.url}">${element.id.slice(0, 7)}</a>: ${element.message}\nBy ${element.committer.name}\n`
        });
        msg += '<del>----------</del>\n';
        msg += `<u>${pusher.name}</u> pushed to ${ref}\n`;
        try {
            const axios = require('axios');
            axios.post('https://api.telegram.org/bot1217070906:AAHYpyiV9zr9k2Jsxf7Ljt8MBa-cqr4n2Go/sendMessage',
                {
                    method: "sendMessage",
                    chat_id: req.params.id,
                    parse_mode: "HTML",
                    text: msg
                }
            );
            return;
        } catch (erro) {
            console.error(erro.message);
            return;
        }
    }
);
module.exports = router;