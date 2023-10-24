import AbstractManager from "./AbstractManager.js";

class PostManager extends AbstractManager {
  constructor() {
    super({ table: "posts" });
  }

  findAll() {
    return this.database.query(
      `SELECT p.id, p.content, u.id as uid, u.nickname, u.firstname, u.lastname, u.era, u.picture FROM ${this.table} p JOIN users u ON  p.author = u.id ORDER BY p.id DESC`
    );
  }

  find(id) {
    return this.database.query(
      `SELECT p.id, p.content, u.id as uid, u.nickname, u.firstname, u.lastname, u.era, u.picture FROM ${this.table} p JOIN users u ON  p.author = u.id where p.id = ?`,
      [id]
    );
  }

  insert(post) {
    return this.database.query(
      `INSERT INTO ${this.table} (content, author) values (?,1)`,
      [post.content]
    );
  }

  delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
  }

  update(post) {
    return this.database.query(
      `UPDATE ${this.table} SET content = ? where id = ?`,
      [post.content, post.id]
    );
  }
}

export default PostManager;
