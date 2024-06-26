import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/select";

const FiltersProjects = () => {
  const filtersCategories = [
    { key: "all", label: "Tous les projets" },
    { key: "front", label: "Frontend" },
    { key: "back", label: "Backend" },
    { key: "rv", label: "Réaaaaaaa" },
  ];

  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        color="secondary"
        label="Filtrer les projets"
        className="max-w-xs"
      >
        {filtersCategories.map((cat) => (
          <SelectItem key={cat.key}>{cat.label}</SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default FiltersProjects;
