import * as mysql from "mysql";

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    database: "landfill_review",
    user: "reviewapp",
    password: "password",
});

export const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        connection.query(query, values, (err, results) => {
            if (err) throw err;
            resolve(results);
        });
    });
};

import reviews from "./reviews";
import users from "./users";

// this becomes db object in routes/chirps.js
export default {
    reviews,
    users,
};