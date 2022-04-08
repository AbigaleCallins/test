import { Query } from "./index";

const all = () => Query("select reviews.id, reviews.content, reviews._created, users.name from reviews join users on reviews.userid = users.id");

const one = (id) => Query("select * from reviews where reviews.id = ?", [id]);

const destroy = (id) => Query("delete from reviews where reviws.id = ?", [id]);

const insert = (userid, content, landfill) => Query("insert into reviews (userid, content, landfill) values (?, ?, ?)", [userid, content, landfill]);

const edit = (id, content) => Query("UPDATE reviews SET content = ? WHERE reviews.id = ?", [content, id])

// this becomes reviews in db/index.js and routes/reviews.js
export default {
    all,
    one,
    destroy,
    insert,
    edit
}