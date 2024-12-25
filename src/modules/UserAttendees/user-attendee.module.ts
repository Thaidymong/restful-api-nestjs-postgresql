import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShiftEntity } from './entiies/shifts.entity';
import { UserAttendeeShiftsEntity } from './entiies/user-attendee-shift.entity';
import { UserAttendeeEntity } from './entiies/user-attendee.entity';
import { UserAttendeeService } from './user-attendee.service';
import { userAttendeeController } from './resolver/user-attendee.resolver';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            ShiftEntity,
            UserAttendeeEntity,
            UserAttendeeShiftsEntity,
        ]),
    ],
    controllers: [userAttendeeController],
    providers: [UserAttendeeService],
    exports: [UserAttendeeService], // Allows reusability in other modules
})
export class UserAttendeeModule {}
