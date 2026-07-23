import { useEffect } from 'react';
import { useRequisitionStore } from '../store/requisitionStore';

export const useRequisitions = (params = {}) => {
  const { requisitions, loading, error, pagination, fetchAll } =
      useRequisitionStore();

        useEffect(() => {
            fetchAll(params);
              }, []);

                return { requisitions, loading, error, pagination, refetch: () => fetchAll(params) };
                };