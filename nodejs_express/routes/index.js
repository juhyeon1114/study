const express = require('express');
const router = express.Router(); 
const template = require('../lib/template.js');

router.get('/', (req, res) => {
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(req.list);
    var html = template.HTML(title, list,
        `
        <h2>${title}</h2>${description}
        <img src="/images/mj.png" style="width:500px; display:block;">
        `,
        `<a href="/topic/create">create</a>`
    );
    res.send(html);
});

module.exports = router;