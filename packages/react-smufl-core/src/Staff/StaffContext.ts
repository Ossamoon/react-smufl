import { createContext, useContext } from 'react';

const StaffContext = createContext<{
  lines: 1 | 2 | 3 | 4 | 5 | 6;
} | null>(null);

export const StaffContextProvider = StaffContext.Provider;

export const useStaffContext = () => {
  const context = useContext(StaffContext);
  if (context === null) {
    throw new Error('useStaffContext Component must be used within a Score Component');
  }
  return context;
};
