module.exports = app => {
    const express = require('express');
    const router = express.Router({
        mergeParams: true
    });

    app.use(router);

    router.get('/', (req, res) => {
        res.send('ok')
    })

}