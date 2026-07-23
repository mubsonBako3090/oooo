import { useState, useEffect } from 'react';
import * as budgetService from '../services/budget.service';

export const useBudget = () => {
  const [budgets, setBudgets] = useState([]);
    const [loading, setLoading] = useState(false);

      useEffect(() => {
          setLoading(true);
              budgetService.getAll()
                    .then(({ data }) => setBudgets(data.data || []))
                          .catch(() => {})
                                .finally(() => setLoading(false));
                                  }, []);

                                    return { budgets, loading };
                                    };