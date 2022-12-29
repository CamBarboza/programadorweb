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

async function insertReserva(obj){
    try {
        var query = "insert into reservas set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function getReservasById(id) {
    var query = "select * from reservas where id = ? " ;
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarReservasById(obj, id) {
    try{
        var query = "update reservas set ? where id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}
module.exports = {getReservas, deleteReservasById, insertReserva, getReservasById, modificarReservasById}