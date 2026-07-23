import { useState, useEffect } from 'react';
import * as approvalService from '../services/approval.service';

export const useApprovals = () => {
  const [queue,   setQueue]   = useState([]);
    const [loading, setLoading] = useState(false);

      const fetchQueue = async () => {
          setLoading(true);
              try {
                    const { data } = await approvalService.getQueue();
                          setQueue(data.data || []);
                              } catch (_) {}
                                  finally { setLoading(false); }
                                    };

                                      useEffect(() => { fetchQueue(); }, []);

                                        return { queue, loading, refetch: fetchQueue };
                                        };