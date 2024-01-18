import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET localhost:3000/flights
router.get('/', flightsCtrl.index)
// GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)
// GET localhost:3000/flights/:flightId
router.get('/:flightId', flightsCtrl.show)
// GET localhost:3000/flights/:flightId/edit
router.get('/:flightId/edit', flightsCtrl.edit)
// POST localhost:3000/flights
router.post('/', flightsCtrl.create)
// POST localhost:3000/flights/:flightId/tickets
router.post('/:flightId/tickets', flightsCtrl.createTicket)
// POST http://localhost:3000/movies/:flightId/meals
router.post('/:flightId/meals', flightsCtrl.addToMeals)
// PUT localhost:3000/flights/:flightId
router.put('/:flightId', flightsCtrl.update)
//DELETE localhost:3000/flights/:flightId
router.delete('/:flightId', flightsCtrl.delete)



export { router }
