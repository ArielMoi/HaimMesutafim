const volunteerMOdel=require('../model/Volunteer.model')

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

  const val=new volunteerMOdel({
    /*
    url:'https://www.ruachtova.org.il/projects/21203',
    "img":"url.img"
    "title.end":"test",
    "title.arb":"تجربه",
    "title.heb":"בְּדִיקָה",
    "description.end":"my description",
    "description.heb":"התיאור שלי",
    "description.arb":"وصفي"
    */

   obj
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