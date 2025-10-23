import { sendAddress } from "@/services/sendAddress";
import css from "@/styles/components/APILocation.module.css";
import type { DataToLocation } from "@/types";
import { useState, type FormEvent } from "react";
import { Car } from "@/components/icons/Car";
import { Bike } from "../icons/Bike";
import { Walk } from "../icons/Walk";
import { useLoader } from "@/hooks/useLoader";
import { FeedbackMessage } from "./FeedbackMessage";
import { isModalActive } from "@/stores";
import { Reset } from "../icons/Reset";

export function APILocation() {
  const initialPlace = {
    origin: "",
    car: "",
    walk: "",
    bike: "",
  };
  const { submitStateContent, setLoading, loading } = useLoader();
  const [error, setError] = useState("");
  const [place, setPlace] = useState(initialPlace);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    const data = Object.fromEntries(fields) as DataToLocation;

    if (data.address === "") {
      return setError("Introduce una dirección");
    }
    if (data.address.length < 5) {
      return setError("escribe al menos 5 caracteres");
    }
    setLoading("sending");

    sendAddress(data)
      .then((result) => {
        setPlace(result);
        setLoading("success");
      })
      .catch((error: Error) => {
        setLoading("error");
        setError(error.message);
      });
  }

  function reset() {
    setPlace(initialPlace);
    setLoading("off");
    setError("");
  }

  return (
    <div className={`${css.Container} wrapper-max`}>
      <h2 className={css.H2}>Mira en cuánto tiempo llegas</h2>
      <p className={css.Text}>
        introduce la dirección de tu casa o trabajo y verás cuánto tienes de
        camino hasta la academia
      </p>
      <form onSubmit={onSubmit} className={css.Form}>
        <div className={css.Field}>
          <input
            onInput={() => setError("")}
            autoComplete="off"
            id="address"
            name="address"
            className={css.Input}
            type="text"
            placeholder="Calle Alcalá 302, 28027"
          />
          {error !== "" && (
            <FeedbackMessage light="light">{error}</FeedbackMessage>
          )}
        </div>
        <button
          disabled={loading !== "off"}
          className={`${css.Submit} ${css[loading]} btn`}
          type="submit"
        >
          {submitStateContent()}
        </button>
        <button type="reset" onClick={reset} className={css.Reset}>
          <Reset />
        </button>
      </form>
      {place.origin && (
        <div className={`${css.Result} fade-in-move-up`}>
          <span className={css.From}>desde</span>
          <p className={css.Place}>{place.origin}</p>
          <ul className={css.Modes}>
            <li>
              <Car />
              {place.car}
            </li>
            <li>
              <Bike />
              {place.bike}
            </li>
            <li>
              <Walk />
              {place.walk}
            </li>
          </ul>
          <button
            onClick={() => isModalActive.set(true)}
            className={`${css.Cita} btn`}
          >
            reservar clase de prueba
          </button>
        </div>
      )}
    </div>
  );
}
