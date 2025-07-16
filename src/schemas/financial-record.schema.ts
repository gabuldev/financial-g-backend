import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export enum FinancialRecordType {
  INCOME = 'income',
  EXPENSE = 'expense',
  TRANSFER = 'transfer',
}

export type FinancialRecordDocument = HydratedDocument<FinancialRecord>;

@Schema()
export class FinancialRecord {
  @Prop({
    required: true,
  })
  name: string;

  @Prop()
  description: string;

  @Prop({
    required: true,
  })
  amount: number;

  @Prop({
    enum: FinancialRecordType,
    required: true,
  })
  type: FinancialRecordType;

  @Prop({ type: Date, default: Date.now })
  date: Date;
}

export const FinancialRecordSchema =
  SchemaFactory.createForClass(FinancialRecord);
