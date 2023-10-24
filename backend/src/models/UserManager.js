import AbstractManager from "./AbstractManager.js"

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" })
  }

  insert(item) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      item.title,
    ])
  }

  update(item) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [item.title, item.id]
    )
  }
}

export default UserManager
