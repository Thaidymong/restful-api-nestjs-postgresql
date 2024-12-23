import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { UserAttendeeEnum } from 'src/enums/user-attendee-status-enums';
import { UserAttendeeShiftsEntity } from './user-attendee-shift.entity';

@Entity('user_attendee')
export class UserAttendeeEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    user_name: string;

    @Column()
    contact_name: string;

    @Column()
    email: string;

    @Column()
    tel: string;

    @Column({ type: 'enum', enum: UserAttendeeEnum })
    status: UserAttendeeEnum;

    @OneToMany(() => UserAttendeeShiftsEntity, (shift) => shift.event_attendee)
    shifts: UserAttendeeShiftsEntity[];

    @Column({ type: 'boolean', default: false })
    is_lunch: boolean;

    @Column({ type: 'boolean', default: false })
    is_dinner: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
