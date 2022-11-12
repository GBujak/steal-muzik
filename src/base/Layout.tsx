import { createSignal, Match, Switch } from "solid-js";
import { New } from "../views/new/New";
import { LayoutTabType } from "./LayoutTabType";
import { Sidebar } from "./Sidebar";

export function Layout() {
  const [tab, setTab] = createSignal<LayoutTabType>(LayoutTabType.New);

  return (
    <div class="flex h-screen w-screen bg-slate-800">
      <Sidebar currentTab={tab()} onCurrentTabChange={setTab} />

      <div class="flex-1">
        <Switch>
          <Match when={tab() === "New"}>
            <New />
          </Match>
        </Switch>
      </div>
    </div>
  );
}
