export const metadata = {
  title: "Wing Tsun Wałbrzych",
  description: "Wing Tsun Wałbrzych",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Features from "@/components/features";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Features />
      <Cta />
    </>
  );
}
