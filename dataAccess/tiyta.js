const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://sql7260629:qNyL3f5qhG@sql7.freesqldatabase.com/sql7260629')

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    })

const Movie = sequelize.define("movie", {
    name: Sequelize.STRING
});

const Actor = sequelize.define("actor", {
    name: Sequelize.STRING 
 })

const Movie_Actor = sequelize.define("Movie_Actor", {})

const Director = sequelize.define("director", {
     name: Sequelize.STRING
 })

Movie.belongsToMany(Actor, { through: Movie_Actor })

Actor.belongsToMany(Movie, { through: Movie_Actor })

Director.hasMany(Movie)


Store.create({
    name: "Mike"
}).then(s => {
    Customer.create({
        name: "John"
    }).then(c => {
        s.addCustomer(c)
    })
})


// Actor.sync()
// Movie.sync()
// Movie_Actor.sync()
// Director.sync()

// Director.create({
//     name: 'Rob Minkoff',
//     id: 1
// });

// Director.create({
//     name: 'Peter Jackson',
//     id: 2
// });

// Director.findAll({}).then(directors => {
//     console.log(directors)
// });

// const addRelationship1 = async function () {
//     let movie = await Movie.create({name: "Lion King", directorId: 1})
//     let actorA = await Actor.create({name: "James Earls Jones"})
//     movie.addActor(actorA)
// }

// addRelationship1()


// const addRelationship2 = async function () {
//     let movie = await Movie.find({ where: { id: 5 }});
//     let actor = await Actor.create({name: 'Jeremy Irons'})
//     movie.addActor(actor)
// }

// addRelationship2()

// const addRelationship3 = async function () {
//     let movie = await Movie.create({name: 'Lord of the Rings', directorId: 2})
//     let actor = await Actor.create({name: 'Ian McKellen'})
//     movie.addActor(actor)
// }

// addRelationship3();

// const addRelationship4 = async function () {
//     let movie = await Movie.find({ where: { id: 6 }});
//     let actor = await Actor.create({name: 'Elijah Wood'})
//     movie.addActor(actor)
// }

// addRelationship4();

// addRelationship8 = async function () {
//     let movie = await Movie.create({name: 'Lord of the Lions', id: 7, directorId: 2})
//     let actor = await Actor.find({where: {id: 7, name: 'Jeremy Irons'} })
//     movie.addActor(actor)
// }

// addRelationship8();

// addRelationship10 = async function () {
//     let movie = await Movie.find({where: {name: 'Lord of the Lions', id: 7}})
//     let actor = await Actor.find({where: {id: 8, name: 'Ian McKellen'} })
//     movie.addActor(actor)
// }

// addRelationship10();


//find all Peter Jackson's Movies:
// Movie.findAll({
//     where: {
//         directorId: 2
//     }
// }).then(movies => {
//     console.log(movies)
// })

//Find all the movies in which Ian McKellen played:
// Movie_Actor.findAll({
//     where: {
//         actorId: 8
//     }
// }).then(movies => {
//     console.log(movies)
// })


//Find all of the actors of the movie Lord of the Rings:
// Movie_Actor.findAll({
//     where: {
//         movieId: 6
//     }
// }).then(actors => {
//     console.log(actors)
// })


//Find the director of the movie The Lion King:
// Movie.find({
//     where: {id: 5},
// }).then(movie => {
//     console.log(movie)
// })
// Director.find({
//     where: {id: 1}
// }).then(director => {
//     console.log(director)
// })


// Artist.find({
//     where: { id: 5 },
//     include: [Song]
// }).then(artist => {
//     console.log(artist.songs)
// })


// Movie.destroy({
//     where: {
//         name: 'Lord of the Lions',
//         id: 8
//     }
// });


// Movie.destroy({
//     where: {
//         name: 'Lion King'
//     }
// });

// Director.destroy({
//     where: {
//         name: 'Rob Minkoff'
//     }
// });

// Actor.destroy({
//     where: {
//         name: 'James Earls Jones'
//     }
// });

// Actor.destroy({
//     where: {
//         name: 'Jeremy Irons'
//     }
// });



// Movie.drop()
// Actor.drop()
// Movie_Actor.drop()
// Director.drop()



// const addRelationship1 = async function () {
//     let director = await Director.create({name: "Rob Minkoff", id: 1})
//     let movie = await Movie.create({name: "Lion King", directorId: 1})
//     let actor = await Actor.create({name: "James Earls Jones"})
//     movie.addActor(actor)
// }

// addRelationship1()



// const addRelationship2 = async function () {
//     let movie = await Movie.create({name: "Lion King"})
//     let actor = await Actor.create({name: "James Earls Jones"})
//     let director = await Director.create({name: "Rob Minkoff"})
//     movie.addActor(actor)
//     movie.addDirector(director)
// }


// Movie.find({ where: { id: 1 }, include: [Director] }).then(d => {
//     console.log(d)
// })
















