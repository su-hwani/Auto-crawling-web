const sql = require("./db.js")

class User {
    constructor(user) {
      this.user_id = user.user_id;
      this.user_pw = user.user_pw;
      this.user_phonenum = user.user_phonenum;
      this.user_money = user.user_money;
    }
}

User.create = (newUser, result)=>{
    sql.query("INSERT INTO user SET ?", newUser, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log("Created user: ",{id:res.insertId, ...newUser });
        result(null, {id: res.insertId, ...newUser});
    });
    // result(err, data) -> 콜백함수 느낌으로 err 발생시 리턴해줌, 성공적으로 실행되면 data 를 리턴해줌. 
//     sql.end();
};

// user id로 조회
User.findByID = (user_id, result)=>{
    sql.query('SELECT * FROM user WHERE user_id = ?',user_id, (err, res)=>{
        if(err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length){
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
        }

        // 결과가 없을 시 
        result({msg: "not_found"}, null);
    });
};

// user 전체 조회
User.getAll = result =>{
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
User.removeOne = (user_id, result)=>{
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
User.removeAll = result =>{
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