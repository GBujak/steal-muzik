import { createSignal } from "solid-js";
import { LayoutTabType } from "./LayoutTabType";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const [tab, setTab] = createSignal<LayoutTabType>(LayoutTabType.New);

  return (
    <div class="flex h-screen w-screen bg-slate-800">
      <Sidebar currentTab={tab()} onCurrentTabChange={setTab} />
    </div>
  );
}
