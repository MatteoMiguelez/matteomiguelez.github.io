import { getProjectFullList } from "@/data/getProjectFullList.js";

export function getProjectById(id) {
    return getProjectFullList().find((element) => String(element.id) === String(id))
}