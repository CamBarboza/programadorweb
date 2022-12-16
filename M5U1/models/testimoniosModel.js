var pool = require('./bd');


async function getTestimonios(){
    var query = "select * from testimonios order by id desc";
    var rows = await pool.query(query);
    return rows;
}
module.exports = {getTestimonios}