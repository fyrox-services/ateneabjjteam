import { allHours } from "@/data/hours";
import type { AllHours } from "@/types";

interface Props {
  options: keyof AllHours;
}

export function OptGroup({ options }: Props) {
  return allHours[options].map(({ hours, label }, i) => {
    return (
      <optgroup key={i} label={label}>
        {hours.map((value, i) => {
          return (
            <option key={i} value={value}>
              {value}
            </option>
          );
        })}
      </optgroup>
    );
  });
}
