import { ResultSetHeader } from 'mysql2';
import { Pool, RowDataPacket } from 'mysql2/promise';
import { ICreateProduct } from '../interfaces';

export default class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async CreateProduct(product: ICreateProduct) {
    const [{ insertId }] = await
    this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [product.name, product.amount],
    );
    return insertId;
  }

  async GetAllProducts(): Promise<RowDataPacket[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>(
      'SELECT * FROM Trybesmith.products',
    );
    return result;
  }
}