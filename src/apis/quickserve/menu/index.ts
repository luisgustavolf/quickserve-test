import { QuickServeApi } from "..";
import { Menu } from "./menu";

export async function getMenu() {
  const url = '/menu'
  return await QuickServeApi.get<Menu>(url)
} 