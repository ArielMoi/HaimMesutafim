const volunteerMOdel=require('../model/Volunteer.model')
const {
  collectingPageData,
  collectingDataHeaders,
} = require("../scraping/scraper");
const getAll = async (req, res) => {
try {
  const data =await volunteerMOdel.find()
  return res.status(200).json({"success":data})
} catch (error) {
  return res.status(400).json({"err":error})
}
};

const addVolun=async(req,res)=>{
  const {url}=req.body

  if(!url.includes('https://www.ruachtova.org.il/projects/')){
    return res.send('wrong url')
  }

try {
  const findurl=await volunteerMOdel.findOne({url})
  if(findurl) return res.status(200).send(findurl);
} catch (error) {
  return res.send(error)
}
 

const data = await collectingPageData(url);
//res.send(data)
  const {img,title,description}=data
  const val= new volunteerMOdel({
    url,
    img,
    title:{
      heb:title,
      arb:null,
      eng:null
    },
    description:{
      heb:description,
      arb:null,
      eng:null
    }
  })
  try {
    const data = await val.save()
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error) 
  }
}
module.exports = {
  getAll ,
  addVolun
  };
