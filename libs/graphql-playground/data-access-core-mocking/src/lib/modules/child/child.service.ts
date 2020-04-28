import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

// AUTO GENERATED TYPES
import {
  Child,
  ChildInput,
  Need
} from '@monorepo/graphql-playground/data-access-models';

import { children, needs } from '@monorepo/graphql-playground/data-access-data';

@Injectable()
export class ChildService {
  private readonly children: any[] = children;
  private readonly needs: any[] = needs;

  // QUERIES ========================================================

  async findChildById(id: string): Promise<Child> {
    return this.children.find(child => child.id === id);
  }

  async findAllChildren(): Promise<Child[]> {
    return this.children;
  }

  // MUTATIONS ========================================================

  async createNewChild(child: ChildInput): Promise<Child> {
    const newChild: any = {
      id: uuidv4(),
      ...child
    };
    console.log('New child created: ', { ...child });
    this.children.push(newChild);
    return newChild;
  }

  // DELETE
  async deleteChild(id: string): Promise<any> {
    const userIndex = this.children.findIndex(child => child.id === id);

    if (userIndex === -1) {
      throw new Error('User not found.');
    }

    // DELETE CHILD
    const deletedChild = this.children.splice(userIndex, 1);

    let childNeeds;

    // DELETE CHILD NEEDS
    childNeeds = this.needs.filter(need => {
      const match = need.childId === id;
      return !match;
    });

    return deletedChild[0];
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================

  async filterNeedsByChildId({ id }): Promise<Need[]> {
    return this.needs.filter(need => need.childId === id);
  }
}
