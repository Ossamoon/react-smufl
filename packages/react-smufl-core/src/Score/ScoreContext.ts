import { createContext, useContext } from 'react';

const ScoreContext = createContext<{
  unit: number;
} | null>(null);

export const ScoreContextProvider = ScoreContext.Provider;

export const useScoreContext = () => {
  const context = useContext(ScoreContext);
  if (context === null) {
    throw new Error('useScoreContext Component must be used within a Score Component');
  }
  return context;
};
