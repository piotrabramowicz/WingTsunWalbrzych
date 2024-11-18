import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      
     
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Dlaczego warto trenować?
            </h2>
            {/* <p className="text-lg text-indigo-200/65">
              Open AI reads and understands your files, and with nothing more
              than a single line of feedback, so you can go further than the
              speed of thought.
            </p> */}
          </div>
          
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Samoobrona
              </h3>
              <p className="text-indigo-200/65">
              To sztuka walki nastawiona na szybką i skuteczną samoobronę, koncentrująca się na witalnych punktach przeciwnika. 
              Wyróżnia ją prostota oraz jednoczesność ataku i obrony.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Zdrowie
              </h3>
              <p className="text-indigo-200/65">
              Wing Tsun pozwala zadbać o kondycję fizyczną. Ćwicząc, stajesz się sprawniejszy, silniejszy i bardziej wytrzymały. 
              Pracujesz nad koordynacją ruchową, jednocześnie podnosząc odporność organizmu.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Bezpieczeństwo
              </h3>
              <p className="text-indigo-200/65">
              Wing Tsun zapewnia bezpieczeństwo poprzez rozwijanie umiejętności szybkiego rozpoznawania zagrożeń i efektywnego reagowania. 
              Dzięki technikom opartym na precyzyjnych ruchach i minimalnej sile, umożliwia skuteczną obronę nawet wobec silniejszych przeciwników.
              </p>
            </article>
            <article>
              
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Równowaga
              </h3>
              <p className="text-indigo-200/65">
              Trening sztuk walki kształtuje charakter, uczy wytrwałości i szacunku. 
              Pozwala zdobyć unikalną wiedzę przekazywaną z pokolenia na pokolenie od ponad trzystu lat.
            </p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
              Adaptacja              
              </h3>
              <p className="text-indigo-200/65">
              Techniki Wing Tsun są uniwersalne i łatwe do dostosowania do różnych sytuacji oraz przeciwników. 
              Dzięki temu możesz nauczyć się elastycznego podejścia, które pozwala radzić sobie z różnymi wyzwaniami,
               zarówno w walce, jak i w życiu codziennym.
              </p>
            </article>
            <article>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Refleks
              </h3>
              <p className="text-indigo-200/65">
              Wing Tsun rozwija zdolność koncentracji oraz szybkość reakcji. 
              Regularne ćwiczenia uczą błyskawicznego podejmowania decyzji w sytuacjach stresowych, co znajduje zastosowanie nie tylko w 
              samoobronie, ale także w codziennym życiu, na przykład w pracy czy podczas prowadzenia pojazdu.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
