import { PUBLIC_API_URL } from "@/env";
import type { DataToLocation } from "@/types";

type Result = {
  origin: string;
  car: string;
  walk: string;
  bike: string;
};

export async function sendAddress(data: DataToLocation) {
  const url = `${PUBLIC_API_URL}/forms/api-location`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Dirección no encontrada')
  }
  const result = await response.json();
  return result as Result;
}
