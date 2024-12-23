import {
    Entity,
    ManyToOne,
    JoinColumn,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';
import { UserAttendeeEntity } from './user-attendee.entity';
import { ShiftEntity } from './shifts.entity';

@Entity('user_attendee_shifts')
export class UserAttendeeShiftsEntity {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => UserAttendeeEntity, (attendee) => attendee.shifts)
    @JoinColumn({ name: 'user_attendee_id' })
    event_attendee: UserAttendeeEntity;

    @ManyToOne(() => ShiftEntity, (shift) => shift.eventAttendeeShifts)
    @JoinColumn({ name: 'shift_id' })
    shift: ShiftEntity;

    @Column({ type: 'boolean', default: false })
    attend: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
