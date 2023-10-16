"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

interface ProvivdersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvivdersProps) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
