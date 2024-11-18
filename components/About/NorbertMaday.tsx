"use client";

import Image from "next/image";
import MasterImage from "@/public/images/madaj-689x1024.jpg"



export default function Sikung() {
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
           Sikung Norbert Maday
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
               Sikung Maday Norbert rozpoczął trening Wing Tsun w wieku 14 lat w dawnej kwaterze głównej w Jugosławii. Jego pierwszym nauczycielem był Sifu Slavko Truntic, który w latach 70. nawiązał kontakt z Sijo Leung Tingiem, tworząc pierwsze stowarzyszenie Wing Tsun na terenie dawnego bloku wschodniego. W 1989 roku, kiedy Sikung Maday Norbert posiadał już pierwszy stopień mistrzowski, zorganizowano pierwsze seminarium na Węgrzech. Od tego czasu Dai Sifu stał się prywatnym uczniem Sijo Leung Tinga.
               Leung Ting regularnie odwiedza główną kwaterę w Kecskemét na Węgrzech, gdzie prowadzi treningi dla około 100 instruktorów. Ci instruktorzy zarządzają klubami Wing Tsun w różnych krajach, w tym na Węgrzech, w Polsce, na Litwie, Łotwie, Estonii, Ukrainie oraz Rumunii.
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