var pool = require('./bd');

async function getReservas() {
    var query = "select * from reservas order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function deleteReservasById(id) {
    var query = "delete from reservas where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}
module.exports = {getReservas, deleteReservasById}