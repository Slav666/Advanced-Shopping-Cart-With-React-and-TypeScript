import { createContext, ReactNode, useContext } from "react";
const ShoppingCartContext = createContext({});

export function useSoppingCart() {
  return useContext(ShoppingCartContext);
}
type ShoppingCartProviderProps = {
  children: ReactNode;
};
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
