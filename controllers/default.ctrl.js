var defaultCtrl = {

    get: function (req, res) {
        res.status(200);
        res.send("Express JS Rest API");
    },

    health: function (req, res) {
        res.status(200);
        var status = { status: 'Up' };
        res.send(status);
    }

};


module.exports = defaultCtrl;