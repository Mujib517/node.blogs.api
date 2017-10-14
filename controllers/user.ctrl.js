var users = [
    { id: 1, name: "Mujib", role: 'Admin' },
    { id: 2, name: "Rahman", role: 'Admin' },
    { id: 3, name: "Anisha", role: 'User' },
    { id: 4, name: "John", role: 'Super Admin' }
];


var userCtrl = {
    get: function (req, res) {
        res.status(200);
        res.json(users);
    },

    getById: function (req, res) {

        var id = req.params.id;
        var user;

        for (var i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                user = users[i];
                break;
            }
        }
        if (user) {
            res.status(200);
            res.json(user);
        }
        else{
            res.status(404);
            res.send("Not found");
        }
    },

    save:function(req,res){
       users.push(req.body);
        res.status(201); //created
        res.send("Success");
    },

    delete:function(req,res){
        var id=req.params.id;

        for(var i=0;i<users.length;i++){
            if(users[i].id==id){
                users.splice(i,1);
            }
        }

        res.status(204);
        res.send("Deleted!");
    }
};

module.exports = userCtrl;
