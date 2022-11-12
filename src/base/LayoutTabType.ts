export const LayoutTabType = {
  New: "New",
  Library: "Library",
  Processing: "Processing",
} as const;

export type LayoutTabType = typeof LayoutTabType[keyof typeof LayoutTabType];
