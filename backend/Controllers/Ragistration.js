import { studentmodle } from '../Modles/student.js'

const newRagistrarion = async (req, res) => {

  try {
    const newRag =  new studentmodle(req.body.info)
    await newRag.save()
    const code = Math.floor(Math.random()*900000) + 100000
    console.log(req.body.info)
    res.json(`Your ragistration code is ${code}`)
  } catch (error) {
    console.log(error)
  }
}


export { newRagistrarion }
