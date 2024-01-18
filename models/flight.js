import mongoose from 'mongoose'


const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]\d?/},
  price: {type: Number, min: 0}
})

const flightsSchema = new Schema ({
  airline: {
    type: String, 
    default: ' ',
    enum: ['American', 'Southwest', 'United']
  }, 
  airport: {
    type: String,
    default: 'DEN',
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  }, 
  flightNo: {
    type: Number,
    min: 10, 
    max: 9999
  },
  departs: {
    type: Date,
    default: () => {
      const today = new Date()
      return new Date(today.setFullYear(today.getFullYear() + 1))
    }
  },
  tickets: [ticketSchema],
  meals: [{ type: Schema.Types.ObjectId, ref: 'Meal' }]
})

const Flight = mongoose.model('Flight', flightsSchema)

export {
  Flight
}
