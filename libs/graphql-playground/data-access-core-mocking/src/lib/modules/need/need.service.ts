import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  Need,
  NeedInput,
  Child
} from '@monorepo/graphql-playground/data-access-models';

// FAKE DATA
import { needs, children } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class NeedService {
  private readonly needs: any[] = needs;
  private readonly children: any[] = children;

  // QUERIES ========================================================

  async findNeedById(id: string): Promise<Need> {
    return this.needs.find(need => need.id === id);
  }

  async findAllNeeds(): Promise<Need[]> {
    return this.needs;
  }

  // MUTATIONS ========================================================

  async createNewNeed(need: NeedInput): Promise<Need> {
    const newNeed: any = {
      id: `${need.belongsTo}_${uuidv4()}`,
      ...need
    };
    console.log('New need created: ', { ...newNeed });
    this.needs.push(newNeed);
    return newNeed;
  }

  // RELATIONSHIPS [ONE-TO-ONE] ======================================

  async findChildById({ childId: childId }): Promise<Child[]> {
    return this.children.find(user => user.id === childId);
  }
}
