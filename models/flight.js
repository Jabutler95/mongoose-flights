import mongoose from 'mongoose'

const Schema = mongoose.Schema

const flightsSchema = new Schema ({
  airline: {
    type: String, 
    enum: ['American', 'Southwest', 'United']
  }, 
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'DEN'
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