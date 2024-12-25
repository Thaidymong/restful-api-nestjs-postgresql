import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';
import { UserAttendeeShiftsEntity } from './user-attendee-shift.entity';

@Entity('shift')
export class ShiftEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    date: string;

    @OneToMany(
        () => UserAttendeeShiftsEntity,
        (userAttendeeShift) => userAttendeeShift.shift,
    )
    eventAttendeeShifts: UserAttendeeShiftsEntity[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
