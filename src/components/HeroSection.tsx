import { ArrowRight, CalendarDays, ShieldCheck, Target, UserRound } from "lucide-react";
import draVanessa from "@/assets/dra-vanessa.png";
import logoVanessa from "@/assets/logo-vanessa.png";
import BackgroundIcons from "./BackgroundIcons";
import {
  BreathTestIcon,
  DysbiosisIcon,
  IntestineIcon,
  MotilityIcon,
  PyloriIcon,
  SiboIcon,
} from "./OrganIcons";

const WHATSAPP_URL =
  "https://wa.me/558596265262?text=Olá!%20Vi%20o%20anúncio%20no%20Google%20e%20gostaria%20de%20mais%20informações.";

const features = [
  { icon: Target, label: ["Diagnóstico", "preciso"] },
  { icon: IntestineIcon, label: ["Exames", "avançados"] },
  { icon: UserRound, label: ["Atendimento", "humanizado"] },
  { icon: ShieldCheck, label: ["Tratamento", "personalizado"] },
];

const focusAreas = [
  { icon: DysbiosisIcon, label: ["Disbiose"] },
  { icon: SiboIcon, label: ["SIBO e IMO"] },
  { icon: PyloriIcon, label: ["H. pylori"] },
  { icon: MotilityIcon, label: ["Motilidade"] },
  { icon: BreathTestIcon, label: ["Teste", "respiratório"] },
];

const smallCaps = "font-body text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.18em]";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      <BackgroundIcons />

      <div
        className="relative z-10 mx-auto grid min-h-screen max-w-[1760px] px-6 sm:px-10 lg:px-[6vw]
          grid-cols-1 [grid-template-areas:'logo'_'intro'_'photo'_'organs'_'body']
          lg:grid-cols-[minmax(0,50%)_minmax(0,1fr)_auto] xl:grid-cols-[minmax(0,52%)_minmax(0,1fr)_auto] lg:grid-rows-[auto_auto_1fr]
          lg:[grid-template-areas:'logo_photo_organs'_'intro_photo_organs'_'body_photo_organs']"
      >
        {/* Logo */}
        <header className="[grid-area:logo] pt-8 lg:pt-10">
          <img
            src={logoVanessa}
            alt="Dra. Vanessa Marques - Gastroenterologia e Endoscopia Digestiva"
            className="h-20 sm:h-24 lg:h-[clamp(116px,15vh,150px)] -ml-2 brightness-0 invert opacity-95"
          />
        </header>

        {/* Selo + título */}
        <div className="[grid-area:intro] pt-10 sm:pt-14 lg:pt-[clamp(2rem,8vh,6rem)]">
          <p className={`${smallCaps} flex items-center gap-4 text-foreground/80 mb-5 lg:mb-6`}>
            Saúde digestiva é qualidade de vida
            <span className="h-px w-12 sm:w-16 bg-gold/70" aria-hidden="true" />
          </p>

          <h1 className="font-display font-semibold text-foreground leading-[1.08] tracking-[-0.01em] text-[clamp(2.1rem,7.6vw,3.25rem)] lg:text-[clamp(2.75rem,4.1vw,4.75rem)]">
            Descubra a causa exata <br className="hidden xl:block" />
            do seu{" "}
            <span className="underline decoration-gold decoration-[2px] underline-offset-[0.18em]">
              desconforto
            </span>{" "}
            <br className="hidden xl:block" />
            digestivo!
          </h1>
        </div>

        {/* Foto da doutora */}
        <div className="[grid-area:photo] relative flex justify-center items-end mt-6 lg:mt-0 lg:justify-center">
          {/* Frase lateral */}
          <div className="absolute z-20 left-0 top-[6%] sm:left-[6%] lg:left-[-6%] lg:top-[19%] xl:left-[-2%]">
            <p className={`${smallCaps} flex items-start gap-3 text-foreground/85 leading-[1.9]`}>
              <span className="mt-[0.9em] h-px w-6 sm:w-9 bg-gold/70 shrink-0" aria-hidden="true" />
              <span>
                Seu intestino
                <br />
                também fala.
              </span>
            </p>
            <p className="font-display italic text-gold-light text-lg sm:text-xl lg:text-2xl pl-9 sm:pl-12 mt-1">
              Vamos ouvir?
            </p>
          </div>

          <img
            src={draVanessa}
            alt="Dra. Vanessa Marques"
            className="relative z-10 w-[78%] max-w-[420px] sm:max-w-[460px] lg:w-auto lg:max-w-none lg:h-[min(82vh,920px)] object-contain object-bottom drop-shadow-2xl lg:translate-x-[10%] xl:translate-x-[6%]
              [mask-image:linear-gradient(to_bottom,black_82%,transparent)] lg:[mask-image:linear-gradient(to_bottom,black_94%,transparent)]"
          />
        </div>

        {/* Áreas de foco */}
        <ul
          className="[grid-area:organs] relative z-20 grid grid-cols-5 gap-1 sm:gap-2 -mt-6 pb-10
            lg:mt-0 lg:pb-0 lg:flex lg:flex-col lg:gap-[clamp(1rem,2.4vh,1.5rem)] lg:self-center lg:pl-6 xl:pl-10"
          aria-label="Áreas de foco"
        >
          {/* Linha vertical que conecta os círculos (desktop) */}
          <span
            className="hidden lg:block absolute left-[calc(1.5rem+28px)] xl:left-[calc(2.5rem+28px)] top-7 -bottom-16 w-px bg-gold/50"
            aria-hidden="true"
          />
          {focusAreas.map(({ icon: Icon, label }) => (
            <li key={label[0]} className="relative flex flex-col items-center gap-2 lg:flex-row lg:gap-5">
              <span className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-gold/60 bg-background/80 text-gold-light backdrop-blur-sm">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
              </span>
              <span
                className={`${smallCaps} text-[8.5px] sm:text-[10px] leading-[1.5] tracking-[0.08em] sm:tracking-[0.18em] text-center lg:text-left text-foreground/80`}
              >
                {label[0]}
                {label[1] && (
                  <>
                    <br />
                    {label[1]}
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>

        {/* Benefícios, texto e CTA */}
        <div className="[grid-area:body] pb-14 lg:pb-[clamp(2.5rem,8vh,5rem)]">
          <ul className="grid grid-cols-2 gap-y-5 gap-x-4 sm:flex sm:flex-wrap sm:items-center sm:gap-y-4 xl:flex-nowrap mt-2 lg:mt-[clamp(1.5rem,4vh,2.75rem)]">
            {features.map(({ icon: Icon, label }, i) => (
              <li
                key={label[0]}
                className={`flex items-center gap-3 sm:pr-3 2xl:pr-5 ${i > 0 ? "sm:pl-3 2xl:pl-5 sm:border-l sm:border-gold/40" : ""} ${i === 2 ? "lg:max-xl:border-l-0 lg:max-xl:pl-0" : ""}`}
              >
                <Icon className="h-7 w-7 2xl:h-8 2xl:w-8 shrink-0 text-gold-light" strokeWidth={1.3} />
                <span className={`${smallCaps} text-[9px] sm:text-[10px] leading-[1.7] tracking-[0.14em] 2xl:tracking-[0.18em] whitespace-nowrap text-foreground/80`}>
                  {label[0]}
                  <br />
                  {label[1]}
                </span>
              </li>
            ))}
          </ul>

          <div className="border-l border-gold/70 pl-5 sm:pl-6 mt-8 lg:mt-[clamp(1.5rem,4.5vh,3rem)] max-w-[62ch]">
            <p className="font-body text-sm md:text-[15px] leading-[1.75] text-foreground/80 [text-wrap:pretty]">
              Sofre com estufamento, gases, refluxo, desconfortos abdominais ou alterações intestinais? Agende sua
              consulta ou seu teste respiratório para SIBO e IMO (disbioses) com a{" "}
              <strong className="font-semibold text-foreground">Dra. Vanessa Marques em Fortaleza.</strong> Tenha uma
              avaliação completa e detalhada na consulta para um diagnóstico preciso e um tratamento correto.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6 2xl:gap-10 mt-8 lg:mt-[clamp(1.75rem,5vh,3rem)]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 whitespace-nowrap rounded-md bg-foreground px-8 xl:px-10 py-[1.1rem] font-body text-sm font-semibold uppercase tracking-[0.16em] text-[hsl(var(--hero-mid))] shadow-[0_10px_30px_-12px_hsl(var(--hero-dark)/0.8)] transition-colors duration-300 hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-fit"
            >
              Agendar consulta
              <ArrowRight className="h-4 w-4" />
            </a>

            <div className="flex items-center gap-3">
              <CalendarDays className="h-7 w-7 text-gold" strokeWidth={1.3} />
              <span className={`${smallCaps} text-[9px] sm:text-[10px] leading-[1.7] whitespace-nowrap text-foreground/80`}>
                Atendimento em Fortaleza - CE
                <br />
                ou online para todo o Brasil
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
