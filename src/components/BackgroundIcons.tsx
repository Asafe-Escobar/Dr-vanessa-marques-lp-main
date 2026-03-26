import logoVanessa from "@/assets/logo-vanessa.png";

const BackgroundIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">

      {/* ── LOGO MARCA D'ÁGUA — centro-direita, atrás da foto ── */}
      <div className="absolute top-1/2 right-[2%] -translate-y-1/2 w-[380px] md:w-[520px] lg:w-[640px] opacity-[0.08] brightness-0 invert">
        <img src={logoVanessa} alt="" aria-hidden="true" className="w-full h-auto" />
      </div>

      {/* ── MONOGRAMA GRANDE "VM" — marca elegante no fundo ── */}
      <svg
        className="absolute top-[5%] right-[10%] w-[320px] h-[320px] opacity-[0.04]"
        viewBox="0 0 320 320"
        fill="none"
      >
        <text
          x="50%"
          y="55%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="220"
          fontFamily="'Playfair Display', serif"
          fontWeight="700"
          fill="hsl(36,45%,55%)"
          letterSpacing="-10"
        >
          VM
        </text>
      </svg>

      {/* ── GRADE DE PONTOS — textura refinada ── */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dotGrid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="hsl(36,45%,55%)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
      </svg>

      {/* ── ARCOS CURVOS — elegância da identidade visual ── */}
      <svg
        className="absolute -top-[5%] -right-[5%] w-[500px] h-[500px] opacity-[0.10]"
        viewBox="0 0 500 500"
        fill="none"
      >
        <circle cx="500" cy="0" r="220" stroke="hsl(36,45%,55%)" strokeWidth="1.2" />
        <circle cx="500" cy="0" r="300" stroke="hsl(36,45%,55%)" strokeWidth="0.7" />
        <circle cx="500" cy="0" r="380" stroke="hsl(36,45%,55%)" strokeWidth="0.4" />
      </svg>

      <svg
        className="absolute -bottom-[10%] -left-[5%] w-[380px] h-[380px] opacity-[0.08]"
        viewBox="0 0 380 380"
        fill="none"
      >
        <circle cx="0" cy="380" r="180" stroke="hsl(36,45%,55%)" strokeWidth="1.2" />
        <circle cx="0" cy="380" r="260" stroke="hsl(36,45%,55%)" strokeWidth="0.6" />
      </svg>

      {/* ── LOSANGO ORNAMENTAL — elemento de identidade ── */}
      <svg
        className="absolute top-[18%] left-[42%] w-24 h-24 opacity-[0.12]"
        viewBox="0 0 96 96"
        fill="none"
      >
        <rect x="48" y="4" width="62" height="62" rx="2" transform="rotate(45 48 4)" stroke="hsl(36,45%,55%)" strokeWidth="1" />
        <rect x="48" y="16" width="42" height="42" rx="1" transform="rotate(45 48 16)" stroke="hsl(36,45%,55%)" strokeWidth="0.6" />
      </svg>

      {/* ── LOSANGO MENOR — canto inferior ── */}
      <svg
        className="absolute bottom-[18%] right-[28%] w-14 h-14 opacity-[0.10]"
        viewBox="0 0 96 96"
        fill="none"
      >
        <rect x="48" y="4" width="62" height="62" rx="2" transform="rotate(45 48 4)" stroke="hsl(36,45%,55%)" strokeWidth="1" />
      </svg>

      {/* ── CRUZ FINA COM CÍRCULO — símbolo médico ornamental ── */}
      <svg className="absolute top-[8%] left-[50%] w-12 h-12 opacity-[0.14]" viewBox="0 0 64 64" fill="none">
        <line x1="32" y1="2" x2="32" y2="62" stroke="hsl(36,45%,55%)" strokeWidth="1" />
        <line x1="2" y1="32" x2="62" y2="32" stroke="hsl(36,45%,55%)" strokeWidth="1" />
        <circle cx="32" cy="32" r="10" stroke="hsl(36,45%,55%)" strokeWidth="0.8" />
        <circle cx="32" cy="32" r="2.5" fill="hsl(36,45%,55%)" />
      </svg>

      <svg className="absolute bottom-[12%] right-[38%] w-8 h-8 opacity-[0.11]" viewBox="0 0 64 64" fill="none">
        <line x1="32" y1="2" x2="32" y2="62" stroke="hsl(36,45%,55%)" strokeWidth="1" />
        <line x1="2" y1="32" x2="62" y2="32" stroke="hsl(36,45%,55%)" strokeWidth="1" />
        <circle cx="32" cy="32" r="10" stroke="hsl(36,45%,55%)" strokeWidth="0.8" />
      </svg>

      {/* ── LINHA HORIZONTAL COM ORNAMENTO — separador decorativo ── */}
      <svg className="absolute top-[50%] left-0 w-full h-px opacity-[0.06]" viewBox="0 0 1440 1" preserveAspectRatio="none">
        <line x1="0" y1="0.5" x2="1440" y2="0.5" stroke="hsl(36,45%,55%)" strokeWidth="1" strokeDasharray="4 12" />
      </svg>

      {/* ── LINHAS DIAGONAIS ANIMADAS ── */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0" />
            <stop offset="40%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0.08" />
            <stop offset="60%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0.08" />
            <stop offset="100%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0.05" />
            <stop offset="70%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0.05" />
            <stop offset="100%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line x1="-10%" y1="20%" x2="60%" y2="110%" stroke="url(#lineGrad1)" strokeWidth="1" className="animate-line-1" />
        <line x1="10%" y1="-10%" x2="80%" y2="100%" stroke="url(#lineGrad1)" strokeWidth="0.8" className="animate-line-2" />
        <line x1="30%" y1="-5%" x2="95%" y2="90%" stroke="url(#lineGrad2)" strokeWidth="1.2" className="animate-line-3" />
        <line x1="50%" y1="-10%" x2="110%" y2="70%" stroke="url(#lineGrad1)" strokeWidth="0.6" className="animate-line-4" />
        <line x1="-5%" y1="50%" x2="45%" y2="115%" stroke="url(#lineGrad2)" strokeWidth="0.8" className="animate-line-5" />
        <line x1="65%" y1="-15%" x2="120%" y2="55%" stroke="url(#lineGrad2)" strokeWidth="1" className="animate-line-6" />
        <line x1="20%" y1="10%" x2="75%" y2="105%" stroke="url(#lineGrad1)" strokeWidth="0.5" className="animate-line-7" />
      </svg>

      {/* ── ORBS DOURADOS ── */}
      <div className="absolute top-[15%] left-[20%] w-96 h-96 rounded-full bg-gold/[0.05] blur-3xl animate-float-4" />
      <div className="absolute bottom-[20%] right-[15%] w-72 h-72 rounded-full bg-gold/[0.04] blur-3xl animate-float-2" />
    </div>
  );
};

export default BackgroundIcons;
