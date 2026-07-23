import { useState, useEffect } from 'react';
import * as vendorService from '../services/vendor.service';

export const useVendors = () => {
  const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(false);

      const fetchVendors = async () => {
          setLoading(true);
              try {
                    const { data } = await vendorService.getAll();
                          setVendors(data.data || []);
                              } catch (_) {}
                                  finally { setLoading(false); }
                                    };

                                      useEffect(() => { fetchVendors(); }, []);

                                        return { vendors, loading, refetch: fetchVendors };
                                        };