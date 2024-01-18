import { Meal } from "../models/meal.js"

function newMeal(req, res) {
  Meal.find({}).sort('name')
  .then(meals => {
    res.render('meals/new', {
      meals: meals,
      title: 'Add meal'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meals')
  })
}

function create(req, res) {
  Meal.create(req.body)
  .then(meal => {
    res.redirect('/meals/new')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/meals/new')
  })
}

export {
  newMeal as new,
  create
}