import { ResultSetHeader } from 'mysql2';
import { Pool } from 'mysql2/promise';
import { ICreateUser } from '../interfaces';

export default class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async CreateUser(user: ICreateUser) {
    const [{ insertId }] = await
    this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
      [user.username, user.vocation, user.level, user.password],
    );
    return insertId;
  }
}