import { useStore } from "@nanostores/react";
import { modality, modalContent, season } from "@/stores";
import { TableHours } from "./TableHours";
import {
  giHours,
  nogiHours,
  kidsHours,
  giHoursVerano,
  nogiHoursVerano,
  kidsHoursVerano,
} from "@/data/hours";
import css from "@/styles/components/Hours.module.css";

export function Hours() {
  function changeToForm() {
    modalContent.set("form");
  }

  const $modality = useStore(modality);
  const $season = useStore(season);

  function renderHours() {
    const gi = $season === "verano" ? giHoursVerano : giHours;
    const nogi = $season === "verano" ? nogiHoursVerano : nogiHours;
    const kids = $season === "verano" ? kidsHoursVerano : kidsHours;

    if ($modality === "kimono - gi") return <TableHours hours={gi} />;
    if ($modality === "grappling - nogi") return <TableHours hours={nogi} />;
    if ($modality === "niños") return <TableHours hours={kids} />;
  }

  return (
    <div className={`fade-in-move-up ${css.Box}`}>
      <h3 className={css.Heading}>{modality.value}</h3>
      {renderHours()}
      <button className={`btn ${css.Cta}`} onClick={changeToForm}>
        reservar clase de prueba
      </button>
    </div>
  );
}
