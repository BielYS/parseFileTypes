export const parseNumber = (value: any): number | null => {
    const parsed = parseFloat(value);
    return isNaN(parsed) ? null : parsed;
  };  