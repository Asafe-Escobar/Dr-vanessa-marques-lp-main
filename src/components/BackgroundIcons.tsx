import consultorioBg from "@/assets/consultorio-bg.jpg";
import consultorioPlanta from "@/assets/consultorio-planta.jpg";

/**
 * Fundo do hero — foto do consultório (luz de janela, plantas, poltrona)
 * com o monograma "VM" e os arcos dourados desenhados por cima.
 */

const GOLD = "hsl(var(--gold))";

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const BackgroundIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      {/* Foto do consultório */}
      <img
        src={consultorioBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[78%_100%] lg:object-[85%_100%]"
      />

      {/* Planta da esquerda — camada própria para não ser cortada pelo enquadramento */}
      <img
        src={consultorioPlanta}
        alt=""
        className="absolute bottom-0 left-0 hidden h-full w-auto max-w-none md:block [mask-image:linear-gradient(to_right,black_55%,transparent)]"
      />

      {/* Mobile/tablet: escurece a foto atrás do texto */}
      <div
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(to bottom, hsl(var(--hero-dark) / 0.15), hsl(var(--hero-dark) / 0.45) 50%, hsl(var(--hero-dark) / 0.7))",
        }}
      />
      {/* Desktop: leve escurecimento do lado do texto */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, hsl(var(--hero-dark) / 0.2) 0%, hsl(var(--hero-dark) / 0.15) 45%, transparent 70%)",
        }}
      />

      {/* Monograma VM — recortado atrás da foto */}
      <svg
        className="absolute top-[4%] right-[-6%] w-[78vw] max-w-[620px] sm:right-[-2%] lg:top-[6%] lg:right-[3%] lg:w-[42vw]"
        viewBox="0 0 600 340"
        fill="none"
      >
        <defs>
          <linearGradient id="vmFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={GOLD} stopOpacity="0.16" />
            <stop offset="100%" stopColor={GOLD} stopOpacity="0" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="80%"
          textAnchor="middle"
          fontSize="340"
          fontFamily="'Playfair Display', serif"
          fontWeight="500"
          fill="url(#vmFade)"
          letterSpacing="-24"
        >
          VM
        </text>
      </svg>

      {/* Arcos dourados nos cantos */}
      <svg
        className="absolute -top-px -left-px w-[38vw] max-w-[230px] min-w-[150px]"
        viewBox="0 0 380 380"
        fill="none"
      >
        <path d="M0 230 A 260 260 0 0 0 230 0" stroke={GOLD} strokeOpacity="0.55" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>
      <svg
        className="absolute -bottom-px -right-px w-[50vw] max-w-[420px] min-w-[200px]"
        viewBox="0 0 420 420"
        fill="none"
      >
        <path d="M420 150 A 280 280 0 0 0 150 420" stroke={GOLD} strokeOpacity="0.55" strokeWidth="1" vectorEffect="non-scaling-stroke" />
      </svg>

      {/* Granulação fina */}
      <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: GRAIN }} />
    </div>
  );
};

export default BackgroundIcons;
