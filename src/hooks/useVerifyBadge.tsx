import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { api } from "../config/axios";

interface VerifyBadge{
    name:string;
    ticketTier:string;
    email:string;
    transactionId:string;
    badgeFilled:boolean;

}
export async function verifyBadge(
  idTransacion:string
): Promise<VerifyBadge | undefined> {
  if (idTransacion) {
    const { data } = await api.get(`badgeverify?transactionId=${idTransacion}`);

    const result = {
      ...data,
    } as VerifyBadge;

    return result;
  }
}

export function useVerifyBadge(idTransaction: any, options?: UseQueryOptions) {
  return useQuery(["verifyBadge",idTransaction], () => verifyBadge(idTransaction), {

  }) as UseQueryResult<VerifyBadge, unknown>;
}
