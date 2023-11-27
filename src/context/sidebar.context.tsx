import { FC, createContext, useCallback, useState, ReactNode } from 'react';

interface SidebarContextProps {
  open: boolean;
  toggle: () => void;
  close: () => void;
}

export const SidebarContext = createContext<SidebarContextProps>({
  open: false,
  toggle: () => {},
  close: () => {},
});

interface SidebarProviderProps {
  children: ReactNode;
}

export const SidebarProvider: FC<SidebarProviderProps> = ({ children }) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setOpen((prevOpen: boolean) => !prevOpen);
  }, [setOpen]);

  const close = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  return (
    <SidebarContext.Provider value={{
      open,
      toggle,
      close,
    }}>
      {children}
    </SidebarContext.Provider>
  );
};
