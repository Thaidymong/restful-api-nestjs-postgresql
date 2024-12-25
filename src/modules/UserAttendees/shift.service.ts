// services/shift.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ShiftEntity } from './entiies/shifts.entity';

@Injectable()
export class ShiftService {
    constructor(
        @InjectRepository(ShiftEntity)
        private readonly shiftRepository: Repository<ShiftEntity>,
    ) {}

    async createShift(name: string, date: string): Promise<ShiftEntity> {
        const newShift = this.shiftRepository.create({ name, date });
        return await this.shiftRepository.save(newShift);
    }
}
