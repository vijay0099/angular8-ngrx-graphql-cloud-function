
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CatInput {
    name: string;
    age?: number;
    id?: number;
}

export interface DogInput {
    name: string;
    age?: number;
    id?: number;
}

export interface ElephantInput {
    name: string;
    age?: number;
    id?: number;
}

export interface PostInput {
    title: string;
    id?: number;
    description?: string;
}

export interface Cat {
    id?: number;
    name?: string;
    age?: number;
}

export interface Dog {
    id?: number;
    name?: string;
    age?: number;
}

export interface Elephant {
    id?: number;
    name?: string;
    age?: number;
}

export interface IMutation {
    createDog(dog?: DogInput): string | Promise<string>;
    updateDog(dog?: DogInput): string | Promise<string>;
    deleteDog(id: string): string | Promise<string>;
    createPost(post?: PostInput): string | Promise<string>;
    updatePost(post?: PostInput): string | Promise<string>;
    deletePost(id: string): string | Promise<string>;
    createCat(cat?: CatInput): string | Promise<string>;
    updateCat(cat?: CatInput): string | Promise<string>;
    deleteCat(id: string): string | Promise<string>;
    createElephant(elephant?: ElephantInput): string | Promise<string>;
    updateElephant(elephant?: ElephantInput): string | Promise<string>;
    deleteElephant(id: string): string | Promise<string>;
}

export interface Post {
    id?: number;
    title?: string;
    description?: string;
}

export interface IQuery {
    getDogs(): Dog[] | Promise<Dog[]>;
    dog(id: string): Dog | Promise<Dog>;
    getPosts(): Post[] | Promise<Post[]>;
    post(id: string): Post | Promise<Post>;
    getCats(): Cat[] | Promise<Cat[]>;
    cat(id: string): Cat | Promise<Cat>;
    getElephants(): Elephant[] | Promise<Elephant[]>;
    elephant(id: string): Elephant | Promise<Elephant>;
}
