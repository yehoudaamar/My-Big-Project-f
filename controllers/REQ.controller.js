const Get = require('../models/get');


exports.getAll = async (req, res) => {


    try {
        const rows = await Get.getAll();
        res.status(200).json(rows);
    } catch (err) {
        res.json({ message: err });
    }


}
exports.post = async (name ,email ,password) => {
   
 
    try {
        const rows = await Get.post(name ,email ,password);
  
    } catch (err) {
    console.log(err);
    }
    


}