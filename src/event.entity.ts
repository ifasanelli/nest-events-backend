import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('event', { name: 'event' })
export class Event {
  // @PrimaryColumn() // good for inherent attr, as: credit card number, social security number, phone number


  // Composite Key: Key that consists of 2 or more columns

  // Example:

  // @PrimaryColumn()
  // id: number;
  // @PrimaryColumn()
  // name: string;
  // description: string;
  // when: Date;
  // address: string;

  @PrimaryGeneratedColumn() // auto_increment int (mysql), serial (postgres), sequence (oracle)
  id: number;

  // Not all properties of an entity have to be decorated with a column decorator,
  // but all properties you want stored in the database have to have this decorator.

  // @Column('varchar', {nullable: true, unique: false})
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  when: Date;

  @Column()
  address: string;
}