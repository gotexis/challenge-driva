import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, Generated } from 'typeorm'

@Entity()
export class Quote extends BaseEntity {
  @PrimaryGeneratedColumn()
  quote_id!: number

  @Column()
  @Generated("uuid")
  uuid!: string

  @Column()
  status: number

  @Column()
  mobile: string

  @Column()
  email: string

  @Column("simple-json")
  quote_data: Record<string, any>

  @Column()
  created_at!: Date

}
