import { Model } from "sequelize";
import { AllowNull, BelongsTo, Column, ForeignKey, PrimaryKey } from "sequelize-typescript";
import CustomerModel from "./customer.model";

export default class OrderModel extends Model {

  @PrimaryKey
  @Column
  declare id: string;

  @ForeignKey(() => CustomerModel)
  @Column({ allowNull: false })
  declare customer_id: string;

  @BelongsTo(() => CustomerModel)
  declare customer: CustomerModel;

  @Column({ allowNull: false })
  declare total: number;
}