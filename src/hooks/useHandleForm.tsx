import { Check } from "@/components/icons/Check";
import { Warning } from "@/components/icons/Warning";
import { Loader } from "@/components/react/Loader";
import { FEEDBACK_MESSAGES } from "@/data/feedbackMessages";
import { MODE, PUBLIC_API_URL } from "@/env";
import { analysisData } from "@/helpers/analysisData";
import { useState } from "react";

type SendState = "off" | "sending" | "error" | "success";

export function useHandleForm<T>(defaultValues: T, route: string) {
  const [loading, setLoading] = useState<SendState>("off");

  function submitStateContent() {
    if (loading === "error") {
      return (
        <>
          <span>{FEEDBACK_MESSAGES.ERROR.GENERAL}</span>
          <Warning size={25} />
        </>
      );
    }
    if (loading === "success") {
      return (
        <>
          <span>{FEEDBACK_MESSAGES.SUCCESS.SUCCESS_SENDING}</span>
          <Check size={25} />
        </>
      );
    }
    if (loading === "sending") return <Loader />;

    return "Enviar";
  }

  async function onSubmit(values: T) {
    try {
      setLoading("sending");
      const url = `${PUBLIC_API_URL}${route}`;

      const dataToSend = {
        ...values,
        analysisData: analysisData(),
      };

      const result = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await result.json();

      if (MODE === "development") console.log(data);

      if (data.details) throw new Error(FEEDBACK_MESSAGES.ERROR.FIELDS_INVALID);
      if (!result.ok) throw new Error(FEEDBACK_MESSAGES.ERROR.GENERAL);

      setLoading("success");
      console.log(values);
    } catch (error) {
      console.log(`el error al enviar el formulario es: ${error}`);
      setLoading("error");
    }
  }

  return {
    loading,
    defaultValues,
    submitStateContent,
    onSubmit,
  };
}
