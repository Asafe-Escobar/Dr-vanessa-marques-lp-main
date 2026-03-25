const BackgroundIcons = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated diagonal lines */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0" />
            <stop offset="40%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0.06" />
            <stop offset="60%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0" />
            <stop offset="30%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0.04" />
            <stop offset="70%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0.04" />
            <stop offset="100%" stopColor="hsl(36, 45%, 55%)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Main diagonal lines - animated */}
        <line x1="-10%" y1="20%" x2="60%" y2="110%" stroke="url(#lineGrad1)" strokeWidth="1" className="animate-line-1" />
        <line x1="10%" y1="-10%" x2="80%" y2="100%" stroke="url(#lineGrad1)" strokeWidth="0.8" className="animate-line-2" />
        <line x1="30%" y1="-5%" x2="95%" y2="90%" stroke="url(#lineGrad2)" strokeWidth="1.2" className="animate-line-3" />
        <line x1="50%" y1="-10%" x2="110%" y2="70%" stroke="url(#lineGrad1)" strokeWidth="0.6" className="animate-line-4" />
        <line x1="-5%" y1="50%" x2="45%" y2="115%" stroke="url(#lineGrad2)" strokeWidth="0.8" className="animate-line-5" />
        <line x1="65%" y1="-15%" x2="120%" y2="55%" stroke="url(#lineGrad2)" strokeWidth="1" className="animate-line-6" />
        <line x1="20%" y1="10%" x2="75%" y2="105%" stroke="url(#lineGrad1)" strokeWidth="0.5" className="animate-line-7" />
      </svg>

      {/* Subtle warm gradient orbs */}
      <div className="absolute top-[15%] left-[20%] w-80 h-80 rounded-full bg-gold/[0.03] blur-3xl animate-float-4" />
      <div className="absolute bottom-[20%] right-[15%] w-64 h-64 rounded-full bg-gold/[0.02] blur-3xl animate-float-2" />
    </div>
  );
};

export default BackgroundIcons;
