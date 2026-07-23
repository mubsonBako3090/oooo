export const formatDate = (date) => {
      if (!date) return '—';
        return new Date(date).toLocaleDateString('en-NG', {
            day:   '2-digit',
                month: 'long',
                    year:  'numeric',
                      });
                      };

                      export const formatDateTime = (date) => {
                        if (!date) return '—';
                          return new Date(date).toLocaleString('en-NG');
                          };

                          export const timeAgo = (date) => {
                            if (!date) return '—';
                              const diff = Math.floor((Date.now() - new Date(date)) / 1000);
                                if (diff < 60)    return `${diff}s ago`;
                                  if (diff < 3600)  return `${Math.floor(diff / 60)}m ago`;
                                    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
                                      return `${Math.floor(diff / 86400)}d ago`;
                                      };
