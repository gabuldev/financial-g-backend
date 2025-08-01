import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { FinancialRecordType } from 'src/schemas/financial-record.schema';

export class CreateFinancialRecordDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the financial record',
    example: 'Salary',
    required: true,
    type: String,
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The description of the financial record',
    example: 'Salary received from work',
    required: false,
    type: String,
  })
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The amount of the financial record',
    example: 1000,
    required: true,
    type: Number,
  })
  amount: number;

  @IsEnum(FinancialRecordType)
  @IsNotEmpty()
  @ApiProperty({
    description: 'The type of the financial record',
    example: FinancialRecordType.INCOME,
    required: true,
    type: String,
  })
  type: FinancialRecordType;

  @IsDate()
  @IsOptional()
  @ApiProperty({
    description: 'The date of the financial record',
    example: '2021-01-01',
    required: false,
    type: Date,
  })
  date?: Date;
}
