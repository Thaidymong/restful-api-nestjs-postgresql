import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UsersModule } from './modules/Users/users.module';
import { ExampleModule } from './modules/example';
import { CategoryModule } from './modules/Category/category.module';
import { ProductModule } from './modules/Products/product.module';
import { BusinessDirectoryCategoryModule } from './modules/BusinessDirectoryCategory/business-directory-category.module';
import { CitiesModule } from './modules/cities/cities.module';
import { UserAttendeeModule } from './modules/UserAttendees/user-attendee.module';
import { ShiftModule } from './modules/UserAttendees/shift.module';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: +configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_NAME'),
                entities: [join(process.cwd(), 'dist/**/*.entity.js')],
                // do NOT use synchronize: true in real projects
                synchronize: true,
            }),
        }),
        CitiesModule,
        UsersModule,
        ExampleModule,
        CategoryModule,
        ProductModule,
        BusinessDirectoryCategoryModule,
        UserAttendeeModule,
        ShiftModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
