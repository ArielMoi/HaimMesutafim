const mongoose=require('mongoose')

const volunteerSchema=mongoose.Schema({
  url:{
    type:String,
    required: true,
    unique: true
  },
  img:{
    type:String,
  },
  title:{
    eng:{
      type:String
    },
    arb:{
      type:String
    },
    heb:{
      type:String
    }
  },
  description:{
    eng:{
      type:String
    },
    arb:{
      type:String
    },
    heb:{
      type:String
    }
  }
})


const volunteerMOdel=mongoose.model('val',volunteerSchema)
module.exports = volunteerMOdel;