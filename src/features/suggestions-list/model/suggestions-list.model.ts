import { SuggestionEntity } from "./entities";
import { useFilters } from "./filters.model";

function containsIgnoreCase(main: string, sub: string) {
  const mainLower = main.toLowerCase();
  const subLower = sub.toLowerCase();

  return mainLower.includes(subLower);
}

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

    if (
      filtersData.tag &&
      !item.tags.some((tag) => tag.id === filtersData.tag)
    ) {
      return false;
    }

    const containsTitle = containsIgnoreCase(item.title, filtersData.query);
    const containsDescription = containsIgnoreCase(
      item.description,
      filtersData.query,
    );

    if (filtersData.query && !(containsTitle || containsDescription)) {
      return false;
    }

    return true;
  });

  return preparedData;
}
