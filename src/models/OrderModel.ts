import { Pool, RowDataPacket } from 'mysql2/promise';

export default class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async GetAllOrders(): Promise<RowDataPacket[]> {
    const [result] = await this.connection.execute<RowDataPacket[]>(`
    SELECT o.id,o.user_id as userId, json_arrayagg(p.id) as productsIds
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products as p
    ON o.id = p.order_id
    GROUP BY o.id
    `);
    return result;
  }
}