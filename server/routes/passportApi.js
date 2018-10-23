// const express = require('express')
// const router = express.Router()
// const passport = require('../passport')

// //No redirect
// router.post('/login', passport.authenticate('local',{session: false}), (req, res) => {
//     res.send(req.user.username);
//     }
// )

// router.get('/', (req, res, next) => {
//     if (req.user) {
//         res.json({ user: req.user })
//     } else {
//         res.json({ user: null })
//     }
// })

// router.post('/logout', (req, res) => {
//     if (req.user) {
//         req.logout()
//         res.send({ msg: 'logging out' })
//     } else {
//         res.send({ msg: 'no user to log out' })
//     }
// })

// module.exports = route