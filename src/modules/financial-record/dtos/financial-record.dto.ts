import { ApiProperty } from '@nestjs/swagger';
import { FinancialRecordType } from 'src/schemas/financial-record.schema';

export class FinancialRecordDto {
  @ApiProperty({
    description: 'The name of the financial record',
    example: 'Salary',
    required: true,
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'The description of the financial record',
    example: 'Salary received from work',
    required: false,
    type: String,
  })
  description: string;

  @ApiProperty({
    description: 'The amount of the financial record',
    example: 1000,
    required: true,
    type: Number,
  })
  amount: number;

  @ApiProperty({
    enum: FinancialRecordType,
    required: true,
  })
  type: FinancialRecordType;

  @ApiProperty({
    description: 'The date of the financial record',
    example: '2021-01-01',
    required: true,
    type: Date,
  })
  date: Date;
}
