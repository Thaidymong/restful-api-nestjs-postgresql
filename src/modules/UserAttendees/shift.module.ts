// user-attendee.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShiftEntity } from './entiies/shifts.entity';
import { ShiftController } from './resolver/shift.resolver';
import { ShiftService } from './shift.service';

@Module({
    imports: [TypeOrmModule.forFeature([ShiftEntity])],
    controllers: [ShiftController],
    providers: [ShiftService],
})
export class ShiftModule {}
