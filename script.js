// ==========================================================================
// 1. DICIONÁRIO MULTILÍNGUE (CORRIGIDO E COMPLETO)
// ==========================================================================
const translations = {
    pt: {
        "nav-inicio": "Início", "nav-importancia": "Importância Vital", "nav-polinizacao": "Mecanismos Técnicos", 
        "nav-seguranca": "Segurança Alimentar", "nav-produtos": "Bio-Produtos Premium", "nav-contato": "Contato", "badge-rec": "RELEVANTE",
        "slide1-title": "Dinamismo Biofísico e Vetores de Polinização", "slide1-desc": "O elo biológico fundamental que regula a transferência de material genético floral nas angiospermas globais.",
        "slide2-title": "Arquitetura de Segurança Alimentar Global", "slide2-desc": "Análise quantitativa de culturas de alto valor comercial dependentes estritamente de vetores bióticos.",
        "slide3-title": "Gradientes de Potencial e Resiliência Genética", "slide3-desc": "A micro-engenharia natural que mitiga o abortamento de óvulos botânicos e preserva os ecossistemas.",
        "welcome-title": "Introdução à Odisséia dos Polinizadores", "welcome-subtitle": "A simbiose biofísica entre a fauna melífera e a estabilidade agroecológica planetária.",
        "welcome-desc": "Esta plataforma de documentação técnico-científica atua como um repositório analítico dedicado a expor o papel incomensurável dos Hymenopteras no equilíbrio biológico da biosfera. Longe de exercerem uma mera função produtora de mel, as abelhas operam como engenheiras ecossistêmicas críticas. Suas dinâmicas comportamentais e interações físicas de microescala regulam as taxas de especiação, a variabilidade genética e a resiliência estrutural das principais macroculturas de interesse antrópico.",
        "imp-title": "O Propósito Ecológico: Sustentação de Ecossistemas", "imp-subtitle": "Modelos de dependência trófica e o risco latente de colapso nos sistemas de produção primária.",
        "imp-main-text": "Bilhões de indivíduos dependem diretamente das funções sistêmicas desempenhadas pelos polinizadores bióticos. A degradação antropogênica contínua dessas populações, induzida pelo uso indiscriminado de agroquímicos neurotóxicos e pela fragmentação extrema de habitats, impõe uma severa vulnerabilidade à segurança nutricional global. Os polinizadores atuam como garantidores de que os gametófitos masculinos fertilizem de maneira ideal as estruturas receptoras das plantas, desencadeando rotas metabólicas que culminam em sementes de alta viabilidade celular e frutos com perfis moleculares ricos em macronutrientes cruciais.",
        "card1-title": "Homogeneidade Nutricional", "card1-desc": "A polinização cruzada regula de maneira direta a biossíntese de vitaminas lipossolúveis (A, D, E, K) e hidrossolúveis (C) essenciais na homeostase metabólica humana.",
        "card2-title": "Homeostase da Flora Nativa", "card2-desc": "A preservação dos vetores melíferos garante a integridade fitossociológica das florestas tropicais, agindo indiretamente na ciclagem de nutrientes e regulação hídrica.",
        "card3-title": "Robustez de Macrocommodities", "card3-desc": "Culturas agrícolas de alto valor financeiro internacional dependem de forma exponencial das taxas de visitação biótica para assegurar o índice de conversão econômica.",
        "mech-title": "Mecanismos Biofísicos da Polinização Eletrostática", "mech-subtitle": "A eletrodinâmica molecular regulando o transporte e captura de grãos de pólen.",
        "mech-desc1": "Conforme amplamente validado em ensaios acadêmicos internacionais, a transferência mecânica de grãos de pólen das anteras para os estigmas é aperfeiçoada por propriedades elétricas físicas reguladas pelo efeito triboelétrico. Durante o voo, o atrito cinético do corpo da abelha com as correntes de ar induz a perda contínua de elétrons de sua cutícula e cerdas ramificadas, gerando um acúmulo estável de carga líquida estática positiva (+). Em contrapartida, as estruturas florais, inseridas no potencial de aterramento terrestre, mantêm-se eletricamente induzidas com cargas superficiais negativas (-).",
        "mech-desc2": "No momento em que a abelha atinge o limiar de aproximação milimétrico da flor, a magnitude desse campo elétrico local supera as forças de coesão molecular que retêm o pólen na antera. Esse diferencial cria uma força de atração coulombiana que projeta os grãos de pólen macroscopicamente pelo espaço aéreo, atraindo-os ao revestimento do inseto sem que haja necessidade de compressão física inicial. Adicionalmente, dinâmicas de polinização por vibração acústica de alta frequência (buzz pollination), exercida por gêneros especializados, provocam a ressonância mecânica de anteras poricidas, liberando o pólen aprisionado em culturas economicamente críticas.",
        "bib-title1": "Referências Bibliográficas Selecionadas (Mecanismos Físicos):",
        "bib-title2": "Referências Bibliográficas Selecionadas (Agronomia Global):",
        "sec-title": "Variabilidade Nutricional e Resiliência Comercial das Culturas", "sec-subtitle": "Métricas e modelos matemáticos de interdependência agronômica e produtividade.",
        "m1-lbl": "Das espécies vegetais de interesse econômico alimentar global dependem do fluxo de polinização cruzada biótica.", "m2-lbl": "Do volume total da ingestão nutricional humana primária provém diretamente da atividade metabólica indireta dos polinizadores.", "m3-lbl": "De ganho médio de peso em frutos bem polinizados, reduzindo o índice de deformidades estruturais e abortamento.",
        "sec-desc": "A agricultura de alta densidade técnica torna-se inviável se isolada do equilíbrio populacional dos polinizadores. O pegamento completo dos frutos desencadeia a síntese regulada de fitormônios endógenos (como auxinas e giberelinas) nos tecidos vegetais, o que otimiza de forma expressiva o acúmulo de matéria seca, açúcares solúveis e antioxidantes. Cenários analíticos de declínio dessas populações indicam uma crise inflacionária severa e desequilíbrio calórico global, afetando diretamente a oferta e homogeneidade morfológica de culturas perenes como abacates, café, laranjas, maçãs e tomates.",
        "prod-title": "Bio-Produtos Apícolas de Grau Farmacêutico e Nutracêutico",
        "prod-subtitle": "A bioprospecção de metabólitos secundários e bioativos padronizados para alta performance biológica.",
        "filter-all": "Todos os Produtos", "filter-mel": "Meles Especiais", "filter-propolis": "Extratos & Própolis", "filter-nutra": "Nutracêuticos",
        "badge-pure": "100% ORGÂNICO", "badge-std": "PADRONIZADO", "badge-prem": "PREMIUM BIO",
        "p1-name": "Mel Ativo de Floração Nativa Silvestre", "p1-desc": "Superfície enzimática preservada. Rico em flavonoides residuais e ácidos fenólicos com alta capacidade de atenuação de radicais livres (ORAC elevado).",
        "p2-name": "Extrato de Própolis Verde Ultra-Concentrado", "p2-desc": "Isolado biológico derivado do Baccharis dracunculifolia. Concentração molecular mínima certificada de Artepillin-C (superior a 7.5mg/ml).",
        "p3-name": "Geleia Real Humana Liofilizada em Cápsulas", "p3-desc": "Estabilizada via criodesidratação a vácuo para preservação total do ácido 10-hidroxidecenóico (10-HDA), cofatores enzimáticos e imunoglobulinas.",
        "btn-buy": "Comprar",
        "ct-title": "Manifesto de Engajamento e Contato", "ct-subtitle": "Articulação institucional para a mitigação de impactos sobre polinizadores nativos.",
        "lbl-name": "Nome Institucional / Pesquisador", "lbl-email": "Endereço Eletrônico Acadêmico", "lbl-msg": "Proposta de Cooperação Científica", "btn-send": "Submeter Manifesto Técnico",
        "foot-rights": "Todos os direitos reservados. Relatório de Divulgação Científica."
    },
    en: {
        "nav-inicio": "Home", "nav-importancia": "Vital Importance", "nav-polinizacao": "Technical Mechanisms", 
        "nav-seguranca": "Food Security", "nav-produtos": "Premium Bio-Products", "nav-contato": "Contact", "badge-rec": "RELEVANT",
        "slide1-title": "Biophysical Dynamism and Pollination Vectors", "slide1-desc": "The biological link regulating floral genetic transfer in angiosperms.",
        "slide2-title": "Global Food Security Architecture", "slide2-desc": "Quantitative analysis of high-value crops strictly dependent on biotic vectors.",
        "slide3-title": "Potential Gradients and Genetic Resilience", "slide3-desc": "Natural micro-engineering mitigating ovule abortion and preserving ecosystems.",
        "welcome-title": "Introduction to the Pollinators' Odyssey", "welcome-subtitle": "Biophysical symbiosis between honey fauna and global agroecological stability.",
        "welcome-desc": "This technical-scientific documentation platform acts as an analytical repository dedicated to exposing the immeasurable role of Hymenoptera in the biological balance of the biosphere. Far from fulfilling a mere honey-producing function, bees operate as critical ecosystem engineers. Their behavioral dynamics and micro-scale physical interactions regulate speciation rates, genetic variability, and the structural resilience of the main macro-crops of anthropogenic interest.",
        "imp-title": "The Ecological Purpose: Ecosystem Sustenance", 
        "imp-subtitle": "Trophic dependency models and the latent risk of collapse in primary production systems.",
        "imp-main-text": "Billions of individuals depend directly on the systemic functions performed by biotic pollinators. Ongoing anthropogenic degradation of these populations, induced by the indiscriminate use of neurotoxic agrochemicals and extreme habitat fragmentation, imposes severe vulnerability to global nutritional security. Pollinators act as guarantors that male gametophytes optimally fertilize plant receptive structures, triggering metabolic pathways that culminate in high cellular viability seeds and fruits rich in crucial macronutrients.",
        "card1-title": "Nutritional Homogeneity", 
        "card1-desc": "Cross-pollination directly regulates the biosynthesis of essential fat-soluble (A, D, E, K) and water-soluble (C) vitamins in human metabolic homeostasis.",
        "card2-title": "Native Flora Homeostasis", 
        "card2-desc": "Preserving honey vectors guarantees the phytosociological integrity of tropical forests, acting indirectly on nutrient cycling and water regulation.",
        "card3-title": "Macro-commodities Robustness", 
        "card3-desc": "Agricultural crops of high international financial value exponentially depend on biotic visitation rates to ensure economic conversion index.",
        "mech-title": "Biophysical Mechanisms of Electrostatic Pollination", "mech-subtitle": "Molecular electrodynamics regulating the transport and capture of pollen grains.",
        "mech-desc1": "As widely validated in international academic trials, the mechanical transfer of pollen grains from anthers to stigmas is enhanced by physical electrical properties regulated by the triboelectric effect. During flight, the kinetic friction of the bee's body with air currents induces a continuous loss of electrons from its cuticle and branched hairs, generating a stable accumulation of static net positive (+) charge. In contrast, floral structures, connected to the terrestrial ground potential, remain electrically induced with negative surface charges (-).",
        "mech-desc2": "The moment the bee reaches the millimeter threshold of approach to the flower, the magnitude of this local electric field overcomes the molecular cohesive forces retaining the pollen in the anther. This differential creates a Coulombic attraction force that projects the pollen grains macroscopically through the airspace, attracting them to the insect's coat without the need for initial physical compression. Additionally, pollination dynamics via high-frequency acoustic vibration (buzz pollination), exerted by specialized genres, cause mechanical resonance of poricidal anthers, releasing trapped pollen in economically critical crops.",
        "bib-title1": "Selected Bibliographic References (Physical Mechanisms):",
        "bib-title2": "Selected Bibliographic References (Global Agronomy):",
        "sec-title": "Nutritional Variability and Commercial Crop Resilience", 
        "sec-subtitle": "Metrics and mathematical models of agronomic interdependence and productivity.",
        "m1-lbl": "Of global food economic interest plant species depend on the biotic cross-pollination flow.", 
        "m2-lbl": "Of the total volume of primary human nutritional intake comes directly from the indirect metabolic activity of pollinators.", 
        "m3-lbl": "Average weight gain in well-pollinated fruits, reducing the rate of structural deformities and abortion.",
        "sec-desc": "High technical density agricultural production becomes unviable if isolated from the population balance of pollinators. Full fruit set triggers the regulated synthesis of endogenous phytohormones (such as auxins and giberellins) in plant tissues, which significantly optimizes the accumulation of dry matter, soluble sugars, and antioxidants. Analytical scenarios of decline in these populations indicate a severe inflationary crisis and global caloric imbalance, directly affecting the supply and morphological homogeneity of perennial crops such as avocados, coffee, oranges, apples, and tomatoes.",
        "prod-title": "Pharmaceutical and Nutraceutical Grade Bee Bio-Products",
        "prod-subtitle": "Bioprospecting standardized secondary metabolites and bioactives for high biological performance.",
        "filter-all": "All Products", "filter-mel": "Special Honeys", "filter-propolis": "Extracts & Propolis", "filter-nutra": "Nutraceuticals",
        "badge-pure": "100% ORGANIC", "badge-std": "STANDARDIZED", "badge-prem": "PREMIUM BIO",
        "p1-name": "Active Wildflower Blossom Honey", "p1-desc": "Preserved enzymatic activity. Rich in residual flavonoids and phenolic acids with premium radical scavenging capacity (High ORAC).",
        "p2-name": "Ultra-Concentrated Green Propolis Extract", "p2-desc": "Biomaterial harvested from Baccharis dracunculifolia. Certified minimum molecular density of Artepillin-C (> 7.5mg/ml).",
        "p3-name": "Lyophilized Royal Jelly Capsules", "p3-desc": "Vacuum cryodesiccated to ensure molecular integrity of 10-Hydroxy-2-decenoic acid (10-HDA) and protective proteins.",
        "btn-buy": "Buy Now",
        "ct-title": "Engagement and Contact Manifesto", 
        "ct-subtitle": "Institutional articulation to mitigate impacts on native pollinators.",
        "lbl-name": "Institutional Name / Researcher", 
        "lbl-email": "Academic Electronic Address", 
        "lbl-msg": "Scientific Cooperation Proposal", 
        "btn-send": "Submit Technical Manifesto",
        "foot-rights": "All rights reserved. Scientific Disclosure Report."
    },
    es: {
        "nav-inicio": "Inicio", "nav-importancia": "Importancia Vital", "nav-polinizacao": "Mecanismos Técnicos", 
        "nav-seguranca": "Seguridad Alimentaria", "nav-produtos": "Bio-Productos Premium", "nav-contato": "Contacto", "badge-rec": "RELEVANTE",
        "slide1-title": "Dinamismo Biofísico y Vectores de Polinización", "slide1-desc": "El vínculo biológico que regula la transferencia genética floral en las angiospermas.",
        "slide2-title": "Arquitectura de Seguridad Alimentaria Global", "slide2-desc": "Análisis cuantitativo de cultivos de alto valor dependientes de vectores bióticos.",
        "slide3-title": "Gradientes de Potencial y Resiliência Genética", "slide3-desc": "Microingeniería natural que mitiga el aborto de óvulos y preserva ecosistemas.",
        "welcome-title": "Introducción a la Odisea de los Polinizadores", "welcome-subtitle": "Simbiosis biofísica entre la fauna melífera y la estabilidad agroecológica planetaria.",
        "welcome-desc": "Esta plataforma de documentación técnico-científica actúa como un repositorio analítico dedicado a exponer el papel inconmensurable de los Hymenoptera en el equilibrio biológico de la biosfera. Lejos de ejercer una mera función productora de miel, las abejas operan como ingeneras ecosistémicas críticas. Sus dinámicas de comportamiento e interacciones físicas a microescala regulan las tasas de especiación, la variabilidad genética y la resiliencia estructural de los principales macrocultivos de interés antropogénico.",
        "imp-title": "El Propósito Ecológico: Sustento de los Ecosistemas", 
        "imp-subtitle": "Modelos de dependencia trófica y el riesgo latente de colapso nos sistemas de producción primaria.",
        "imp-main-text": "Miles de millones de personas dependen directamente de las funciones sistémicas que realizan los polinizadores bióticos. La continua degradación antropogénica de estas poblaciones, inducida por el uso indiscriminado de agroquímicos neurotóxicos y la fragmentación extrema de los hábitats, impone una severa vulnerabilidad a la seguridad nutricional global. Los polinizadores actúan como garantes de que los gametofitos masculinos fertilicen de manera óptima las estructuras receptoras de las plantas, desencadenando vías metabólicas que culminan en semillas de alta viabilidad celular y frutos con perfiles moleculares ricos en macronutrientes cruciales.",
        "card1-title": "Homogeneidad Nutricional", 
        "card1-desc": "La polinización cruzada regula directamente la biosíntesis de vitaminas liposolules (A, D, E, K) e hidrosolubles (C) esenciales en la homeostasis metabólica humana.",
        "card2-title": "Homeostasis de la Flora Nativa", 
        "card2-desc": "La preservación de los vectores melíferos garantiza la integridad fitosociológica de los bosques tropicales, actuando indirectamente en el ciclo de nutrientes y la regulación hídrica.",
        "card3-title": "Robustez de las Macrocommodities", 
        "card3-desc": "Los cultivos agrícolas de alto valor financiero internacional dependen exponencialmente de las tasas de visitación biótica para asegurar el índice de conversión económica.",
        "mech-title": "Mecanismos Biofísicos de la Polinización Electrostática", "mech-subtitle": "La electrodinámica molecular regulando el transporte y captura de granos de polen.",
        "mech-desc1": "Como ha sido ampliamente validado en ensayos académicos internacionais, la transferencia mecánica de granos de polen desde las anteras hacia los estigmas se ve perfeccionada por propiedades eléctricas físicas reguladas por el efecto triboelétrico. Durante el vuelo, la fricción cinética del cuerpo de la abeja com las corrientes de aire induce la pérdida continua de electrones de su cutícula y setas ramificadas, generando una acumulación estable de carga neta estática positiva (+). Por el contrario, las estructuras florales, conectadas al potencial de tierra terrestre, se mantienen inducidas eléctricamente con cargas superficiais negativas (-).",
        "mech-desc2": "En el momento en que la abeja alcanza el umbral de aproximación milimétrico a la flor, la magnitude de este campo eléctrico local supera las fuerzas de ecuación molecular que retienen el polen en la antera. Este diferencial cria una fuerza de atracción de Coulomb que proyecta los granos de polen macroscopicamente a través del espacio aéreo, atrayéndolos al revestimiento del insecto sin necesidad de compresión física inicial. Asimismo, las dinámicas de polinización por vibración acústica de alta frecuencia (buzz pollination), ejercida por géneros especializados, provocan la resonancia mecánica de anteras poricidas, liberando el polen atrapado en cultivos económicamente críticos.",
        "bib-title1": "Referencias Bibliográficas Seleccionadas (Mecanismos Físicos):",
        "bib-title2": "Referencias Bibliográficas Seleccionadas (Agronómia Global):",
        "sec-title": "Variabilidad Nutricional y Resiliencia Comercial de los Cultivos", 
        "sec-subtitle": "Métricas y modelos matemáticos de interdependencia agronómica y productividad.",
        "m1-lbl": "De las especies vegetales de interés económico alimentario global dependen del flujo de polinización cruzada biótica.", 
        "m2-lbl": "Del volumen total de la ingesta nutricional humana primaria proviene directamente de la actividad metabólica indirecta de los polinizadores.", 
        "m3-lbl": "De ganancia media de peso en frutos bien polinizados, reducindo el índice de deformidades estructurales y aborto.",
        "sec-desc": "La producción agrícola de alta densidad técnica se vuelve inviable si se aísla del equilibrio poblacional de los polinizadores. El cuajado completo de los frutos desencadena la síntesis regulada de fitohormonas endógenas (como auxinas y giberelinas) yn los tejidos vegetales, lo que optimiza significativamente la acumulación de materia seca, azúcares solubles y antioxidantes. Los escenarios analíticos de disminución de estas poblaciones indican una grave crisis inflacionaria y un desequilibrio calórico global, que afectará directamente la oferta y la homogeneidad morfológica de cultivos perennes como el aguacate, el café, la naranja, la manzana y el tomate.",
        "prod-title": "Bio-Produtos Apícolas de Grado Farmacéutico y Nutracêutico",
        "prod-subtitle": "Bioprospección de metabolitos secundarios y bioactivos estandarizados para alto rendimiento biológico.",
        "filter-all": "Todos os Produtos", "filter-mel": "Mieles Especiales", "filter-propolis": "Extractos & Própolis", "filter-nutra": "Nutracéuticos",
        "badge-pure": "100% ORGÂNICO", "badge-std": "ESTANDARIZADO", "badge-prem": "PREMIUM BIO",
        "p1-name": "Miel Activa de Floración Nativa Silvestre", "p1-desc": "Superficie ecuación preservada. Rico en flavonoides residuales con alta capacidad antiox.",
        "p2-name": "Extracto de Própolis Verde Ultra-Concentrado", "p2-desc": "Aislado biológico derivado de Baccharis dracunculifolia. Mínimo certificado de Artepillin-C.",
        "p3-name": "Cápsulas de Jalea Real Liofilizada", "p3-desc": "Estabilizada mediante criodesidratación para preservación del ácido 10-hidroxidecenóico (10-HDA).",
        "btn-buy": "Comprar",
        "ct-title": "Manifiesto de Compromiso y Contacto", 
        "ct-subtitle": "Articulación institucional para mitigar impactos en polinizadores nativos.",
        "lbl-name": "Nombre Institucional / Investigador", 
        "lbl-email": "Correo Electrónico Académico", 
        "lbl-msg": "Propuesta de Cooperación Científica", 
        "btn-send": "Someter Manifiesto Técnico",
        "foot-rights": "Todos los derechos reservados. Reporte de Divulgación Científica."
    }
};

// ==========================================================================
// 2. CONTROLE DO PAINEL LATERAL DESLIZANTE (MENU HAMBÚRGUER PELA ESQUERDA)
// ==========================================================================
const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const navSidebar = document.getElementById('navSidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const menuLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('.spa-section');
const logoHome = document.getElementById('logoHome');

function openSidebar() {
    navSidebar.classList.add('open');
    sidebarOverlay.classList.add('visible');
}

function closeSidebar() {
    navSidebar.classList.remove('open');
    sidebarOverlay.classList.remove('visible');
}

menuBtn.addEventListener('click', openSidebar);
closeMenuBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

function activeSection(targetId) {
    sections.forEach(section => section.classList.remove('active'));
    menuLinks.forEach(link => {
        link.classList.remove('active-link');
        if(link.getAttribute('href') === targetId) {
            link.classList.add('active-link');
        }
    });

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        targetSection.classList.add('active');
    }

    if (targetId === '#inicio') {
        resetCarouselTimer();
    } else {
        clearInterval(carouselTimer);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        activeSection(targetId);
        closeSidebar();
    });
});

logoHome.addEventListener('click', (e) => {
    e.preventDefault();
    activeSection('#inicio');
    closeSidebar();
});

// ==========================================================================
// 3. MOTOR DO CARROSSEL HERO
// ==========================================================================
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('carouselDots');
let currentSlideIndex = 0;
let carouselTimer;

slides.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('carousel-dot');
    if (index === 0) dot.classList.add('active');
    dot.addEventListener('click', () => jumpToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.carousel-dot');

function updateCarouselVisuals() {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    updateCarouselVisuals();
    resetCarouselTimer();
}

function prevSlide() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    updateCarouselVisuals();
    resetCarouselTimer();
}

function jumpToSlide(index) {
    currentSlideIndex = index;
    updateCarouselVisuals();
    resetCarouselTimer();
}

function resetCarouselTimer() {
    clearInterval(carouselTimer);
    const inicioSection = document.getElementById('inicio');
    if (inicioSection && inicioSection.classList.contains('active')) {
        carouselTimer = setInterval(nextSlide, 6000);
    }
}

if(nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    resetCarouselTimer();
}

// ==========================================================================
// 4. DINÂMICAS E FILTROS DO E-COMMERCE
// ==========================================================================
const filterButtons = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        productCards.forEach(card => {
            const category = card.getAttribute('data-category');
            if (filterValue === 'all' || category === filterValue) {
                card.style.display = 'flex';
                setTimeout(() => { card.style.opacity = '1'; }, 50);
            } else {
                card.style.opacity = '0';
                setTimeout(() => { card.style.display = 'none'; }, 300);
            }
        });
    });
});

const buyButtons = document.querySelectorAll('.btn-add-cart');
buyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const name = card.querySelector('.prod-name').textContent;
        const qty = card.querySelector('.prod-qty').value;
        const price = card.querySelector('.prod-price').textContent;
        
        alert(`[EcoAbelhas Store] Item adicionado com sucesso!\n\nProduto: ${name}\nQuantidade: ${qty} unidade(s)\nValor Unid: ${price}\n\nRedirecionando para o ambiente seguro de pagamento...`);
    });
});

// ==========================================================================
// 5. CONTROLADOR DE TEMA E IDIOMAS
// ==========================================================================
const themeToggleBtn = document.getElementById('themeToggle');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

const langSelect = document.getElementById('langSelect');
langSelect.addEventListener('change', (e) => { changeLanguage(e.target.value); });

function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = translations[lang]?.[key] || translations['pt'][key];
    });
}
changeLanguage('pt');

// ==========================================================================
// 6. FORMULÁRIO DE CONTATO
// ==========================================================================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('userName').value;
    formFeedback.classList.remove('hidden');
    formFeedback.classList.add('success');
    formFeedback.textContent = `Submissão efetuada com sucesso, Pesquisador ${name}. O protocolo de cooperação científica foi catalogado.`;
    contactForm.reset();
});