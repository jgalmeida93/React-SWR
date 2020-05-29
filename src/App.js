import React from "react";

import { SWRConfig } from "swr";
import "rbx/index.css";

import Crimes from "./components/Crimes";

export default function App() {
  const fetcher = (...args) => fetch(...args).then((resp) => resp.json());

  return (
    <SWRConfig value={{ fetcher, revalidateOnFocus: false }}>
      <Crimes />
    </SWRConfig>
  );
}
