import css from "@/styles/components/Forms.module.css";
import { useStore } from "@nanostores/react";
import { isModalActive, modality } from "@/stores";
import { useForm } from "react-hook-form";
import { useHandleForm } from "@/hooks/useHandleForm";
import type { AllFormFields, Modality } from "@/types";
import { FEEDBACK_MESSAGES } from "@/data/feedbackMessages";
import { OptGroup } from "./OptGroup";
import { FeedbackMessage } from "./FeedbackMessage";

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
        msg: "",
        legal: false,
      },
      {
        route: "/forms/main-form",
        successMsg: FEEDBACK_MESSAGES.SUCCESS.FREE_CLASS,
        action: () => {
          setTimeout(() => {
            isModalActive.set(false);
            document.body.classList.remove("not-scrollable");
          }, 3000);
        },
      }
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
        <p className={css.Tagline}>
          nos pondremos en contacto contigo para acordar el día
        </p>
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
        <FeedbackMessage>{errors.name?.message}</FeedbackMessage>
      </div>

      {/*  email */}

      <div className={css.Field}>
        <label htmlFor="email">email</label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: FEEDBACK_MESSAGES.ERROR.EMAIL,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: FEEDBACK_MESSAGES.ERROR.EMAIL_NOT_VALID,
            },
          })}
        />
        <FeedbackMessage>{errors.email?.message}</FeedbackMessage>
      </div>

      {/*  teléfono */}

      <div className={css.Field}>
        <label htmlFor="phone">teléfono</label>
        <input
          id="phone"
          type="tel"
          {...register("phone", {
            required: FEEDBACK_MESSAGES.ERROR.PHONE,
            pattern: {
              value: /^[\d\s()+\-]{7,}$/,
              message: FEEDBACK_MESSAGES.ERROR.PHONE_NOT_VALID,
            },
          })}
        />
        <FeedbackMessage>{errors.phone?.message}</FeedbackMessage>
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
        <FeedbackMessage>{errors.modality?.message}</FeedbackMessage>
      </div>

      {/*  horario */}

      <div className={`${css.Field} ${css.Hours}`}>
        <label className={css.Label} htmlFor="hours">
          horario
        </label>
        <select
          id="hours"
          {...register("hours", {
            required: FEEDBACK_MESSAGES.ERROR.MOMENT_NOT_VALID,
          })}
        >
          <option defaultValue="" disabled value="">
            -- Selccione --
          </option>

          {renderOptionsHours()}
        </select>
        <FeedbackMessage>{errors.hours?.message}</FeedbackMessage>
      </div>

      {/*  mensaje */}

      <div className={`${css.Field} ${css.Msg}`}>
        <label htmlFor="msg">mensaje</label>
        <textarea
          placeholder="Me viene bien este día... ¿es posible?"
          id="msg"
          {...register("msg", {
            minLength: {
              message: FEEDBACK_MESSAGES.ERROR.MSG_TOO_SHORT,
              value: 5,
            },
            required: FEEDBACK_MESSAGES.ERROR.MSG,
          })}
        ></textarea>
        <FeedbackMessage>{errors.msg?.message}</FeedbackMessage>
      </div>

      {/* política de privacidad  */}

      <div className={`${css.Field} ${css.Legal}`}>
        <label htmlFor="legal">
          <input
            id="legal"
            type="checkbox"
            {...register("legal", {
              required: FEEDBACK_MESSAGES.ERROR.LEGAL,
            })}
          />
          <span>
            Acepto la{" "}
            <a target="_blank" href="/es/legal/politica-privacidad/">
              política de privacidad
            </a>
          </span>
        </label>
        <FeedbackMessage>{errors.legal?.message}</FeedbackMessage>
      </div>

      {/* submit */}

      <button
        disabled={loading !== "off"}
        className={`${css.Submit} ${css[loading]}`}
        type="submit"
      >
        {submitStateContent()}
      </button>
    </form>
  );
}
