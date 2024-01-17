import mongoose from 'mongoose'

const Schema = mongoose.Schema

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
  }
})

const Flight = mongoose.model('Flight', flightsSchema)

export {
  Flight
}