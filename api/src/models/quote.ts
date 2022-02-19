import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Generated } from 'typeorm'
import { CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class Quote extends BaseEntity {
  @PrimaryGeneratedColumn()
  quote_id!: number

  @Column()
  @Generated("uuid")
  uuid!: string

  @Column()
  firstName!: string

  @Column()
  middleName?: string

  @Column()
  lastName!: string

  @Column()
  mobileNumber!: string

  @Column()
  email!: string

  @Column()
  relationshipStatus!: string

  @Column()
  afterTaxIncome!: number

  @Column()
  afterTaxIncomeFrequency!: string

  @Column()
  occupation!: string

  @Column()
  currentEmployer!: string

  @Column()
  timeInCurrentEmploymentYear!: number

  @Column()
  timeInCurrentEmploymentMonth!: number

  @Column()
  dependants!: number

  // @Column("simple-json")
  // quote_data: Record<string, any>

  @CreateDateColumn()
  created_at!: Date
}
