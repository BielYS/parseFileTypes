export const parseString = (value: string): string | null => {
    return value.trim() === "" ? null : value.trim();
  };  