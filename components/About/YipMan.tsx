"use client";

import Image from "next/image";
import MasterImage from "@/public/images/Yip_Man.jpg"



export default function YipMan() {
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
            GGM Ip Man
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
                Wielki Mistrz Yip Man, urodzony w 1893 roku w Fat Shan, od wczesnych lat życia fascynował się sztukami walki. Jego pierwszym nauczycielem Wing Tsun był Chan Wah Shun, pierwszy uczeń Leung Jana. Po śmierci Chan Wah Shuna, Yip Man kontynuował naukę u Ng Chu So. Jego umiejętności szybko zdobyły uznanie w okolicy, a on sam stał się niepokonanym ekspertem w sztukach walki.
W wieku 15 lat Yip Man przeprowadził się do Hong Kongu, gdzie przez cztery lata trenował pod kierunkiem Leung Bika, syna Leung Jana. W latach 1914-1937 pracował w armii i policji. Od 1941 roku zaczął uczyć Wing Tsun w jednej z licznych przędzalni w Hong Kongu, jednak w 1946 roku musiał na pewien czas zawiesić nauczanie.
W 1950 roku, mając 57 lat, Yip Man otworzył swoją pierwszą oficjalną szkołę Wing Tsun, mieszczącą się przy Związku Zawodowym Pracowników Restauracji w Hong Kongu. Początkowo miał zaledwie ośmiu uczniów, ale z czasem liczba zainteresowanych jego stylem rosła. Szkoła Yip Mana wielokrotnie zmieniała lokalizację, ale liczba uczniów stale się zwiększała.
W wieku 72 lat Yip Man zamknął swoją oficjalną szkołę i przeszedł na emeryturę, jednak nie zaprzestał nauczania. Udzielał lekcji prywatnie w swoim mieszkaniu, przekazując swoją wiedzę niewielkiej grupie uczniów aż do swojej śmierci 2 grudnia 1972 roku. Zmarł w wieku 79 lat w swoim mieszkaniu na ulicy Tong Choi.
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