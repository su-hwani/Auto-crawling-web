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
        user_pw: req.body.user_pw,
        user_phonenum: req.body.user_phonenum,
        user_money: req.body.user_money
    });

    // 데이터베이스에 저장
    User.create(user, (err, data) =>{
        if(err){
            res.status(500).send({
                message:
                err.message || "Some error occured while creating the user."
            });
        };
        res.status(200).json(data)
    })
};

// 전체 조회 
exports.findAll = (req,res)=>{
    User.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving users."
          });
        else res.status(200).json(data);
      });
};

exports.findOne = (req,res)=>{
    User.findByID(req.body.user_id, (err, data) => {
        if (err) {
          if (err.msg === "not_found") {
            res.status(404).send({
              message: `Not found User with id ${req.body.user_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving User with id " + req.body.user_id
            });
          }
        } else res.status(200).json(data);
      });
};

// id로 삭제
exports.deleteOne = (req,res)=>{
    User.removeOne(req.body.user_id, (err, data) => {
        if (err) {
          if (err.msg === "not_found") {
            res.status(404).send({
              message: `Not found User with id ${req.body.user_id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete User with id " + req.body.user_id
            });
          }
        } else res.status(200).json({ message: `User was deleted successfully!` });
      });
};

// 전체 삭제
exports.deleteAll = (req,res)=>{
    User.removeAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all users."
          });
        else res.status(200).json({ message: `All users were deleted successfully!` });
      });
};

exports.login = (req, res)=>{
    User.findByID(req.body.user_id, (err,data)=>{
        if (err) {
            if (err.msg === "not_found") {
              res.status(404).json({
                message: `Not found User with id ${req.body.user_id}.`
              });
            } else {
              res.status(500).json({
                message: "Error retrieving User with id " + req.body.user_id
              });
            }
        } 
        const user_pw = req.body.user_pw
        if(user_pw === data.user_pw){
            req.session.is_login = true 
        }
        res.status(200).json(req.body) // is_login == true
    }) 
}

exports.logout = (req, res)=>{
    req.session.destroy(err => {
        if (err) throw err;
        res.status(200).json({msg: "success logout"}) // 웹페이지 강제 이동 & session file 삭제
    });
}
