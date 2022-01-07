const mysql = require("mysql");
const Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

// async function connectionCheck()
// {
//     const connection = mysql.createConnection(dbinfo);
//     await connection.connectAsync();
//     console.log("connection successfull");
//     await connection.endAsync();
// }

async function addUser(user)
{
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();

    let sql =`INSERT INTO user(username, password) VALUES (?,?)`;
    await connection.queryAsync(sql,[user.username, user.password]);
    await connection.endAsync();
}

async function selectUser()
{
    const connection = mysql.createConnection(dbinfo);
    await connection.connectAsync();
    console.log("connection successfull");

    let sql =`SELECT * FROM user`;
    await connection.queryAsync(sql);
    const list = await connection.queryAsync(sql,[]);
    await connection.endAsync();
    console.log(list);
    return list;
    
}
module.exports = { selectUser, addUser };

//connectionCheck();
//addUser({username:" snehal1", password:"snehal1kapassword"});
//selectUser();

