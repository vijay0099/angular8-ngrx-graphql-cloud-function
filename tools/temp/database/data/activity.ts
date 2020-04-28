export const COLLECTION: any = {
    1: {
      activity: 'type',
      description: 'Project creatiing',
      status: 1,
      is_deleted: 0,
      created_at: '2019-02-12 12:53',
      updated_at: null
    }
  };

  export function findCollectionById(id: number) {
    return COLLECTION[id];
  }