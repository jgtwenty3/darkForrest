import Hero from "@/components/Hero";
import Offerings from "@/components/Offerings";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <div className="dark:bg-black">
      <Hero/>
      <WhatWeDo/>
      <Offerings/>
    </div>
  );
}
