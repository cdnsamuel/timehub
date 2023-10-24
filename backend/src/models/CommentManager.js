import AbstractManager from "./AbstractManager.js"

class CommentManager extends AbstractManager {
  constructor() {
    super({ table: "comments" })
  }

  findAll() {
    return this.database.query(
      `SELECT c.id, c.content, p.id as pid, u.id as uid FROM  ${this.table} c JOIN posts p ON c.post_id = p.id JOIN users u ON c.author = u.id;`
    )
  }

  find(id) {
    return this.database.query(
      `SELECT c.id, c.content, p.id as pid, u.id as uid FROM  ${this.table} c JOIN posts p ON c.post_id = p.id JOIN users u ON c.author = u.id where p.id = ?;`,
      [id]
    )
  }

  insert(post) {
    return this.database.query(
      `INSERT INTO ${this.table} (content, post_id, author) values (?,?,?)`,
      [post.content, post.post_id, 1]
    )
  }

  delete(id) {
    return this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id])
  }

  update(comment) {
    return this.database.query(
      `UPDATE ${this.table} SET content = ?, post_id = ?, author = ? where id = ?`,
      [comment.content, comment.post_id, comment.author, comment.id]
    )
  }
}
export default CommentManager
