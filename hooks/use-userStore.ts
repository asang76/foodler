import zustandStorage from "@/utils/zustandStorage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserState {
  isGuest: boolean;
  setIsGuest: (isGuest: boolean) => void;
  user: any;
  setUser: (user: any) => void;
}
const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isGuest: false,
      setIsGuest: (isGuest: boolean) => set({ isGuest }),
      user: null,
      setUser: (user: any) => set({ user }),
    }),
    {
      name: "user",
      storage: createJSONStorage(() => zustandStorage),
    },
  ),
);

export default useUserStore;
