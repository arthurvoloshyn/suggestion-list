import { SuggestionEntity } from "./entities";
import { useFilters } from "./filters.model";

export function useSuggestionsList() {
  const data: SuggestionEntity[] = [
    {
      id: 1,
      createdAt: new Date(),
      description: "Description",
      title: "title 1",
      grade: 4,
      status: { id: 1, label: "Opened" },
      tags: [{ id: 1, label: "Tag 1" }],
    },
    {
      id: 2,
      createdAt: new Date(Date.now() - 100000000),
      description: "Description",
      title: "title 2",
      grade: 6,
      status: { id: 2, label: "Closed" },
      tags: [{ id: 2, label: "Tag 2" }],
    },
  ];

  const { data: filtersData } = useFilters();

  let preparedData = data;

  preparedData = preparedData.filter((item) => {
    if (filtersData.status && filtersData.status !== item.status.id) {
      return false;
    }

    return true;
  });

  return preparedData;
}
