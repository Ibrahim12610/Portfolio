import { redirect } from "next/navigation";
import { site } from "@/content/site";

export default function ResumePage() {
  if (site.resume.pdf) {
    redirect(site.resume.pdf);
  }

  redirect("/");
}
