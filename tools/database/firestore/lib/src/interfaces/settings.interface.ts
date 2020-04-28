import { Naming } from '../enums/naming.enum';
import { Data } from '../types/data.type';

export interface Settings {
  root: {
    rootCollectionDataSource: Data;
    rootCollectionName: string;
    rootDocNamingMethod?: Naming;
    rootDocNamingDefinition?: Array<string>;
    rootCleaningDefinition?: Array<string>;
    hasNestedCollection?: boolean;
  };
  nested?: {
    nestedDocNamingMethod: Naming;
    nestedCollectionDataSource: any;
    nestedCollectionName: string;
    nestedDocNamingDefinition?: Array<string>;
    nestedCleaningDefinition?: Array<string>;
    jointFieldName?: string;
  };
}
