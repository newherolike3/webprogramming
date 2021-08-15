const users = require("../../models/mongo/users");

exports.index = async (req, res, next) => {

    let data = await users.find();
    
    res.status(200).json(data);
 
};

exports.insert = async (req, res, next) => {

let data  = new users({
    username: req.body.username,
    email: req.body.email
});

data .save();

res.status(200).json({
message: "บันทึกข้อมูลเรียบร้อยแล้ว"

})

};