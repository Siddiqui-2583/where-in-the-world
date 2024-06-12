"use client";


import { store } from "@redux/store";
import { TChildrenProp } from "@types";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";

export default function Providers({ children }: TChildrenProp) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </Provider>
  );
}
