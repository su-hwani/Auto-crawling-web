const sql = require("./db.js")

class User {
    constructor(user) {
      this.user_id = user.user_id;
      // this.password = user.password;
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

        console.log("Created user: ",{id:res.inseertId, ...newUser });
        result(null, {id: res.inseertId, ...newUser});
    });
    
//     sql.end();

};

module.exports = User;