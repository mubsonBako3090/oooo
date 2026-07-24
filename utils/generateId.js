export const generateReqNumber = () => {
      const year = new Date().getFullYear();
        const rand = Math.floor(1000 + Math.random() * 9000);
          return `REQ-${year}-${rand}`;
          };

          export const generateLPONumber = () => {
            const year = new Date().getFullYear();
              const rand = Math.floor(1000 + Math.random() * 9000);
                return `LPO-${year}-${rand}`;
                };
