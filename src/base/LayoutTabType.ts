export const LayoutTabType = {
  New: "New",
  Library: "Library",
  Processing: "Processing",
  Settings: "Settings",
} as const;

export type LayoutTabType = typeof LayoutTabType[keyof typeof LayoutTabType];
