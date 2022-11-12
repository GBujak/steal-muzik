import { LayoutTabType } from "./LayoutTabType";
import { Component, Index } from "solid-js";
import { FaSolidPlus, FaSolidBook, FaSolidBarsProgress, FaSolidGear } from "solid-icons/fa";
import { Dynamic } from "solid-js/web";

interface Props {
  currentTab: LayoutTabType;
  onCurrentTabChange: (newTab: LayoutTabType) => void;
}

export function Sidebar(props: Props) {
  const topSidebarOptions = (Object.keys(LayoutTabType) as LayoutTabType[]).filter((it) => it !== "Settings");

  return (
    <div class="flex h-screen flex-col bg-slate-900">
      <Index each={topSidebarOptions}>
        {(value, _index) => {
          return (
            <SidebarButton
              currentTab={props.currentTab}
              name={value()}
              onClick={() => props.onCurrentTabChange(value())}
            />
          );
        }}
      </Index>
      <div class="flex-1" />
      <SidebarButton
        currentTab={props.currentTab}
        name="Settings"
        onClick={() => props.onCurrentTabChange("Settings")}
      />
    </div>
  );
}

function SidebarButton(props: { name: LayoutTabType; currentTab: LayoutTabType; onClick: () => void }) {
  const tabNameToIcon: Record<LayoutTabType, Component> = {
    New: FaSolidPlus,
    Library: FaSolidBook,
    Processing: FaSolidBarsProgress,
    Settings: FaSolidGear,
  };

  return (
    <button
      class="m-2 flex h-16 w-16 items-center justify-center rounded-md bg-slate-700  text-slate-300 hover:bg-slate-500"
      classList={{ "bg-blue-800 hover:bg-blue-600": props.name == props.currentTab }}
      onClick={props.onClick}
    >
      <Dynamic component={tabNameToIcon[props.name]} {...{ size: 32 }} />
    </button>
  );
}
