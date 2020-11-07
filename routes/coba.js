var express = require("express");
var router = express.Router();

const coba = require("../controllers/coba");
const mailer = require("../helper/mailer");

/* GET users listing. */

router.get("/", coba.coba2);

router.get("/sendemail", (req, res, next) => {
    let payload = {
        to: "mardefasma123up@gmail.com",
        contentSubject: '[ANORA EMAIL] - Success Send',
        contentMessage: `<h4>Anora Analyst email!</h4><br>Testing email`,
        username: "marde fasma",
        password: "00000"
    }

    mailer.sendMailRegister(payload).then(
        res.send({
            'success': true,
            'code': 200,
            'message': 'Success',
            'data': payload
        })
    )
});

module.exports = router;
