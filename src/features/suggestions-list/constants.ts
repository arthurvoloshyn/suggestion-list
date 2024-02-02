import { SuggestionOrder } from "./model/filters.model";

export const tagsOptions = [
  { id: undefined, label: "No tag" },
  { id: 1, label: "Tag 1" },
  { id: 2, label: "Tag 2" },
  { id: 3, label: "Tag 3" },
];

export const statusOptions = [
  { id: undefined, label: "Any" },
  { id: 1, label: "Opened" },
  { id: 2, label: "Closed" },
];

export const sortOptions = [
  { id: "createAt-desc", label: "By date of creation" },
  { id: "grade-desc", label: "By popularity" },
] satisfies Array<{ id: SuggestionOrder; label: string }>;
