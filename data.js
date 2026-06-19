/* FIZIKA — Kolokvijum 2 (predavanja 6-10) · FTN · generisano */
const SITE = {
  id: "fizika-k2v2",
  title: "📘 Fizika — Kolokvijum 2",
  subtitle: "Predavanja 6-10 · FTN 2026",
  heroTitle: "👋 Fizika za K2 (predavanja 6-10)",
  heroText: "Oscilacije, talasi, optika i kvantna fizika — detaljne lekcije, formule, slike, kartice i kviz."
};

const T_l6 = {
  id: "l6",
  title: "6. Oscilacije i talasi I",
  subtitle: "Harmonijske oscilacije, mehanički talasi (I deo)",
  icon: "〰️",
  color: "#f59e0b",
  oneLiner: "Elastična sila F=-kx generiše harmonijsko oscilovanje x=x0 sin(ωt+φ), čija se energija održava, a kada se ono prenosi kroz lanac čestica nastaje mehanički talas opisan talasnom funkcijom i univerzalnom talasnom jednačinom.",
  sections: [
    {
      h: "Periodično i oscilatorno kretanje",
      html: `<p><b>Definicija:</b> Kretanje koje se ponavlja u određenim vremenskim intervalima naziva se <i>periodično</i> kretanje (planeta oko Sunca, kazaljki sata, klipa u cilindru, otkucaji srca). Vremenski interval posle koga se kretanje ponavlja je <b>period</b> $T$.</p>
<p>Ako se periodično kretanje vrši uvek po istoj putanji, sa promenom smera, govorimo o <b>oscilatornom</b> kretanju.</p>
<p>Prema uslovima pod kojima se odvijaju, oscilacije dele se na:</p>
<ul><li><b>slobodne</b> (harmonijske i prigušene),</li><li><b>prinudne</b>.</li></ul>
<p>Simboli: $T$ — period (s). <b>Značaj:</b> period i frekvencija su osnovne mere svakog ponavljajućeg kretanja i polazna tačka za opis oscilacija.</p>`
    },
    {
      h: "Elastična (restituciona) sila",
      html: `<p><b>Iskaz:</b> Kada teg napusti ravnotežni položaj, na njega deluje elastična (restituciona, povratna) sila koja teži da ga vrati u ravnotežu:</p>
<p style="text-align:center">$F = -kx$</p>
<p>Predznak minus pokazuje da je smer sile suprotan smeru pomeranja tela iz ravnotežnog položaja.</p>
<p>Simboli: $F$ — sila (N), $k$ — konstanta elastičnosti (N/m), $x$ — trenutno rastojanje tega od ravnotežnog položaja, tzv. <i>elongacija</i> (m). <b>Fizički smisao:</b> linearna povratna sila je uzrok harmonijskog oscilovanja; što je veće $k$, jača je tendencija povratka u ravnotežu.</p>`
    },
    {
      h: "Harmonijsko vs prigušeno oscilovanje",
      html: `<p>Ako pri kretanju <b>nema gubitaka energije</b> (ili se ona neprekidno dodaje), teg se bez prestanka kreće između dva amplitudna položaja — to je <b>harmonijsko</b> oscilovanje.</p>
<p>Ako se energija iz bilo kog razloga (trenje, otpor vazduha, viskoznost) gubi, amplituda oscilovanja eksponencijalno opada — to je <b>prigušeno</b> oscilovanje.</p>
<p><b>Značaj:</b> harmonijsko oscilovanje je idealizacija bez disipacije i osnovni model na koji se svode složenija periodična kretanja; u nastavku se razmatra isključivo ono.</p>`
    },
    {
      h: "Izvođenje jednačine kretanja",
      html: `<p><b>Polazimo</b> od II Njutnovog zakona uz $F=-kx$:</p>
<p style="text-align:center">$m\\dfrac{dv}{dt} = -kx \\;\\Rightarrow\\; m\\dfrac{dv}{dt}+kx = 0 \\;\\Big| \\cdot dx$</p>
<p style="text-align:center">$m\\dfrac{dv}{dt}dx + kx\\,dx = 0 \\;\\Rightarrow\\; mv\\,dv + kx\\,dx = 0$</p>
<p><b>Integracija</b> (smena $\\frac{dx}{dt}=v$) daje:</p>
<p style="text-align:center">$\\dfrac{mv^2}{2} + \\dfrac{kx^2}{2} = C_1$</p>
<p>Konstanta $C_1$ ima dimenziju energije; iz početnih uslova ($t=0$: $x=x_0$, $v_0=0$) sledi $C_1=\\tfrac{1}{2}kx_0^2$. <b>Značaj:</b> ova jednačina je zakon održanja ukupne mehaničke energije oscilatora.</p>`
    },
    {
      h: "Brzina iz energije i početna faza",
      html: `<p>Iz zakona održanja energije sledi izraz za brzinu:</p>
<p style="text-align:center">$v = \\sqrt{\\dfrac{k}{m}\\left(x_0^2 - x^2\\right)} = \\omega\\sqrt{x_0^2 - x^2}$</p>
<p>gde je $\\omega=\\sqrt{k/m}$ ugaona (kružna) frekvencija. Po definiciji brzine $v=\\frac{dx}{dt}$, razdvajanjem promenljivih i integracijom:</p>
<p style="text-align:center">$\\displaystyle\\int \\dfrac{dx}{\\sqrt{x_0^2-x^2}} = \\omega\\int dt + \\varphi \\;\\Rightarrow\\; \\arcsin\\!\\left(\\dfrac{x}{x_0}\\right) = \\omega t + \\varphi$</p>
<p>Konstanta integracije $\\varphi$ naziva se <b>početna faza</b> oscilovanja. Simboli: $\\omega$ (rad/s), $x_0$ — amplituda (m), $\\varphi$ (rad). <b>Smisao:</b> $\\varphi$ određuje položaj tela u trenutku $t=0$.</p>`
    },
    {
      h: "Jednačina kretanja oscilatora",
      html: `<p>Iz prethodnog izraza dobija se <b>jednačina kretanja</b> harmonijskog oscilatora:</p>
<p style="text-align:center">$x = x_0 \\sin(\\omega t + \\varphi)$</p>
<p>gde je $x$ — elongacija, $x_0$ — amplituda, $\\Phi=\\omega t + \\varphi$ — faza, $\\varphi$ — početna faza. Ako se u trenutku $t=0$ telo nalazilo u amplitudnom položaju $x=x_0$, onda $\\sin\\varphi=1 \\Rightarrow \\varphi=\\tfrac{\\pi}{2}$, pa:</p>
<p style="text-align:center">$x = x_0 \\sin\\!\\left(\\omega t + \\dfrac{\\pi}{2}\\right) = x_0 \\cos(\\omega t)$</p>
<p>Veza karakterističnih veličina: $\\omega = 2\\pi\\nu = \\dfrac{2\\pi}{T}$, $\\nu=\\dfrac{1}{T}$. <b>Značaj:</b> kompletno opisuje položaj tela u svakom trenutku.</p>`
    },
    {
      h: "Brzina i ubrzanje oscilatora",
      html: `<p>Diferenciranjem jednačine kretanja po vremenu:</p>
<p style="text-align:center">$v = \\dfrac{dx}{dt} = \\omega x_0 \\cos(\\omega t + \\varphi)$</p>
<p style="text-align:center">$a = \\dfrac{dv}{dt} = -\\omega^2 x_0 \\sin(\\omega t + \\varphi) = -\\omega^2 x$</p>
<p>Simboli: $v$ (m/s), $a$ (m/s$^2$), $\\omega$ (rad/s). <b>Fizički smisao:</b> ubrzanje je proporcionalno elongaciji i uvek usmereno ka ravnoteži ($a=-\\omega^2 x$) — to je definiciono svojstvo harmonijskog kretanja. Brzina je maksimalna u ravnoteži, a nula u amplitudnim položajima.</p>`
    },
    {
      h: "Energija oscilatora",
      html: `<p>Kinetička, potencijalna i ukupna energija:</p>
<p style="text-align:center">$E_k = \\tfrac{1}{2}mv^2 = \\tfrac{1}{2}m\\omega^2\\left(x_0^2 - x^2\\right)$</p>
<p style="text-align:center">$E_p = -\\displaystyle\\int_0^x F\\,dx = \\tfrac{1}{2}kx^2 = \\tfrac{1}{2}m\\omega^2 x^2$</p>
<p style="text-align:center">$E_u = E_k + E_p = \\tfrac{1}{2}m\\omega^2 x_0^2 = \\text{const}$</p>
<p>Simboli: $E_k, E_p, E_u$ (J), $x_0$ — amplituda (m). <b>Fizički smisao:</b> u amplitudnim položajima ($\\pm x_0$) teg miruje pa ima samo $E_p$; ka ravnoteži se $E_p$ pretvara u $E_k$ koja je maksimalna u $x=0$ (gde je $E_p=0$). Ukupna energija je konstantna i proporcionalna kvadratu amplitude.</p>`
    },
    {
      h: "Oscilatorno (LC) kolo",
      html: `<p>Oscilovanje se javlja i u električnim sistemima — najjednostavniji je <b>LC kolo</b>, električni analog mehaničkog oscilatora. Po II Kirhofovom pravilu (pad napona na kondenzatoru $U=q/C$, EMS u kalemu $\\mathcal{E}=-L\\frac{dI}{dt}$):</p>
<p style="text-align:center">$L\\dfrac{dI}{dt} + \\dfrac{q}{C} = 0 \\;\\Rightarrow\\; \\tfrac{1}{2}LI^2 + \\tfrac{1}{2}\\dfrac{q^2}{C} = \\tfrac{1}{2}\\dfrac{q_0^2}{C}$</p>
<p>To je zakon održanja elektromagnetne energije (energija magnetnog polja kalema + energija električnog polja kondenzatora). Rešenje je:</p>
<p style="text-align:center">$q = q_0 \\cos(\\omega t), \\qquad \\omega = \\dfrac{1}{\\sqrt{LC}}$</p>
<p>Simboli: $L$ — induktivnost (H), $C$ — kapacitivnost (F), $q_0$ — početno naelektrisanje (C). <b>Analogija:</b> $m\\leftrightarrow L$, $k\\leftrightarrow 1/C$, $x\\leftrightarrow q$, $v\\leftrightarrow I$.</p>`
    },
    {
      h: "Nastanak mehaničkog talasa",
      html: `<p>Posmatra se niz jednakih atoma (mase $\\mu$) poređanih duž ose $x$ na ravnotežnim rastojanjima $r_0$. Između susednih atoma deluje sila $f=-k\\psi$, što obezbeđuje harmonijsko oscilovanje.</p>
<p>Izvođenjem prvog atoma iz ravnoteže narušava se ravnoteža sa susedom, koji ga sa malim <b>zakašnjenjem</b> sledi; isto se prenosi na treći, četvrti atom i kroz ceo lanac. Proces se prenosi <b>konstantnom brzinom</b> $v_0$ (svi elementi su identični) i predstavlja <b>mehanički talas</b>.</p>
<p>Dok prvi atom načini pun period $T$, talas dospe do rastojanja $v_0 T=\\lambda$ (jedna <b>talasna dužina</b>). <b>Značaj:</b> talas je prenošenje poremećaja (energije), a ne prenošenje supstancije.</p>`
    },
    {
      h: "Transverzalni i longitudinalni talasi",
      html: `<p>Prema odnosu pravca oscilovanja i pravca prostiranja razlikujemo dve vrste talasa:</p>
<table>
<tr><th>Svojstvo</th><th>Transverzalni</th><th>Longitudinalni</th></tr>
<tr><td>Oscilovanje delića</td><td>normalno na pravac prostiranja</td><td>u pravcu prostiranja</td></tr>
<tr><td>Elastična promena</td><td>smicanje / savijanje / torzija (menja se oblik)</td><td>sabijanje / istezanje (menja se zapremina)</td></tr>
<tr><td>Sredina prostiranja</td><td>samo čvrste (mogu menjati oblik)</td><td>čvrste, tečne i gasovite</td></tr>
</table>
<p><b>Smisao:</b> koja se vrsta talasa širi zavisi od elastičnih osobina sredine; zvuk u vazduhu je longitudinalan, a talasi po žici transverzalni.</p>`
    },
    {
      h: "Talasna funkcija i talasni broj",
      html: `<p>Oscilovanje niza povezanih oscilatora opisuje <b>talasna funkcija</b> $\\psi(x,t)$ — elongacija bilo koje čestice u tački $x$ u trenutku $t$. Za prvu česticu ($x=0$): $\\psi(0,t)=\\psi_0\\cos(\\omega t)$. Čestica na rastojanju $x$ počinje da osciluje sa zakašnjenjem $\\Delta t = x/v_0$:</p>
<p style="text-align:center">$\\psi(x,t) = \\psi_0 \\cos\\!\\left[\\omega\\left(t - \\dfrac{x}{v_0}\\right)\\right] = \\psi_0\\cos\\!\\left[2\\pi\\left(\\dfrac{t}{T} - \\dfrac{x}{\\lambda}\\right)\\right]$</p>
<p>Uvođenjem <b>talasnog broja</b> $k=\\dfrac{2\\pi}{\\lambda}$ dobija se najčešći oblik (ravan progresivni talas):</p>
<p style="text-align:center">$\\psi(x,t) = \\psi_0 \\cos(\\omega t - kx)$</p>
<p>Simboli: $\\psi_0$ — amplituda (m), $k$ — talasni broj (rad/m), $\\lambda$ — talasna dužina (m). <b>Značaj:</b> opisuje stanje talasa u svakoj tački prostora i u svakom trenutku.</p>`
    },
    {
      h: "Brzina čestice i brzina talasa",
      html: `<p>Parcijalnim diferenciranjem talasne funkcije po vremenu dobija se <b>brzina oscilovanja čestice</b>:</p>
<p style="text-align:center">$u(x,t) = \\dfrac{\\partial \\psi}{\\partial t} = -\\omega\\psi_0\\sin(\\omega t - kx)$</p>
<p style="text-align:center">$a(x,t) = \\dfrac{\\partial u}{\\partial t} = -\\omega^2\\psi$</p>
<p><b>Suštinska razlika:</b> $u(x,t)$ je brzina oscilovanja pojedinačne čestice oko ravnoteže, dok je $v_0$ brzina prenošenja poremećaja (talasa) kroz sredinu. Simboli: $u$ (m/s), $\\partial$ — oznaka parcijalnog izvoda. <b>Smisao:</b> ne mešati lokalno kretanje čestice sa prostiranjem talasa.</p>`
    },
    {
      h: "Osnovna relacija talasnog kretanja",
      html: `<p>Zahtevom da faza bude konstantna ($\\omega t - kx = \\text{const}$) i diferenciranjem po $x$ i $t$:</p>
<p style="text-align:center">$\\omega\\,dt - k\\,dx = 0 \\;\\Rightarrow\\; \\dfrac{dx}{dt} \\equiv v_0 = \\dfrac{\\omega}{k}$</p>
<p style="text-align:center">$v_0 = \\dfrac{2\\pi\\nu}{2\\pi/\\lambda} = \\lambda\\nu$</p>
<p>Simboli: $v_0$ — brzina talasa (m/s), $\\lambda$ — talasna dužina (m), $\\nu$ — frekvencija (Hz). <b>Značaj:</b> proizvod talasne dužine i frekvencije jednak je brzini prostiranja — fundamentalna veza za sve talase.</p>`
    },
    {
      h: "Brzina talasa u sredinama",
      html: `<p><b>Čvrsta i tečna tela</b> (Njutnov obrazac):</p>
<p style="text-align:center">$v_0 = \\sqrt{\\dfrac{E}{\\rho}}$</p>
<p>gde je $E$ Jangov moduo (za longitudinalne) odnosno moduo smicanja (za transverzalne talase), $\\rho$ — gustina.</p>
<p><b>Gasovi</b> (Laplasov obrazac), uz $p=\\rho RT/M$:</p>
<p style="text-align:center">$v_0 = \\sqrt{\\dfrac{\\kappa p}{\\rho}} = \\sqrt{\\dfrac{\\kappa R T}{M}}$</p>
<p>Simboli: $\\kappa=C_p/C_V$ — odnos molarnih toplotnih kapaciteta, $p$ — pritisak (Pa), $T$ — apsolutna temperatura (K), $M$ — molarna masa (kg/mol), $R$ — gasna konstanta. <b>Smisao:</b> brzina talasa raste sa krutošću sredine, a opada sa gustinom; u gasu zavisi od temperature.</p>`
    },
    {
      h: "Talasna jednačina",
      html: `<p>Na element šipke (presek $S$, gustina $\\rho$, moduo $E_Y$) primenjuje se Hukov zakon $\\frac{F}{S}=E_Y\\frac{\\partial\\psi}{\\partial x}$. Razlika sila na krajevima:</p>
<p style="text-align:center">$dF = SE_Y\\dfrac{\\partial^2\\psi}{\\partial x^2}\\,dx$</p>
<p>Po II Njutnovom zakonu $dF=dm\\cdot a = \\rho S\\,dx\\,\\dfrac{\\partial^2\\psi}{\\partial t^2}$, izjednačavanjem:</p>
<p style="text-align:center">$\\dfrac{\\partial^2\\psi}{\\partial t^2} = \\dfrac{E_Y}{\\rho}\\dfrac{\\partial^2\\psi}{\\partial x^2} = v_0^2\\dfrac{\\partial^2\\psi}{\\partial x^2}$</p>
<p>Analiza dimenzija pokazuje da je $E_Y/\\rho$ kvadrat brzine. <b>Univerzalnost:</b> ista jednačina važi za talas u žici ($v_0=\\sqrt{F/\\gamma}$), zvuk u vazduhu i elektromagnetni talas ($v_0=c/\\sqrt{\\varepsilon_r\\mu_r}$). Rešenje je $\\psi=\\psi_0\\cos(\\omega t - kx)$. Jednačina je invarijantna na promenu znaka $x$ i $t$, što omogućava odbijanje i stojeće talase.</p>`
    }
  ],
  formulas: [
    { name: "Elastična (restituciona) sila", formula: "F = -kx", desc: "F sila (N), k konstanta elastičnosti (N/m), x elongacija (m)." },
    { name: "Jednačina kretanja oscilatora", formula: "x = x_0 \\sin(\\omega t + \\varphi)", desc: "x elongacija (m), x0 amplituda (m), ω rad/s, φ početna faza (rad), t s." },
    { name: "Ubrzanje oscilatora", formula: "a = -\\omega^2 x", desc: "a ubrzanje (m/s^2), ω rad/s, x elongacija (m); uvek ka ravnoteži." },
    { name: "Ugaona frekvencija", formula: "\\omega = 2\\pi\\nu = \\dfrac{2\\pi}{T} = \\sqrt{\\dfrac{k}{m}}", desc: "ω rad/s, ν Hz, T period (s), k N/m, m masa (kg)." },
    { name: "Ukupna energija oscilatora", formula: "E_u = \\dfrac{1}{2}m\\omega^2 x_0^2 = \\text{const}", desc: "Eu ukupna energija (J), m kg, ω rad/s, x0 amplituda (m)." },
    { name: "Frekvencija LC kola", formula: "\\omega = \\dfrac{1}{\\sqrt{LC}}", desc: "ω rad/s, L induktivnost (H), C kapacitivnost (F)." },
    { name: "Talasna funkcija (ravan progresivni talas)", formula: "\\psi(x,t) = \\psi_0 \\cos(\\omega t - kx)", desc: "ψ0 amplituda (m), ω rad/s, k talasni broj (rad/m), x m, t s." },
    { name: "Talasni broj", formula: "k = \\dfrac{2\\pi}{\\lambda}", desc: "k talasni broj (rad/m), λ talasna dužina (m)." },
    { name: "Brzina čestice", formula: "u = \\dfrac{\\partial \\psi}{\\partial t} = -\\omega\\psi_0 \\sin(\\omega t - kx)", desc: "u brzina oscilovanja čestice (m/s); različita od v0 brzine talasa." },
    { name: "Osnovna relacija talasa", formula: "v_0 = \\lambda\\nu = \\dfrac{\\omega}{k}", desc: "v0 brzina talasa (m/s), λ talasna dužina (m), ν frekvencija (Hz)." },
    { name: "Brzina talasa u čvrstom / gasu", formula: "v_0 = \\sqrt{\\dfrac{E}{\\rho}}, \\quad v_0 = \\sqrt{\\dfrac{\\kappa R T}{M}}", desc: "E moduo (Pa), ρ gustina (kg/m^3), κ=Cp/CV, R J/(mol K), T K, M kg/mol." },
    { name: "Talasna jednačina", formula: "\\dfrac{\\partial^2\\psi}{\\partial t^2} = v_0^2 \\dfrac{\\partial^2\\psi}{\\partial x^2}", desc: "ψ talasna funkcija, v0 brzina talasa (m/s), x m, t s; univerzalna." }
  ],
  numbers: [
    ["Brzina zvuka na 0 °C (c0)", "331,36 m/s"],
    ["Referentna temperatura T0", "273,16 K"],
    ["Faza φ u amplitudnom položaju (t=0)", "π/2 rad"],
    ["κ za jednoatomski gas (npr. He)", "1,67"],
    ["Primer: Jangov moduo bakra (izračunato)", "117 GPa"],
    ["Primer: amplituda sile (m=20 g)", "2 mN"],
    ["Primer: period oscilovanja (ω=1 rad/s)", "6,28 s"],
    ["Primer: srednja kvadratna brzina He (v0=970 m/s)", "1300 m/s"]
  ],
  flashcards: [
    { q: "Koja sila uzrokuje harmonijsko oscilovanje i kako glasi?", a: "Elastična (restituciona, povratna) sila F=-kx; predznak minus znači da je usmerena suprotno od pomeranja, ka ravnoteži." },
    { q: "Kako glasi jednačina kretanja harmonijskog oscilatora?", a: "x = x0 sin(ωt + φ), gde su x0 amplituda, ω ugaona frekvencija, φ početna faza." },
    { q: "Čemu je jednako ubrzanje harmonijskog oscilatora?", a: "a = -ω²x — proporcionalno je elongaciji i uvek usmereno ka ravnotežnom položaju." },
    { q: "Koliko iznosi ukupna energija oscilatora i o čemu zavisi?", a: "Eu = ½mω²x0² = const; konstantna je i proporcionalna kvadratu amplitude. U amplitudi je sva potencijalna, u ravnoteži sva kinetička." },
    { q: "Šta je električni analog mehaničkog oscilatora i kolika mu je frekvencija?", a: "LC kolo; ω = 1/√(LC), naelektrisanje q = q0 cos(ωt). Analogija: m↔L, k↔1/C, x↔q, v↔I." },
    { q: "Po čemu se razlikuju transverzalni i longitudinalni talas?", a: "Kod transverzalnog čestice osciluju normalno na pravac prostiranja (samo čvrste sredine), kod longitudinalnog u pravcu prostiranja (čvrste, tečne i gasovite sredine)." },
    { q: "Kolika je razlika između brzine čestice u i brzine talasa v0?", a: "u = ∂ψ/∂t je brzina oscilovanja pojedinačne čestice oko ravnoteže, a v0 je brzina prenošenja poremećaja kroz sredinu." },
    { q: "Kako glasi osnovna relacija talasnog kretanja?", a: "v0 = λν = ω/k; brzina talasa jednaka je proizvodu talasne dužine i frekvencije." },
    { q: "Kako glasi talasna jednačina i zašto je univerzalna?", a: "∂²ψ/∂t² = v0² ∂²ψ/∂x²; isti oblik važi za talas u žici, zvuk i elektromagnetni talas, pa je univerzalna." }
  ],
  quiz: [
    {
      q: "Elastična sila koja uzrokuje harmonijsko oscilovanje glasi:",
      options: ["F = kx²", "F = -kx", "F = -kx²", "F = kx"],
      answer: 1
    },
    {
      q: "Ubrzanje harmonijskog oscilatora je:",
      options: ["a = -ω²x", "a = ωx", "a = -ωx²", "a = ω²x²"],
      answer: 0
    },
    {
      q: "Ukupna energija harmonijskog oscilatora:",
      options: ["Raste sa vremenom", "Maksimalna je u ravnotežnom položaju", "Konstantna je i jednaka ½mω²x0²", "Jednaka je nuli u amplitudi"],
      answer: 2
    },
    {
      q: "Ugaona frekvencija LC kola jednaka je:",
      options: ["ω = √(LC)", "ω = 1/√(LC)", "ω = √(k/m)", "ω = LC"],
      answer: 1
    },
    {
      q: "Osnovna relacija talasnog kretanja glasi:",
      options: ["v0 = λ/ν", "v0 = ν/λ", "v0 = λν", "v0 = λ/T²"],
      answer: 2
    },
    {
      q: "Brzina zvuka u gasu prema Laplasovom obrascu zavisi od temperature kao:",
      options: ["v0 = √(κRT/M)", "v0 = √(M/κRT)", "v0 = κRT/M", "v0 = √(E/ρ)"],
      answer: 0
    }
  ]
};

const T_l7 = {
  id: "l7",
  title: "7. Talasi II i EM talasi",
  subtitle: "Zvuk, interferencija, rezonancija, Dopler, EM talasi",
  icon: "🔊",
  color: "#ef4444",
  oneLiner: "Drugi deo mehaničkih talasa (zvuk, intenzitet i nivo u dB, interferencija, stojeći talasi, rezonancija, Doplerov efekat) i uvod u elektromagnetne talase (Maksvelove jednačine, prostiranje, brzina, apsorpcija i spektar).",
  sections: [
    {
      title: "Zvučni talas",
      html: `<p><b>Definicija.</b> Pod zvukom se podrazumevaju mehanički talasi koje ljudsko uho može da registruje čulom sluha. Uho je osetljivo na frekvencije u opsegu od <b>20 Hz do 20 kHz</b>.</p>
<ul>
<li>Frekvencije ispod 20 Hz spadaju u <b>infrazvuk</b>.</li>
<li>Frekvencije preko $20\\cdot 10^{3}$ Hz spadaju u <b>ultrazvuk</b>.</li>
</ul>
<p><b>Priroda talasa.</b> Prenos zvuka kroz vazduh je <b>longitudinalan</b>: putuju zone zgušnjavanja i razređivanja molekula, slično prostiranju longitudinalnog talasa kroz šipku. Bitna razlika: atomi šipke osciluju sa amplitudama mnogo manjim od prečnika atoma ($\\psi_0 \\ll d$), dok kod zvuka u vazduhu amplitude moraju biti barem reda srednjeg slobodnog puta molekula ($\\psi_0 \\ge \\langle \\ell \\rangle \\simeq 10^{-7}$ m).</p>
<p><b>Adijabatski proces.</b> Prostiranje zvuka kroz vazduh je <b>adijabatski</b> termodinamički proces. Naizmenično zgušnjavanje (kompresija) i razređivanje (ekspanzija) lokalno povisi odnosno snizi temperaturu, ali pošto je brzina talasa daleko veća od brzine toplotnog provođenja, među slojevima ne stigne da dođe do razmene toplote.</p>
<p><b>Značaj.</b> Razumevanje longitudinalne i adijabatske prirode zvuka je osnova za izvođenje brzine zvuka (Laplasov obrazac) i za sve dalje pojave: intenzitet, čujnost i rezonanciju.</p>`
    },
    {
      title: "Prenos energije zvučnim talasom",
      html: `<p><b>Definicija.</b> Talas svojim prostiranjem prenosi energiju, pobuđujući sve nove slojeve molekula. Posmatramo ravan progresivan talas amplitude $\\psi_0$ i ugaone frekvencije $\\omega$ koji se brzinom $v_0$ prostire kroz homogenu sredinu.</p>
<p><b>Izvođenje (korak po korak).</b> Srednja energija harmonijskog oscilovanja jednog molekula mase $\\mu$ iznosi:</p>
<p style="text-align:center">$\\langle \\varepsilon \\rangle = \\dfrac{1}{2}\\,\\mu\\,\\omega^{2}\\psi_0^{2}$</p>
<p>Ako je koncentracija molekula $n_0$, gustina energije (energija po jedinici zapremine) je:</p>
<p style="text-align:center">$\\langle w \\rangle = n_0\\,\\langle \\varepsilon \\rangle = \\dfrac{1}{2}\\,n_0\\,\\mu\\,\\omega^{2}\\psi_0^{2} = \\dfrac{1}{2}\\,\\rho\\,\\omega^{2}\\psi_0^{2}$</p>
<p>jer je $\\rho = n_0\\,\\mu$ gustina sredine.</p>
<p><b>Simboli i jedinice.</b> $\\langle \\varepsilon \\rangle$ u J; $\\mu$ masa molekula u kg; $\\omega$ ugaona frekvencija u rad/s; $\\psi_0$ amplituda u m; $n_0$ koncentracija u $\\mathrm{m^{-3}}$; $\\rho$ gustina u $\\mathrm{kg/m^3}$; $\\langle w \\rangle$ gustina energije u $\\mathrm{J/m^3}$.</p>
<p><b>Značaj.</b> Gustina energije je most ka pojmu intenziteta: intenzitet je upravo proizvod gustine energije i brzine talasa.</p>`
    },
    {
      title: "Fizički intenzitet zvuka",
      html: `<p><b>Definicija.</b> Fizički intenzitet zvuka je energija koja u jedinici vremena prođe kroz jedinicu površine normalne na pravac prostiranja talasa.</p>
<p><b>Izvođenje.</b> Pošto se energija prenosi brzinom $v_0$, intenzitet je gustina energije puta brzina:</p>
<p style="text-align:center">$I = v_0 \\cdot \\langle w \\rangle \\equiv \\dfrac{P}{S} = \\dfrac{1}{2}\\,\\rho\\,v_0\\,\\omega^{2}\\psi_0^{2}$</p>
<p>Intenzitet se može povezati i sa akustičkim poremećajem pritiska. Iz Hukovog zakona $p = E_Y\\,\\dfrac{\\partial \\psi}{\\partial x}$ i $E_Y = v_0^{2}\\rho$ dobija se amplituda akustičkog pritiska:</p>
<p style="text-align:center">$\\Delta p_{max} = v_0^{2}\\rho\\,k\\,\\psi_0 = \\rho\\,v_0\\,\\psi_0\\,\\omega$</p>
<p>pa upoređivanjem sa definicijom sledi:</p>
<p style="text-align:center">$I = \\dfrac{1}{2}\\dfrac{\\Delta p_{max}^{2}}{\\rho\\,v_0} \\equiv \\dfrac{\\Delta p_{eff}^{2}}{R_{ac}}$</p>
<p>gde je $R_{ac} = \\rho\\,v_0$ akustički otpor sredine, a $\\Delta p_{eff} = \\Delta p_{max}/\\sqrt{2}$ efektivni akustički pritisak.</p>
<p><b>Simboli i jedinice.</b> $I$ u $\\mathrm{W/m^2}$; $P$ snaga u W; $S$ površina u $\\mathrm{m^2}$; $\\rho$ u $\\mathrm{kg/m^3}$; $v_0$ u m/s; $\\Delta p$ u Pa; $R_{ac}$ u $\\mathrm{Pa\\cdot s/m}$.</p>
<p><b>Značaj.</b> Intenzitet objektivno meri jačinu zvuka i osnov je za definiciju fiziološkog nivoa zvuka u decibelima.</p>`
    },
    {
      title: "Fiziološki intenzitet zvuka (čujnost) i nivo u dB",
      html: `<p><b>Definicija.</b> Osetljivost uha zavisi od frekvencije. Za svaku frekvenciju postoji minimalni intenzitet koji se može registrovati (<b>prag čujnosti</b>) i maksimalni koji se može izdržati (<b>prag bola</b>). Uho najbolje reaguje na opseg $800-6000$ Hz.</p>
<ul>
<li>Prag čujnosti: $I_0 = 10^{-12}\\ \\mathrm{W/m^2}$.</li>
<li>Prag bola: $I_{max} = 1\\ \\mathrm{W/m^2}$.</li>
</ul>
<p><b>Izvođenje nivoa.</b> Pošto sa porastom intenziteta sposobnost uha da razlikuje bliske intenzitete slabi (logaritamski odziv), nivo (jačina) zvuka se izražava u <b>decibelima</b>:</p>
<p style="text-align:center">$L\\,[\\mathrm{dB}] = 10\\,\\log_{10}\\dfrac{I}{I_0}$</p>
<p>Na pragu čujnosti je $I = I_0$, pa $L_0 = 10\\log_{10}1 = 0$ dB; na pragu bola $I = 1\\ \\mathrm{W/m^2}$, pa $L = 10\\log_{10}\\!\\left(10^{12}\\right) = 120$ dB.</p>
<p><b>Simboli i jedinice.</b> $L$ nivo zvuka u dB; $I$ posmatrani intenzitet u $\\mathrm{W/m^2}$; $I_0 = 10^{-12}\\ \\mathrm{W/m^2}$ referentni prag.</p>
<p><b>Značaj.</b> Logaritamska skala (dB) odgovara fiziološkom doživljaju jačine zvuka i pokriva ogroman dijapazon intenziteta (12 redova veličine) brojevima od 0 do 120.</p>`
    },
    {
      title: "Interferencija talasa",
      html: `<p><b>Definicija.</b> Talasi iste prirode su <b>aditivni</b> (princip superpozicije): u istoj tački prostora elongacije se sabiraju. Talasi koji u svakoj tački imaju konstantnu faznu razliku zovu se <b>koherentni</b>; koherentni mogu biti samo talasi jednake frekvencije. Pri slaganju koherentnih talasa nastaje <b>interferencija</b> - uzajamno pojačavanje i slabljenje.</p>
<p><b>Uslov maksimuma.</b> Maksimalno pojačanje nastaje kada su talasi u fazi ($\\Delta\\varphi = 2n\\pi$), tj. kada je razlika pređenih puteva (putna razlika) ceo umnožak talasne dužine:</p>
<p style="text-align:center">$\\delta = n\\,\\lambda\\,;\\qquad n = 0, \\pm 1, \\pm 2, \\ldots$</p>
<p><b>Uslov minimuma.</b> Maksimalno slabljenje (potiranje) nastaje kada su talasi u protivfazi ($\\Delta\\varphi = (2n+1)\\pi$):</p>
<p style="text-align:center">$\\delta = (2n+1)\\,\\dfrac{\\lambda}{2}\\,;\\qquad n = 0, \\pm 1, \\pm 2, \\ldots$</p>
<p><b>Simboli i jedinice.</b> $\\delta$ putna razlika u m; $\\lambda$ talasna dužina u m; $\\Delta\\varphi$ fazna razlika u rad; $n$ ceo broj.</p>
<p><b>Značaj.</b> Interferencija je osnova za stojeće talase, rezonanciju i celokupnu talasnu optiku.</p>`
    },
    {
      title: "Stojeći talasi",
      html: `<p><b>Definicija.</b> Stojeći talas je specijalan slučaj interferencije kada se dva talasa jednakih talasnih dužina i amplituda kreću duž istog pravca u suprotnim smerovima. Tipično nastaje pri odbijanju ravnog talasa od prepreke, pri čemu odbijeni talas menja fazu za $\\pi$.</p>
<p><b>Izvođenje.</b> Upadni talas (u pozitivnom smeru $x$-ose) i odbijeni (u negativnom smeru):</p>
<p style="text-align:center">$\\psi_{+} = \\psi_0 \\cos(\\omega t - kx)\\,,\\qquad \\psi_{-} = \\psi_0 \\cos(\\omega t + kx)$</p>
<p>Sabiranjem, uz adicionu teoremu $\\cos\\alpha + \\cos\\beta = 2\\cos\\!\\dfrac{\\alpha+\\beta}{2}\\cos\\!\\dfrac{\\alpha-\\beta}{2}$, dobija se:</p>
<p style="text-align:center">$\\psi = \\psi_{+} + \\psi_{-} = 2\\psi_0 \\cos(kx)\\,\\cos(\\omega t) \\equiv A(x)\\cos(\\omega t)$</p>
<p style="text-align:center">$A(x) = 2\\psi_0 \\cos(kx)$</p>
<p>Amplituda zavisi od položaja po kosinusnoj funkciji i ne putuje kroz prostor.</p>
<p><b>Čvorovi i trbusi.</b> <b>Čvorovi</b> su tačke u kojima je amplituda uvek nula; <b>trbusi</b> su tačke u kojima amplituda ima maksimum $2\\psi_0$. Položaji trbuha: $x = n\\dfrac{\\lambda}{2}$; položaji čvorova: $x = (2n+1)\\dfrac{\\lambda}{4}$, za $n = 0, 1, 2, \\ldots$ Trbusi i čvorovi se ne pomeraju, pa otud naziv stojeći talas.</p>
<p><b>Simboli i jedinice.</b> $\\psi_0$ amplituda u m; $k = 2\\pi/\\lambda$ talasni broj u rad/m; $\\omega$ u rad/s; $A(x)$ amplituda u tački $x$, u m.</p>
<p><b>Značaj.</b> Stojeći talasi objašnjavaju rad muzičkih instrumenata, rezonanciju u cevima i šipkama i sopstvene modove svakog ograničenog sistema.</p>`
    },
    {
      title: "Rezonancija",
      html: `<p><b>Definicija.</b> Svaki sistem sastoji se od atoma koji osciluju oko ravnotežnih položaja sopstvenom (prirodnom) frekvencijom. Kada se frekvencija spoljašnje (prinudne) harmonijske sile poklopi sa sopstvenom frekvencijom sistema, dolazi do naglog skoka amplitude oscilovanja - to je <b>rezonancija</b>.</p>
<p><b>Veza sa stojećim talasima.</b> Zbog višestrukog odbijanja od tačaka učvršćenja stojeći talas dodatno uvećava amplitudu. Frekvencije koje obezbeđuju uslove za rezonanciju zovu se <b>rezonantne</b>; najniža je <b>osnovni ton</b>, a ostale su <b>viši harmonici (overtonovi)</b>. Na učvršćenom kraju mora biti čvor, a na slobodnom trbuh.</p>
<p><b>Primer izvođenja (šipka učvršćena sa jedne strane).</b> Uslov za stojeći talas je:</p>
<p style="text-align:center">$L = (2n+1)\\dfrac{\\lambda_n}{4}\\,,\\qquad n = 0, 1, 2, \\ldots$</p>
<p>Koristeći $v_0 = \\lambda_n \\nu_n = \\sqrt{\\dfrac{E}{\\rho}}$ dobijaju se sopstvene frekvencije:</p>
<p style="text-align:center">$\\nu_n = \\dfrac{1}{\\lambda_n}\\sqrt{\\dfrac{E}{\\rho}} = \\dfrac{2n+1}{4L}\\sqrt{\\dfrac{E}{\\rho}}$</p>
<p><b>Primeri (dobri i loši).</b> Rezonancija je korisna kod muzičkih instrumenata, radio antena i mikrotalasnih pećnica. Štetna je kod rušenja zgrada u zemljotresu i kod čuvenog <b>rušenja mosta Takoma</b> (Vašington, 7. novembra 1940), koji se srušio pod dejstvom ne previše jakog vetra (64 km/h) usled rezonancije.</p>
<p><b>Simboli i jedinice.</b> $L$ dužina šipke u m; $\\lambda_n$ talasna dužina $n$-tog moda u m; $\\nu_n$ sopstvena frekvencija u Hz; $E$ Jangov modul u Pa; $\\rho$ gustina u $\\mathrm{kg/m^3}$.</p>
<p><b>Značaj.</b> Rezonancija određuje spektar sopstvenih oscilacija svakog tela i ključna je i za tehniku (selekcija frekvencija) i za bezbednost konstrukcija.</p>
<figure class="figure"><img src="img/l7/p015_67.jpg" alt="Rezonantni modovi"><figcaption>Sopstvene oscilacije (modovi) - čvorovi i trbusi za n = 0, 1, 2, 3.</figcaption></figure><figure class="figure"><img src="img/l7/p017_73.jpg" alt="Most Takoma"><figcaption>Rušenje mosta Takoma (1940) usled rezonancije.</figcaption></figure>`
    },
    {
      title: "Doplerov efekat",
      html: `<p><b>Definicija.</b> Kada se izvor talasa i/ili prijemnik kreću jedan u odnosu na drugog, prijemnik registruje izmenjenu frekvenciju u odnosu na emitovanu. Ta pojava je <b>Doplerov efekat</b>.</p>
<p><b>Izvođenje (pokretni izvor).</b> Neka se izvor kreće brzinom $v_i$ ka prijemniku $p_1$, dok prijemnici miruju. Za interval $\\Delta t$ talas pređe $r = v_0\\,\\Delta t$, a izvor $s = v_i\\,\\Delta t$. U smeru kretanja talasni frontovi se zgušnjavaju, pa $\\nu_0\\Delta t$ talasnih dužina staje na rastojanje $(v_0 - v_i)\\Delta t$:</p>
<p style="text-align:center">$\\lambda_1 = \\dfrac{(v_0 - v_i)\\Delta t}{\\nu_0\\,\\Delta t} = \\dfrac{v_0 - v_i}{\\nu_0}$</p>
<p>Iz $\\lambda_1 = \\dfrac{v_0}{\\nu_1}$ sledi povećana frekvencija kod $p_1$ i smanjena kod $p_2$:</p>
<p style="text-align:center">$\\nu_1 = \\dfrac{v_0}{v_0 - v_i}\\,\\nu_0\\,,\\qquad \\nu_2 = \\dfrac{v_0}{v_0 + v_i}\\,\\nu_0$</p>
<p><b>Opšti slučaj.</b> Ako se kreću i izvor i prijemnik:</p>
<p style="text-align:center">$\\nu = \\dfrac{v_0 \\pm v_p}{v_0 \\mp v_i}\\,\\nu_0$</p>
<p><b>Znaci.</b> Gornji znaci (brojilac $+$, imenilac $-$) važe za <b>približavanje</b> prijemnika izvoru i izvora prijemniku; donji znaci za njihovo <b>udaljavanje</b>.</p>
<p><b>Simboli i jedinice.</b> $\\nu$ registrovana frekvencija u Hz; $\\nu_0$ emitovana u Hz; $v_0$ brzina talasa u sredini u m/s; $v_i$ brzina izvora u m/s; $v_p$ brzina prijemnika u m/s.</p>
<p><b>Značaj.</b> Doplerov efekat je osnova radara, merenja brzine, medicinskog ultrazvuka i astronomskog crvenog pomaka.</p>`
    },
    {
      title: "Maksvelove jednačine",
      html: `<p><b>Definicija.</b> Džejms Klark Maksvel je šezdesetih godina XIX veka objedinio dotad poznate zakone o električnim i magnetnim pojavama u četiri jednačine (u vakuumu, bez naelektrisanja i struja):</p>
<p style="text-align:center">$\\mathrm{div}\\,\\vec{E} = 0\\,,\\qquad \\mathrm{div}\\,\\vec{B} = 0$</p>
<p style="text-align:center">$\\mathrm{rot}\\,\\vec{E} = -\\dfrac{\\partial \\vec{B}}{\\partial t}\\,,\\qquad \\mathrm{rot}\\,\\vec{B} = \\dfrac{1}{c^{2}}\\dfrac{\\partial \\vec{E}}{\\partial t}$</p>
<p><b>Konceptualno značenje.</b></p>
<ol>
<li><b>Prva</b> (Gausov zakon): fluks električnog polja kroz zatvorenu površinu u odsustvu naelektrisanja je nula.</li>
<li><b>Druga</b> (Gausov zakon za magnetizam): fluks magnetnog polja kroz zatvorenu površinu je uvek nula, jer ne postoje magnetni monopoli (dipoli).</li>
<li><b>Treća</b> (Faradejev zakon indukcije): vremenski promenljivo magnetno polje stvara promenljivo električno polje čije linije obuhvataju pravac promene $\\vec{B}$.</li>
<li><b>Četvrta</b> (uopšteni Amperov zakon): vremenski promenljivo vrtložno električno polje indukuje magnetno polje sa linijama koje obuhvataju linije $\\vec{E}$.</li>
</ol>
<p><b>Simboli i jedinice.</b> $\\vec{E}$ jačina električnog polja u V/m; $\\vec{B}$ magnetna indukcija u T; $c$ brzina svetlosti u m/s; $\\mathrm{div}$ i $\\mathrm{rot}$ diferencijalni operatori.</p>
<p><b>Značaj.</b> Treća i četvrta jednačina opisuju uzajamno indukovanje polja, što je direktan uzrok postojanja i prostiranja elektromagnetnih talasa.</p>`
    },
    {
      title: "Prostiranje elektromagnetnih talasa",
      html: `<p><b>Definicija.</b> U svakoj tački gde postoji promenljivo magnetno polje istovremeno se javlja i promenljivo električno polje. Ova spregnuta polja čine jedinstveno elektromagnetno polje, a njihovo uzajamno indukovanje širi se kroz prostor kao <b>elektromagnetni talas</b>.</p>
<p><b>Struktura talasa.</b> EM talas je transverzalan: vektori $\\vec{E}$ i $\\vec{B}$ su međusobno normalni i oba normalna na pravac prostiranja ($\\vec{E} \\perp \\vec{B} \\perp$ pravac). Ako je $\\vec{E}$ duž $x$-ose, a talas se prostire duž $z$-ose:</p>
<p style="text-align:center">$E_x(z,t) = E_0 \\cos(\\omega t - k z)$</p>
<p style="text-align:center">$B_y(z,t) = B_0 \\cos(\\omega t - k z)$</p>
<p>gde je $k = \\dfrac{2\\pi}{\\lambda} = \\dfrac{\\omega}{v_0}$ talasni broj, a $\\omega = 2\\pi\\nu$ ugaona frekvencija.</p>
<p><b>Energija.</b> Iz Maksvelovih jednačina sledi jednakost gustina energije polja $\\dfrac{1}{2}\\varepsilon_0 E_0^{2} = \\dfrac{1}{2}\\mu_0 H_0^{2}$, pa oba polja nose podjednak deo energije. Pri delovanju na naelektrisanje važi $\\dfrac{F_e}{F_m} = \\dfrac{c}{v} \\gg 1$, te u interakciji sa elektronima dominira električno polje.</p>
<p><b>Simboli i jedinice.</b> $E_x$ u V/m; $B_y$ u T; $E_0$, $B_0$ amplitude polja; $k$ u rad/m; $\\omega$ u rad/s; $\\nu$ u Hz; $\\lambda$ u m.</p>
<p><b>Značaj.</b> $E$ i $B$ su u fazi i normalni jedno na drugo - to je geometrijska osnova svih EM pojava, od radio prenosa do svetlosti.</p>`
    },
    {
      title: "Brzina elektromagnetnih talasa",
      html: `<p><b>Definicija.</b> Brzina EM talasa zavisi od dielektričnih i magnetnih osobina sredine kroz koju se prostire.</p>
<p><b>Izvođenje.</b> Opšti izraz:</p>
<p style="text-align:center">$v = \\dfrac{1}{\\sqrt{\\varepsilon_0\\,\\varepsilon_r\\,\\mu_0\\,\\mu_r}}$</p>
<p>Za vakuum je $\\varepsilon_r = 1$ i $\\mu_r = 1$, pa se dobija brzina svetlosti:</p>
<p style="text-align:center">$c = \\dfrac{1}{\\sqrt{\\varepsilon_0\\,\\mu_0}} \\approx 3\\cdot 10^{8}\\ \\mathrm{m/s}$</p>
<p>Otuda u sredini:</p>
<p style="text-align:center">$v = \\dfrac{c}{\\sqrt{\\varepsilon_r\\,\\mu_r}} = \\dfrac{c}{n}\\,,\\qquad n = \\sqrt{\\varepsilon_r\\,\\mu_r}$</p>
<p>gde je $n$ apsolutni indeks prelamanja sredine.</p>
<p><b>Simboli i jedinice.</b> $v$ brzina u sredini u m/s; $\\varepsilon_0$ dielektrična propustljivost vakuuma u F/m; $\\mu_0$ magnetna propustljivost vakuuma u H/m; $\\varepsilon_r$, $\\mu_r$ relativne (bezdimenzione) propustljivosti; $c$ u m/s; $n$ indeks prelamanja (bezdimenzioni).</p>
<p><b>Značaj.</b> Iz čisto električnih i magnetnih konstanti dobija se brzina svetlosti - to je dokaz da je svetlost elektromagnetni talas. Indeks prelamanja $n$ povezuje EM teoriju sa optikom (prelamanje, disperzija).</p>`
    },
    {
      title: "Apsorpcija EM talasa i Lamberov zakon",
      html: `<p><b>Definicija.</b> Pri prolasku EM (svetlosnog) talasa intenziteta $I_0$ kroz optičku sredinu deo se <b>apsorbuje</b> ($I_a$), deo <b>transmituje</b> ($I_t$), a deo <b>reflektuje</b> ($I_r$) od graničnih površina.</p>
<p><b>Bilans.</b> Definišu se apsorpciona moć, transparencija i reflekciona moć:</p>
<p style="text-align:center">$A = \\dfrac{I_a}{I_0}\\,,\\qquad T = \\dfrac{I_t}{I_0}\\,,\\qquad R = \\dfrac{I_r}{I_0}$</p>
<p>Pošto je $I_0 = I_r + I_a + I_t$, sledi zakon očuvanja:</p>
<p style="text-align:center">$R + A + T = 1$</p>
<p><b>Izvođenje Lamberovog zakona.</b> U tankom sloju debljine $dx$ intenzitet opada za $dI = -k\\,I\\,dx$, odnosno $\\dfrac{dI}{I} = -k\\,dx$. Integraljenjem od $0$ do $D$ (i od $I_0$ do $I_t$):</p>
<p style="text-align:center">$\\ln\\dfrac{I_t}{I_0} = -k\\,D \\quad\\Rightarrow\\quad I_t = I_0\\,e^{-kD}$</p>
<p>Intenzitet propuštenog zračenja <b>eksponencijalno opada</b> sa debljinom sloja.</p>
<p><b>Simboli i jedinice.</b> $I_0$, $I_t$, $I_a$, $I_r$ intenziteti u $\\mathrm{W/m^2}$; $A$, $T$, $R$ bezdimenzioni odnosi; $k$ koeficijent apsorpcije u $\\mathrm{m^{-1}}$; $D$ debljina sloja u m.</p>
<p><b>Značaj.</b> Lamberov zakon je osnova spektrofotometrije, optike filtara i procene zaštite od zračenja. Koeficijent $k$ zavisi od sredine i talasne dužine zračenja.</p>`
    },
    {
      title: "Spektar elektromagnetnih talasa",
      html: `<p><b>Definicija.</b> EM talasi obuhvataju ogroman dijapazon talasnih dužina (frekvencija); spektar čine zračenja koja se razlikuju samo po talasnoj dužini. Talasna dužina zavisi od dimenzija emitera: manji emiteri (molekuli, atomi, jezgra) emituju kraće talase. Osnovna relacija: $v_0 = \\lambda\\,\\nu = \\dfrac{\\omega}{k}$.</p>
<p><b>Oblasti spektra (od najveće ka najmanjoj talasnoj dužini).</b></p>
<table>
<tr><th>Oblast</th><th>Talasna dužina</th><th>Primena</th></tr>
<tr><td>Radio-talasi</td><td>km do $\\sim 0,3$ m</td><td>telekomunikacije (AM, FM, TV)</td></tr>
<tr><td>Mikrotalasi</td><td>$0,3$ m $-$ 1 mm</td><td>radar, molekulska struktura</td></tr>
<tr><td>Infracrveno</td><td>1 mm $-$ 760 nm</td><td>toplotno zračenje</td></tr>
<tr><td>Vidljiva svetlost</td><td>760 $-$ 380 nm</td><td>vid, optika</td></tr>
<tr><td>Ultraljubičasto (UV)</td><td>380 $-$ 0,6 nm</td><td>optika, sterilizacija</td></tr>
<tr><td>Rentgenski (X) zraci</td><td>$10^{-9}$ m $-$ $6\\cdot 10^{-12}$ m</td><td>medicina, dijagnostika</td></tr>
<tr><td>Gama ($\\gamma$) zraci</td><td>$10^{-10}$ m $-$ $10^{-14}$ m</td><td>nuklearno poreklo</td></tr>
</table>
<p>Sa porastom frekvencije (kraće $\\lambda$) raste energija zračenja - od niske kod radio-talasa do visoke kod $\\gamma$-zraka.</p>
<p><b>Simboli i jedinice.</b> $\\lambda$ talasna dužina u m; $\\nu$ frekvencija u Hz; $v_0$ brzina (u vakuumu $\\equiv c$) u m/s; $k$ talasni broj u rad/m.</p>
<p><b>Značaj.</b> Sva zračenja u spektru su iste prirode (EM talasi) i razlikuju se samo po talasnoj dužini; svaku oblast proučava posebna grana fizike i tehnike.</p>`
    }
  ],
  formulas: [
    { name: "Intenzitet zvuka", formula: "I = \\dfrac{1}{2}\\,\\rho\\,v_0\\,\\omega^{2}\\psi_0^{2}", desc: "I u W/m²; rho gustina (kg/m³), v0 brzina (m/s), omega (rad/s), psi0 amplituda (m)." },
    { name: "Nivo zvuka (decibeli)", formula: "L = 10\\log_{10}\\dfrac{I}{I_0}", desc: "L u dB; I i I0 u W/m²; I0=10⁻¹² (prag čujnosti), prag bola 1 W/m² = 120 dB." },
    { name: "Amplituda akustičkog pritiska", formula: "\\Delta p_{max} = \\rho\\,v_0\\,\\psi_0\\,\\omega", desc: "Delta p u Pa; veza intenziteta i pritiska: I = Delta p_max² / (2 rho v0)." },
    { name: "Uslov interferencionog maksimuma", formula: "\\delta = n\\,\\lambda", desc: "delta putna razlika (m), lambda (m), n ceo broj; talasi u fazi." },
    { name: "Uslov interferencionog minimuma", formula: "\\delta = (2n+1)\\dfrac{\\lambda}{2}", desc: "delta putna razlika (m); talasi u protivfazi (potiranje)." },
    { name: "Stojeći talas", formula: "\\psi = 2\\psi_0 \\cos(kx)\\,\\cos(\\omega t)", desc: "psi elongacija (m); amplituda 2 psi0 cos(kx); k=2pi/lambda (rad/m), omega (rad/s)." },
    { name: "Položaji trbuha i čvorova", formula: "x_{trbuh} = n\\dfrac{\\lambda}{2}\\,,\\quad x_{cvor} = (2n+1)\\dfrac{\\lambda}{4}", desc: "x u m; n=0,1,2,...; trbuh maksimum, čvor nula amplitude." },
    { name: "Doplerov efekat (opšte)", formula: "\\nu = \\dfrac{v_0 \\pm v_p}{v_0 \\mp v_i}\\,\\nu_0", desc: "nu registrovana, nu0 emitovana (Hz); v0 brzina talasa, vp prijemnik, vi izvor (m/s); gornji znaci = približavanje." },
    { name: "Talasna jednačina EM talasa", formula: "E_x(z,t) = E_0\\cos(\\omega t - k z)", desc: "Ex u V/m; E perpendikularno B perpendikularno pravac; k=2pi/lambda (rad/m)." },
    { name: "Brzina EM talasa", formula: "v = \\dfrac{1}{\\sqrt{\\varepsilon_0\\,\\varepsilon_r\\,\\mu_0\\,\\mu_r}} = \\dfrac{c}{n}", desc: "v u m/s; c=3·10⁸ m/s; n=sqrt(epsilon_r mu_r) indeks prelamanja (bezdimenzioni)." },
    { name: "Lamberov zakon apsorpcije", formula: "I_t = I_0\\,e^{-kD}", desc: "It propušteni, I0 upadni intenzitet (W/m²); k koeficijent apsorpcije (m⁻¹), D debljina (m)." },
    { name: "Bilans energije talasa", formula: "R + A + T = 1", desc: "R reflekciona, A apsorpciona moć, T transparencija (svi bezdimenzioni odnosi intenziteta)." }
  ],
  numbers: [
    { name: "Opseg čujnosti", value: "20 Hz - 20 kHz" },
    { name: "Prag čujnosti I0", value: "10⁻¹² W/m² (0 dB)" },
    { name: "Prag bola", value: "1 W/m² (120 dB)" },
    { name: "Najbolja osetljivost uha", value: "800 - 6000 Hz" },
    { name: "Srednji slobodni put molekula", value: "~10⁻⁷ m" },
    { name: "Brzina svetlosti c", value: "3·10⁸ m/s" },
    { name: "Pomak faze pri odbijanju", value: "pi (180°)" },
    { name: "Most Takoma", value: "1940, vetar 64 km/h" }
  ],
  flashcards: [
    { q: "Koji je opseg frekvencija čujnog zvuka i šta je infra/ultrazvuk?", a: "Čujno: 20 Hz - 20 kHz. Ispod 20 Hz je infrazvuk, iznad 20 kHz je ultrazvuk. Zvuk je longitudinalan i adijabatski proces." },
    { q: "Zašto je prostiranje zvuka kroz vazduh adijabatski proces?", a: "Zgušnjavanje i razređivanje lokalno menjaju temperaturu, ali pošto je brzina talasa mnogo veća od brzine toplotnog provođenja, među slojevima ne stigne razmena toplote." },
    { q: "Kako se definiše nivo zvuka u decibelima?", a: "L = 10 log10(I/I0), gde je I0 = 10⁻¹² W/m². Prag čujnosti je 0 dB, prag bola (1 W/m²) je 120 dB." },
    { q: "Koji su uslovi za maksimum i minimum pri interferenciji?", a: "Maksimum (pojačanje): putna razlika delta = n·lambda (talasi u fazi). Minimum (potiranje): delta = (2n+1)·lambda/2 (talasi u protivfazi)." },
    { q: "Kako nastaje stojeći talas i kolika mu je amplituda?", a: "Sabiranjem upadnog psi+ = psi0 cos(omega t - kx) i odbijenog psi- = psi0 cos(omega t + kx) dobija se psi = 2 psi0 cos(kx) cos(omega t). Amplituda zavisi od x: trbusi 2 psi0, čvorovi nula." },
    { q: "Šta je rezonancija i koji je čuveni primer njenog štetnog dejstva?", a: "Nagli skok amplitude kada se frekvencija prinudne sile poklopi sa sopstvenom frekvencijom sistema. Štetan primer: rušenje mosta Takoma 1940. pod dejstvom vetra od 64 km/h." },
    { q: "Šta je Doplerov efekat i kako se određuju znaci?", a: "Promena frekvencije zbog relativnog kretanja izvora i prijemnika: nu = (v0 ± vp)/(v0 ∓ vi)·nu0. Gornji znaci važe za međusobno približavanje, donji za udaljavanje." },
    { q: "Kako struktura EM talasa izgleda i kolika je njegova brzina?", a: "E i B su međusobno normalni i normalni na pravac prostiranja, u fazi. Brzina v = 1/sqrt(epsilon0 epsilon_r mu0 mu_r) = c/n; u vakuumu c = 3·10⁸ m/s, n = sqrt(epsilon_r mu_r)." },
    { q: "Šta kaže Lamberov zakon i koji bilans važi za upadni talas?", a: "It = I0 e^(-kD): intenzitet eksponencijalno opada sa debljinom sloja. Bilans intenziteta: R + A + T = 1 (refleksija + apsorpcija + transmisija)." }
  ],
  quiz: [
    {
      q: "Prag čujnosti I0, koji odgovara nivou 0 dB, iznosi:",
      options: ["10⁻¹² W/m²", "1 W/m²", "10⁻⁷ W/m²", "120 W/m²"],
      answer: 0
    },
    {
      q: "Uslov za maksimalno pojačanje pri interferenciji koherentnih talasa je putna razlika:",
      options: ["delta = (2n+1) lambda/2", "delta = n lambda", "delta = lambda/4", "delta = (2n+1) lambda/4"],
      answer: 1
    },
    {
      q: "Rezultujuća elongacija stojećeg talasa, dobijena sabiranjem upadnog i odbijenog talasa, glasi:",
      options: ["psi = psi0 cos(omega t - kx)", "psi = psi0 sin(kx) sin(omega t)", "psi = 2 psi0 cos(kx) cos(omega t)", "psi = psi0 e^(-kx)"],
      answer: 2
    },
    {
      q: "Rušenje mosta Takoma 1940. godine je klasičan primer:",
      options: ["interferencionog minimuma", "Doplerovog efekta", "adijabatskog procesa", "rezonancije"],
      answer: 3
    },
    {
      q: "Brzina elektromagnetnog talasa u sredini sa indeksom prelamanja n je:",
      options: ["v = c/n", "v = c·n", "v = c·n²", "v = n/c"],
      answer: 0
    },
    {
      q: "Lamberov zakon apsorpcije EM talasa glasi:",
      options: ["It = I0 (1 - kD)", "It = I0 e^(-kD)", "It = I0 e^(kD)", "It = I0 / (kD)"],
      answer: 1
    }
  ]
};

const T_l8 = {
  id: "l8",
  title: "8. Optika",
  subtitle: "Geometrijska i talasna optika",
  icon: "🔬",
  color: "#0ea5e9",
  oneLiner: "Od zraka i Fermaovog principa, preko prelamanja, socivа i totalne refleksije, do interferencije, difrakcije, disperzije i polarizacije svetlosti.",
  sections: [
    {
      name: "Geometrijska optika - zrak, izvor, snop",
      html: `<p><b>Definicija.</b> Geometrijska optika je deo optike zasnovan na idealizacijama svetlosnih zraka, uvedenim u ranom periodu kada priroda svetlosti jos nije bila poznata. Ove idealizacije su potpuno zadovoljavajuce sve dok su dimenzije razmatranih sistema mnogo vece od talasne duzine svetlosti, pa se rad gotovo svih optickih instrumenata moze objasniti zakonima geometrijske optike.</p>
<p><b>Osnovni pojmovi.</b></p>
<ul>
<li><b>Svetlosni zrak</b> - pravac prostiranja talasa, tj. orijentisana poluprava koja polazi od svetlosnog izvora.</li>
<li><b>Tackasti svetlosni izvor</b> - svetlosni izvor zanemarljivih dimenzija.</li>
<li><b>Snop svetlosti</b> - skup paralelnih svetlosnih zraka koji se pravolinijski prostiru od tackastog izvora.</li>
</ul>
<p><b>Cetiri principa (zakona) geometrijske optike:</b></p>
<ol>
<li><b>Princip o pravolinijskom prostiranju</b> - kroz homogene prozracne sredine svetlost se krece pravolinijski (otkrili stari Grci posmatrajuci pomracenja). Zanemaruje difrakciju na ivicama tela.</li>
<li><b>Princip o neinteragovanju zraka</b> - svetlosni zraci ni na koji nacin ne uticu jedan na drugog. Zanemaruje interferenciju.</li>
<li><b>Zakon odbijanja (refleksije).</b></li>
<li><b>Zakon prelamanja (refrakcije).</b></li>
</ol>
<p><b>Znacaj.</b> Ovi principi su osnova za projektovanje socivа, ogledala, prizmi i citavih optickih instrumenata, i vaze kao odlicna aproksimacija sve dok je talasna priroda svetlosti zanemarljiva.</p>`
    },
    {
      name: "Fermaov princip i opticki put",
      html: `<p><b>Definicija.</b> Fermaov princip (1679) tvrdi da se izmedju dve tacke u prostoru svetlost krece onom putanjom za koju joj je potrebno <i>minimalno vreme</i>.</p>
<p><b>Izvodjenje optickog puta.</b> Mali deo putanje duzine $ds$ svetlost predje za vreme $dt = \\dfrac{ds}{v_0}$, gde je $v_0$ brzina svetlosti u datoj sredini. Uvodimo apsolutni indeks prelamanja kao kolicnik brzine u vakuumu i brzine u sredini:</p>
<p style="text-align:center">$n = \\dfrac{c}{v_0}$</p>
<p>odakle je $dt = \\dfrac{n}{c}\\,ds$. Ukupno vreme prelaska od tacke 1 do tacke 2 je:</p>
<p style="text-align:center">$\\tau = \\dfrac{1}{c}\\displaystyle\\int_1^2 n\\,ds \\;\\Rightarrow\\; L \\equiv \\tau c = \\displaystyle\\int_1^2 n\\,ds = n\\,s$</p>
<p>Velicina $L$ je <b>opticki</b>, a $s$ <b>geometrijski</b> predjeni put svetlosnog zraka. U homogenoj sredini je $L = n\\,s$.</p>
<p><b>Simboli i jedinice.</b> $c$ - brzina svetlosti u vakuumu [m/s], $v_0$ - brzina u sredini [m/s], $n$ - bezdimenziona velicina, $s$ - geometrijski put [m], $L$ - opticki put [m], $\\tau$ - vreme [s].</p>
<p><b>Znacaj.</b> Iz Fermaovog principa se direktno izvode i zakon odbijanja i zakon prelamanja. Opticki put je osnova za racun fazne razlike kod interferencije.</p>`
    },
    {
      name: "Zakon odbijanja (refleksije)",
      html: `<p><b>Definicija.</b> Kada svetlosni zrak padne na granicnu povrsinu, jedan deo se vraca u sredinu iz koje je dosao - to je odbijanje (refleksija) svetlosti.</p>
<p><b>Izvodjenje (Hajgensov princip).</b> Hajgensov princip (1690) kaze da svaka tacka pogodjena talasom postaje izvor novog sfernog talasa; sekundarni talasi se medjusobno ponistavaju svuda osim po obvojnici koja cini novi talasni front. Neka talasni front padne na granicu tako da tacka A emituje sekundarne talase. Za isto vreme za koje talas stigne od tacke A' do tacke B na granici, sekundarni talasi iz A stizu do B'. Iz podudarnosti trouglova $\\triangle ABA'$ i $\\triangle ABB'$, i jednakosti uglova sa normalnim kracima, sledi:</p>
<p style="text-align:center">$\\alpha = \\alpha'$</p>
<p><b>Iskaz.</b> Svetlosni zraci se na granicnoj povrsini izmedju dve opticki razlicite sredine reflektuju pod istim uglom pod kojim na nju padaju; upadni zrak, odbojni zrak i normala leze u istoj ravni.</p>
<p><b>Simboli.</b> $\\alpha$ - upadni ugao [stepen ili rad], $\\alpha'$ - odbojni ugao [stepen ili rad], mereni od normale na povrsinu.</p>
<p><b>Znacaj.</b> Osnova rada ogledala i sastavni deo objasnjenja totalne refleksije. Procenat odbijene svetlosti zavisi od upadnog ugla - za staklo pri uglu $85^\\circ$ odbije se 62%, a pri $0^\\circ$ jedva 4%.</p>
<figure class="figure"><img src="img/l8/p010_89.jpg" alt="Odbijanje u prirodi"><figcaption>Odbijanje svetlosti na mirnoj vodenoj povrsini.</figcaption></figure>`
    },
    {
      name: "Zakon prelamanja - Snelijus-Dekartov zakon",
      html: `<p><b>Definicija.</b> Pri prelasku u sredinu drugacijih optickih osobina menjaju se brzina i talasna duzina, a samim tim i pravac prostiranja - to je prelamanje (refrakcija) svetlosti.</p>
<p><b>Izvodjenje (Hajgensov princip).</b> Ravan talas se u prvoj sredini krece brzinom $v_1$, a u drugoj $v_2$. Tacka A na granici emituje sekundarne talase. Dok talasni front iz tacke D stigne do granice, sekundarni talasi iz A stignu do B. Iz geometrije:</p>
<p style="text-align:center">$DC = AC\\sin\\alpha = v_1 t, \\qquad AB = AC\\sin\\beta = v_2 t$</p>
<p>Deljenjem ovih izraza dobija se:</p>
<p style="text-align:center">$\\dfrac{\\sin\\alpha}{\\sin\\beta} = \\dfrac{v_1}{v_2} = \\dfrac{n_2}{n_1} \\;\\Rightarrow\\; n_1\\sin\\alpha = n_2\\sin\\beta$</p>
<p><b>Dva slucaja.</b> a) iz opticki redje u opticki guscu sredinu zrak se prelama <i>ka normali</i> ($\\beta < \\alpha$); b) iz guscce u redju sredinu prelama se <i>od normale</i> ($\\beta > \\alpha$).</p>
<p><b>Simboli i jedinice.</b> $\\alpha$ - upadni, $\\beta$ - prelomni ugao [stepen/rad], $n_1, n_2$ - indeksi prelamanja [bezdim.], $v_1, v_2$ - brzine [m/s].</p>
<p><b>Znacaj.</b> Osnovni zakon prelamanja; objasnjava rad socivа i prizmi, prividno pomeranje Sunca iznad horizonta usled prelamanja u atmosferi i ranije navedeno odbijanje.</p>
<figure class="figure"><img src="img/l8/p014_115.jpg" alt="Prelamanje u prirodi"><figcaption>Prelamanje svetlosti u prirodi.</figcaption></figure>`
    },
    {
      name: "Fermaov dokaz Snelijusovog zakona",
      html: `<p><b>Definicija.</b> Snelijus-Dekartov zakon moze se izvesti i iz Fermaovog principa, trazenjem putanje minimalnog optickog puta.</p>
<p><b>Izvodjenje.</b> Zrak ide od izvora S u sredini $n_1$ do tacke P u sredini $n_2$, prelazeci granicu u tacki na rastojanju $x$. Opticki put je:</p>
<p style="text-align:center">$L = n_1 s_1 + n_2 s_2 = n_1\\sqrt{a_1^2 + x^2} + n_2\\sqrt{a_2^2 + (b-x)^2}$</p>
<p>Uslov minimuma $\\dfrac{dL}{dx} = 0$ daje:</p>
<p style="text-align:center">$\\dfrac{n_1 x}{\\sqrt{a_1^2+x^2}} - \\dfrac{n_2(b-x)}{\\sqrt{a_2^2+(b-x)^2}} = n_1\\dfrac{x}{s_1} - n_2\\dfrac{b-x}{s_2} = 0$</p>
<p>Posto je $\\dfrac{x}{s_1} = \\sin\\alpha$ i $\\dfrac{b-x}{s_2} = \\sin\\beta$, direktno sledi:</p>
<p style="text-align:center">$n_1\\sin\\alpha = n_2\\sin\\beta$</p>
<p><b>Simboli.</b> $s_1, s_2$ - geometrijske duzine zraka u dvema sredinama [m], $x$ - polozaj tacke prelaska [m], $a_1, a_2, b$ - geometrijska rastojanja [m].</p>
<p><b>Znacaj.</b> Pokazuje duboku povezanost geometrijske optike i varijacionog principa - i odbijanje i prelamanje su posledica minimuma vremena/optickog puta.</p>`
    },
    {
      name: "Totalna refleksija i opticka vlakna",
      html: `<p><b>Definicija.</b> Kada svetlost prelazi iz opticki gusce u opticki redju sredinu ($n_1 > n_2$), prelomni ugao $\\beta$ je veci od upadnog $\\alpha$. Povecavanjem $\\alpha$ raste i $\\beta$; za granicni ugao $\\alpha_g$ je $\\beta = 90^\\circ$ i prelomljeni zrak klizi po granici. Za svako $\\alpha > \\alpha_g$ nema prelomljenog zraka - nastupa <b>totalna refleksija</b>.</p>
<p><b>Izvodjenje granicnog ugla.</b> Iz zakona prelamanja, uz $\\beta = 90^\\circ$:</p>
<p style="text-align:center">$n_1\\sin\\alpha_g = n_2\\sin 90^\\circ \\;\\Rightarrow\\; \\sin\\alpha_g = \\dfrac{n_2}{n_1} \\;\\Rightarrow\\; \\alpha_g = \\arcsin\\dfrac{n_2}{n_1}$</p>
<p><b>Uslov.</b> Totalna refleksija je moguca samo ako je $n_1 > n_2$ (iz gusce u redju sredinu).</p>
<p><b>Simboli i jedinice.</b> $\\alpha_g$ - granicni ugao totalne refleksije [stepen/rad], $n_1$ - indeks gusce, $n_2$ - indeks redje sredine [bezdim.].</p>
<p><b>Primena.</b> Prizme u optickim instrumentima (menjaju pravac, smer ili pomeraju zrak) i <b>opticka vlakna</b>: zraci su visestrukom totalnom refleksijom zarobljeni u jezgru i prenose se na velike daljine (Kao i Hokam, 1960-te). Jedan stakleni kabel ekvivalentan je 200000 istovremenih telefonskih razgovora; primena i u endoskopiji.</p>
<p><b>Znacaj.</b> Temelj moderne svetlovodne telekomunikacije i medicinske dijagnostike.</p>
<figure class="figure"><img src="img/l8/p022_161.jpg" alt="Totalna refleksija"><figcaption>Demonstracija totalne refleksije - zrak ostaje zarobljen u vodi.</figcaption></figure>`
    },
    {
      name: "Sociva - vrste, karakteristicni zraci, likovi",
      html: `<p><b>Definicija.</b> Sociva su opticki elementi od providnih materijala (staklo, kvarc, kristal), ogranicena sa dve sferne ili jednom sfernom i jednom ravnom povrsinom.</p>
<p><b>Vrste (po konstrukciji):</b> bikonveksna, plankonveksna, konkavkonveksna, bikonkavna, plankonkavna, konvekskonkavna. Po optickim svojstvima dele se na:</p>
<ul>
<li><b>Sabirna</b> - smanjuju prelomni ugao zraka (zraci paralelni osi seku se u realnoj zizi F).</li>
<li><b>Rasipna</b> - povecavaju prelomni ugao (ziza se dobija u preseku produzetaka prelomljenih zraka - imaginarna).</li>
</ul>
<p><b>Karakteristicni zraci</b> (kroz centar O - bez skretanja; paralelan osi - kroz zizu; kroz zizu - izlazi paralelno osi) sluze za graficku konstrukciju lika.</p>
<p><b>Likovi sabirnog sociva.</b></p>
<table>
<tr><th>Polozaj predmeta</th><th>Lik</th></tr>
<tr><td>$p > 2f$</td><td>realan, obrnut, umanjen</td></tr>
<tr><td>$p = 2f$</td><td>realan, obrnut, iste velicine</td></tr>
<tr><td>$f < p < 2f$</td><td>realan, obrnut, uvecan</td></tr>
<tr><td>$p < f$ (lupa)</td><td>imaginaran, uspravan, uvecan</td></tr>
</table>
<p><b>Lik rasipnog sociva</b> je uvek imaginaran, uspravan i umanjen, nezavisno od polozaja predmeta (izmedju zize i centra, sa iste strane kao predmet).</p>
<p><b>Simboli.</b> $p$ - udaljenost predmeta [m], $f$ - zizna daljina [m], F, F' - zize.</p>
<p><b>Znacaj.</b> Osnova lupe, mikroskopa, teleskopa, naocara i fotoaparata.</p>`
    },
    {
      name: "Jednacina sociva, jacina i uvecanje",
      html: `<p><b>Definicija.</b> Jednacina socivа povezuje ziznu daljinu $f$, udaljenost predmeta $p$ i udaljenost lika $\\ell$ od sociva.</p>
<p><b>Jednacina socivа.</b></p>
<p style="text-align:center">$\\dfrac{1}{f} = \\dfrac{1}{p} + \\dfrac{1}{\\ell}$</p>
<p>Vazi za sabirna i rasipna sociva; kod rasipnih su $f$ i $\\ell$ imaginarne velicine i uzimaju se sa negativnim predznakom.</p>
<p><b>Jacina (opticka moc) sfernog socivа.</b> Izvodi se iz prelamanja na dvema sfernim povrsinama:</p>
<p style="text-align:center">$j = \\dfrac{1}{f} = \\dfrac{n_2 - n_1}{n_1}\\left(\\dfrac{1}{R_1} + \\dfrac{1}{R_2}\\right)$</p>
<p>Jacina je u <b>dioptrijama</b> [D = $m^{-1}$] ako je $f$ u metrima. Konvencija: $R > 0$ za konveksne (ispupcene), $R < 0$ za konkavne (izdubljene) povrsine; za ravnu povrsinu $R \\to \\infty$.</p>
<p><b>Linearno uvecanje.</b></p>
<p style="text-align:center">$u = \\dfrac{L}{P} = \\dfrac{\\ell}{p}$</p>
<p><b>Simboli i jedinice.</b> $j$ - jacina [D], $n_2$ - indeks materijala socivа, $n_1$ - indeks okolne sredine [bezdim.], $R_1, R_2$ - poluprecnici zakrivljenosti [m], $L$ - velicina lika, $P$ - velicina predmeta, $u$ - uvecanje [bezdim.].</p>
<p><b>Znacaj.</b> Osnovne radne formule za projektovanje svih optickih instrumenata i odredjivanje jacine naocara.</p>`
    },
    {
      name: "Interferencija svetlosti - uslovi maks/min",
      html: `<p><b>Definicija.</b> Za elektromagnetne talase vazi princip superpozicije: dva <b>koherentna</b> talasa se u nekim tackama pojacavaju, a u drugim ponistavaju. Talasi su koherentni ako imaju istu frekvenciju i vremenski nepromenljivu faznu razliku.</p>
<p><b>Uslov maksimuma.</b> Talasi su u fazi ($\\Delta\\varphi = 2\\pi k$), a putna razlika je celobrojni umnozak talasnih duzina:</p>
<p style="text-align:center">$\\delta = k\\lambda, \\qquad k = 0, \\pm 1, \\pm 2, \\ldots$</p>
<p><b>Uslov minimuma.</b> Talasi su u protivfazi ($\\Delta\\varphi = (2k+1)\\pi$), a putna razlika je neparan umnozak polovina talasnih duzina:</p>
<p style="text-align:center">$\\delta = (2k+1)\\dfrac{\\lambda}{2}, \\qquad k = 0, \\pm 1, \\pm 2, \\ldots$</p>
<p><b>Simboli i jedinice.</b> $\\delta$ - putna (opticka) razlika [m], $\\lambda$ - talasna duzina [m], $k$ - ceo broj (red interferencije), $\\Delta\\varphi$ - fazna razlika [rad].</p>
<p><b>Znacaj.</b> Interferencija (zajedno sa difrakcijom) dokazuje talasnu prirodu svetlosti i osnova je Jangovog eksperimenta, antirefleksionih slojeva i preciznih optickih merenja.</p>`
    },
    {
      name: "Jangov eksperiment",
      html: `<p><b>Definicija.</b> Tomas Jang (1801) propustio je Suncevu svetlost kroz uski otvor, pa je zastorom sa dve bliske pukotine $S_1$ i $S_2$ podelio zrak na dva koherentna talasa koji na zaklonu daju svetle i tamne pruge.</p>
<p><b>Izvodjenje.</b> Razlika puteva dva zraka koji idu ka tacki M je $\\delta = d\\sin\\alpha$. Uslov maksimuma:</p>
<p style="text-align:center">$\\delta = d\\sin\\alpha = k\\lambda$</p>
<p>a minimuma: $d\\sin\\alpha = (2k+1)\\dfrac{\\lambda}{2}$. Posto je $D \\gg d$, vazi $\\sin\\alpha \\approx \\tan\\alpha = \\dfrac{y}{D}$. Uvrstavanjem u uslov maksimuma dobija se polozaj $k$-tog maksimuma:</p>
<p style="text-align:center">$y_k = \\dfrac{k\\lambda D}{d}$</p>
<p>a polozaj $k$-tog minimuma: $y_k = (2k+1)\\dfrac{\\lambda D}{2d}$.</p>
<p><b>Simboli i jedinice.</b> $d$ - rastojanje pukotina [m], $D$ - rastojanje zaklona [m], $y_k$ - polozaj maksimuma od centra [m], $\\lambda$ - talasna duzina [m], $k$ - red.</p>
<p><b>Znacaj.</b> Prvi jasan dokaz talasne prirode svetlosti. U beloj svetlosti samo je centralni maksimum ($k=0$) beo, ostali su obojeni jer polozaj zavisi od $\\lambda$.</p>`
    },
    {
      name: "Geometrijska i opticka razlika puteva",
      html: `<p><b>Definicija.</b> Fazna razlika zraka u interferenciji zavisi od razlike njihovih <i>optickih</i> predjenih puteva, a ne samo geometrijskih.</p>
<p><b>Izvodjenje.</b> U sredini indeksa $n$ talasna duzina je $\\lambda/n$, pa rastojanje $s$ sadrzi isti broj talasnih duzina kao opticki put $\\delta = n\\cdot s$ u vakuumu:</p>
<p style="text-align:center">$\\delta = n\\,s$</p>
<p><b>Dodatak $\\lambda/2$ pri refleksiji.</b> Ako se zrak reflektuje od opticki gusce sredine (vece $n$), faza mu se skokovito menja za $\\pi$, sto je ekvivalentno dodavanju pola talasne duzine na predjeni put:</p>
<p style="text-align:center">$\\delta = s + \\dfrac{\\lambda}{2}$</p>
<p>(razlog je isti kao kod stojecih talasa). Pri refleksiji od redje sredine ovog skoka nema.</p>
<p><b>Simboli i jedinice.</b> $\\delta$ - opticki put [m], $s$ - geometrijski put [m], $n$ - indeks prelamanja [bezdim.], $\\lambda$ - talasna duzina [m].</p>
<p><b>Znacaj.</b> Kljucno pravilo za tacno racunanje uslova maksimuma/minimuma kod tankih slojeva - bez clana $\\lambda/2$ rezultat je pogresan.</p>`
    },
    {
      name: "Interferencija na tankom sloju i antirefleksioni slojevi",
      html: `<p><b>Definicija.</b> Na tankom planparalelnom sloju debljine $d$ i indeksa $n$ interferiraju zrak reflektovan od gornje povrsine (Z2) i zrak koji se prelomio, odbio od donje i izasao (Z1).</p>
<p><b>Izvodjenje.</b> Opticka razlika je $\\delta = n(AB+BC) - (DC + \\lambda/2)$. Iz geometrije $AB = BC = \\dfrac{d}{\\cos\\beta}$ i $DC = 2d\\sin\\alpha\\tan\\beta$, pa je $\\delta = \\dfrac{2nd}{\\cos\\beta} - 2d\\sin\\alpha\\tan\\beta - \\dfrac{\\lambda}{2}$. Koriscenjem zakona prelamanja i $\\sin^2\\beta + \\cos^2\\beta = 1$ sledi:</p>
<p style="text-align:center">$\\delta = 2d\\sqrt{n^2 - \\sin^2\\alpha} - \\dfrac{\\lambda}{2}$</p>
<p>Uslov maksimuma ($\\delta = k\\lambda$) daje: $(2k+1)\\dfrac{\\lambda}{2} = 2d\\sqrt{n^2-\\sin^2\\alpha}$.</p>
<p>Pri normalnom upadu ($\\alpha = 0$) i sloju u vazduhu: $\\delta = 2nd - \\dfrac{\\lambda}{2}$, pa je $d_{min} = \\dfrac{\\lambda}{4n}$ za $k=0$.</p>
<p><b>Simboli i jedinice.</b> $d$ - debljina sloja [m], $n$ - indeks sloja, $\\alpha$ - upadni ugao [stepen/rad], $\\lambda$ - talasna duzina [m], $k$ - red.</p>
<p><b>Znacaj.</b> Objasnjava boje mehura od sapunice i uljanih mrlja. <b>Antirefleksioni slojevi</b> na socivima koriste destruktivnu interferenciju da smanje odsjaj. Ako je sloj na guscoj podlozi, oba zraka dobijaju $\\lambda/2$, pa se clanovi krate i $\\delta = 2nd$.</p>`
    },
    {
      name: "Difrakcija i opticka resetka",
      html: `<p><b>Definicija.</b> Difrakcija je skretanje talasa od pravolinijskog pravca pri nailasku na prepreku, tj. prodiranje svetlosti u oblast geometrijske senke. Jasno se zapaza samo kada je dimenzija prepreke (otvora) reda velicine talasne duzine; objasnjava se Hajgensovim principom.</p>
<p><b>Opticka (difrakciona) resetka</b> je sistem velikog broja bliskih paralelnih pukotina na jednakom rastojanju. Uslov maksimuma:</p>
<p style="text-align:center">$n\\lambda = a\\sin\\theta_n, \\qquad n = 0, \\pm 1, \\pm 2, \\ldots$</p>
<p><b>Izvodjenje polozaja na zaklonu.</b> Posto je $\\sin\\theta_n = \\dfrac{\\Delta z_n}{\\sqrt{\\ell^2 + \\Delta z_n^2}}$, za male uglove je $n\\lambda \\approx \\dfrac{a\\,\\Delta z_n}{\\ell}$. Maksimalan red sledi iz $\\sin\\theta = 1$:</p>
<p style="text-align:center">$n_{max} = \\dfrac{a}{\\lambda} = \\dfrac{1}{N\\lambda}$</p>
<p>a ukupan broj maksimuma je $m = 2 n_{max} + 1$.</p>
<p><b>Simboli i jedinice.</b> $a$ - konstanta resetke (korak) [m], $N$ - broj zareza po jedinici duzine [$m^{-1}$], $\\theta_n$ - ugao difrakcije $n$-tog reda [stepen/rad], $\\ell$ - rastojanje zaklona [m], $\\Delta z_n$ - polozaj maksimuma [m].</p>
<p><b>Znacaj.</b> Resetka razlaze svetlost po talasnim duzinama i osnovni je element spektroskopa za precizna merenja $\\lambda$.</p>`
    },
    {
      name: "Disperzija svetlosti i duga",
      html: `<p><b>Definicija.</b> Disperzija je zavisnost apsolutnog indeksa prelamanja sredine od talasne duzine (odnosno frekvencije) svetlosti:</p>
<p style="text-align:center">$n = \\dfrac{c}{v_0} = f(\\lambda)$</p>
<p><b>Mehanizam.</b> Naelektrisane cestice u atomima osciluju sopstvenom frekvencijom $\\omega_0$; nailazeci talas frekvencije $\\omega$ izaziva prinudne oscilacije i sekundarne talase ciji odnos sa primarnim menja rezultujucu brzinu $v_0$, a time i $n$. Zavisnost $n$ od $\\lambda$ je obrnuto srazmerna: crvena (najveca $\\lambda$) prelama se najmanje, ljubicasta najvise. Npr. indeks vode za crvenu ($670{,}8$ nm) je $1{,}33$, a za ljubicastu ($404{,}7$ nm) $1{,}34$.</p>
<p><b>Disperziona kriva</b> $n^2 = f(\\omega)$: u oblastima daleko od $\\omega_0$ $n$ raste sa frekvencijom - <b>normalna disperzija</b>; oko rezonance $\\omega_0$ $n$ opada sa frekvencijom - <b>anomalna disperzija</b>.</p>
<p><b>Simboli i jedinice.</b> $n$ - indeks prelamanja [bezdim.], $\\lambda$ - talasna duzina [m], $\\omega = 2\\pi\\nu$ - kruzna frekvencija [rad/s], $\\omega_0$ - sopstvena frekvencija [rad/s].</p>
<p><b>Znacaj.</b> Disperzija uzrokuje razlaganje bele svetlosti u prizmi i pojavu <b>duge</b> (prelamanje, totalna refleksija u kapljici i ponovno prelamanje; duga se vidi pod $42^\\circ$ prema horizontu) i kromatsku aberaciju socivа.</p>
<figure class="figure"><img src="img/l8/p068_625.jpg" alt="Duga"><figcaption>Duga - disperzija Sunceve svetlosti u kapljicama.</figcaption></figure>`
    },
    {
      name: "Polarizacija - Brusterov i Malusov zakon",
      html: `<p><b>Definicija.</b> Polarizacija pokazuje da su svetlosni talasi <b>transverzalni</b>. Kod prirodne (nepolarizovane) svetlosti ravan oscilovanja vektora $\\vec{E}$ se stalno menja sa istom amplitudom u svim pravcima; kod linearno polarizovane svetlosti ravan oscilovanja je nepromenjena. Polarizacija se dobija refleksijom, dvojnim prelamanjem ili selektivnom apsorpcijom.</p>
<p><b>Brusterov zakon.</b> Pri refleksiji su odbijeni i prelomljeni zrak delimicno polarizovani u medjusobno normalnim ravnima. Najbolja polarizacija je pri Brusterovom uglu $\\alpha_B$, za koji odbijeni i prelomljeni zrak zaklapaju $90^\\circ$, tj. $\\alpha_B + \\beta = 90^\\circ$. Iz zakona prelamanja:</p>
<p style="text-align:center">$\\tan\\alpha_B = \\dfrac{n_2}{n_1} \\;\\Rightarrow\\; \\alpha_B = \\arctan\\dfrac{n_2}{n_1}$</p>
<p><b>Malusov zakon.</b> Ako ose polarizatora i analizatora zaklapaju ugao $\\theta$, kroz analizator prolazi samo komponenta $E_A = E_0\\cos\\theta$. Posto je intenzitet srazmeran kvadratu amplitude:</p>
<p style="text-align:center">$I = I_0\\cos^2\\theta$</p>
<p><b>Simboli i jedinice.</b> $\\alpha_B$ - Brusterov ugao [stepen/rad], $n_1, n_2$ - indeksi [bezdim.], $I_0$ - ulazni intenzitet, $I$ - propusteni intenzitet [W/m^2], $\\theta$ - ugao izmedju osa [stepen/rad].</p>
<p><b>Znacaj.</b> Osnova polarizacionih naocara, fotografskih filtera i merenja. Pri $\\theta = 90^\\circ$ (ukrsteni polaroidi) svetlost ne prolazi.</p>`
    },
    {
      name: "Dvojno prelamanje i opticka aktivnost",
      html: `<p><b>Definicija.</b> U anizotropnim kristalima (kvarc, kalcit) svetlost se pri prelamanju razdvaja na <b>redovan</b> zrak (sledi zakon prelamanja) i <b>neredovan</b> zrak (ponasa se drugacije). Oba su polarizovana u medjusobno normalnim ravnima. Brzina redovnog zraka je ista u svim pravcima, a neredovnog zavisi od pravca u odnosu na opticku osu - pa predmeti gledani kroz kristal izgledaju udvojeni.</p>
<p><b>Opticka aktivnost.</b> Opticki aktivne supstance (kvarc, rastvor secera, nafta) zakrecu ravan polarizacije oko pravca prostiranja za ugao $\\alpha$. U cvrstim telima:</p>
<p style="text-align:center">$\\alpha = K(\\lambda, T)\\cdot\\ell$</p>
<p>a u rastvorima (zavisi i od koncentracije):</p>
<p style="text-align:center">$\\alpha = K(\\lambda, T)\\,c\\,\\ell$</p>
<p><b>Simboli i jedinice.</b> $\\alpha$ - ugao zakretanja [stepen/rad], $K$ - specificna rotaciona moc, $\\ell$ - duzina puta kroz supstancu [m], $c$ - koncentracija [npr. g/cm^3], $T$ - temperatura [K].</p>
<p><b>Znacaj.</b> Polarimetri/saharimetri mere koncentraciju rastvora (npr. secera). Tecni kristali su opticki aktivni i gube tu aktivnost u elektricnom polju - osnova <b>LCD</b> tehnologije.</p>`
    }
  ],
  formulas: [
    { name: "Indeks prelamanja", formula: "n = \\dfrac{c}{v_0}", desc: "n indeks prelamanja [bezdim.], c brzina u vakuumu [m/s], v0 brzina u sredini [m/s]." },
    { name: "Opticki put", formula: "L = n\\,s", desc: "L opticki put [m], n indeks prelamanja, s geometrijski put [m]." },
    { name: "Zakon odbijanja", formula: "\\alpha = \\alpha'", desc: "alpha upadni, alpha' odbojni ugao; jednaki, mereni od normale." },
    { name: "Snelijus-Dekartov zakon", formula: "n_1\\sin\\alpha = n_2\\sin\\beta", desc: "n1, n2 indeksi prelamanja, alpha upadni, beta prelomni ugao." },
    { name: "Granicni ugao totalne refleksije", formula: "\\sin\\alpha_g = \\dfrac{n_2}{n_1}", desc: "alpha_g granicni ugao; uslov n1>n2 (iz gusce u redju sredinu)." },
    { name: "Jednacina sociva", formula: "\\dfrac{1}{f} = \\dfrac{1}{p} + \\dfrac{1}{\\ell}", desc: "f zizna daljina [m], p udaljenost predmeta [m], l udaljenost lika [m]." },
    { name: "Jacina sociva", formula: "j = \\dfrac{1}{f} = \\dfrac{n_2-n_1}{n_1}\\left(\\dfrac{1}{R_1}+\\dfrac{1}{R_2}\\right)", desc: "j jacina [D=1/m], R1, R2 poluprecnici zakrivljenosti [m]." },
    { name: "Linearno uvecanje", formula: "u = \\dfrac{L}{P} = \\dfrac{\\ell}{p}", desc: "u uvecanje [bezdim.], L lik, P predmet, l i p udaljenosti [m]." },
    { name: "Uslov maksimuma interferencije", formula: "\\delta = k\\lambda", desc: "delta opticka razlika puteva [m], lambda talasna duzina [m], k ceo broj." },
    { name: "Uslov minimuma interferencije", formula: "\\delta = (2k+1)\\dfrac{\\lambda}{2}", desc: "delta razlika puteva, lambda talasna duzina, k ceo broj." },
    { name: "Jangov polozaj maksimuma", formula: "y_k = \\dfrac{k\\lambda D}{d}", desc: "y_k polozaj k-tog maksimuma [m], D rastojanje zaklona [m], d razmak pukotina [m]." },
    { name: "Opticka razlika puteva", formula: "\\delta = n\\,s", desc: "delta opticki put [m]; pri refleksiji od gusce sredine dodaje se lambda/2." },
    { name: "Tanak sloj", formula: "\\delta = 2d\\sqrt{n^2-\\sin^2\\alpha} - \\dfrac{\\lambda}{2}", desc: "d debljina sloja [m], n indeks sloja, alpha upadni ugao." },
    { name: "Opticka resetka", formula: "n\\lambda = a\\sin\\theta_n", desc: "n red difrakcije, a konstanta resetke [m], theta_n ugao difrakcije." },
    { name: "Brusterov zakon", formula: "\\tan\\alpha_B = \\dfrac{n_2}{n_1}", desc: "alpha_B Brusterov ugao; odbijeni i prelomljeni zrak zaklapaju 90 stepeni." },
    { name: "Malusov zakon", formula: "I = I_0\\cos^2\\theta", desc: "I propusteni intenzitet, I0 ulazni [W/m^2], theta ugao izmedju osa." }
  ],
  numbers: [
    { name: "Brzina svetlosti u vakuumu", value: "c ≈ 3 · 10^8 m/s", desc: "Granicna brzina; indeks prelamanja n = c/v0." },
    { name: "Indeks prelamanja vazduha", value: "n0 ≈ 1,000293", desc: "U racunu se cesto uzima kao 1." },
    { name: "Indeks prelamanja vode", value: "n ≈ 1,33", desc: "Za crvenu svetlost; za ljubicastu oko 1,34." },
    { name: "Ugao duge prema horizontu", value: "42°", desc: "Pravac u kome se vidi glavna (primarna) duga." },
    { name: "Brusterov ugao za kvarc", value: "α_B ≈ 57°", desc: "Za n = 1,54; Sunce tada na 33° prema horizontu." },
    { name: "Odbojnost stakla", value: "4% (0°) do 62% (85°)", desc: "Procenat odbijene svetlosti raste sa upadnim uglom." },
    { name: "Slabljenje optickog vlakna", value: "smanjeno sa 1000 na 20 dB/km", desc: "Cilj istrazivanja Kaa i Hokama 1960-tih." }
  ],
  flashcards: [
    { q: "Sta tvrdi Fermaov princip?", a: "Izmedju dve tacke svetlost se krece putanjom za koju joj je potrebno minimalno vreme (minimalan opticki put)." },
    { q: "Kako glasi Snelijus-Dekartov zakon?", a: "n1 sin(alpha) = n2 sin(beta); odnos sinusa upadnog i prelomnog ugla jednak je obrnutom odnosu indeksa prelamanja." },
    { q: "Kada nastaje totalna refleksija?", a: "Kada svetlost ide iz gusce u redju sredinu (n1>n2) i upadni ugao predje granicni alpha_g, gde je sin(alpha_g)=n2/n1." },
    { q: "Kakav je lik bikonveksnog sociva kada je p<f?", a: "Imaginaran, uspravan i uvecan - to je princip rada lupe." },
    { q: "Sta je jacina sociva i u cemu se izrazava?", a: "j = 1/f; izrazava se u dioptrijama (D = 1/m) kada je zizna daljina u metrima." },
    { q: "Koji je uslov za interferentni maksimum?", a: "Putna razlika je celobrojni umnozak talasne duzine: delta = k*lambda (talasi u fazi)." },
    { q: "Zasto se pri refleksiji od gusce sredine dodaje lambda/2?", a: "Faza se skokovito menja za pi, sto je ekvivalentno dodavanju pola talasne duzine na opticki put (kao kod stojecih talasa)." },
    { q: "Sta dokazuje polarizacija svetlosti?", a: "Da su svetlosni talasi transverzalni (oscilacije vektora E normalne na pravac prostiranja)." },
    { q: "Kako glasi Brusterov zakon?", a: "tg(alpha_B) = n2/n1; pri tom uglu odbijeni i prelomljeni zrak su pod 90 stepeni, a odbijena svetlost je potpuno polarizovana." },
    { q: "Sta opisuje Malusov zakon?", a: "Intenzitet propusten kroz analizator: I = I0 cos^2(theta), gde je theta ugao izmedju osa polarizatora i analizatora." }
  ],
  quiz: [
    {
      q: "Pri kom uslovu je moguca totalna refleksija?",
      options: ["Kada svetlost ide iz redje u guscu sredinu", "Kada svetlost ide iz gusce u redju sredinu i alpha > alpha_g", "Samo pri normalnom upadu", "Kada je n1 = n2"],
      answer: 1
    },
    {
      q: "Cemu je jednaka jacina sociva?",
      options: ["j = f", "j = p + l", "j = 1/f, u dioptrijama", "j = n2 - n1"],
      answer: 2
    },
    {
      q: "Polozaj k-tog maksimuma u Jangovom eksperimentu je:",
      options: ["y_k = k*lambda*D/d", "y_k = d/(k*lambda)", "y_k = lambda/(k*D)", "y_k = k*d/(lambda*D)"],
      answer: 0
    },
    {
      q: "Uslov za interferentni minimum (potiranje) je:",
      options: ["delta = k*lambda", "delta = (2k+1)*lambda/2", "delta = n*s", "delta = 2*lambda"],
      answer: 1
    },
    {
      q: "Jednacina optičke resetke glasi:",
      options: ["n*lambda = a*sin(theta)", "n*lambda = a*cos(theta)", "lambda = n*a", "a = n*sin(theta)"],
      answer: 0
    },
    {
      q: "Brusterov ugao se odredjuje iz:",
      options: ["sin(alpha_B) = n2/n1", "tg(alpha_B) = n2/n1", "cos(alpha_B) = n2/n1", "alpha_B = n2*n1"],
      answer: 1
    },
    {
      q: "Malusov zakon opisuje da je intenzitet kroz analizator:",
      options: ["I = I0*cos(theta)", "I = I0*sin^2(theta)", "I = I0*cos^2(theta)", "I = I0*cos(2*theta)"],
      answer: 2
    }
  ]
};

const T_l9 = {
  id: "l9",
  title: "9. Kvantna optika i atom",
  subtitle: "Zračenje crnog tela, fotoefekat, Bohrov atom",
  icon: "⚛️",
  color: "#a855f7",
  oneLiner: "Svetlost ima dvojnu prirodu (talas i foton); kvantna hipoteza objašnjava zračenje crnog tela, fotoefekat, Komptonov efekat i linijske spektre atoma preko Borovih postulata.",
  sections: [
    {
      name: "Dualistička priroda svetlosti",
      desc: "<p><b>Definicija.</b> Svetlost se u nekim pojavama ponaša kao elektromagnetni talas, a u drugim kao skup čestica (fotona) — to je njena dvojna (dualistička) priroda.</p><p><b>Objašnjenje.</b> Hajgens je smatrao svetlost talasom, Njutn skupom korpuskula. Jangov eksperiment sa dva proreza (interferencija, 1803) i Frenelovo objašnjenje difrakcije potvrdili su talasnu prirodu, a Maksvel je teorijski pokazao (Herc i Lebedev eksperimentalno) da je svetlost elektromagnetni talas. Ipak, toplotno zračenje, fotoefekat, Komptonov efekat i emisija/apsorpcija u atomima nisu se mogli objasniti čistom talasnom slikom, pa su Plank i Ajnštajn uveli pojam fotona.</p><p><b>Značaj.</b> Talasni i čestični opis se ne protivureče nego dopunjuju; nijedan sam za sebe ne obuhvata sve pojave u kojima svetlost učestvuje.</p>"
    },
    {
      name: "Toplotno zračenje i emisiona moć",
      desc: "<p><b>Definicija.</b> Toplotno zračenje je elektromagnetno zračenje koje tela emituju na račun promene svoje unutrašnje energije. Svako telo istovremeno i emituje i apsorbuje; u termodinamičkoj ravnoteži emitovana energija jednaka je apsorbovanoj.</p><p><b>Emisiona moć</b> $\\varepsilon_{\\lambda,T}$ jednaka je energiji toplotnog zračenja koju telo emituje u jedinici vremena sa jedinice površine:</p><p style=\"text-align:center\">$\\varepsilon_{\\lambda,T} = \\dfrac{E}{S\\,t} = \\dfrac{P}{S} \\equiv I \\;\\; [\\mathrm{W/m^{2}}]$</p><p><b>Simboli.</b> $E$ energija (J), $S$ površina (m^2), $t$ vreme (s), $P$ snaga (W). Zavisi od temperature, hemijskog sastava i stanja površine tela.</p><p><b>Značaj.</b> Osnovna veličina za opis spektralne raspodele zračenja zagrejanih tela.</p>"
    },
    {
      name: "Apsorpciona moć i apsolutno crno telo",
      desc: "<p><b>Definicija.</b> Apsorpciona moć $a_{\\lambda,T}$ je bezdimenziona veličina, jednaka odnosu apsorbovane i upadne energije zračenja na datoj talasnoj dužini:</p><p style=\"text-align:center\">$a_{\\lambda,T} = \\dfrac{E^{(\\mathrm{aps})}_{\\lambda}}{E^{(\\mathrm{up})}_{\\lambda}}$</p><p><b>Objašnjenje.</b> Najveću apsorpcionu moć ima <b>apsolutno crno telo</b> — idealizovani model koji apsorbuje celokupno upadno zračenje, bez obzira na frekvenciju i upadni ugao, pa je za njega $a_{\\lambda,T} = 1$. Praktično se realizuje kao mali otvor na šupljoj lopti čija unutrašnjost slabo reflektuje (zrak posle više refleksija praktično ne izlazi).</p><p><b>Značaj.</b> Crno telo je referentni emiter na kome se mere zakoni toplotnog zračenja.</p>"
    },
    {
      name: "Štefan-Bolcmanov zakon",
      desc: "<p><b>Definicija.</b> Emisiona moć (ukupna, po svim talasnim dužinama) apsolutno crnog tela srazmerna je četvrtom stepenu apsolutne temperature:</p><p style=\"text-align:center\">$\\varepsilon = \\sigma T^{4}$</p><p><b>Simboli.</b> $\\sigma = 5{,}67 \\cdot 10^{-8}\\ \\mathrm{W/(m^{2}K^{4})}$ je Štefan-Bolcmanova konstanta, $T$ apsolutna temperatura (K).</p><p><b>Objašnjenje.</b> Mala promena temperature daje veliku promenu izračene snage (zavisnost $T^{4}$): udvostručenje temperature povećava zračenje 16 puta.</p><p><b>Značaj.</b> Omogućava procenu izračene snage zvezda, užarenih tela i kalibraciju pirometara.</p>"
    },
    {
      name: "Vinov zakon pomeranja",
      desc: "<p><b>Definicija.</b> Najverovatnija talasna dužina u spektru toplotnog zračenja (ona koja odgovara maksimumu emisione moći) obrnuto je srazmerna apsolutnoj temperaturi:</p><p style=\"text-align:center\">$\\lambda_{m} = \\dfrac{b}{T}$</p><p><b>Simboli.</b> $b = 2{,}9 \\cdot 10^{-3}\\ \\mathrm{K \\cdot m}$ je Vinova konstanta, $T$ temperatura (K), $\\lambda_{m}$ u metrima.</p><p><b>Objašnjenje.</b> Sa porastom temperature maksimum spektra se pomera ka kraćim talasnim dužinama — telo prelazi od crvenog ka belom usijanju.</p><p><b>Značaj.</b> Iz boje (položaja maksimuma) zračenja može se odrediti temperatura tela, npr. površinske temperature zvezda.</p>"
    },
    {
      name: "Kirhofov zakon zračenja",
      desc: "<p><b>Definicija.</b> Odnos emisione i apsorpcione moći ma kog tela ne zavisi od prirode tela, već samo od temperature i talasne dužine:</p><p style=\"text-align:center\">$\\dfrac{\\varepsilon_{\\lambda,T}}{a_{\\lambda,T}} = f(\\lambda, T)$</p><p><b>Objašnjenje.</b> $f(\\lambda, T)$ je univerzalna funkcija, ista za sva tela. Za apsolutno crno telo je $a_{\\lambda,T} = 1$, pa važi $\\varepsilon_{\\lambda,T} = f(\\lambda, T)$ — emisiona moć crnog tela je upravo ta univerzalna funkcija.</p><p><b>Značaj.</b> Telo koje jako apsorbuje na nekoj talasnoj dužini, na njoj i jako emituje; ovo povezuje sva tela sa zračenjem crnog tela.</p>"
    },
    {
      name: "Ultraljubičasta katastrofa",
      desc: "<p><b>Definicija.</b> Ultraljubičasta (Rejli-Džinsova) katastrofa je besmislen rezultat klasične elektromagnetne teorije po kome bi apsolutno crno telo u ravnoteži emitovalo zračenje beskonačno velike snage na visokim frekvencijama.</p><p><b>Objašnjenje.</b> Primena Maksvelove teorije slaže se sa eksperimentom samo na niskim frekvencijama (velikim $\\lambda$); ka kraćim talasnim dužinama (UV oblast) teorijska kriva neograničeno raste, dok eksperimentalna ima maksimum i opada.</p><p><b>Značaj.</b> Ovaj neuspeh klasične fizike Plank je 1900. razrešio hipotezom o kvantima energije, što je rodilo kvantnu teoriju.</p>"
    },
    {
      name: "Plankova hipoteza i formula",
      desc: "<p><b>Definicija.</b> Plankova hipoteza tvrdi da se elektromagnetno zračenje emituje (i apsorbuje) u tačno određenim paketima energije — kvantima (fotonima). Energija jednog fotona:</p><p style=\"text-align:center\">$\\varepsilon_{f} = h\\nu = \\dfrac{hc}{\\lambda}$</p><p><b>Simboli.</b> $h = 6{,}626 \\cdot 10^{-34}\\ \\mathrm{J\\,s}$ Plankova konstanta, $\\nu$ frekvencija (Hz), $\\lambda$ talasna dužina (m), $c = 3 \\cdot 10^{8}\\ \\mathrm{m/s}$. Energija proizvoljne količine zračenja je celobrojni umnožak kvanta: $E = N h\\nu$, $N = 1, 2, 3, \\dots$</p><p><b>Plankova formula</b> za spektralnu emisionu moć (pomena radi):</p><p style=\"text-align:center\">$\\varepsilon_{\\lambda,T} = \\dfrac{2\\pi c^{2} h}{\\lambda^{5}} \\cdot \\dfrac{1}{e^{\\,hc/\\lambda k T} - 1}$</p><p><b>Značaj.</b> Potpuno se slaže sa eksperimentalnom krivom i uklanja UV katastrofu.</p>"
    },
    {
      name: "Fotoelektrični efekat",
      desc: "<p><b>Definicija.</b> Fotoelektrični efekat je izbijanje elektrona iz materijala (najčešće metala) obasjanog elektromagnetnim zračenjem. Minimalna energija potrebna da elektron napusti metal naziva se <b>izlazni rad</b> $A$.</p><p><b>Objašnjenje.</b> Koristi se fotoćelija sa fotokatodom (FK) i anodom (A). Pri direktnoj polarizaciji ($U > 0$) fotostruja raste do <b>struje zasićenja</b> $I_{s}$ (kada svi izbijeni elektroni stignu do anode).</p><p><b>Eksperimentalne zakonitosti:</b></p><ul><li>broj izbijenih fotoelektrona srazmeran je intenzitetu svetlosti;</li><li>maksimalna kinetička energija ne zavisi od intenziteta, već raste linearno sa frekvencijom;</li><li>efekat se javlja samo iznad granične frekvencije koja zavisi od materijala;</li><li>efekat se dešava trenutno.</li></ul><p><b>Značaj.</b> Ove zakonitosti se ne mogu objasniti talasnom slikom svetlosti i traže foton.</p>"
    },
    {
      name: "Ajnštajnova jednačina i crvena granica",
      desc: "<p><b>Definicija.</b> Ajnštajn (1905) je fotoefekat objasnio kao neelastičan sudar fotona i elektrona: foton predaje celu energiju elektronu, deo se troši na izlazni rad, ostatak ostaje kao kinetička energija:</p><p style=\"text-align:center\">$h\\nu = A + \\dfrac{1}{2} m_{e} v^{2}$</p><p><b>Simboli.</b> $m_{e} = 9{,}11 \\cdot 10^{-31}\\ \\mathrm{kg}$ masa elektrona, $v$ brzina izbijenog elektrona, $A$ izlazni rad (J).</p><p><b>Granična (crvena) granica.</b> Efekat nastaje samo ako je energija fotona barem jednaka izlaznom radu:</p><p style=\"text-align:center\">$h\\nu_{g} = A \\;\\Rightarrow\\; \\dfrac{hc}{\\lambda_{g}} = A$</p><p>$\\nu_{g}$ je granična frekvencija, a $\\lambda_{g}$ crvena granica fotoefekta; za $h\\nu < A$ efekta nema.</p><p><b>Značaj.</b> Jednačina linearno povezuje kinetičku energiju sa frekvencijom i objašnjava sve eksperimentalne činjenice.</p>"
    },
    {
      name: "Zaustavni (zakočni) napon",
      desc: "<p><b>Definicija.</b> Zaustavni (zakočni) napon $U_{k}$ je vrednost inverznog napona pri kojoj se fotostruja potpuno zaustavlja, jer elektroni svu kinetičku energiju potroše na rad protiv polja:</p><p style=\"text-align:center\">$\\dfrac{1}{2} m_{e} v^{2} = e U_{k}$</p><p><b>Simboli.</b> $e = 1{,}6 \\cdot 10^{-19}\\ \\mathrm{C}$ naelektrisanje elektrona, $m_{e} = 9{,}11 \\cdot 10^{-31}\\ \\mathrm{kg}$, $v$ maksimalna brzina fotoelektrona, $U_{k}$ napon (V).</p><p><b>Objašnjenje.</b> Pri inverznoj polarizaciji ($U < 0$) polje koči elektrone; pri $U_{k}$ ni najbrži elektron ne stiže do anode. Merenjem $U_{k}$ određuje se maksimalna kinetička energija elektrona.</p><p><b>Značaj.</b> Eksperimentalni put do izlaznog rada i Plankove konstante.</p>"
    },
    {
      name: "Komptonov efekat",
      desc: "<p><b>Definicija.</b> Komptonov efekat (1923) je elastičan sudar fotona rentgenskog zračenja i slabo vezanog elektrona, pri čemu rasejani foton ima veću talasnu dužinu (manju energiju) od upadnog. Promena talasne dužine:</p><p style=\"text-align:center\">$\\Delta\\lambda = \\lambda' - \\lambda = \\dfrac{h}{m_{0} c}(1 - \\cos\\theta) = \\lambda_{c}(1 - \\cos\\theta)$</p><p><b>Simboli.</b> $m_{0}$ masa mirovanja elektrona, $\\theta$ ugao rasejanja, $\\lambda_{c} = \\dfrac{h}{m_{0} c} = 2{,}42 \\cdot 10^{-12}\\ \\mathrm{m}$ Komptonova talasna dužina.</p><p><b>Objašnjenje.</b> Po klasičnoj teoriji rasejano zračenje bi imalo istu frekvenciju kao upadno; pomak $\\Delta\\lambda$ se objašnjava samo predajom dela impulsa i energije fotona elektronu ($\\varepsilon_{f} \\sim 1/\\lambda$).</p><p><b>Značaj.</b> Direktan dokaz čestične (korpuskularne) prirode i impulsa fotona.</p>"
    },
    {
      name: "Modeli atoma: Tomson i Raderford",
      desc: "<p><b>Tomsonov model (1897).</b> Atom je sfera poluprečnika $\\sim 10^{-10}\\ \\mathrm{m}$ u kojoj je pozitivno naelektrisanje homogeno raspoređeno, a elektroni se kreću unutar nje; ukupno neutralan. Nije zadovoljio ni statički ni dinamički, ali je ukazao da atom ima unutrašnju strukturu.</p><p><b>Raderfordov eksperiment (1910).</b> Rasejanje $\\alpha$-čestica na tankoj zlatnoj foliji: većina prolazi bez skretanja, mali broj skreće pod velikim uglovima (do $180^{\\circ}$). Zaključak: pozitivno naelektrisanje i skoro sva masa skoncentrisani su u sićušnom <b>jezgru</b>, a atom je uglavnom prazan prostor.</p><p><b>Planetarni model.</b> Elektroni kruže oko jezgra; Kulonovoj sili se suprotstavlja centrifugalna:</p><p style=\"text-align:center\">$\\dfrac{1}{4\\pi\\varepsilon_{0}} \\dfrac{Z e^{2}}{r^{2}} = \\dfrac{m_{e} v^{2}}{r}$</p><p><b>Nedostaci.</b> Ubrzani elektron bi po elektrodinamici zračio, gubio energiju i po spirali pao na jezgro; spektar bi bio kontinualan, dok je stvarni atomski spektar linijski.</p>"
    },
    {
      name: "Borovi postulati",
      desc: "<p><b>Definicija.</b> Nils Bor (1913) je dodao dva postulata da otkloni nedostatke Raderfordovog modela.</p><p><b>I postulat (stacionarna stanja).</b> Dozvoljene su samo orbite za koje je moment impulsa elektrona celobrojni umnožak $\\hbar = h/2\\pi$:</p><p style=\"text-align:center\">$L = m_{e} v r = n\\hbar, \\quad n = 1, 2, 3, \\dots$</p><p>Na ovim orbitama atom ne zrači (klasična elektrodinamika ne važi). $n$ je glavni kvantni broj; $n = 1$ je osnovno stanje.</p><p><b>II postulat (kvantni prelazi).</b> Pri prelasku elektrona između nivoa $E_{n}$ i $E_{k}$ emituje se ili apsorbuje foton:</p><p style=\"text-align:center\">$h\\nu = |E_{n} - E_{k}|$</p><p>Ako elektron prelazi sa nižeg na viši nivo — apsorpcija, obrnuto — emisija.</p><p><b>Značaj.</b> Uvodi diskretnost energija i objašnjava linijski spektar.</p>"
    },
    {
      name: "Borova teorija jednoelektronskih atoma",
      desc: "<p><b>Definicija.</b> Za atom vodonikovog tipa (jezgro sa $Z$ protona i jedan elektron) iz jednačine ravnoteže i I postulata dobijaju se kvantizovani poluprečnik, brzina i energija.</p><p style=\"text-align:center\">$r_{n} = \\dfrac{\\varepsilon_{0} h^{2}}{\\pi m_{e} Z e^{2}}\\, n^{2}, \\qquad v_{n} = \\dfrac{Z e^{2}}{2 \\varepsilon_{0} h}\\, \\dfrac{1}{n}$</p><p><b>Energija veze:</b></p><p style=\"text-align:center\">$E_{n} = -\\dfrac{m_{e} Z^{2} e^{4}}{8 \\varepsilon_{0}^{2} h^{2}} \\cdot \\dfrac{1}{n^{2}}$</p><p><b>Simboli.</b> $\\varepsilon_{0} = 8{,}85 \\cdot 10^{-12}\\ \\mathrm{F/m}$ električna konstanta, $Z$ atomski broj, $n$ glavni kvantni broj. Energija je negativna (vezano stanje) i raste sa $n$ ka nuli.</p><p><b>Značaj.</b> Daje tačne nivoe energije vodonika i vodoniku sličnih jona i izvodi Balmerovu formulu.</p>"
    },
    {
      name: "Balmerova formula i spektralne serije",
      desc: "<p><b>Definicija.</b> Talasne dužine linija u spektru atoma vodonikovog tipa daje uopštena Balmerova formula:</p><p style=\"text-align:center\">$\\dfrac{1}{\\lambda} = Z^{2} R_{H}\\left(\\dfrac{1}{k^{2}} - \\dfrac{1}{n^{2}}\\right)$</p><p><b>Simboli.</b> $R_{H} = 1{,}097 \\cdot 10^{7}\\ \\mathrm{m^{-1}}$ Ridbergova konstanta, $Z$ atomski broj, $k$ i $n$ prirodni brojevi ($k < n$).</p><p><b>Spektralne serije</b> (prelazi na nivo $k$):</p><ul><li><b>Lajmanova</b> ($k = 1$) — ultraljubičasta oblast;</li><li><b>Balmerova</b> ($k = 2$) — vidljiva oblast;</li><li><b>Pašenova</b> ($k = 3$) — infracrvena oblast.</li></ul><p>Slede Breketova ($k=4$), Pfundova ($k=5$), Hamfrizova ($k=6$).</p><p><b>Značaj.</b> Teorijski izvedena formula potpuno se slaže sa izmerenim linijama vodonika i potvrđuje Borovu teoriju.</p>"
    },
    {
      name: "Foton kao kvant: energija i impuls",
      desc: "<p><b>Definicija.</b> Foton je lokalizovani kvant elektromagnetnog polja koji se kreće brzinom svetlosti i nosi energiju i impuls.</p><p style=\"text-align:center\">$\\varepsilon_{f} = h\\nu = \\dfrac{hc}{\\lambda} = \\hbar\\omega$</p><p><b>Izvođenje impulsa.</b> Iz Ajnštajnove relacije $\\varepsilon_{f} = m c^{2}$ i $\\varepsilon_{f} = hc/\\lambda$ izjednačavanjem sledi $\\lambda = h/(mc)$, odnosno:</p><p style=\"text-align:center\">$p = \\dfrac{h}{\\lambda}$</p><p><b>Simboli.</b> $p = mc$ impuls fotona, $\\hbar = h/2\\pi$, $\\omega = 2\\pi\\nu$ kružna učestanost. Relacija $\\lambda = h/p$ povezuje talasnu ($\\lambda$) i korpuskularnu ($p$) osobinu.</p><p><b>Objašnjenje.</b> Klauzerov eksperiment pokazao je da se foton ne može rascepiti — uvek otkucava samo jedan detektor, pa je energija fotona $\\varepsilon_{f} = h\\nu$ elementarna i nedeljiva.</p><p><b>Značaj.</b> Foton objedinjuje talasni i čestični opis svetlosti.</p>"
    }
  ],
  formulas: [
    { name: "Emisiona moć", formula: "\\varepsilon_{\\lambda,T} = \\dfrac{E}{S\\,t} = \\dfrac{P}{S} \\equiv I", desc: "Izračena snaga po jedinici površine, [W/m^2]." },
    { name: "Apsorpciona moć", formula: "a_{\\lambda,T} = \\dfrac{E^{(\\mathrm{aps})}_{\\lambda}}{E^{(\\mathrm{up})}_{\\lambda}}", desc: "Bezdimenziona; za apsolutno crno telo a=1." },
    { name: "Štefan-Bolcman", formula: "\\varepsilon = \\sigma T^{4}", desc: "sigma=5,67·10^-8 W/(m^2 K^4), T u K." },
    { name: "Vinov zakon pomeranja", formula: "\\lambda_{m} = \\dfrac{b}{T}", desc: "b=2,9·10^-3 K·m, T u K." },
    { name: "Kirhofov zakon", formula: "\\dfrac{\\varepsilon_{\\lambda,T}}{a_{\\lambda,T}} = f(\\lambda, T)", desc: "Univerzalna funkcija, ista za sva tela." },
    { name: "Energija fotona", formula: "\\varepsilon_{f} = h\\nu = \\dfrac{hc}{\\lambda}", desc: "h=6,626·10^-34 Js, c=3·10^8 m/s." },
    { name: "Plankova formula", formula: "\\varepsilon_{\\lambda,T} = \\dfrac{2\\pi c^{2} h}{\\lambda^{5}} \\cdot \\dfrac{1}{e^{\\,hc/\\lambda k T} - 1}", desc: "Spektralna emisiona moć crnog tela." },
    { name: "Ajnštajnova jednačina", formula: "h\\nu = A + \\dfrac{1}{2} m_{e} v^{2}", desc: "A izlazni rad, m_e=9,11·10^-31 kg." },
    { name: "Granična frekvencija", formula: "h\\nu_{g} = A = \\dfrac{hc}{\\lambda_{g}}", desc: "lambda_g je crvena granica fotoefekta." },
    { name: "Zaustavni napon", formula: "\\dfrac{1}{2} m_{e} v^{2} = e U_{k}", desc: "e=1,6·10^-19 C, U_k u V." },
    { name: "Komptonov pomak", formula: "\\Delta\\lambda = \\dfrac{h}{m_{0} c}(1 - \\cos\\theta) = \\lambda_{c}(1 - \\cos\\theta)", desc: "lambda_c=2,42·10^-12 m." },
    { name: "I Borov postulat", formula: "L = m_{e} v r = n\\hbar", desc: "hbar=h/2pi, n=1,2,3,..." },
    { name: "II Borov postulat", formula: "h\\nu = |E_{n} - E_{k}|", desc: "Energija fotona pri prelazu između nivoa." },
    { name: "Energija nivoa", formula: "E_{n} = -\\dfrac{m_{e} Z^{2} e^{4}}{8 \\varepsilon_{0}^{2} h^{2}} \\cdot \\dfrac{1}{n^{2}}", desc: "Energija veze elektrona, negativna." },
    { name: "Balmerova formula", formula: "\\dfrac{1}{\\lambda} = Z^{2} R_{H}\\left(\\dfrac{1}{k^{2}} - \\dfrac{1}{n^{2}}\\right)", desc: "R_H=1,097·10^7 m^-1, k<n." },
    { name: "Impuls fotona", formula: "p = \\dfrac{h}{\\lambda} = \\dfrac{\\varepsilon_{f}}{c}", desc: "Veza talasne i korpuskularne osobine." }
  ],
  numbers: [
    { name: "Plankova konstanta h", value: "6,626·10⁻³⁴ J·s" },
    { name: "Štefan-Bolcmanova konstanta σ", value: "5,67·10⁻⁸ W/(m²·K⁴)" },
    { name: "Vinova konstanta b", value: "2,9·10⁻³ K·m" },
    { name: "Ridbergova konstanta R_H", value: "1,097·10⁷ m⁻¹" },
    { name: "Komptonova talasna dužina λc", value: "2,42·10⁻¹² m" },
    { name: "Masa elektrona m_e", value: "9,11·10⁻³¹ kg" },
    { name: "Naelektrisanje elektrona e", value: "1,6·10⁻¹⁹ C (1,602·10⁻¹⁹ C)" },
    { name: "Brzina svetlosti c", value: "3·10⁸ m/s" },
    { name: "Odnos masa m_p / m_e", value: "≈ 1836" },
    { name: "Poluprečnik atoma (Tomson)", value: "∼10⁻¹⁰ m" }
  ],
  flashcards: [
    { q: "Šta znači dualistička priroda svetlosti?", a: "Svetlost se u nekim pojavama ponaša kao elektromagnetni talas (interferencija, difrakcija), a u drugim kao skup čestica-fotona (fotoefekat, Komptonov efekat); oba opisa se dopunjuju." },
    { q: "Koje uslove ispunjava apsolutno crno telo?", a: "Apsorbuje celokupno upadno zračenje bez obzira na frekvenciju i upadni ugao, tj. a_{lambda,T}=1; ima najveću apsorpcionu i emisionu moć." },
    { q: "Šta tvrde Štefan-Bolcmanov i Vinov zakon?", a: "Štefan-Bolcman: emisiona moć crnog tela je epsilon=sigma·T^4. Vin: najverovatnija talasna dužina lambda_m=b/T (maksimum se sa zagrevanjem pomera ka kraćim talasima)." },
    { q: "Šta je ultraljubičasta katastrofa?", a: "Pogrešan rezultat klasične teorije po kome bi crno telo emitovalo beskonačnu snagu na visokim frekvencijama; rešena Plankovom kvantnom hipotezom 1900." },
    { q: "Koja je Ajnštajnova jednačina fotoefekta i šta je crvena granica?", a: "hnu = A + (1/2)m_e·v^2. Crvena granica je granična talasna dužina lambda_g (frekvencija nu_g) za koju je hnu_g = A; ispod nje fotoefekta nema." },
    { q: "Šta opisuje Komptonov efekat?", a: "Elastičan sudar rentgenskog fotona i slabo vezanog elektrona: rasejani foton ima veću talasnu dužinu, delta_lambda = (h/m0c)(1-cos theta); dokazuje impuls fotona." },
    { q: "Navedi dva Borova postulata.", a: "I: dozvoljene su orbite sa L = m_e·v·r = n·hbar (atom ne zrači). II: pri prelazu emituje/apsorbuje se foton energije hnu = |E_n - E_k|." },
    { q: "Koja je Balmerova formula i koje su glavne serije?", a: "1/lambda = Z^2·R_H·(1/k^2 - 1/n^2). Serije po k: Lajmanova (k=1, UV), Balmerova (k=2, vidljiva), Pašenova (k=3, IC)." },
    { q: "Koji su nedostaci Raderfordovog planetarnog modela?", a: "Ubrzani elektron bi po elektrodinamici zračio, gubio energiju i pao na jezgro; spektar bi bio kontinualan umesto stvarnog linijskog." }
  ],
  quiz: [
    {
      q: "Štefan-Bolcmanov zakon glasi:",
      options: ["epsilon = sigma·T", "epsilon = sigma·T^4", "epsilon = b/T", "epsilon = sigma/T^4"],
      answer: 1
    },
    {
      q: "Za apsolutno crno telo apsorpciona moć iznosi:",
      options: ["a = 0", "a = 0,5", "a = 1", "a -> beskonačno"],
      answer: 2
    },
    {
      q: "Crvena granica fotoefekta je određena uslovom:",
      options: ["h·nu_g = A", "h·nu_g = (1/2)m_e·v^2", "h·nu_g = e·U_k", "A = sigma·T^4"],
      answer: 0
    },
    {
      q: "Komptonov pomak talasne dužine je najveći kada je ugao rasejanja:",
      options: ["theta = 0", "theta = 90 stepeni", "theta = 180 stepeni", "ne zavisi od ugla"],
      answer: 2
    },
    {
      q: "Prvi Borov postulat kvantizuje:",
      options: ["energiju fotona", "moment impulsa elektrona, L = n·hbar", "naelektrisanje jezgra", "brzinu svetlosti"],
      answer: 1
    },
    {
      q: "Balmerova serija (k=2) atoma vodonika pripada pretežno:",
      options: ["ultraljubičastoj oblasti", "vidljivoj oblasti", "infracrvenoj oblasti", "rentgenskoj oblasti"],
      answer: 1
    }
  ]
};

const T_l10 = {
  id: "l10",
  title: "10. Kvantna mehanika",
  subtitle: "De Brolj, neodređenost, Šredinger, tunel-efekat",
  icon: "🌌",
  color: "#14b8a6",
  oneLiner: "Mikroobjekti su istovremeno i talasi i čestice; njihovo stanje opisuje talasna funkcija Ψ čija je |Ψ|² gustina verovatnoće, a evoluciju daje Šredingerova jednačina.",
  sections: [
    {
      title: "Uvod i dualizam mikroobjekata",
      html: `<p><b>Definicija.</b> Kvantna mehanika je deo moderne fizike koji opisuje ponašanje objekata mikrosveta (elektrona, atoma, molekula). Za godinu nastanka uzima se 1900, kada je Maks Plank uveo pojam <b>kvanta</b>; Ajnštajn je 1905. dao prvu kvantnu teoriju svetlosti (fotoefekat), a kompletnu teoriju razvili su Bor, De Brolj, Hajzenberg, Šredinger, Dirak, Pauli i drugi.</p>
<p><b>Dualizam svetlosti.</b> Svetlost u nekim pojavama (interferencija, difrakcija, disperzija, polarizacija) pokazuje <i>talasnu</i> prirodu, a u drugim (fotoefekat, Komptonov efekat, emisija i apsorpcija) ponaša se kao skup <b>fotona</b>, tj. <i>čestično</i>. Ovaj talasno-čestični dualizam nije osobina samo svetlosti, nego univerzalna osobina svih mikroobjekata.</p>
<p><b>Značaj.</b> Dualizam je polazna tačka cele kvantne mehanike: nijedan mikroobjekat se ne može u potpunosti opisati ni samo kao talas ni samo kao čestica.</p>`
    },
    {
      title: "De Broljeva hipoteza",
      html: `<p><b>Definicija.</b> Luj de Brolj (1923) je postulirao da se svakoj materijalnoj čestici mase $m$ koja se kreće brzinom $v < c$ može pridružiti talas (talas materije) talasne dužine $\\lambda = h/p$.</p>
<p><b>Izvođenje (iz osobina fotona).</b> Za foton energiju pišemo na dva načina: kao energiju kvanta $\\varepsilon_f = h\\nu = \\dfrac{hc}{\\lambda}$ i kao relativističku energiju $\\varepsilon_f = mc^2$. Izjednačavanjem:</p>
<p style="text-align:center">$\\dfrac{hc}{\\lambda} = mc^2 \\;\\Rightarrow\\; \\lambda = \\dfrac{h}{mc} = \\dfrac{h}{p}.$</p>
<p>De Brolj je ovaj rezultat uopštio sa fotona ($v=c$) na bilo koju česticu sa $v<c$, zamenivši $c$ brzinom čestice $v$:</p>
<p style="text-align:center">$\\lambda = \\dfrac{h}{p} = \\dfrac{h}{m v}.$</p>
<p><b>Simboli i jedinice.</b> $\\lambda$ – De Broljeva talasna dužina (m); $h = 6{,}626\\cdot10^{-34}$ J·s – Plankova konstanta; $p = mv$ – impuls čestice (kg·m/s); $m$ – masa (kg); $v$ – brzina (m/s).</p>
<p><b>Značaj.</b> Hipoteza daje univerzalnost dualizmu i otvara vrata talasnom opisu kretanja čestica (Šredingerova jednačina).</p>`
    },
    {
      title: "Veza sa Borovim postulatom",
      html: `<p><b>Definicija problema.</b> De Brolj je svojom hipotezom objasnio zašto u stacionarnim stanjima atoma vodonikovog tipa elektroni ne emituju EM zračenje: elektronu odgovara <b>stojeći talas</b> na orbiti, takav da je na putanji smešten ceo broj talasnih dužina, pa nema gubitka energije.</p>
<p><b>Izvođenje korak po korak.</b> Obim $n$-te stacionarne orbite je $O_n = 2\\pi r_n$. Stojeći talas se formira samo ako je obim umnožak talasne dužine: $O_n = n\\lambda$. Uvrstimo De Broljevu hipotezu $\\lambda = h/p_n = h/(m_e v_n)$:</p>
<p style="text-align:center">$2\\pi r_n = n\\,\\dfrac{h}{m_e v_n} \\;\\Rightarrow\\; m_e r_n v_n = n\\,\\dfrac{h}{2\\pi} = n\\hbar.$</p>
<p>Poslednja relacija je upravo matematička formulacija <b>prvog Borovog postulata</b> (kvantovanje momenta impulsa).</p>
<p><b>Simboli i jedinice.</b> $r_n$ – poluprečnik orbite (m); $v_n$ – brzina elektrona (m/s); $m_e$ – masa elektrona (kg); $n=1,2,3,\\dots$ – glavni kvantni broj; $\\hbar = h/2\\pi$ – redukovana Plankova konstanta (J·s).</p>
<p><b>Značaj.</b> Borov postulat, uveden ranije kao hipoteza bez objašnjenja, sada dobija prirodnu talasnu interpretaciju.</p>`
    },
    {
      title: "Potvrda hipoteze (Davisson-Germer, fuleren)",
      html: `<p><b>Davisson-Germer (1927).</b> Posmatrali su difrakciju elektrona reflektovanih od monokristala nikla. Elektroni ubrzani naponom $U = 100$ V imaju, prema De Brolju, talasnu dužinu</p>
<p style="text-align:center">$\\lambda = \\dfrac{h}{p} = \\dfrac{h}{\\sqrt{2 m_e U q}} \\approx 10^{-10}\\ \\text{m}.$</p>
<p>Dobijena raspodela intenziteta bila je identična onoj kod difrakcije X-zraka na kristalu, čime je <b>talasna priroda elektrona</b> direktno potvrđena.</p>
<p><b>Fuleren C₆₀ (1999).</b> Grupa Antona Cajlingera (Beč) demonstrirala je difrakciju i interferenciju molekula od 60 atoma ugljenika (fuleren, masa oko 720 a.j.m.), a kasnije i fluorofulerena C₆₀F₄₈ (1632 a.j.m.) — najmasivnijih objekata sa direktno posmatranom talasnom prirodom.</p>
<p><b>Značaj.</b> Eksperimenti pokazuju da talasna svojstva nisu apstrakcija nego merljiva pojava, i to ne samo za elektrone već i za velike molekule.</p>
<figure class="figure"><img src="img/l10/p007_62.jpg" alt="Difrakcija elektrona"><figcaption>Difrakcija X-zraka (levo) i elektrona (desno) — potvrda talasne prirode.</figcaption></figure><figure class="figure"><img src="img/l10/p009_74.jpg" alt="Fuleren C60"><figcaption>Fuleren C₆₀ — najveći objekat sa dokazanom talasnom prirodom.</figcaption></figure>`
    },
    {
      title: "Zašto se dualizam ne vidi kod makro tela",
      html: `<p><b>Pitanje.</b> Zašto se talasno-čestični dualizam ne primećuje kod makroskopskih objekata?</p>
<p><b>Primer (metak).</b> Za metak mase $m = 10$ g $= 10^{-2}$ kg koji se kreće brzinom $v = 700$ m/s:</p>
<p style="text-align:center">$\\lambda = \\dfrac{h}{mv} = \\dfrac{6{,}626\\cdot10^{-34}\\ \\text{J·s}}{10^{-2}\\ \\text{kg}\\cdot 700\\ \\text{m/s}} \\approx 10^{-34}\\ \\text{m}.$</p>
<p><b>Objašnjenje.</b> Talasna dužina je toliko mala (oko $10^{-34}$ m) da u prirodi ne postoji prepreka ili rešetka tih dimenzija na kojoj bi se difrakcija mogla ostvariti. Zato je talasna svojstva makro tela praktično nemoguće detektovati.</p>
<p><b>Značaj.</b> Dualizam je isključiva osobina mikrosveta; kod makro tela $\\lambda \\to 0$ i opis se svodi na klasičnu mehaniku.</p>`
    },
    {
      title: "Priroda De Broljevih talasa",
      html: `<p><b>Definicija.</b> Postavlja se pitanje šta su zapravo De Broljevi talasi. Najprihvaćenija interpretacija je da su to <b>talasi verovatnoće</b>: oni stupaju u interferenciju i difrakciju, a na mestima gde rezultujući talas ima veću amplitudu postoji veća verovatnoća pronalaženja čestice.</p>
<p><b>Razlike u odnosu na EM talase.</b></p>
<ul>
<li>De Broljevi talasi se prostiru brzinom čestice $v < c$, pa se ne opisuju istim jednačinama kao EM talasi (koji idu brzinom $c$).</li>
<li>Materijalne čestice (za razliku od fotona) mogu graditi vezane sisteme — jezgra, atome, molekule.</li>
</ul>
<p><b>Značaj.</b> Verovatnosna priroda talasa je suštinski novi koncept: kvantna mehanika predviđa <i>verovatnoće</i>, a ne tačne putanje.</p>`
    },
    {
      title: "Hajzenbergove relacije neodređenosti",
      html: `<p><b>Definicija.</b> U kvantnoj mehanici postoje parovi veličina koje se ne mogu istovremeno tačno izmeriti — povećanje preciznosti jedne povlači nesigurnost druge. Ovo je formulisao Verner Hajzenberg (1927).</p>
<p><b>Položaj i impuls.</b> Nemoguće je istovremeno tačno odrediti položaj i odgovarajuću komponentu impulsa:</p>
<p style="text-align:center">$\\Delta x \\cdot \\Delta p_x \\geq \\dfrac{\\hbar}{2},\\quad \\Delta y \\cdot \\Delta p_y \\geq \\dfrac{\\hbar}{2},\\quad \\Delta z \\cdot \\Delta p_z \\geq \\dfrac{\\hbar}{2}.$</p>
<p><b>Energija i vreme.</b> Vreme života čestice u nekom stanju i neodređenost energije tog stanja vezani su sa:</p>
<p style="text-align:center">$\\Delta E \\cdot \\Delta t \\geq \\dfrac{\\hbar}{2}.$</p>
<p><b>Smisao.</b> Princip sledi iz dualizma: dobro određen položaj zahteva talasnu funkciju usko lokalizovanu u prostoru, dok dobro određen impuls (talasna dužina) zahteva prostorno rasprostrt talas — to dvoje se isključuje.</p>
<p><b>Simboli i jedinice.</b> $\\Delta x$ – neodređenost položaja (m); $\\Delta p_x$ – neodređenost impulsa (kg·m/s); $\\Delta E$ – neodređenost energije (J); $\\Delta t$ – vreme života stanja (s); $\\hbar \\approx 1{,}055\\cdot10^{-34}$ J·s.</p>
<p><b>Značaj.</b> Pojam putanje gubi fizički smisao; čestica se ne kreće po strogo određenoj trajektoriji.</p>`
    },
    {
      title: "Talasna funkcija i njen fizički smisao",
      html: `<p><b>Definicija.</b> De Broljevi talasi opisuju se <b>talasnom funkcijom</b> $\\Psi$ — u opštem slučaju kompleksnom funkcijom koordinata i vremena $\\Psi(\\vec r, t) \\equiv \\Psi(x,y,z,t)$. Za stacionarna stanja vreme ispada: $\\Psi(\\vec r) \\equiv \\Psi(x,y,z)$.</p>
<p><b>Fizički smisao.</b> Sama kompleksna $\\Psi$ nema direktan fizički smisao, ali kvadrat njenog modula ima:</p>
<p style="text-align:center">$\\rho = \\Psi\\,\\Psi^{*} = |\\Psi(\\vec r,t)|^{2} = \\dfrac{dP}{dV}$</p>
<p>predstavlja <b>gustinu verovatnoće</b> pronalaženja čestice. Verovatnoća da se čestica u trenutku $t$ nađe u zapremini $dV$ je $dP = |\\Psi|^{2}\\,dV$.</p>
<p><b>Simboli i jedinice.</b> $\\Psi$ – talasna funkcija (u 3D: $\\text{m}^{-3/2}$); $\\Psi^{*}$ – kompleksno konjugovana funkcija; $\\rho = |\\Psi|^2$ – gustina verovatnoće ($\\text{m}^{-3}$); $dP$ – verovatnoća (bezdimenziona); $dV$ – element zapremine (m³).</p>
<p><b>Značaj.</b> Talasna funkcija (svojstvena funkcija, funkcija stanja) potpuno opisuje kvantnomehaničko stanje sistema — slobodne čestice, elektrona u atomu, čestice u jami, nukleona u jezgru.</p>
<figure class="figure"><img src="img/l10/p011_88.jpg" alt="Talasni paket"><figcaption>Talasni paket Ψ — veća amplituda znači veću verovatnoću nalaženja čestice.</figcaption></figure>`
    },
    {
      title: "Princip superpozicije stanja",
      html: `<p><b>Definicija.</b> Ako se sistem može naći u stanjima $\\Psi_1$ i $\\Psi_2$, tada se može naći i u svakoj njihovoj linearnoj kombinaciji (superpoziciji):</p>
<p style="text-align:center">$\\Psi = a\\,\\Psi_1 + b\\,\\Psi_2.$</p>
<p><b>Objašnjenje.</b> Konstante $a$ i $b$ (realne ili kompleksne) određuju verovatnoće realizacije pojedinih stanja: $|a|^2$ je verovatnoća stanja $\\Psi_1$, a $|b|^2$ stanja $\\Psi_2$, pri čemu mora biti $|a|^2 + |b|^2 = 1$. Uopšteno na $n$ stanja:</p>
<p style="text-align:center">$\\Psi = \\sum_{i=1}^{n} c_i \\Psi_i,\\qquad \\sum_{i=1}^{n} |c_i|^2 = 1.$</p>
<p><b>Simboli.</b> $c_i$ – koeficijenti (amplitude verovatnoće, bezdimenzioni); $|c_i|^2$ – verovatnoća $i$-tog stanja; uslov $\\sum |c_i|^2 = 1$ je normiranje (ukupna verovatnoća je 1).</p>
<p><b>Značaj.</b> Superpozicija je temelj kvantne mehanike (i kvantnog računarstva) — sistem može biti u kombinaciji više stanja istovremeno.</p>`
    },
    {
      title: "Šredingerova jednačina",
      html: `<p><b>Definicija.</b> Ulogu koju u klasičnoj fizici ima II Njutnov zakon, u kvantnoj mehanici ima <b>Šredingerova jednačina</b> (1925/26) — diferencijalna jednačina drugog reda čija rešenja su talasne funkcije.</p>
<p><b>Vremenska (1D).</b></p>
<p style="text-align:center">$-\\dfrac{\\hbar^2}{2m}\\,\\dfrac{\\partial^2 \\Psi(x,t)}{\\partial x^2} + U(x,t)\\,\\Psi(x,t) = i\\hbar\\,\\dfrac{\\partial \\Psi(x,t)}{\\partial t}.$</p>
<p><b>Stacionarna.</b> Za stacionarna stanja svodi se na jednačinu svojstvenih vrednosti:</p>
<p style="text-align:center">$-\\dfrac{\\hbar^2}{2m}\\,\\dfrac{d^2 \\Psi(x)}{dx^2} + U(x)\\,\\Psi(x) = E\\,\\Psi(x).$</p>
<p><b>Simboli i jedinice.</b> $m$ – masa (kg); $U$ – potencijalna energija (J); $E$ – ukupna energija (J); $i$ – imaginarna jedinica; $\\hbar$ – redukovana Plankova konstanta (J·s).</p>
<p><b>Objašnjenje.</b> Rešavanjem se dobijaju dozvoljene (svojstvene) energije stanja i funkcije stanja. Jednačina se ne može egzaktno izvesti — kako je rekao Fejnman, ona je 'prosto izašla iz Šredingerovog uma'.</p>
<p><b>Značaj.</b> Centralna jednačina kvantne mehanike; iz nje slede kvantovanje energije, struktura atoma, tunel-efekat i drugo.</p>`
    },
    {
      title: "Čestica u beskonačnoj potencijalnoj jami",
      html: `<p><b>Definicija problema.</b> Posmatra se čestica mase $m$ (npr. elektron) u jednodimenzionoj pravougaonoj jami širine $L$ sa beskonačno visokim zidovima ($U=0$ unutra, $U=\\infty$ van).</p>
<p><b>Izvođenje.</b> Van jame čestica ne može postojati, pa je $\\Psi=0$; uslov neprekidnosti zahteva $\\Psi(0)=0$ i $\\Psi(L)=0$. Tom uslovu zadovoljavaju samo stojeći talasi sa</p>
<p style="text-align:center">$\\lambda_n = \\dfrac{2L}{n},\\qquad n=1,2,3,\\dots$</p>
<p>Pošto je $p_n = h/\\lambda_n = nh/(2L)$, a čestica ima samo kinetičku energiju ($U=0$):</p>
<p style="text-align:center">$E_n = \\dfrac{p_n^2}{2m} = \\dfrac{h^2}{8mL^2}\\,n^2 = \\dfrac{\\pi^2 \\hbar^2}{2mL^2}\\,n^2.$</p>
<p><b>Zaključci.</b></p>
<ol>
<li>Energije su <b>kvantovane</b> — određene kvantnim brojem $n$.</li>
<li>Energija lokalizovane čestice <b>ne može biti nula</b> (bilo bi u suprotnosti sa principom neodređenosti).</li>
<li>Diskretnost nivoa je posledica konfiniranja: za $L\\to\\infty$ sledi $E_n\\to 0$ (kontinuum).</li>
</ol>
<p><b>Simboli i jedinice.</b> $L$ – širina jame (m); $n$ – kvantni broj; $\\lambda_n$ – talasna dužina $n$-tog stanja (m); $E_n$ – energija nivoa (J). U 3D: $E_{n_x,n_y,n_z} = \\dfrac{\\pi^2\\hbar^2}{2mL^2}(n_x^2+n_y^2+n_z^2)$.</p>
<p><b>Značaj.</b> Najjednostavniji model koji pokazuje kvantovanje energije i nultu energiju — osnova za kvantne tačke i nanostrukture.</p>`
    },
    {
      title: "Tunel-efekat i STM",
      html: `<p><b>Definicija.</b> Tunel-efekat ('tunelovanje') je kvantna pojava u kojoj mikročestica savlada konačnu potencijalnu barijeru čak i kada joj je energija <i>niža</i> od visine barijere — klasično nemoguće.</p>
<p><b>Objašnjenje.</b> Rešavanjem Šredingerove jednačine unutar barijere talasna funkcija od oscilatornog talasa prelazi u eksponencijalno opadajuću zavisnost. Amplituda na izlazu je mala ali različita od nule, pa je verovatnoća prolaska konačna (mada obično vrlo mala). To je direktna posledica dualizma i principa neodređenosti.</p>
<p><b>STM (skenirajući tunelski mikroskop).</b> Tanki metalni šiljak (volfram) prinosi se na nekoliko angstrema od površine; preklapanje talasnih funkcija daje struju tunelovanja:</p>
<p style="text-align:center">$I_T \\sim e^{-2kd},\\qquad k = \\dfrac{\\sqrt{2m(U-E)}}{\\hbar}.$</p>
<p>Promena rastojanja od samo $0{,}1$ nm menja struju za oko red veličine, pa se održavanjem $I_T$ konstantnom dobija topografija površine sa atomskom rezolucijom. STM može i pomerati pojedinačne atome.</p>
<p><b>Simboli i jedinice.</b> $I_T$ – struja tunelovanja (A); $d$ – rastojanje šiljak–uzorak (m); $k$ – konstanta opadanja ($\\text{m}^{-1}$); $U-E$ – visina barijere iznad energije čestice (J).</p>
<p><b>Značaj.</b> Tunelovanje pokreće fuziju na Suncu, alfa-raspad i spontane mutacije u DNK, a tehnološki omogućuje STM i tunelske diode.</p>
<figure class="figure"><img src="img/l10/p028_191.jpg" alt="STM"><figcaption>Princip rada STM-a (skenirajući tunelski mikroskop).</figcaption></figure><figure class="figure"><img src="img/l10/p030_209.jpg" alt="Kvantni koral"><figcaption>Kvantni koral — atomi gvožđa aranžirani pomoću STM-a.</figcaption></figure>`
    },
    {
      title: "Bozoni i fermioni",
      html: `<p><b>Definicija.</b> Posebno svojstvo mikročestica bez analogije u makrosvetu je <b>spin</b>, dat izrazom $\\hbar\\sqrt{s(s+1)}$, gde spinski kvantni broj $s$ može biti $0, \\tfrac{1}{2}, 1, \\tfrac{3}{2},\\dots$</p>
<p><b>Podela.</b></p>
<ul>
<li>Ako je $s$ ceo broj ($s=0,1,2,\\dots$) — čestica je <b>bozon</b> (npr. foton).</li>
<li>Ako je $s$ poluceo ($s=\\tfrac{1}{2},\\tfrac{3}{2},\\dots$) — čestica je <b>fermion</b> (elektron, proton, neutron).</li>
</ul>
<p><b>Paulijev princip isključenja.</b> Dva fermiona se ne mogu naći u istom kvantnom stanju. Bozoni, naprotiv, teže da se gomilaju u istom stanju (verovatnoća rađanja bozona u stanju raste sa brojem čestica koje ga već zauzimaju).</p>
<p><b>Simboli.</b> $s$ – spinski kvantni broj; $\\hbar\\sqrt{s(s+1)}$ – intenzitet spinskog momenta (J·s).</p>
<p><b>Značaj.</b> Paulijev princip objašnjava raznovrsnost atomskih struktura — bez njega bi svi elektroni pali u osnovno stanje i hemija ne bi postojala.</p>`
    },
    {
      title: "Kvantni brojevi i Hundovo pravilo",
      html: `<p><b>Definicija.</b> Stanje elektrona u atomu određuju četiri <b>kvantna broja</b>:</p>
<table>
<tr><th>Broj</th><th>Oznaka i vrednosti</th><th>Određuje</th></tr>
<tr><td>Glavni</td><td>$n = 1,2,3,\\dots$</td><td>srednje rastojanje od jezgra (i energiju kod vodonika)</td></tr>
<tr><td>Orbitalni</td><td>$\\ell = 0,1,\\dots,n-1$</td><td>moment impulsa, broj podnivoa</td></tr>
<tr><td>Magnetni</td><td>$m = 0,\\pm1,\\dots,\\pm\\ell$</td><td>orijentaciju orbite, broj orbitala u podnivou</td></tr>
<tr><td>Spinski</td><td>$s = +\\tfrac{1}{2}, -\\tfrac{1}{2}$</td><td>sopstveni mehanički moment</td></tr>
</table>
<p><b>Paulijev princip (atomska formulacija).</b> U atomu ne mogu postojati dva elektrona sa identičnim vrednostima sva četiri kvantna broja $(n,\\ell,m,s)$.</p>
<p><b>Hundovo pravilo.</b> Orbitale istog podnivoa popunjavaju se tako što svaka najpre primi po jedan elektron istog spina, i tek tada dolazi do sparivanja.</p>
<p><b>Značaj.</b> Kvantni brojevi i ova pravila određuju raspored elektrona, oblik periodnog sistema i hemijska svojstva elemenata.</p>`
    }
  ],
  formulas: [
    { name: "De Broljeva talasna dužina", formula: "\\lambda = \\dfrac{h}{p} = \\dfrac{h}{m v}", desc: "λ talasna dužina (m), h Plankova konstanta (J·s), p impuls (kg·m/s), m masa (kg), v brzina (m/s)." },
    { name: "Energija fotona", formula: "\\varepsilon_f = h\\nu = \\dfrac{hc}{\\lambda} = m c^2", desc: "veza energije, frekvencije ν (Hz) i talasne dužine λ; iz nje se izvodi De Broljeva relacija." },
    { name: "Kvantovanje momenta impulsa (Bor)", formula: "m_e r_n v_n = n \\dfrac{h}{2\\pi} = n\\hbar", desc: "stojeći talas na orbiti: rn poluprečnik (m), vn brzina (m/s), n kvantni broj, ħ redukovana Plankova konstanta." },
    { name: "Neodređenost položaj-impuls", formula: "\\Delta x \\cdot \\Delta p_x \\geq \\dfrac{\\hbar}{2}", desc: "Δx neodređenost položaja (m), Δpx neodređenost impulsa (kg·m/s)." },
    { name: "Neodređenost energija-vreme", formula: "\\Delta E \\cdot \\Delta t \\geq \\dfrac{\\hbar}{2}", desc: "ΔE neodređenost energije (J), Δt vreme života stanja (s)." },
    { name: "Gustina verovatnoće", formula: "\\rho = |\\Psi(\\vec r,t)|^2 = \\Psi\\,\\Psi^{*} = \\dfrac{dP}{dV}", desc: "ρ gustina verovatnoće (1/m³), Ψ talasna funkcija, dP verovatnoća, dV element zapremine (m³)." },
    { name: "Princip superpozicije", formula: "\\Psi = \\sum_{i=1}^{n} c_i \\Psi_i, \\qquad \\sum_{i=1}^{n} |c_i|^2 = 1", desc: "ci amplitude verovatnoće; |ci|² verovatnoća i-tog stanja; suma je normiranje na 1." },
    { name: "Šredingerova jednačina (vremenska)", formula: "-\\dfrac{\\hbar^2}{2m}\\dfrac{\\partial^2 \\Psi}{\\partial x^2} + U\\Psi = i\\hbar \\dfrac{\\partial \\Psi}{\\partial t}", desc: "m masa (kg), U potencijalna energija (J), i imaginarna jedinica, ħ redukovana Plankova konstanta." },
    { name: "Šredingerova jednačina (stacionarna)", formula: "-\\dfrac{\\hbar^2}{2m}\\dfrac{d^2 \\Psi}{dx^2} + U\\Psi = E\\Psi", desc: "jednačina svojstvenih vrednosti; E ukupna energija mikroobjekta (J)." },
    { name: "Talasne dužine u jami", formula: "\\lambda_n = \\dfrac{2L}{n}, \\quad n = 1,2,3,\\dots", desc: "L širina jame (m), n kvantni broj; uslov stojećeg talasa Ψ(0)=Ψ(L)=0." },
    { name: "Energije u beskonačnoj jami", formula: "E_n = \\dfrac{h^2}{8mL^2}\\,n^2 = \\dfrac{\\pi^2 \\hbar^2}{2mL^2}\\,n^2", desc: "kvantovana energija; ne može biti 0; za L→∞ prelazi u kontinuum." },
    { name: "Struja tunelovanja (STM)", formula: "I_T \\sim e^{-2kd}, \\quad k = \\dfrac{\\sqrt{2m(U-E)}}{\\hbar}", desc: "IT struja (A), d rastojanje šiljak-uzorak (m), k konstanta opadanja (1/m), U−E visina barijere iznad energije (J)." }
  ],
  numbers: [
    { label: "Plankova konstanta h", value: "6,626·10⁻³⁴ J·s" },
    { label: "Redukovana Plankova konstanta ħ", value: "1,055·10⁻³⁴ J·s" },
    { label: "λ elektrona (U = 100 V)", value: "≈ 10⁻¹⁰ m" },
    { label: "λ metka (10 g, 700 m/s)", value: "≈ 10⁻³⁴ m" },
    { label: "Masa fulerena C₆₀", value: "≈ 720 a.j.m." },
    { label: "Masa C₆₀F₄₈", value: "≈ 1632 a.j.m." },
    { label: "Izlazni rad metala", value: "(4–5) eV" },
    { label: "Konstanta k (STM)", value: "≈ 0,1 nm⁻¹" },
    { label: "Promena d za faktor 10 u struji", value: "0,1 nm" },
    { label: "Godina De Broljeve hipoteze", value: "1923" },
    { label: "Davisson-Germer eksperiment", value: "1927" },
    { label: "Difrakcija fulerena (Cajlinger)", value: "1999" }
  ],
  flashcards: [
    { q: "Šta tvrdi De Broljeva hipoteza?", a: "Svakoj čestici mase m i brzine v može se pridružiti talas talasne dužine λ = h/p = h/(mv)." },
    { q: "Kako se De Broljeva hipoteza povezuje sa prvim Borovim postulatom?", a: "Uslov stojećeg talasa na orbiti 2πrn = nλ daje me·rn·vn = n·h/(2π) = nħ, što je upravo kvantovanje momenta impulsa." },
    { q: "Zašto se talasna svojstva ne vide kod makro tela?", a: "Talasna dužina je ekstremno mala (npr. metak λ ≈ 10⁻³⁴ m), pa ne postoji prepreka tih dimenzija na kojoj bi se difrakcija ostvarila." },
    { q: "Šta je fizički smisao |Ψ|²?", a: "To je gustina verovatnoće ρ = dP/dV pronalaženja čestice; verovatnoća u zapremini dV je dP = |Ψ|²·dV." },
    { q: "Šta kažu Hajzenbergove relacije neodređenosti?", a: "Δx·Δpx ≥ ħ/2 i ΔE·Δt ≥ ħ/2 — položaj i impuls (odn. energija i vreme) ne mogu se istovremeno tačno odrediti." },
    { q: "Zašto energija čestice u beskonačnoj jami ne može biti nula?", a: "Energija En = h²/(8mL²)·n² je kvantovana i najmanja vrednost (n=1) nije nula; nulta energija bila bi u suprotnosti sa principom neodređenosti." },
    { q: "Šta je tunel-efekat?", a: "Kvantna pojava u kojoj čestica prolazi kroz potencijalnu barijeru iako joj je energija manja od visine barijere; verovatnoća prolaska IT ~ e^(−2kd)." },
    { q: "Po čemu se razlikuju bozoni i fermioni?", a: "Bozoni imaju ceo spin (s=0,1,2…) i gomilaju se u istom stanju; fermioni imaju poluceo spin (s=1/2,3/2…) i podležu Paulijevom principu isključenja." },
    { q: "Koja četiri kvantna broja određuju stanje elektrona?", a: "Glavni n, orbitalni ℓ, magnetni m i spinski s; po Pauliju ne mogu dva elektrona imati ista sva četiri." }
  ],
  quiz: [
    {
      q: "De Broljeva talasna dužina čestice data je izrazom:",
      options: ["λ = h·p", "λ = h/p = h/(mv)", "λ = p/h", "λ = mv/h"],
      answer: 1
    },
    {
      q: "Hajzenbergova relacija neodređenosti položaja i impulsa glasi:",
      options: ["Δx·Δpx ≤ ħ/2", "Δx·Δpx ≥ ħ/2", "Δx + Δpx = ħ", "Δx·Δpx = 0"],
      answer: 1
    },
    {
      q: "Veličina |Ψ|² predstavlja:",
      options: ["energiju čestice", "impuls čestice", "gustinu verovatnoće pronalaženja čestice", "talasnu dužinu"],
      answer: 2
    },
    {
      q: "Energije čestice u beskonačnoj potencijalnoj jami:",
      options: ["su kontinualne", "su kvantovane i ne mogu biti nula", "uvek mogu biti nula", "ne zavise od širine jame"],
      answer: 1
    },
    {
      q: "Tunel-efekat omogućava da:",
      options: ["čestica prođe kroz barijeru iako joj je energija manja od visine barijere", "čestica uvek odbije od barijere", "energija čestice poraste", "talasna dužina postane nula"],
      answer: 0
    },
    {
      q: "Fermioni (npr. elektroni) podležu:",
      options: ["Hundovom pravilu samo", "principu da se gomilaju u istom stanju", "Paulijevom principu isključenja", "klasičnoj statistici"],
      answer: 2
    }
  ]
};

const TOPICS = [T_l6, T_l7, T_l8, T_l9, T_l10];

/* === Dodatak: Spektri (slajd 73) + dijagrami (skice) za 8. lekciju === */
(function(){
  var l8 = TOPICS.find(function(t){return t.id==='l8';});
  if(!l8) return;
  var _f = function(s,c){return '<figure class="figure"><img src="'+s+'?v=5" alt="'+c+'"><figcaption>'+c+'</figcaption></figure>';};

  var idx = l8.sections.findIndex(function(s){var h=s.h||s.title||s.name||'';return h.indexOf('Disperzija')>=0;});
  if(idx<0) idx = l8.sections.length-1;
  l8.sections.splice(idx+1, 0, {
    h: "Spektri svetlosti",
    html: "<p><b>Šta je spektar.</b> Kada složena (bela/polihromatska) svetlost padne na granicu dve sredine ili prođe kroz prizmu, pojedini monohromatski talasi se — zbog zavisnosti indeksa prelamanja od talasne dužine — prelome pod različitim uglovima. Tako se svetlost razloži po talasnim dužinama na <b>spektar</b>.</p>" +
          "<p><b>Po izgledu:</b></p><ul>" +
          "<li><b>Kontinualni</b> — neprekidan niz talasnih dužina; daju ga usijana čvrsta tela i tečnosti.</li>" +
          "<li><b>Trakasti</b> — daju ga usijani gasovi sa višeatomskim molekulima.</li>" +
          "<li><b>Linijski</b> — uske, razdvojene linije; daju ga jednoatomski gasovi i karakterističan je za svaki element (kao otisak prsta).</li></ul>" +
          "<p><b>Po nastanku:</b></p><ul>" +
          "<li><b>Emisioni</b> — nastaju zračenjem (emisijom) svetlosti od usijanih supstanci.</li>" +
          "<li><b>Apsorpcioni</b> — kada bela svetlost (kontinualan spektar) prođe kroz supstancu, ona apsorbuje neke komponente, pa na tim mestima ostaju <b>tamne linije</b>.</li></ul>" +
          "<p><b>Kirhofov zakon apsorpcije.</b> Atomi nekog elementa apsorbuju upravo onu svetlost koju pri istim uslovima i sami emituju — zato se položaj tamnih (apsorpcionih) linija tačno poklapa sa položajem svetlih (emisionih) linija istog elementa. <b>Značaj:</b> po spektru se može odrediti hemijski sastav (spektralna analiza — i zvezda).</p>"
  });

  l8.figures = Object.assign(l8.figures||{}, {
    "Zakon odbijanja (refleksije)": [_f("img/l8/d007.jpg","Zakon odbijanja: upadni ugao α jednak je odbojnom uglu α'.")],
    "Zakon prelamanja - Snelijus-Dekartov zakon": [_f("img/l8/d011.jpg","Prelamanje na granici n₁/n₂ — uglovi α i β (Snelijus–Dekartov zakon).")],
    "Totalna refleksija i opticka vlakna": [_f("img/l8/d021.jpg","Totalna refleksija: za α > αg zrak se potpuno odbija (na αg je β = 90°).")],
    "Sociva - vrste, karakteristicni zraci, likovi": [_f("img/l8/d031.jpg","Sabirno sočivo — karakteristični zraci i žiže F, F'."),_f("img/l8/d034.jpg","Rasipno sočivo — imaginaran, uspravan i umanjen lik.")],
    "Jangov eksperiment": [_f("img/l8/d041.jpg","Jangov eksperiment — dve pukotine S₁, S₂ daju interferentne pruge.")],
    "Difrakcija i opticka resetka": [_f("img/l8/d057.jpg","Difrakcija na optičkoj rešetki: n·λ = a·sinθ.")],
    "Disperzija svetlosti i duga": [_f("img/l8/d067.jpg","Disperziona kriva n²(ω) — oblasti normalne i anomalne disperzije.")],
    "Polarizacija - Brusterov i Malusov zakon": [_f("img/l8/d081.jpg","Brusterov ugao — odbijeni i prelomljeni zrak zaklapaju 90°."),_f("img/l8/d088.jpg","Malusov zakon — kroz analizator prolazi komponenta EA = E₀·cosθ.")],
    "Dvojno prelamanje i opticka aktivnost": [_f("img/l8/d084.jpg","Dvojno prelamanje — redovan i neredovan zrak u kristalu.")]
  });
})();
