"use server";
import { cookies } from "next/headers";

export async function setLocaleCookie(locale: 'pt' | 'en') {
  const store = await cookies();
  store.set("ren_portfolio_locale", locale);
}
