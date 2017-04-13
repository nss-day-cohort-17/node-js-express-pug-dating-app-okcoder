'use strict';

const Match = require('../models/matchesMod')
const User = require('../models/userMod')


const getUser = (id) => {
  return User.forge({id})
  .fetch()
  .then( user => {
    return user.toJSON()
  })
}

let results = (fn, id) => Promise.all(fn)

module.exports.show = (req, res) => {
  let userMatches= [];
  let userMatchIds = [];
  Match.query({ where: { userOne: res.locals.id}, orWhere: { userTwo: res.locals.id } } )
  .fetchAll()
  .then( matches => {
    const matchArray = matches.toJSON()
    matchArray.forEach( match => {
      if (match.userOne == res.locals.id) {
          userMatchIds.push(match.userTwo)
        } else {
          userMatchIds.push(match.userOne)
        }
      })
      Promise.all(userMatchIds.map((id) => {
        return getUser(id)
      }))
      .then((users) => {
        console.log(users, 'users')
        res.render('matches', {page: 'Matches', users});
      })
    })
}
































//     matchArray.forEach( match  => {
//       if (match.userOne == res.locals.id) {
        //  User.forge({id: match.userTwo})
        // .fetch()
        // .then( user => {
        //   userMatches.push(user.toJSON())
        // })
//       } else {
//         User.forge({id: match.userOne})
//         .fetch()
//         .then( user => {
//           userMatches.push(user.toJSON())
//         })
//       }
//     })
//   })
//   .then(() => {
//     console.log(userMatches)
//     res.render('matches', {page: 'Matches', matches: userMatches});
//   })
// }
