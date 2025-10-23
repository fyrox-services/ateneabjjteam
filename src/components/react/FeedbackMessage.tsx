import css from "@/styles/components/FeedbackMessage.module.css";

interface Props {
  children: React.ReactNode;
  light?: "light";
}

export function FeedbackMessage({ children, light }: Props) {
  return <p className={`${css.Msg} ${css[light ?? ""]}`}>{children}</p>;
}
