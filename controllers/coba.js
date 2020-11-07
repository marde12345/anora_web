const db = require("../models");
const { QueryTypes } = require('sequelize');

exports.coba1 = async (req, res) => {
    dataUsers = await db.users.findAll();
    dataStUsers = await db.st_users.findAll();
    dataMeta = await db.sequelize.query('SELECT * FROM sequelizemeta', { type: QueryTypes.SELECT });
    data = {
        users: dataUsers,
        meta: dataMeta,
        st_users: dataStUsers
    }
    res.json(data);
    // res.render('landing/browse', {
    //     title: "Coba",
    //     dataUsers: dataUsers
    // });

    // res.json(data);
    // res.status(202);
};

exports.coba2 = async (req, res) => {
    res.json(db.st_users.finding());
}