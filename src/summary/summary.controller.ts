import { Controller, Get } from '@nestjs/common';
import { SummaryService } from './summary.service';

@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  @Get()
  getSummary() {
    console.log('in get summary');
    return this.summaryService.calculateSummary();
  }
}
