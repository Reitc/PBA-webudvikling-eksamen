<template>
    <section class="container mt-10 mx-auto px-4 md:px-10">
      <div v-if="post" class="text-center">
        <h1 class="text-4xl font-bold text-dark-brown mb-6">{{ post.title }}</h1>
        <img :src="post.image" :alt="post.title" class="w-full h-64 object-cover rounded mb-6" />
        <div class="bg-blog-post p-6 rounded-lg shadow-md text-left mt-6 space-y-6">
          <p
            v-for="(paragraph, index) in post.content"
            :key="index"
            class="text-lg text-black leading-relaxed"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
      <p v-else class="text-center text-black">Indlæser...</p>
    </section>
  </template>
  
  <script>
  export default {
    name: 'BlogPostPage',
    data() {
      return {
        posts: [
          {
            id: 1,
            title: 'Forstå Din Sundhed Gennem Hårcelletest',
            image: '/img/blog/haarcelletest.jpg',
            content: [
              'Epigenetisk hårcelleanalyse er en innovativ metode til at forstå din krops unikke behov. Ved hjælp af enkle prøver fra dit hår kan vi kortlægge, hvordan din krop reagerer på miljøfaktorer, næringsstoffer og stress.',
              'Denne teknologi hjælper dig med at identificere områder, hvor din krop måske mangler balance, og giver konkrete forslag til kosttilskud, livsstilsændringer og miljømæssige forbedringer.',
              'Opdag hvordan små justeringer kan gøre en stor forskel i din sundhed og velvære.',
            ],
          },
          {
        id: 2,
        title: '5 Tips til Optimal Kost for Dig og Dit Kæledyr',
        image: '/img/blog/kost_guide.jpg',
        content: [
          'En sund kost er fundamentet for et langt og lykkeligt liv – både for mennesker og kæledyr. Her er vores bedste tips:',
          '1. Prioritér naturlige og økologiske ingredienser i dine måltider.',
          '2. Tilføj essentielle fedtsyrer som omega-3 til både din og dit kæledyrs kost for en sund hud og pels.',
          '3. Sørg for at inkludere nok protein til muskelopbygning og vedligeholdelse.',
          '4. Undgå forarbejdede fødevarer og tilsætningsstoffer, som kan belaste kroppen.',
          '5. Hydrer regelmæssigt og sørg for adgang til rent drikkevand hele dagen.',
        ],
      },
      {
        id: 3,
        title: 'Sådan Forbedrer Du Dit Immunforsvar',
        image: '/img/blog/immunforsvar_tips.jpg',
        content: [
          'Dit immunforsvar spiller en afgørende rolle i at beskytte din krop mod skadelige bakterier, vira og andre patogener. Et stærkt immunforsvar hjælper dig med at holde sygdomme på afstand og giver din krop mulighed for at genoprette balancen hurtigt.',
          'For at styrke dit immunforsvar er det vigtigt at fokusere på tre nøgleområder: kost, motion og mental sundhed. Her er vores bedste tips til, hvordan du kan opnå dette:',
          '',
          '1. Optimer din kost:',
          'En varieret og næringsrig kost er afgørende for at opbygge et stærkt immunforsvar. Sørg for at inkludere:',
          '- Vitaminer og mineraler som vitamin C, D og zink. Disse næringsstoffer findes i produkter som *Epinutrics Vitamin Complex* og *Epinutrics Magnesium*.',
          '- Antioxidanter fra naturlige kilder som frugt og grøntsager, der beskytter dine celler mod skader.',
          '- Fermenterede produkter med probiotika, som *NDS Probiotic Performance*, for at støtte en sund tarmflora, som er tæt forbundet med immunforsvaret.',
          '',
          '2. Bevæg dig regelmæssigt:',
          'Motion forbedrer blodcirkulationen og hjælper med at transportere immunceller effektivt rundt i kroppen. Moderate aktiviteter som gåture, yoga eller let styrketræning kan booste dit immunforsvar uden at overbelaste det.',
          '',
          '3. Støt din mentale sundhed:',
          'Stress kan svække immunforsvaret. Det er vigtigt at finde tid til afslapning gennem meditation, mindfulness eller blot en god nattesøvn. Overvej kosttilskud som *Epinutrics EPI-C*, der indeholder ingredienser som acerola og multebær for at støtte mental og fysisk balance.',
          '',
          'Ved at fokusere på disse tre områder og vælge kvalitetsprodukter fra CELLA TEST, kan du styrke dit immunforsvar og forbedre din livskvalitet. Husk, små ændringer kan have en stor indflydelse!'
        ],
      },
      {
        id: 4,
        title: 'Hårcelletest for Dyr',
        image: '/img/blog/haarcelletest_dyr.jpg',
        content: [
            'Hårcelletest for dyr er en banebrydende metode, der hjælper kæledyrsejere med at forstå deres kæledyrs sundhed og trivsel bedre. Ved at analysere hårceller kan vi identificere ubalancer og behov, der påvirker dit kæledyrs velbefindende.',
            '',
            'Hvordan fungerer hårcelletesten?',
            'Hårcelletesten bruger avanceret epigenetisk teknologi til at kortlægge dit kæledyrs respons på miljømæssige og ernæringsmæssige faktorer. Med en simpel prøve af dit kæledyrs hår kan vi:',
            '- Identificere mangler i næringsstoffer som vitaminer og mineraler.',
            '- Afsløre følsomheder eller belastninger fra miljøet.',
            '- Udarbejde skræddersyede anbefalinger for kosttilskud og livsstilsændringer.',
            '',
            'Fordele ved hårcelletest for dyr:',
            '1. Individuel tilpasning: Hvert kæledyr er unikt, og testen hjælper med at skabe en specifik plan for dit kæledyr baseret på dets unikke behov.',
            '2. Forebyggelse af sundhedsproblemer: Ved at opdage ubalancer tidligt kan du handle proaktivt for at undgå større sundhedsproblemer i fremtiden.',
            '3. Naturlig støtte: Mange af anbefalingerne fokuserer på naturlige løsninger og kosttilskud, såsom dem fra CELLATEST, der er designet specifikt til kæledyrs behov.',
            '',
            'Eksempler på anvendelse:',
            '- En hund, der lider af hudproblemer, kan have gavn af tilskud som *NDS Probiotic Pet* for at støtte en sund tarmflora og et stærkt immunforsvar.',
            '- En kat med lav energi kan få anbefalet vitaminer og mineraler fra *Epinutrics Pet Complex*, der understøtter generel vitalitet.',
            '',
            'Hvordan kommer du i gang?',
            'At tage en hårcelletest er enkelt og smertefrit. Alt, hvad du skal gøre, er at indsamle en lille hårprøve fra dit kæledyr og indsende den til analyse. På baggrund af resultaterne modtager du en detaljeret rapport med skræddersyede anbefalinger, der kan forbedre dit kæledyrs sundhed.',
            '',
            'Giv dit kæledyr den omsorg, det fortjener, og opdag fordelene ved hårcelletest med CELLATEST. Din firbenede ven vil takke dig for det!'
        ],
      },
      {
        id: 5,
        title: 'Fordele ved Naturlige Kosttilskud til Kæledyr',
        image: '/img/blog/kosttilskud_dyr.jpg',
        content: [
            'Naturlige kosttilskud til kæledyr kan være en fantastisk måde at støtte dit kæledyrs sundhed og trivsel på. Med fokus på ingredienser af høj kvalitet og uden unødvendige tilsætningsstoffer, tilbyder naturlige kosttilskud en skånsom og effektiv måde at adressere forskellige behov hos dine firbenede venner.',
            '',
            'Hvorfor vælge naturlige kosttilskud?',
            '1. Sikkerhed og renhed: Naturlige kosttilskud indeholder ofte færre kemikalier og kunstige tilsætningsstoffer, hvilket gør dem mere skånsomme mod dit kæledyrs fordøjelsessystem.',
            '2. Høj biotilgængelighed: Ingredienser som omega-3-fedtsyrer, probiotika og vitaminer i naturlige former absorberes lettere af kroppen og giver bedre resultater.',
            '3. Forebyggelse: Ved at vælge naturlige løsninger kan du styrke dit kæledyrs immunsystem og hjælpe med at forebygge almindelige sundhedsproblemer såsom ledproblemer, hudirritation og fordøjelsesproblemer.',
            '',
            'Eksempler på naturlige kosttilskud:',
            '- NDS Probiotic Pet: Hjælper med at opretholde en sund tarmflora og understøtter fordøjelsessundheden hos både hunde og katte.',
            '- Epinutrics Pet Complex: Indeholder essentielle vitaminer og mineraler, der styrker energi og vitalitet hos kæledyr i alle aldre.',
            '- Naturlige olier: Omega-3 og 6-fedtsyrer hjælper med at forbedre hudens sundhed og giver en skinnende pels.',
            '',
            'Hvordan vælger du de rigtige kosttilskud?',
            'Når du vælger kosttilskud til dit kæledyr, er det vigtigt at overveje følgende:',
            '- Dit kæledyrs alder og specifikke behov (f.eks. ledstøtte eller fordøjelsessundhed).',
            '- Kvaliteten af ingredienserne – vælg altid produkter uden kunstige tilsætningsstoffer.',
            '- Anbefalinger fra en dyrlæge eller sundhedsprofessionel, der forstår dit kæledyrs helbred.',
            '',
            'Tips til anvendelse:',
            '1. Introducér kosttilskud gradvist for at sikre, at dit kæledyr vænner sig til smagen og ingredienserne.',
            '2. Følg altid doseringsanvisningerne nøje for at undgå overdosering.',
            '3. Kombinér kosttilskud med en afbalanceret kost og regelmæssig motion for optimale resultater.',
            '',
            'Naturlige kosttilskud fra CELLATEST tilbyder en pålidelig måde at støtte dit kæledyrs sundhed på. Ved at vælge produkter af høj kvalitet kan du hjælpe din firbenede ven med at leve et langt, sundt og lykkeligt liv.',
        ],
      },
        ],
        post: null,
      };
    },
    created() {
      const postId = parseInt(this.$route.params.id, 10);
      this.post = this.posts.find((p) => p.id === postId);
    },
  };
  </script>
  
  <style scoped>
  .bg-blog-post {
    background-color: #efede4; 
  }
  </style>
  