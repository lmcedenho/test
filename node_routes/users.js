var users = [
    {"id":"1", "name": "Juan García", "desc": "Le encanta el sol y los paseos por la playa"},
    {"id":"2", "name": "María Pérez", "desc": "Se escapa a la montaña siempre que puede"},
    {"id":"3", "name": "David Alonso", "desc": "Relajarse en casa leyendo es su plan ideal"}
];

exports.getUsers = function(req, res) {
    res.send(users);
}

exports.addUser = function(req, res) {
    var name = req.body.name;
    var desc = req.body.desc;

    users.push({"name": name, "desc": desc});
    res.send(users);
}

exports.updateUser = function(req, res) {
    // TODO: Not included in this demo
}

exports.deleteUser = function(req, res) {
    var userId = req.params.userId;

    for (var userIndex in users) {
        var user = users[userIndex];

        if (user.id === userId) {
            users.splice(userIndex, 1);
            break;
        }
    }

    res.send(users);

}