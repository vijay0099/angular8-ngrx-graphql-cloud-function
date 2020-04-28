import { Injectable } from '@nestjs/common';

// AUTO GENERATED TYPES
import { Example } from '@monorepo/api/data-access-models';

@Injectable()
export class ExampleService {
  private readonly examples: any[] = [
    { id: '1', title: 'Example #1' },
    { id: '2', title: 'Example #2' },
    { id: '3', title: 'Example #3' }
  ];

  async findAll(): Promise<Example[]> {
    return this.examples;
  }
}
