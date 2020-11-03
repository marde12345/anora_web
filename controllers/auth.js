const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const db = require("../models")

exports.login = async (req, res, next) => {
    // Get email password
    var { email, password } = req.body

    userLogin = await db.users.findOne({
        where: {
            email: email,
        }
    })
    console.log(userLogin);

    if (email === userLogin.email) {
        if (await bcrypt.compare(password, userLogin.password)) {
            // Passwords match
            res.send(userLogin)
        } else {
            // Passwords don't match
            return res.status(401).send("Password salah")
        }
    } else {
        return res.status(401).send("Email kosong")
    }
}

exports.register = async (req, res) => {
    var { email, password, firstname, lastname } = req.body

    const salt = await bcrypt.genSalt(10);
    passwordHash = await bcrypt.hash(password, salt);

    userExist = await db.users.findOne({
        where: {
            email: email,
        }
    });

    if (userExist) {
        // Send flash message
        var error = req.flash("error", email + " telah terdaftar");
        res.redirect('../register')
    } else {
        newUser = {
            email: email,
            password: passwordHash,
            firstname: firstname,
            lastname: lastname,
            name: firstname + ' ' + lastname
        }

        const siapa = await db.users.create(newUser);
    }

    res.redirect('../login')
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