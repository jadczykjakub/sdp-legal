import { IQueryAllResult } from "../models/query-all-result.model";

export function getNodes<Type>(object: IQueryAllResult<Type>): Type[] {
  return object.edges.map(({ node }) => node);
}
