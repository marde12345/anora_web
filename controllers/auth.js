const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const db = require("../models")

exports.login = async (req, res, next) => {
    // Get email password
    var { email, password } = req.body

    // Hash password
    const salt = await bcrypt.genSalt(10);
    passwordHash = await bcrypt.hash(password, salt);

    userLogin = await db.users.findOne({
        where: {
            email: email,
        }
    })
    console.log(userLogin);
    // res.send("ok")
    if (email === userLogin.email) {
        console.log("Email ok");
        console.log(passwordHash, userLogin.password);
        if (await bcrypt.compare(password, userLogin.password)) {
            // Passwords match
            console.log("password match");
        } else {
            // Passwords don't match
            return res.status(401).send("Password salah")
        }
    } else {
        return res.status(401).send("Email kosong")
    }

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
    res.send(payloa)
}