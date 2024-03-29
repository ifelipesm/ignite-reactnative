
import { ProductContext } from "@contexts/ProductContext";
import { useContext } from "react";


export function useProduct(){
  const contextData = useContext(ProductContext);
  return contextData;
}