// author.resolver.ts

import {
  Args,
  Query,
  Resolver,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';

// SERVICES
import { GalleryService } from './gallery.service';

// AUTO GENERATED TYPES
import {
  Gallery,
  GalleryInput
} from '@monorepo/graphql-playground/data-access-models';

@Resolver('Gallery')
export class GalleryResolver {
  constructor(private readonly galleryService: GalleryService) {}

  // QUERIES ==========================================================

  @Query()
  async getGallery(@Args('id') id: string): Promise<Gallery> {
    return this.galleryService.findGalleryById(id);
  }

  @Query()
  async getGalleries(): Promise<Gallery[]> {
    return this.galleryService.findGalleries();
  }

  // MUTATIONS ========================================================

  // CREATE
  @Mutation()
  async createGallery(@Args('data') data: GalleryInput): Promise<Gallery> {
    return this.galleryService.createNewGallery(data);
  }

  // RELATIONSHIPS [ONE-TO-MANY] ======================================
}
