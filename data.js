/* ===========================================================================
   FIZIKA — Kolokvijum 2 (predavanja 6–10)
   FTN Novi Sad · Energetika, elektronika i telekomunikacije
   Lekcije, formule (LaTeX/KaTeX), kartice, kviz, galerija slajdova.
   =========================================================================== */

const SITE = {
  id: "fizika-k2v2",
  title: "📘 Fizika — Kolokvijum 2",
  subtitle: "Predavanja 6–10 · FTN 2026",
  heroTitle: "👋 Fizika za K2 (predavanja 6–10)",
  heroText: "Oscilacije, talasi, optika i kvantna fizika — lekcije, formule, slajdovi, kartice i kviz."
};

const TOPICS = [
/* ============================ L6 ============================ */
{
  id: "l6",
  title: "6. Oscilacije i talasi I",
  subtitle: "Harmonijske oscilacije, mehanički talasi (I deo)",
  icon: "〰️",
  color: "#f59e0b",
  oneLiner: "Periodično kretanje pod elastičnom (povratnom) silom je harmonijsko oscilovanje; kada se taj poremećaj prenosi kroz sredinu, nastaje mehanički talas.",
  sections: [
    { h: "Oscilatorno kretanje", html: `
      <p>Kretanje koje se ponavlja po istoj putanji sa promenom smera je <b>oscilatorno</b>. Kad teg napusti ravnotežni položaj, deluje <b>elastična (povratna) sila</b> $F = -k\\,x$ (znak „−" jer je suprotna pomeranju; $x$ = elongacija).</p>
      <p>Vrste oscilacija: <b>slobodne</b>, <b>harmonijske</b> (bez gubitaka energije), <b>prigušene</b> (amplituda eksponencijalno opada), <b>prinudne</b>.</p>` },
    { h: "Jednačina kretanja i energija", html: `
      <p>Iz II Njutnovog zakona dobija se jednačina harmonijskog oscilovanja:</p>
      <p style="text-align:center">$x = x_0\\sin(\\omega t + \\varphi)$</p>
      <p>gde je $x_0$ amplituda, $\\Phi=\\omega t+\\varphi$ faza, $\\varphi$ početna faza. Brzina $v=\\omega x_0\\cos(\\omega t+\\varphi)$, ubrzanje $a=-\\omega^2 x$.</p>
      <p><b>Ukupna mehanička energija se održava:</b> zbir kinetičke i potencijalne je konstantan, $E_u = \\tfrac{1}{2}m\\omega^2 x_0^2 = \\text{const}$. U amplitudi je sva energija potencijalna, u ravnoteži sva kinetička.</p>` },
    { h: "Oscilatorno (LC) kolo", html: `
      <p>Oscilovanje postoji i u električnim sistemima. U <b>LC kolu</b> (II Kirhofovo pravilo: $-L\\,\\frac{dI}{dt}=\\frac{q}{C}$) naelektrisanje osciluje:</p>
      <p style="text-align:center">$q = q_0\\cos(\\omega t), \\quad \\omega = \\dfrac{1}{\\sqrt{LC}}$</p>
      <p>Energija se „preliva" iz magnetnog polja kalema u električno polje kondenzatora — analogno kinetičkoj↔potencijalnoj.</p>` },
    { h: "Mehanički talasi — nastanak", html: `
      <p>Niz povezanih atoma: izvođenje prvog iz ravnoteže povlači susede sa zakašnjenjem → poremećaj se širi konstantnom brzinom $v_0$ kao <b>mehanički talas</b>.</p>
      <ul>
        <li><b>Transverzalni</b> — čestice osciluju normalno na pravac prostiranja (samo kroz čvrste sredine).</li>
        <li><b>Longitudinalni</b> — čestice osciluju u pravcu prostiranja (čvrsto, tečno, gasovito).</li>
      </ul>` },
    { h: "Talasna funkcija i osnovna relacija", html: `
      <p>Ravan progresivni talas: $\\psi(x,t)=\\psi_0\\cos(\\omega t - kx)$, gde je <b>talasni broj</b> $k=\\dfrac{2\\pi}{\\lambda}$.</p>
      <p>Iz uslova konstantne faze sledi <b>osnovna relacija talasnog kretanja</b>:</p>
      <p style="text-align:center">$v_0 = \\lambda\\,\\nu$</p>
      <p>Razlikuj: $v_0$ = brzina <i>talasa</i> (poremećaja); $u=\\partial\\psi/\\partial t$ = brzina <i>oscilovanja čestice</i>.</p>` },
    { h: "Brzina talasa i talasna jednačina", html: `
      <p>Brzina u čvrstim/tečnim telima (Njutnov obrazac): $v_0=\\sqrt{E/\\rho}$ ($E$ = Jangov moduo/moduo smicanja). Brzina zvuka u gasovima (Laplasov obrazac): $v_0=\\sqrt{\\kappa p/\\rho}=\\sqrt{\\kappa RT/M}$.</p>
      <p>Talasna jednačina (univerzalna): $\\dfrac{\\partial^2\\psi}{\\partial t^2}=v_0^2\\,\\dfrac{\\partial^2\\psi}{\\partial x^2}$.</p>` },
  ],
  formulas: [
    { name: "Elastična (povratna) sila", formula: "F = -k\\,x", desc: "x = elongacija; znak „−” → sila vraća telo ka ravnoteži." },
    { name: "Jednačina harmonijskog kretanja", formula: "x = x_0\\sin(\\omega t + \\varphi)", desc: "x_0 = amplituda, φ = početna faza." },
    { name: "Ugaona frekvencija", formula: "\\omega = 2\\pi\\nu = \\dfrac{2\\pi}{T}", desc: "Veza ω, frekvencije ν i perioda T." },
    { name: "Ubrzanje oscilatora", formula: "a = -\\omega^2 x", desc: "Ubrzanje srazmerno elongaciji, suprotnog smera." },
    { name: "Ukupna energija", formula: "E_u = \\tfrac{1}{2}m\\omega^2 x_0^2 = \\text{const}", desc: "Zbir kinetičke i potencijalne se ne menja." },
    { name: "LC kolo", formula: "\\omega = \\dfrac{1}{\\sqrt{LC}}", desc: "Električni analog mehaničkog oscilatora." },
    { name: "Talasna funkcija", formula: "\\psi(x,t) = \\psi_0\\cos(\\omega t - kx)", desc: "Ravan progresivni talas; k = 2π/λ." },
    { name: "Osnovna relacija talasa", formula: "v_0 = \\lambda\\,\\nu", desc: "Brzina = talasna dužina × frekvencija." },
    { name: "Brzina u čvrstom / gasu", formula: "v_0 = \\sqrt{\\dfrac{E}{\\rho}}, \\quad v_0 = \\sqrt{\\dfrac{\\kappa R T}{M}}", desc: "Njutnov i Laplasov obrazac." },
    { name: "Talasna jednačina", formula: "\\dfrac{\\partial^2\\psi}{\\partial t^2} = v_0^2\\,\\dfrac{\\partial^2\\psi}{\\partial x^2}", desc: "Drugi izvodi po vremenu i položaju." },
  ],
  numbers: [
    ["Talasni broj", "k = 2π/λ"],
    ["Brzina zvuka na 0 °C", "c₀ = 331,36 m/s"],
    ["Transverzalni talas", "samo kroz čvrsto"],
    ["Longitudinalni", "čvrsto, tečno, gas"],
  ],
  flashcards: [
    { q: "Koja sila uzrokuje harmonijsko oscilovanje?", a: "Elastična (povratna) sila $F=-kx$, srazmerna elongaciji i suprotnog smera." },
    { q: "Jednačina kretanja harmonijskog oscilatora?", a: "$x = x_0\\sin(\\omega t+\\varphi)$; brzina $v=\\omega x_0\\cos(\\omega t+\\varphi)$, ubrzanje $a=-\\omega^2 x$." },
    { q: "Veza ω, ν i T?", a: "$\\omega = 2\\pi\\nu = \\dfrac{2\\pi}{T}$." },
    { q: "Frekvencija LC oscilatora?", a: "$\\omega = \\dfrac{1}{\\sqrt{LC}}$ — električni analog mehaničkog oscilatora." },
    { q: "Osnovna relacija talasnog kretanja?", a: "$v_0=\\lambda\\nu$ — brzina talasa je proizvod talasne dužine i frekvencije." },
    { q: "Transverzalni vs longitudinalni talas?", a: "Transverzalni: čestice osciluju normalno na prostiranje (samo čvrsto). Longitudinalni: u pravcu prostiranja (i tečno/gas)." },
  ],
  quiz: [
    { q: "Elastična sila kod oscilatora je:", options: ["$F=kx^2$", "$F=-kx$", "$F=mv$", "$F=-mg$"], answer: 1 },
    { q: "Ubrzanje harmonijskog oscilatora je:", options: ["$a=\\omega x$", "$a=-\\omega^2 x$", "$a=v_0\\nu$", "$a=\\text{const}$"], answer: 1 },
    { q: "Frekvencija LC kola:", options: ["$\\omega=\\sqrt{LC}$", "$\\omega=1/\\sqrt{LC}$", "$\\omega=LC$", "$\\omega=1/LC$"], answer: 1 },
    { q: "Osnovna relacija talasnog kretanja:", options: ["$v_0=\\lambda/\\nu$", "$v_0=\\lambda\\nu$", "$v_0=\\nu/\\lambda$", "$v_0=k\\lambda$"], answer: 1 },
    { q: "Transverzalni talas se prostire:", options: ["Samo kroz gas", "Samo kroz čvrsta tela", "Kroz sve sredine", "Samo kroz vakuum"], answer: 1 },
  ],
},

/* ============================ L7 ============================ */
{
  id: "l7",
  title: "7. Talasi II i EM talasi",
  subtitle: "Zvuk, interferencija, rezonancija, Dopler, EM talasi",
  icon: "🔊",
  color: "#ef4444",
  oneLiner: "Zvuk i njegov intenzitet, slaganje talasa (interferencija, stojeći talasi, rezonancija, Doplerov efekat) i prelaz na elektromagnetne talase.",
  sections: [
    { h: "Zvučni talas i intenzitet", html: `
      <p><b>Zvuk</b> = mehanički talas koji čuje uho (20 Hz – 20 kHz); ispod = infrazvuk, iznad = ultrazvuk. Kroz vazduh je <b>longitudinalan</b> i <b>adijabatski</b> proces (zone zgušnjavanja/razređivanja).</p>
      <p><b>Fizički intenzitet</b> (energija kroz jediničnu površinu u jedinici vremena): $I=\\tfrac{1}{2}\\rho v_0\\omega^2\\psi_0^2$, $[I]=\\text{W/m}^2$.</p>` },
    { h: "Fiziološki intenzitet (čujnost)", html: `
      <p>Prag čujnosti $I_0=10^{-12}\\,\\text{W/m}^2$ (0 dB), prag bola $I_{max}=1\\,\\text{W/m}^2$ (120 dB). Nivo jačine zvuka:</p>
      <p style="text-align:center">$L\\,[\\text{dB}] = 10\\log_{10}\\dfrac{I}{I_0}$</p>` },
    { h: "Interferencija", html: `
      <p>Koherentni talasi (ista frekvencija, stalna fazna razlika) se slažu. Putna razlika $\\delta$ određuje ishod:</p>
      <ul>
        <li><b>Maksimum</b> (u fazi): $\\delta = n\\lambda$</li>
        <li><b>Minimum</b> (u protivfazi): $\\delta = (2n+1)\\dfrac{\\lambda}{2}$</li>
      </ul>` },
    { h: "Stojeći talasi i rezonancija", html: `
      <p>Dva talasa istih λ i amplitude u suprotnim smerovima (npr. upadni + odbijeni) daju <b>stojeći talas</b>:</p>
      <p style="text-align:center">$\\psi = 2\\psi_0\\cos(kx)\\cos(\\omega t)$</p>
      <p><b>Čvorovi</b> (uvek miruju) i <b>trbusi</b> (max amplituda $2\\psi_0$) se ne pomeraju. <b>Rezonancija</b>: kad se frekvencija prinudne sile poklopi sa sopstvenom → nagli skok amplitude (muzički instrumenti, ali i rušenje mosta Takoma 1940).</p>` },
    { h: "Doplerov efekat", html: `
      <p>Relativno kretanje izvora i/ili prijemnika menja registrovanu frekvenciju:</p>
      <p style="text-align:center">$\\nu = \\dfrac{v_0 \\pm v_p}{v_0 \\mp v_i}\\,\\nu_0$</p>
      <p>Gornji znaci: prijemnik/izvor se približavaju (frekvencija raste); donji: udaljavaju (opada).</p>` },
    { h: "Elektromagnetni talasi", html: `
      <p>Maksvel je objedinio električne i magnetne pojave (4 jednačine): promenljivo magnetno polje stvara električno i obrnuto → samoodrživi <b>EM talas</b> ($\\vec E \\perp \\vec B \\perp$ pravac prostiranja).</p>
      <p>Brzina zavisi od sredine: $v=\\dfrac{1}{\\sqrt{\\varepsilon_0\\varepsilon_r\\mu_0\\mu_r}}=\\dfrac{c}{n}$, gde je $n=\\sqrt{\\varepsilon_r\\mu_r}$ indeks prelamanja, a $c=3\\cdot10^8$ m/s u vakuumu.</p>
      <p><b>Lamberov zakon</b> apsorpcije: $I_t=I_0\\,e^{-kD}$. Bilans: $R+A+T=1$. Spektar: radio → mikro → IC → vidljiva → UV → X → γ.</p>` },
  ],
  formulas: [
    { name: "Intenzitet zvuka", formula: "I = \\tfrac{1}{2}\\rho v_0\\omega^2\\psi_0^2", desc: "Energija kroz jediničnu površinu u jedinici vremena (W/m²)." },
    { name: "Nivo jačine zvuka (dB)", formula: "L = 10\\log_{10}\\dfrac{I}{I_0}", desc: "I₀ = 10⁻¹² W/m² (prag čujnosti)." },
    { name: "Interferencija — maksimum", formula: "\\delta = n\\lambda", desc: "Talasi u fazi, n = 0, ±1, ±2, …" },
    { name: "Interferencija — minimum", formula: "\\delta = (2n+1)\\dfrac{\\lambda}{2}", desc: "Talasi u protivfazi." },
    { name: "Stojeći talas", formula: "\\psi = 2\\psi_0\\cos(kx)\\cos(\\omega t)", desc: "Čvorovi i trbusi miruju u prostoru." },
    { name: "Doplerov efekat", formula: "\\nu = \\dfrac{v_0 \\pm v_p}{v_0 \\mp v_i}\\,\\nu_0", desc: "Gornji znak = približavanje (ν raste)." },
    { name: "Brzina EM talasa", formula: "v = \\dfrac{1}{\\sqrt{\\varepsilon_0\\varepsilon_r\\mu_0\\mu_r}} = \\dfrac{c}{n}", desc: "n = √(εr·μr) = indeks prelamanja." },
    { name: "Lamberov zakon", formula: "I_t = I_0\\,e^{-kD}", desc: "Intenzitet eksponencijalno opada sa debljinom sloja." },
  ],
  numbers: [
    ["Opseg čujnosti", "20 Hz – 20 kHz"],
    ["Prag čujnosti", "I₀ = 10⁻¹² W/m² (0 dB)"],
    ["Prag bola", "1 W/m² (120 dB)"],
    ["Brzina svetlosti", "c = 3·10⁸ m/s"],
    ["Bilans zračenja", "R + A + T = 1"],
  ],
  flashcards: [
    { q: "Opseg čujnosti i šta je ispod/iznad?", a: "20 Hz – 20 kHz. Ispod = infrazvuk, iznad = ultrazvuk." },
    { q: "Nivo jačine zvuka u decibelima?", a: "$L = 10\\log_{10}\\dfrac{I}{I_0}$, $I_0=10^{-12}$ W/m²." },
    { q: "Uslov interferentnog maksimuma i minimuma?", a: "Maks: $\\delta=n\\lambda$ (u fazi). Min: $\\delta=(2n+1)\\dfrac{\\lambda}{2}$ (u protivfazi)." },
    { q: "Šta su čvorovi i trbusi stojećeg talasa?", a: "Čvorovi = tačke koje uvek miruju (amplituda 0). Trbusi = tačke max amplitude $2\\psi_0$." },
    { q: "Doplerova formula?", a: "$\\nu = \\dfrac{v_0\\pm v_p}{v_0\\mp v_i}\\nu_0$; približavanje → ν raste." },
    { q: "Brzina EM talasa u sredini?", a: "$v=\\dfrac{1}{\\sqrt{\\varepsilon_0\\varepsilon_r\\mu_0\\mu_r}}=\\dfrac{c}{n}$, $n=\\sqrt{\\varepsilon_r\\mu_r}$." },
  ],
  quiz: [
    { q: "Prag čujnosti ljudskog uha je:", options: ["1 W/m²", "$10^{-12}$ W/m²", "120 dB", "20 kHz"], answer: 1 },
    { q: "Interferentni maksimum nastaje kad je putna razlika:", options: ["$\\delta=(2n+1)\\lambda/2$", "$\\delta=n\\lambda$", "$\\delta=\\lambda/4$", "$\\delta=0$ uvek"], answer: 1 },
    { q: "Kod stojećeg talasa, tačke koje uvek miruju su:", options: ["Trbusi", "Čvorovi", "Fronti", "Fokusi"], answer: 1 },
    { q: "Kad se izvor približava prijemniku, frekvencija:", options: ["Opada", "Raste", "Ne menja se", "Postaje nula"], answer: 1 },
    { q: "Indeks prelamanja je:", options: ["$n=\\varepsilon_r\\mu_r$", "$n=\\sqrt{\\varepsilon_r\\mu_r}$", "$n=c\\cdot v$", "$n=1/c$"], answer: 1 },
  ],
},

/* ============================ L8 ============================ */
{
  id: "l8",
  title: "8. Optika",
  subtitle: "Geometrijska i talasna optika",
  icon: "🔬",
  color: "#0ea5e9",
  oneLiner: "Kako se svetlost odbija, prelama i ponaša kao talas — od Snelijusovog zakona i sočiva do interferencije, difrakcije, disperzije i polarizacije.",
  sections: [
    { h: "Geometrijska optika i Fermaov princip", html: `
      <p>Idealizacije: svetlosni zrak, tačkasti izvor, snop. Četiri principa: pravolinijsko prostiranje, neinteragovanje zraka, odbijanje, prelamanje.</p>
      <p><b>Fermaov princip</b>: između dve tačke svetlost ide putanjom za koju joj treba <b>minimalno vreme</b>. <b>Indeks prelamanja</b>: $n=\\dfrac{c}{v_0}$; optički put $L=n\\,s$.</p>` },
    { h: "Odbijanje i prelamanje (Snelijus)", html: `
      <p>Upadni ugao = odbojni ugao (refleksija). Prelamanje — <b>Snelijus–Dekartov zakon</b>:</p>
      <p style="text-align:center">$n_1\\sin\\alpha = n_2\\sin\\beta$</p>
      <p>Iz ređe u gušću sredinu → zrak se prelama <i>ka</i> normali (β &lt; α); obrnuto <i>od</i> normale.</p>` },
    { h: "Totalna refleksija", html: `
      <p>Iz gušće u ređu sredinu, za upadni ugao $\\alpha_g$ je $\\beta=90°$. Za $\\alpha>\\alpha_g$ → <b>totalna refleksija</b>:</p>
      <p style="text-align:center">$\\sin\\alpha_g = \\dfrac{n_2}{n_1}\\quad(n_1>n_2)$</p>
      <p>Primena: <b>optička vlakna</b> (višestruka totalna refleksija → prenos signala na velike daljine), prizme, endoskopija.</p>` },
    { h: "Sočiva", html: `
      <p>Veza žižne daljine $f$, daljine predmeta $p$ i lika $\\ell$:</p>
      <p style="text-align:center">$\\dfrac{1}{f} = \\dfrac{1}{p} + \\dfrac{1}{\\ell}$</p>
      <p><b>Optička jačina</b> (dioptrije): $j=\\dfrac{1}{f}=\\dfrac{n_2-n_1}{n_1}\\left(\\dfrac{1}{R_1}+\\dfrac{1}{R_2}\\right)$. Uvećanje $u=\\dfrac{\\ell}{p}$. Sabirna sočiva: realni/obrnuti likovi (ili lupa kad p&lt;f); rasipna: imaginarni, uspravni, umanjeni.</p>` },
    { h: "Interferencija svetlosti", html: `
      <p><b>Jangov eksperiment</b> (dve pukotine) — položaj k-tog maksimuma:</p>
      <p style="text-align:center">$y_k = \\dfrac{k\\lambda D}{d}$</p>
      <p><b>Tanki slojevi</b> (mehur od sapunice, antirefleksioni slojevi): optička razlika $\\delta = 2d\\sqrt{n^2-\\sin^2\\alpha}\\,\\pm\\dfrac{\\lambda}{2}$ (član $\\lambda/2$ zbog refleksije od gušće sredine).</p>` },
    { h: "Difrakcija, disperzija, polarizacija", html: `
      <p><b>Difrakcija</b> = skretanje talasa oko prepreke (~λ). Optička rešetka: $n\\lambda = a\\sin\\theta_n$.</p>
      <p><b>Disperzija</b>: $n=f(\\lambda)$ — ljubičasta se prelama najviše, crvena najmanje (duga).</p>
      <p><b>Polarizacija</b> (dokaz da je svetlost transverzalna): Brusterov ugao $\\tan\\alpha_B=\\dfrac{n_2}{n_1}$ (odbijeni zrak potpuno polarizovan). <b>Malusov zakon</b>: $I=I_0\\cos^2\\theta$.</p>` },
  ],
  formulas: [
    { name: "Indeks prelamanja", formula: "n = \\dfrac{c}{v_0}", desc: "Odnos brzine svetlosti u vakuumu i u sredini." },
    { name: "Snelijus–Dekartov zakon", formula: "n_1\\sin\\alpha = n_2\\sin\\beta", desc: "Zakon prelamanja svetlosti." },
    { name: "Granični ugao totalne refleksije", formula: "\\sin\\alpha_g = \\dfrac{n_2}{n_1}", desc: "Važi za n₁ > n₂ (gušća → ređa)." },
    { name: "Jednačina sočiva", formula: "\\dfrac{1}{f} = \\dfrac{1}{p} + \\dfrac{1}{\\ell}", desc: "f = žižna daljina, p = predmet, ℓ = lik." },
    { name: "Optička jačina sočiva", formula: "j = \\dfrac{1}{f} = \\dfrac{n_2-n_1}{n_1}\\left(\\dfrac{1}{R_1}+\\dfrac{1}{R_2}\\right)", desc: "j u dioptrijama (f u metrima)." },
    { name: "Jangov eksperiment", formula: "y_k = \\dfrac{k\\lambda D}{d}", desc: "Položaj k-tog interferentnog maksimuma." },
    { name: "Optička rešetka (difrakcija)", formula: "n\\lambda = a\\sin\\theta_n", desc: "a = konstanta rešetke, n = red difrakcije." },
    { name: "Brusterov zakon", formula: "\\tan\\alpha_B = \\dfrac{n_2}{n_1}", desc: "Pri αB je odbijena svetlost potpuno polarizovana." },
    { name: "Malusov zakon", formula: "I = I_0\\cos^2\\theta", desc: "Intenzitet kroz analizator; θ = ugao između osa." },
  ],
  numbers: [
    ["Fermaov princip", "minimalno vreme"],
    ["Totalna refleksija", "n₁ > n₂, α > αg"],
    ["Sabirno sočivo", "f > 0"],
    ["Rasipno sočivo", "f < 0"],
    ["Disperzija", "ljubičasta se prelama najviše"],
  ],
  flashcards: [
    { q: "Snelijus–Dekartov zakon prelamanja?", a: "$n_1\\sin\\alpha = n_2\\sin\\beta$." },
    { q: "Uslov i formula za totalnu refleksiju?", a: "Iz gušće u ređu (n₁>n₂), za α>αg gde je $\\sin\\alpha_g=\\dfrac{n_2}{n_1}$." },
    { q: "Jednačina sočiva?", a: "$\\dfrac{1}{f}=\\dfrac{1}{p}+\\dfrac{1}{\\ell}$; jačina $j=1/f$ (dioptrije)." },
    { q: "Položaj maksimuma u Jangovom eksperimentu?", a: "$y_k=\\dfrac{k\\lambda D}{d}$." },
    { q: "Jednačina difrakcione rešetke?", a: "$n\\lambda = a\\sin\\theta_n$ (a = konstanta rešetke)." },
    { q: "Brusterov i Malusov zakon?", a: "Bruster: $\\tan\\alpha_B=\\dfrac{n_2}{n_1}$ (potpuna polarizacija). Malus: $I=I_0\\cos^2\\theta$." },
  ],
  quiz: [
    { q: "Zakon prelamanja svetlosti je:", options: ["$n_1\\sin\\alpha=n_2\\sin\\beta$", "$n_1\\cos\\alpha=n_2\\cos\\beta$", "$\\alpha=\\beta$", "$n_1=n_2$"], answer: 0 },
    { q: "Totalna refleksija se javlja pri prelasku:", options: ["Iz ređe u gušću", "Iz gušće u ređu, α>αg", "Kroz vakuum", "Pri α=0"], answer: 1 },
    { q: "Optička jačina sočiva izražava se u:", options: ["Vatima", "Dioptrijama", "Henrijima", "Lumenima"], answer: 1 },
    { q: "Malusov zakon glasi:", options: ["$I=I_0\\cos\\theta$", "$I=I_0\\cos^2\\theta$", "$I=I_0\\sin^2\\theta$", "$I=I_0/\\theta$"], answer: 1 },
    { q: "Difrakcija na rešetki:", options: ["$n\\lambda=a\\sin\\theta_n$", "$n\\lambda=a\\cos\\theta_n$", "$\\lambda=aD$", "$n=a/\\lambda$"], answer: 0 },
  ],
},

/* ============================ L9 ============================ */
{
  id: "l9",
  title: "9. Kvantna optika i atom",
  subtitle: "Zračenje crnog tela, fotoefekat, Bohrov atom",
  icon: "⚛️",
  color: "#a855f7",
  oneLiner: "Svetlost se prenosi u kvantima (fotonima) — to objašnjava zračenje crnog tela, fotoefekat i Komptonov efekat, a Borov model daje atom sa diskretnim energijama.",
  sections: [
    { h: "Toplotno zračenje i crno telo", html: `
      <p><b>Apsolutno crno telo</b> apsorbuje svo upadno zračenje ($a_{\\lambda,T}=1$). Zakoni:</p>
      <ul>
        <li><b>Štefan–Bolcman</b>: emisiona moć $\\propto T^4$ → $\\varepsilon=\\sigma T^4$.</li>
        <li><b>Vinov zakon pomeranja</b>: $\\lambda_m=\\dfrac{b}{T}$ (maksimum se pomera ka kraćim λ sa porastom T).</li>
        <li><b>Kirhofov zakon</b>: $\\dfrac{\\varepsilon_{\\lambda,T}}{a_{\\lambda,T}}=f(\\lambda,T)$ — univerzalna funkcija.</li>
      </ul>` },
    { h: "Plankova hipoteza", html: `
      <p>Klasična teorija daje „<b>UV katastrofu</b>" (beskonačna snaga na visokim frekvencijama). Plank (1900): zračenje se emituje u <b>kvantima</b> energije — fotonima:</p>
      <p style="text-align:center">$\\varepsilon_f = h\\nu = \\dfrac{hc}{\\lambda}$</p>
      <p>$h=6{,}626\\cdot10^{-34}$ Js (Plankova konstanta). Energija je uvek celobrojni umnožak kvanta.</p>` },
    { h: "Fotoelektrični efekat", html: `
      <p>Izbijanje elektrona svetlošću. <b>Ajnštajnova jednačina</b> (foton predaje energiju elektronu):</p>
      <p style="text-align:center">$h\\nu = A + \\dfrac{1}{2}m_e v^2$</p>
      <p>$A$ = izlazni rad. Fotoefekat se javlja samo iznad <b>granične frekvencije</b>: $h\\nu_g=A$. Maks. kinetička energija zavisi od <b>frekvencije</b> (ne intenziteta); broj elektrona zavisi od intenziteta; efekat je trenutan.</p>` },
    { h: "Komptonov efekat", html: `
      <p>Elastičan sudar fotona (X-zrak) i slabo vezanog elektrona → foton gubi energiju, λ raste:</p>
      <p style="text-align:center">$\\Delta\\lambda = \\lambda'-\\lambda = \\dfrac{h}{m_0 c}(1-\\cos\\theta)$</p>
      <p>$\\lambda_c=\\dfrac{h}{m_0 c}=2{,}42\\cdot10^{-12}$ m = Komptonova talasna dužina.</p>` },
    { h: "Modeli atoma", html: `
      <ul>
        <li><b>Tomson</b>: pozitivna sfera sa utisnutim elektronima.</li>
        <li><b>Raderford</b> (rasejanje α-čestica): malo gusto pozitivno <b>jezgro</b> + elektroni oko njega (planetarni model). Mana: po klasici bi elektron zračio i pao na jezgro.</li>
        <li><b>Bor</b> popravlja postulatima.</li>
      </ul>` },
    { h: "Borovi postulati i spektri", html: `
      <p><b>I postulat</b> (stacionarna stanja): $L=m_e v r = n\\hbar$ — atom ne zrači dok je na orbiti.</p>
      <p><b>II postulat</b> (kvantni prelazi): $h\\nu=|E_n-E_k|$.</p>
      <p>Energija nivoa: $E_n=-\\dfrac{m_e Z^2 e^4}{8\\varepsilon_0^2 h^2}\\cdot\\dfrac{1}{n^2}$. <b>Balmerova formula</b>: $\\dfrac{1}{\\lambda}=Z^2 R_H\\left(\\dfrac{1}{k^2}-\\dfrac{1}{n^2}\\right)$, $R_H=1{,}097\\cdot10^7$ m⁻¹. Serije: Lajman (k=1), Balmer (k=2), Pašen (k=3)…</p>` },
  ],
  formulas: [
    { name: "Štefan–Bolcmanov zakon", formula: "\\varepsilon = \\sigma T^4", desc: "σ = 5,67·10⁻⁸ W/(m²K⁴)." },
    { name: "Vinov zakon pomeranja", formula: "\\lambda_m = \\dfrac{b}{T}", desc: "b = 2,9·10⁻³ K·m." },
    { name: "Energija fotona", formula: "\\varepsilon_f = h\\nu = \\dfrac{hc}{\\lambda}", desc: "h = 6,626·10⁻³⁴ Js." },
    { name: "Ajnštajnova jednačina fotoefekta", formula: "h\\nu = A + \\dfrac{1}{2}m_e v^2", desc: "A = izlazni rad." },
    { name: "Granična frekvencija", formula: "h\\nu_g = A", desc: "Crvena granica fotoefekta; ispod nema efekta." },
    { name: "Komptonov efekat", formula: "\\Delta\\lambda = \\dfrac{h}{m_0 c}(1-\\cos\\theta)", desc: "λc = h/(m₀c) = 2,42·10⁻¹² m." },
    { name: "I Borov postulat", formula: "L = m_e v r = n\\hbar", desc: "Kvantovanje momenta impulsa, n = 1,2,3…" },
    { name: "II Borov postulat", formula: "h\\nu = |E_n - E_k|", desc: "Energija emitovanog/apsorbovanog fotona." },
    { name: "Energija nivoa", formula: "E_n = -\\dfrac{m_e Z^2 e^4}{8\\varepsilon_0^2 h^2}\\cdot\\dfrac{1}{n^2}", desc: "Diskretni energijski nivoi." },
    { name: "Balmerova formula", formula: "\\dfrac{1}{\\lambda} = Z^2 R_H\\left(\\dfrac{1}{k^2}-\\dfrac{1}{n^2}\\right)", desc: "R_H = 1,097·10⁷ m⁻¹." },
  ],
  numbers: [
    ["Plankova konstanta", "h = 6,626·10⁻³⁴ Js"],
    ["Štefan–Bolcman σ", "5,67·10⁻⁸ W/m²K⁴"],
    ["Vinova konstanta b", "2,9·10⁻³ K·m"],
    ["Ridbergova R_H", "1,097·10⁷ m⁻¹"],
    ["Komptonova λc", "2,42·10⁻¹² m"],
  ],
  flashcards: [
    { q: "Štefan–Bolcmanov i Vinov zakon?", a: "Štefan–Bolcman: $\\varepsilon=\\sigma T^4$. Vin: $\\lambda_m=\\dfrac{b}{T}$ (maksimum se pomera ka kraćim λ sa T)." },
    { q: "Energija fotona?", a: "$\\varepsilon_f=h\\nu=\\dfrac{hc}{\\lambda}$, $h=6{,}626\\cdot10^{-34}$ Js." },
    { q: "Ajnštajnova jednačina fotoefekta?", a: "$h\\nu = A + \\dfrac{1}{2}m_e v^2$; efekat samo iznad granične frekvencije $h\\nu_g=A$." },
    { q: "Od čega zavisi maks. kinetička energija fotoelektrona?", a: "Od frekvencije svetlosti (ne intenziteta). Intenzitet određuje broj elektrona." },
    { q: "Komptonov efekat — promena talasne dužine?", a: "$\\Delta\\lambda=\\dfrac{h}{m_0 c}(1-\\cos\\theta)$." },
    { q: "Borovi postulati?", a: "I: $L=m_e v r=n\\hbar$ (atom ne zrači na orbiti). II: $h\\nu=|E_n-E_k|$ pri prelazu." },
  ],
  quiz: [
    { q: "Štefan–Bolcmanov zakon:", options: ["$\\varepsilon=\\sigma T$", "$\\varepsilon=\\sigma T^4$", "$\\varepsilon=\\sigma T^2$", "$\\varepsilon=b/T$"], answer: 1 },
    { q: "Energija fotona je:", options: ["$\\varepsilon=mv^2$", "$\\varepsilon=h\\nu$", "$\\varepsilon=kT$", "$\\varepsilon=h/\\nu$"], answer: 1 },
    { q: "Maks. kinetička energija fotoelektrona zavisi od:", options: ["Intenziteta svetlosti", "Frekvencije svetlosti", "Boje katode", "Napona mreže"], answer: 1 },
    { q: "I Borov postulat kvantuje:", options: ["Energiju fotona", "Moment impulsa $L=n\\hbar$", "Brzinu svetlosti", "Talasnu dužinu"], answer: 1 },
    { q: "Komptonov efekat opisuje:", options: ["Apsorpciju u sočivu", "Rasejanje fotona na elektronu", "Refleksiju zvuka", "Disperziju u prizmi"], answer: 1 },
  ],
},

/* ============================ L10 ============================ */
{
  id: "l10",
  title: "10. Kvantna mehanika",
  subtitle: "De Brolj, neodređenost, Šredinger, tunel-efekat",
  icon: "🌌",
  color: "#14b8a6",
  oneLiner: "Materija ima talasno-čestičnu prirodu: svakoj čestici pripada de Broljev talas, položaj i impuls se ne mogu istovremeno tačno znati, a stanje opisuje Šredingerova jednačina.",
  sections: [
    { h: "De Broljeva hipoteza", html: `
      <p>Svakoj čestici (masa $m$, brzina $v$) pripada talas talasne dužine:</p>
      <p style="text-align:center">$\\lambda = \\dfrac{h}{p} = \\dfrac{h}{m v}$</p>
      <p>Potvrda: Davisson–Germer (difrakcija elektrona na niklu). Dualizam se ne vidi kod makro tela (za metak $\\lambda\\sim10^{-34}$ m). Najveći objekat sa dokazanom talasnom prirodom: fuleren $C_{60}$.</p>` },
    { h: "Relacije neodređenosti (Hajzenberg)", html: `
      <p>Nemoguće je istovremeno tačno odrediti par veličina:</p>
      <p style="text-align:center">$\\Delta x\\cdot\\Delta p_x \\geq \\dfrac{\\hbar}{2}, \\qquad \\Delta E\\cdot\\Delta t \\geq \\dfrac{\\hbar}{2}$</p>
      <p>Posledica talasno-čestične prirode → pojam <b>putanje</b> gubi smisao.</p>` },
    { h: "Talasna funkcija", html: `
      <p>Stanje opisuje (kompleksna) <b>talasna funkcija</b> $\\Psi(\\vec r,t)$. Fizički smisao ima njen kvadrat modula — <b>gustina verovatnoće</b>:</p>
      <p style="text-align:center">$\\rho = |\\Psi|^2 = \\dfrac{dP}{dV}$</p>
      <p><b>Princip superpozicije</b>: $\\Psi=\\sum c_i\\Psi_i$, $\\sum|c_i|^2=1$.</p>` },
    { h: "Šredingerova jednačina", html: `
      <p>Uloga II Njutnovog zakona u kvantnoj mehanici. Stacionarni (vremenski nezavisan) oblik:</p>
      <p style="text-align:center">$-\\dfrac{\\hbar^2}{2m}\\dfrac{d^2\\Psi}{dx^2} + U\\Psi = E\\Psi$</p>
      <p>Rešenja daju dozvoljene <b>energije</b> (svojstvene vrednosti) i <b>funkcije stanja</b>.</p>` },
    { h: "Čestica u potencijalnoj jami", html: `
      <p>Čestica u jami širine $L$ sa beskonačnim zidovima → samo stojeći talasi ($\\lambda_n=2L/n$). Energija je <b>kvantovana</b>:</p>
      <p style="text-align:center">$E_n = \\dfrac{h^2}{8mL^2}\\,n^2$</p>
      <p>Energija ne može biti nula (Hajzenberg); diskretnost je posledica ograničenja kretanja.</p>` },
    { h: "Tunel-efekat", html: `
      <p>Čestica može da pređe potencijalnu barijeru i kad joj je energija manja od visine barijere (talasna funkcija u barijeri eksponencijalno opada). Primena: <b>STM</b> (skenirajući tunelski mikroskop), struja $I_T\\sim e^{-2kd}$; fuzija na Suncu; alfa-raspad.</p>
      <p><b>Bozoni vs fermioni</b>: spin ceo (bozoni, npr. foton) ili poluceo (fermioni: e, p, n). Dva fermiona ne mogu u isto stanje (<b>Paulijev princip</b>). Stanje elektrona = 4 kvantna broja $(n,\\ell,m,s)$.</p>` },
  ],
  formulas: [
    { name: "De Broljeva talasna dužina", formula: "\\lambda = \\dfrac{h}{p} = \\dfrac{h}{m v}", desc: "Talas pridružen svakoj čestici." },
    { name: "Neodređenost položaj–impuls", formula: "\\Delta x\\cdot\\Delta p_x \\geq \\dfrac{\\hbar}{2}", desc: "ℏ = h/2π; ne mogu se oba znati tačno." },
    { name: "Neodređenost energija–vreme", formula: "\\Delta E\\cdot\\Delta t \\geq \\dfrac{\\hbar}{2}", desc: "Dužina života stanja i neodređenost energije." },
    { name: "Gustina verovatnoće", formula: "\\rho = |\\Psi|^2 = \\dfrac{dP}{dV}", desc: "Kvadrat modula talasne funkcije." },
    { name: "Šredingerova jednačina (stac.)", formula: "-\\dfrac{\\hbar^2}{2m}\\dfrac{d^2\\Psi}{dx^2} + U\\Psi = E\\Psi", desc: "Daje dozvoljene energije i funkcije stanja." },
    { name: "Energija u potencijalnoj jami", formula: "E_n = \\dfrac{h^2}{8mL^2}\\,n^2", desc: "Kvantovana energija; n = 1,2,3…" },
    { name: "Struja tunelovanja (STM)", formula: "I_T \\sim e^{-2kd}", desc: "Eksponencijalno zavisi od rastojanja d." },
    { name: "Spin čestice", formula: "\\hbar\\sqrt{s(s+1)}", desc: "s ceo → bozon; s poluceo → fermion." },
  ],
  numbers: [
    ["Redukovana konstanta", "ℏ = h/2π"],
    ["Najveći „talasni” objekat", "fuleren C₆₀"],
    ["Fermioni", "e, p, n (poluceo spin)"],
    ["Bozoni", "foton (ceo spin)"],
    ["Kvantni brojevi", "n, ℓ, m, s"],
  ],
  flashcards: [
    { q: "De Broljeva talasna dužina?", a: "$\\lambda=\\dfrac{h}{p}=\\dfrac{h}{mv}$ — talas pridružen svakoj čestici." },
    { q: "Hajzenbergove relacije neodređenosti?", a: "$\\Delta x\\,\\Delta p_x\\geq\\dfrac{\\hbar}{2}$ i $\\Delta E\\,\\Delta t\\geq\\dfrac{\\hbar}{2}$." },
    { q: "Šta je fizički smisao talasne funkcije?", a: "$|\\Psi|^2$ = gustina verovatnoće pronalaženja čestice: $\\rho=dP/dV$." },
    { q: "Stacionarna Šredingerova jednačina?", a: "$-\\dfrac{\\hbar^2}{2m}\\dfrac{d^2\\Psi}{dx^2}+U\\Psi=E\\Psi$." },
    { q: "Energija čestice u beskonačnoj jami?", a: "$E_n=\\dfrac{h^2}{8mL^2}n^2$ — kvantovana, ne može biti nula." },
    { q: "Šta je tunel-efekat i gde se primenjuje?", a: "Prolaz čestice kroz barijeru višu od njene energije. Primena: STM ($I_T\\sim e^{-2kd}$), fuzija na Suncu, alfa-raspad." },
    { q: "Bozoni vs fermioni?", a: "Bozoni: ceo spin (foton), gomilaju se. Fermioni: poluceo spin (e, p, n), Paulijev princip — ne dva u istom stanju." },
  ],
  quiz: [
    { q: "De Broljeva talasna dužina je:", options: ["$\\lambda=h\\nu$", "$\\lambda=h/(mv)$", "$\\lambda=mv/h$", "$\\lambda=hc$"], answer: 1 },
    { q: "Relacija neodređenosti položaja i impulsa:", options: ["$\\Delta x\\Delta p\\geq\\hbar/2$", "$\\Delta x\\Delta p=0$", "$\\Delta x+\\Delta p=\\hbar$", "$\\Delta x\\Delta p\\leq\\hbar$"], answer: 0 },
    { q: "Fizički smisao ima:", options: ["$\\Psi$", "$|\\Psi|^2$", "$1/\\Psi$", "$\\Psi+1$"], answer: 1 },
    { q: "Energija čestice u jami je:", options: ["Kontinualna", "Kvantovana ($\\propto n^2$)", "Uvek nula", "Negativna"], answer: 1 },
    { q: "Tunel-efekat koristi uređaj:", options: ["Teleskop", "STM (tunelski mikroskop)", "Laser", "Sočivo"], answer: 1 },
    { q: "Elektroni i protoni su:", options: ["Bozoni", "Fermioni", "Fotoni", "Bez spina"], answer: 1 },
  ],
},
];

/* Slajdovi predavanja (galerija) — generisano iz rendera */
const SLIDE_SLUG = {
  l6:"07-e1-slajdovi-sa-sestog-predavanja-2026",
  l7:"08-e1-slajdovi-sa-sedmog-predavanja-2026",
  l8:"09-e1-slajdovi-sa-osmog-predavanja-2023",
  l9:"10-e1-slajdovi-sa-devetog-predavanja-2023",
  l10:"11-e1-slajdovi-sa-desetog-predavanja-2023"
};
const SLIDE_COUNT = { l6:42, l7:46, l8:96, l9:48, l10:37 };
TOPICS.forEach(t=>{const s=SLIDE_SLUG[t.id],n=SLIDE_COUNT[t.id];
  if(s&&n)t.slides=Array.from({length:n},(_,i)=>`slides/${s}/p${String(i+1).padStart(3,"0")}.jpg`);});
