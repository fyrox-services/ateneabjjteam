import { Check } from "@/components/icons/Check";
import { Warning } from "@/components/icons/Warning";
import { Loader } from "@/components/react/Loader";
import { useState } from "react";

type SendState = "off" | "sending" | "error" | "success";

export function useLoader() {
  const [loading, setLoading] = useState<SendState>("off");

  function submitStateContent() {
    if (loading === "error") {
      return (
        <>
          <span>Error</span>
          <Warning size={25} />
        </>
      );
    }
    if (loading === "success") {
      return (
        <>
          <span>Calculado</span>
          <Check size={25} />
        </>
      );
    }
    if (loading === "sending") return <Loader />;

    return "Enviar";
  }

  return {
    submitStateContent,
    loading,
    setLoading,
  };
}
