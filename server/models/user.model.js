const { error } = require("console");
const sql = require("./db.js")
const util = require('util');
const query = util.promisify(sql.query).bind(sql);

class User {
    constructor(user) {
      this.user_id = user.user_id;
      this.user_pw = user.user_pw;
      this.user_phonenum = user.user_phonenum;
      this.user_money = user.user_money;
    }
}

User.create = async (newUser)=>{
    try{
        const res = await query("INSERT INTO user SET ?", newUser)
        if (res){
            return {err:null, data: {insertId:res.insertId, newUser}}
        }
    } catch(err){
        return {err:err, data:null}
    }

    // result(err, data) -> 콜백함수 느낌으로 err 발생시 리턴해줌, 성공적으로 실행되면 data 를 리턴해줌. 
//     sql.end();
};

// user id로 조회
User.findByID = async (user_id)=>{
    try{
        const res = await query('SELECT * FROM user WHERE user_id = ?',user_id)
        if (res.length){
            return {err: null, data: res[0]}
        }
        return {err:"Not Found", data:null}
    }catch(err){
        return {err:err, data:null}
    }
}

// user 전체 조회
User.getAll = async result =>{
    sql.query('SELECT * FROM user', (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("user: ", res);
        result(null, res);
    });
};

// customer id로 삭제
User.removeOne = async (user_id, result)=>{
    sql.query('DELETE FROM user WHERE user_id = ?',user_id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.affectedRows ==0){
            // id 결과가 없을 시 
            result({msg: "not_found"}, null);
            return;
        }

        console.log("deleted user with id: ", user_id);
        result(null, res);
    });
};

// userr 전체 삭제
User.removeAll = async result =>{
    sql.query('DELETE FROM user',(err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.affectedRows ==0){
            // id 결과가 없을 시 
            result({msg: "not_found"}, null);
            return;
        }

        console.log('deleted ${res.affectedRows} user');
        result(null, res);
    });
}
module.exports = User;