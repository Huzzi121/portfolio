import { ProjectsClient } from "./ProjectsClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Huzaifa Ahmed",
  description: "A collection of my software engineering and creative development projects.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
