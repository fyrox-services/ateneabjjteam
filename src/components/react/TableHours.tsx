import type { Hours } from "@/types";
import css from "@/styles/components/Hours.module.css";
import { modalContent } from "@/stores";

interface Props {
  hours: Hours[];
}

export function TableHours({ hours }: Props) {
  function changeToForm() {
    modalContent.set("form");
  }

  return (
    <ul className={css.Table}>
      {hours.map(({ day, hour }, i) => {
        return (
          <li onClick={changeToForm} key={i}>
            <h4>{day}</h4>
            <p>{hour}</p>
          </li>
        );
      })}
    </ul>
  );
}
