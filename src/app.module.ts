import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IncomeService } from './income/income.service';
import { IncomeModule } from './income/income.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig, { CONFIG_DATABASE } from './config/database.config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        return {
          uri: configService.get(CONFIG_DATABASE).users.uri,
        };
      },
      inject: [ConfigService],
    }),
    IncomeModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService, IncomeService],
})
export class AppModule {}
