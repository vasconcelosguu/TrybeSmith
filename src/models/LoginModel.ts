import { Pool, ResultSetHeader } from 'mysql2/promise';
import { ILogin } from '../interfaces';

export default class LoginModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async checkUser(user: ILogin): Promise<any> {
    const [result] = await this.connection.execute<ResultSetHeader>(
      'SELECT * FROM Trybesmith.users WHERE username = ?',
      [user],
    );

    return result;
  }
}