import { ArrowRight, MapPin, Users, ShieldCheck, Instagram } from "lucide-react";
import draVanessa from "@/assets/dra-vanessa.png";
import logoVanessa from "@/assets/logo-vanessa.png";
import BackgroundIcons from "./BackgroundIcons";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Gold top bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />

      <BackgroundIcons />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Logo */}
        <header className="px-6 pt-6 md:px-16 md:pt-10">
          <img
            src={logoVanessa}
            alt="Dra. Vanessa Marques - Gastroenterologia e Endoscopia Digestiva"
            className="h-20 md:h-28 lg:h-32 brightness-0 invert"
          />
        </header>

        {/* Main content */}
        <div className="flex-1 flex flex-col-reverse lg:flex-row items-center lg:items-end px-6 md:px-16 pb-0 lg:pb-0">
          {/* Text content */}
          <div className="relative z-20 flex-1 flex flex-col justify-center py-6 lg:py-20 lg:pb-32 max-w-2xl -mt-16 lg:mt-0">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-8">
              Descubra a causa exata do seu{" "}
              <span className="underline decoration-gold decoration-2 underline-offset-4">
                desconforto digestivo
              </span>
              !
            </h1>

            <div className="border-l-2 border-gold pl-5 mb-8">
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-body">
                Sofre com estufamento, gases, refluxo, dores abdominais ou alterações intestinais? Agende sua consulta{" "}
                <strong className="text-foreground">com a Dra. Vanessa Marques em Fortaleza.</strong>{" "}
                Tenha uma avaliação completa e acesso a exames como a endoscopia digestiva alta e o teste respiratório para um diagnóstico preciso e um tratamento correto.
              </p>
            </div>

            <a
              href="https://wa.me/558596265262?text=Olá!%20Vi%20o%20anúncio%20no%20Google%20e%20gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-foreground text-background font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-lg hover:bg-gold hover:text-primary-foreground transition-all duration-300 w-fit"
            >
               AGENDAR CONSULTA
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Photo */}
          <div className="relative flex-shrink-0 lg:flex-1 flex justify-center lg:justify-end items-end">
            <img
              src={draVanessa}
              alt="Dra. Vanessa Marques"
              className="w-72 sm:w-80 md:w-96 lg:w-[480px] xl:w-[540px] object-contain drop-shadow-2xl"
            />
            {/* Gradient overlay on mobile - bottom fade into background */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent lg:hidden" />
          </div>
        </div>

        {/* Footer badges */}
        <footer className="relative z-10 px-6 md:px-16 py-5 flex flex-wrap items-center gap-4 md:gap-8 border-t border-muted/30">
          <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm font-body">
            <MapPin className="w-4 h-4 text-gold" />
            Fortaleza
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm font-body">
            <Users className="w-4 h-4 text-gold" />
            +10 anos de experiência
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-xs md:text-sm font-body">
            <ShieldCheck className="w-4 h-4 text-gold" />
            Médica de Confiança
          </div>
          <div className="ml-auto">
            <a
              href="https://www.instagram.com/vanessamarquesgastro/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-muted/50 rounded-full px-4 py-2 text-muted-foreground hover:text-gold hover:border-gold transition-colors text-xs md:text-sm font-body"
            >
              <Instagram className="w-4 h-4" />
              @vanessamarquesgastro
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default HeroSection;
