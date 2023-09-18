class customerDB{
    constructor(id,pw,ph){
        this.id = id;
        this.pw = pw;
        this.ph = ph;
        this.DB = {};
    }

    select(id){
        console.log(this.DB);
        if (this.DB[id]){
            return {id:id, passwd:this.DB[id][0]};
        }
        else{
            return "Customer not found";
        }
    }

    insert(id,pw,ph){
        if (!this.DB[id]){
            this.DB[id] = [pw,ph];
            return "Customer added to the DB";
        }
        else{
            return "Customer already added in DB";
        }
        
    }
};

module.exports = new customerDB();