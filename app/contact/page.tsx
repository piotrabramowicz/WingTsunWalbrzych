export const metadata = {
  title: "Wing Tsun Wałbrzych",
  description: "Wing Tsun Wałbrzych",
};
  
  import Link from "next/link";
  
  export default function Contact() {
    return (
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Skontaktuj się z nami

              </h1>
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
Jesteśmy dostępni aby odpowiedzieć na Twoje pytania. Skorzystaj z poniższych danych kontaktowych.
              </p>
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={100}
              >
tel: 576666144              </p>
            </div>  
          </div>
        </div>
      </section>
    );
  }