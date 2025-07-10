import css from "@/styles/components/MainForm.module.css";
import { useStore } from "@nanostores/react";
import { modality } from "@/stores";
import { useForm } from "react-hook-form";
import { useHandleForm } from "@/hooks/useHandleForm";
import type { AllFormFields, Modality } from "@/types";
import { FEEDBACK_MESSAGES } from "@/data/feedbackMessages";
import { OptGroup } from "./OptGroup";

interface Props {
  style?: string;
}

const slectModality: Modality[] = ["kimono - gi", "grappling - nogi", "niños"];

export function MainForm({ style = "" }: Props) {
  const $modality = useStore(modality);

  const { defaultValues, loading, onSubmit, submitStateContent } =
    useHandleForm<AllFormFields>(
      {
        name: "",
        email: "",
        phone: "",
        modality: $modality,
        hours: "",
      },
      "/forms/meeting-2-form"
    );

  const {
    register,
    setValue,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues });

  function renderOptionsHours() {
    if ($modality === "kimono - gi") return <OptGroup options={"gi"} />;
    if ($modality === "grappling - nogi") return <OptGroup options={"nogi"} />;
    if ($modality === "niños") return <OptGroup options={"kids"} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`fade-in-move-up  ${css.Form} ${css[style]}`}
    >
      <header>
        <h2>rellena los campos</h2>
        <p>nos pondremos en contacto contigo para acordar el día</p>
      </header>

      {/*  nombre */}

      <div className={css.Field}>
        <label htmlFor="name">nombre</label>
        <input
          id="name"
          type="text"
          {...register("name", {
            required: FEEDBACK_MESSAGES.ERROR.NAME,
          })}
        />
      </div>

      {/*  email */}

      <div className={css.Field}>
        <label htmlFor="email">email</label>
        <input id="email" type="email" />
      </div>

      {/*  teléfono */}

      <div className={css.Field}>
        <label htmlFor="phone">teléfono</label>
        <input id="phone" type="tel" />
      </div>

      {/*  modalidad */}

      <div className={`${css.Field} ${css.Modality}`}>
        <label className={css.Label} htmlFor="modality">
          modalidad
        </label>
        <select
          id="modality"
          {...register("modality", {
            required: FEEDBACK_MESSAGES.ERROR.MODALITY,
            onChange: (e) => {
              modality.set(e.target.value);
              setValue("hours", "");
            },
          })}
        >
          <option value="" disabled>
            -- Selccione --
          </option>
          {slectModality.map((modality, i) => {
            return (
              <option key={i} value={modality}>
                {modality}
              </option>
            );
          })}
        </select>
      </div>

      {/*  horario */}

      <div className={`${css.Field} ${css.Hours}`}>
        <label className={css.Label} htmlFor="hours">
          horario
        </label>
        <select
          id="hours"
          {...register("hours", {
            required: FEEDBACK_MESSAGES.ERROR.MODALITY,
          })}
        >
          <option defaultValue="" disabled value="">
            -- Selccione --
          </option>

          {renderOptionsHours()}
        </select>
      </div>

      {/*  mensaje */}

      <div className={`${css.Field} ${css.Msg}`}>
        <label htmlFor="msg">mensaje</label>
        <textarea id="msg"></textarea>
      </div>

      {/* política de privacidad  */}

      <div className={`${css.Field} ${css.Legal}`}>
        <label htmlFor="legal">
          <input id="legal" type="checkbox" />
          <span>
            Acepto la
            <a href="/legal/politica-privacidad/"> política de privacidad</a>
          </span>
        </label>
      </div>

      {/* submit */}

      <button className={`btn ${css.Submit}`} type="submit">
        enviar
      </button>
    </form>
  );
}
