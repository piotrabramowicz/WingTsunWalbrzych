"use client";

import Image from "next/image";
import MasterImage from "@/public/images/Leung-Ting1.jpg"



export default function Sijo() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">          
            <div className="mx-auto max-w-3xl">
            <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
            Sijo Leung Ting
            </h1>
          <div>
            <Image
              className="opacity-50 grayscale"
              src={MasterImage}
              width={500}
              height={500}
              priority
              alt="test"
            />
            <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
   Sijo Leung Ting rozpoczął trening Wing Tsun w wieku 13 lat.
Jego pierwszymi instruktorami byli bracia jego matki, Cheng Fook i Cheng Pak, którzy uczęszczali do szkoły Yip Mana. Leung Ting kontynuował naukę u Leung Sheunga, pierwszego ucznia Yip Mana w Hongkongu. W wieku 18 lat został asystentem w klubie Cheng Fooka i Cheng Paka, pomagając im w nauczaniu.
W wieku 19 lat Leung Ting otworzył pierwszy klub dla studentów w Hong Kong Baptist College, który szybko zdobył popularność i przyciągnął ponad 120 członków. Po sześciu latach treningu został zaakceptowany przez mistrza Yip Mana jako prywatny uczeń. Ze względu na jego zaawansowanie, Yip Man rozpoczął nauczanie od technik manekina. Po krótkiej demonstracji 108 technik Muk Yan Ching, Yip Man zauważył: „Ting, zrobiłeś chyba 208 ruchów…”, co wskazywało na różnice w przekazie jego pierwszego instruktora. Yip Man skorygował wszystkie formy Leung Tinga i nauczył go technik długiego kija oraz noży Bartchamdao.
W 1969 roku Leung Ting został głównym instruktorem Ving Tsun Athletic Association. Po śmierci Yip Mana w 1972 roku założono International Wing Tsun Association oraz Leung Ting Gym w Hongkongu. Aby odróżnić swój przekaz, Leung Ting używał pisowni „Wing Tsun”.
              </p>
          </div>        
          </div>       
          </div>
        </div>
      </section>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}