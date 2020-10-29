const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const db = require("../models")

exports.login = async (req, res, next) => {
    // Get email password
    var { email, password } = req.body

    // Hash password
    passwordHash = bcrypt.hashSync(password, 8);

    console.log(email, passwordHash);

    res.send("good")
}

exports.generateToken = async (req, res) => {
    // get user
    const payload = await db.st_users.findOne({
        where: { username: 'Morse Dixon' },
        raw: true
    });
    // const payload = {
    //     username: "siapa"
    // }
    console.log(payload);
    const token = jwt.sign(payload, process.env.SECRET_JWT);
    res.send(token)
}