import { Module } from '@nestjs/common';
import { OutcomeService } from './outcome.service';
import { OutcomeController } from './outcome.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [OutcomeController],
  providers: [OutcomeService],
})
export class OutcomeModule {}
