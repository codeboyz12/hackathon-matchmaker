import { redirect } from "next/navigation";
import { CURRENT_USER_ID } from "@/data/mockData";

export default function ProfileRedirectPage() {
  redirect(`/profile/${CURRENT_USER_ID}`);
}