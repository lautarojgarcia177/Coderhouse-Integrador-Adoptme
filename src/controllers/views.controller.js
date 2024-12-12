const getWelcome = (req, res) => {
    res.render('welcome')
}

const getUsers = (req, res) => {
    res.render('users')
}

const getPets = (req, res) => {
    res.render('pets')
}

export default {
    getWelcome,
    getUsers,
    getPets
}