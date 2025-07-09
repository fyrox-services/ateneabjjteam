import type { Hours } from "@/types";
import css from "@/styles/components/Hours.module.css";

interface Props {
  hours: Hours[];
}

export function TableHours({ hours }: Props) {
  return (
    <ul className={css.Table}>
      {hours.map(({ day, hour }, i) => {
        return (
          <li key={i}>
            <h4>{day}</h4>
            <p>{hour}</p>
          </li>
        );
      })}
    </ul>
  );
}
