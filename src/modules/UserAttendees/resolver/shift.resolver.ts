// controllers/shift.controller.ts
import { Body, Controller, Post } from '@nestjs/common';
import { CreateShiftDto } from '../dto/input/create-shift.input';
import { ShiftEntity } from '../entiies/shifts.entity';
import { ShiftService } from '../shift.service';

@Controller('shift')
export class ShiftController {
    constructor(private readonly shiftService: ShiftService) {}

    @Post()
    async createShift(
        @Body() createShiftDto: CreateShiftDto,
    ): Promise<ShiftEntity> {
        return await this.shiftService.createShift(
            createShiftDto.name,
            createShiftDto.date,
        );
    }
}
