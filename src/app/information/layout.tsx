import type { Metadata } from "next";
import { Lora } from "next/font/google";
import Loading from "./loading";

const lora = Lora({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "Informatin Page",
};

export default function InformationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section style={lora.style}>
      <div>
        <Loading></Loading>
      </div>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav></nav>

      {children}
    </section>
  );
}
