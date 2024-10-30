import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      {" "}
      {/* making this flex to center all the sections */}
      <Intro />
      <SectionDivider />
    </main>
  );
}
