const User = require("../models/user.model.js");

// 새 객체 생성
exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        });
    };

    const user = new User({
        user_id: req.body.user_id,
        // password: req.body.password,
        user_phonenum: req.body.user_phonenum,
        user_money: req.body.user_money
    });


    // 데이터베이스에 저장
    User.create(user, (err, data) =>{
        if(err){
            res.status(500).send({
                message:
                err.message || "Some error occured while creating th Customer."
            });
        };
    })
    res.json("프론트에 전달")
};