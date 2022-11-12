import { LayoutTabType } from "./LayoutTabType";
import { Index } from "solid-js";

interface Props {
  currentTab: LayoutTabType;
  onCurrentTabChange: (newTab: LayoutTabType) => void;
}

function SidebarButton(props: { name: string; currentTab: string; onClick: () => void }) {
  return (
    <button
      class="m-2 flex h-16 w-16 items-center justify-center rounded-md bg-slate-700  text-slate-300 hover:bg-slate-500"
      classList={{ "bg-blue-800 hover:bg-blue-600": props.name == props.currentTab }}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}

export function Sidebar(props: Props) {
  return (
    <div class="flex h-screen flex-col bg-slate-900">
      <Index each={Object.keys(LayoutTabType) as LayoutTabType[]}>
        {(value, _index) => {
          return (
            <SidebarButton
              currentTab={props.currentTab}
              name={value()}
              onClick={() => {
                props.onCurrentTabChange(value());
              }}
            />
          );
        }}
      </Index>
      <div class="flex-1" />
      <SidebarButton currentTab={props.currentTab} name="Settings" onClick={() => {}} />
    </div>
  );
}
