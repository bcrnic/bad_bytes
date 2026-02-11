// Hero Section Content
export const heroContent = {
  headline: "Web Development Studio u Novom Sadu",
  subheadline: "Brzi sajtovi, web aplikacije i landing stranice koje konvertuju. Izgrađeno modernim tehnologijama, isporučeno na vreme.",
  primaryCta: "Zatražite ponudu",
  secondaryCta: "Pogledajte ponudu",
  trustBadges: [
    "SEO optimizovano",
    "Fokus na performanse",
    "Čist kod",
    "Brza isporuka",
    "Transparentne cene",
  ],
};

// Services Content
export const servicesContent = {
  sectionTitle: "Usluge",
  sectionSubtitle: "Šta radimo",
  sectionDescription: "Kompletna web rešenja prilagođena vašim poslovnim ciljevima",
  services: [
    {
      id: "landing-pages",
      title: "Landing stranice",
      description: "Landing stranice fokusirane na konverziju, dizajnirane da prikupe kontakte i pokrenu akciju. Idealne za kampanje i generisanje leadova.",
      timeline: "1-2 nedelje",
      priceNote: "Od 500€",
      features: ["Optimizovano za konverziju", "Spremno za A/B testiranje", "Integrisana analitika"],
    },
    {
      id: "business-websites",
      title: "Poslovni sajtovi",
      description: "Profesionalni višestranični sajtovi koji grade kredibilitet i predstavljaju vaše usluge. SEO optimizovani i mobile-first.",
      timeline: "2-4 nedelje",
      priceNote: "Od 1.500€",
      features: ["Višestranična struktura", "CMS integracija", "SEO osnova"],
    },
    {
      id: "web-apps",
      title: "Web aplikacije",
      description: "Custom web aplikacije izgrađene sa React/Next.js i modernim API-jima. Skalabilne, sigurne i prilagođene vašem poslovanju.",
      timeline: "4-12 nedelja",
      priceNote: "Od 800€",
      features: ["React/Next.js", "API integracija", "Autentifikacija korisnika"],
    },
    {
      id: "maintenance",
      title: "Održavanje i podrška",
      description: "Održavamo vaš sajt sigurnim, brzim i ažurnim. Redovna ažuriranja, backup i prioritetna podrška kad vam zatreba.",
      timeline: "Kontinuirano",
      priceNote: "Od 50€/mesečno",
      features: ["Sigurnosna ažuriranja", "Monitoring performansi", "Prioritetna podrška"],
    },
  ],
};

// Work/Portfolio Content
export const workContent = {
  sectionTitle: "Radovi",
  sectionSubtitle: "Nedavni projekti",
  sectionDescription: "Izabrane studije slučaja koje demonstriraju stvarne rezultate",
  projects: [
    {
      id: "hair-salon",
      title: "Frizerski Studio",
      category: "Sistem za zakazivanje",
      result: "70% manje propuštenih termina",
      problem: "Frizerski salon se mučio sa telefonskim zakazivanjem, duplim terminima i nedolascima koji koštaju prihod",
      solution: "Izgrađen moderan sajt sa integrisanim online zakazivanjem, automatskim SMS podsetnnicima i upravljanjem kalendarom zaposlenih",
      outcome: "Online zakazivanje sada čini 85% termina, oslobađajući vreme osoblja i značajno smanjujući nedolaske",
      techStack: ["React", "Supabase", "Tailwind", "Twilio"],
      image: "/placeholder.svg",
      demoUrl: "#",
    },
    {
      id: "electrician",
      title: "Elektro",
      category: "Poslovni sajt",
      result: "3x više upita za usluge",
      problem: "Lokalni električar bez online prisustva, gubi klijente konkurentima koji imaju sajtove",
      solution: "Kreiran profesionalni sajt sa jasnim cenama, područjima rada, hitnim kontaktom i formom za ponudu",
      outcome: "Prva strana Google-a za lokalne pretrage, konstantan priliv novih upita svake nedelje",
      techStack: ["React", "Tailwind", "Formspree", "Vercel"],
      image: "/placeholder.svg",
      demoUrl: "#",
    },
    {
      id: "marketing-agency",
      title: "Digital",
      category: "Agencijski sajt",
      result: "40% više kvalifikovanih leadova",
      problem: "Marketing agencija sa zastarelim sajtom koji nije odražavao njihove moderne usluge i ekspertizu",
      solution: "Dizajniran upečatljiv sajt fokusiran na konverziju sa studijama slučaja, paketima usluga i integrisanim prikupljanjem leadova",
      outcome: "Kvalitetniji leadovi, kraći prodajni ciklus i poboljšana percepcija brenda među enterprise klijentima",
      techStack: ["Next.js", "Framer Motion", "Tailwind", "HubSpot"],
      image: "/placeholder.svg",
      demoUrl: "#",
    },
    {
      id: "real-estate",
      title: "Residence",
      category: "Nekretnine",
      result: "15 stanova prodato za 2 meseca",
      problem: "Investitor u nekretnine trebao premium prezentacioni sajt za prodaju stanova u novoj stambenoj zgradi",
      solution: "Izgrađena elegantna prezentacija nekretnine sa 3D planovima, virtuelnim turama, filteriranjem stanova i direktnim formama za upit",
      outcome: "Profesionalno online prisustvo pomoglo bržem zatvaranju prodaja, kupci navode sajt kao ključan u odluci",
      techStack: ["React", "Three.js", "Tailwind", "Supabase"],
      image: "/placeholder.svg",
      demoUrl: "#",
    },
  ],
};

// Testimonials Content
export const testimonialsContent = {
  sectionTitle: "Utisci",
  sectionSubtitle: "Šta klijenti kažu",
  sectionDescription: "Ne verujte samo nama na reč",
  testimonials: [
    {
      id: "1",
      name: "Marija Petrović",
      role: "Vlasnica",
      company: "Frizerski Studio",
      quote: "Bad Byte je potpuno transformisao naše poslovanje. Novi sistem za zakazivanje radi besprekorno, klijenti lako zakazuju online, a mi imamo mnogo manje propuštenih termina. Preporučujem svima!",
      rating: 5,
    },
    {
      id: "2",
      name: "Dragan Nikolić",
      role: "Vlasnik",
      company: "Elektro",
      quote: "Pre sajta sam gubio posao jer me ljudi nisu mogli naći online. Sada sam prvi na Google-u za električarske usluge u Novom Sadu. Pozivi stižu svake nedelje. Najbolja investicija!",
      rating: 5,
    },
    {
      id: "3",
      name: "Ana Jovanović",
      role: "Direktor marketinga",
      company: "Digital",
      quote: "Profesionalni, brzi i zaista razumeju šta nam treba. Redizajn sajta nam je doneo značajno više kvalitetnih upita. Fantastična saradnja od početka do kraja.",
      rating: 5,
    },
    {
      id: "4",
      name: "Milan Stojanović",
      role: "Investitor",
      company: "Residence",
      quote: "Sajt za prezentaciju zgrade je prevazišao sva očekivanja. Profesionalan izgled, laka navigacija, kupci su oduševljeni. Stanovi su se prodavali brže nego što smo očekivali.",
      rating: 5,
    },
  ],
};

// Contact Section Content
export const contactContent = {
  sectionTitle: "Kontakt",
  sectionSubtitle: "Hajde da sarađujemo",
  sectionDescription: "Imate projekat na umu? Javite nam se.",
  formLabels: {
    name: "Ime",
    email: "Email",
    budget: "Budžet",
    message: "Poruka",
    submit: "Pošaljite poruku",
  },
  budgetOptions: [
    { value: "", label: "Izaberite opseg budžeta (opciono)" },
    { value: "under-1k", label: "Do 1.000€" },
    { value: "1k-5k", label: "1.000€ - 5.000€" },
    { value: "5k-10k", label: "5.000€ - 10.000€" },
    { value: "10k-plus", label: "10.000€+" },
    { value: "not-sure", label: "Nisam siguran/a" },
  ],
  processSteps: [
    {
      step: 1,
      title: "Pošaljite detalje",
      description: "Recite nam o vašem projektu i ciljevima",
    },
    {
      step: 2,
      title: "Brz odgovor",
      description: "Odgovaramo u roku od 24 sata",
    },
    {
      step: 3,
      title: "Besplatan razgovor",
      description: "15-min poziv + custom ponuda",
    },
  ],
};

// Footer Content
export const footerContent = {
  tagline: "Transformišemo <span class='text-primary'>bad byte</span> u savršen kod od 2020.",
  navigation: {
    services: "Usluge",
    work: "Radovi",
    contact: "Kontakt",
  },
  legal: {
    privacy: "Politika privatnosti",
    terms: "Uslovi korišćenja",
  },
};
