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
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsEnum(FinancialRecordType)
  @IsNotEmpty()
  type: FinancialRecordType;

  @IsDate()
  @IsOptional()
  date?: Date;
}
