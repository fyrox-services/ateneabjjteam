import { useStore } from "@nanostores/react";
import { season } from "@/stores";
import { allHours, allHoursVerano } from "@/data/hours";
import type { AllHours } from "@/types";

interface Props {
  options: keyof AllHours;
}

export function OptGroup({ options }: Props) {
  const $season = useStore(season);
  const hours = $season === "verano" ? allHoursVerano : allHours;

  return hours[options].map(({ hours, label }, i) => {
    return (
      <optgroup key={i} label={label}>
        {hours.map((value, i) => {
          return (
            <option key={i} value={`${label} | ${value}`}>
              {value}
            </option>
          );
        })}
      </optgroup>
    );
  });
}
