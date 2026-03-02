import type { StateCreator } from "zustand/vanilla";
import { persist, type PersistOptions } from "zustand/middleware";
import { create } from "zustand/react";

import { reportException } from "./report";

export const createPersistMiddleware = <T>(
  name: string,
  storeCreator: StateCreator<T>,
  option?: Omit<PersistOptions<T>, "name">,
) => create<T>(reportException<T>(persist(storeCreator, { name: name || "z:root", ...option }) as StateCreator<T>));
