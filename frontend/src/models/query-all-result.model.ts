export interface IQueryAllResult<Type> {
  edges: { node: Type }[];
  totalCount?: number;
}
