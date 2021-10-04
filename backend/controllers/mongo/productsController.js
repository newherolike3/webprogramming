const products = require("../../models/mongo/products");

exports.index = async (req, res, next) => {

    let data = await products.find();

    res.status(200).json(data);

};

exports.insert = async (req, res, next) => {

    let data = new products({

        productID: req.body.productID,
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        productStock: req.body.productStock,
        productUnit: req.body.productUnit


    });

    data.save();

    res.status(200).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"

    });

};

exports.update = async (req, res, next) => {
    const id = "6119c76849ff1d331cc0cd39";

    const data = {
        productID: "10221",
        productName: "อะไรก็ได้",
        productPrice: "241000",
        productStock: "800",
        productUnit: "ครับผม",

    }

    let update = await products.updateOne(
        { _id: id },
        {
            productID: data.productID,
            productName: data.productName,
            productPrice: data.productPrice,
            productStock: data.productStock,
            productUnit: data.productUnit
        }
    );

    if (update.nModified == 0) {
        res.status(400).json({
            error: "ไม่สามารถแก้ไขข้อมูลได้"
        });
    } else {
        res.status(200).json({
            data: "แก้ไขข้อมูลเรียบร้อยแล้ว"
        });
    }



};
exports.delete = async (req, res, next) => {

    const id = "6119c5a9687a1b34c0f7f002";

    const data = await products.deleteOne(
        { _id: id }
    );
    if (data.deletedCount === 0) {
        res.status(400).json({
            error: "ไม่สามารถข้อมูลได้"
        });
    } else {
        res.status(200).json({
            message: "ลบข้อมูลเรียบร้อยแล้ว"
        });
    }

};