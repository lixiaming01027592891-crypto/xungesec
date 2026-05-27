import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

interface AppContextType {
  isMenuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  toggleMenu: () => void;
  isLoading: boolean;
  setIsLoading: (v: boolean) => void;
}

const AppContext = createContext<AppContextType>({
  isMenuOpen: false,
  setMenuOpen: () => {},
  toggleMenu: () => {},
  isLoading: true,
  setIsLoading: () => {},
});

export function AppProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev);
  }, []);

  return (
    <AppContext.Provider value={{ isMenuOpen, setMenuOpen, toggleMenu, isLoading, setIsLoading }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
