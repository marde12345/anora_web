const db = require("../models");
const { QueryTypes } = require('sequelize');

exports.browse = async (req, res, next) => {
    st_users = await db.st_users.findAll();

    data = {
        st_users: st_users,
    }

    res.render("landing/browse", {
        title: "Telusuri Statistisi | ANORA",
        data: data
    });
}