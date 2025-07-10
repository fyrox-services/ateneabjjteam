import { useStore } from "@nanostores/react";
import { modality, modalContent } from "@/stores";
import type { Hours } from "@/types";
import { TableHours } from "./TableHours";
import { giHours, kidsHours, nogiHours } from "@/data/hours";
import css from "@/styles/components/Hours.module.css";

export function Hours() {
  function changeToForm() {
    modalContent.set("form");
  }

  const $modality = useStore(modality);

  function renderHours() {
    if ($modality === "kimono - gi") {
      return <TableHours hours={giHours} />;
    }

    if ($modality === "grappling - nogi") {
      return <TableHours hours={nogiHours} />;
    }

    if ($modality === "niños") {
      return <TableHours hours={kidsHours} />;
    }
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
