export interface BlogPost {
  slug: string;
  primaryTag: string;
  tags: string[];
  title: { en: string; pt: string; it?: string };
  subtitle: { en: string; pt: string; it?: string };
  date: string;
  datetime: string;
  readTime: number;
  accentColor: string;
  icon: string;
  coverImage?: string;
  excerpt: { en: string; pt: string; it?: string };
  body: {
    en: PostBody;
    pt: PostBody;
    it?: PostBody;
  };
}

export interface PostBody {
  intro: string;
  sections: PostSection[];
  closing: string;
  html?: string; // raw HTML from backoffice rich editor (API posts)
}

export interface PostSection {
  heading?: string;
  subheading?: string;
  paragraphs?: string[];
  code?: string;
  blockquote?: { text: string; cite?: string };
  pullquote?: string;
  list?: string[];
}

export const posts: BlogPost[] = [
  {
    slug: 'inteira',
    primaryTag: 'Ensaio',
    tags: ['Identidade', 'Sicília'],
    accentColor: '#FF7C95',
    icon: '❧',
    title: {
      en: 'Whole',
      pt: 'Inteira',
      it: 'Intera',
    },
    subtitle: {
      en: "On identity, new beginnings, and the discovery that I don't have to choose between my parts to be who I am.",
      pt: 'Sobre identidade, recomeços e a descoberta de que não preciso escolher entre as minhas partes para ser quem sou.',
      it: "Sull'identità, i nuovi inizi e la scoperta che non ho bisogno di scegliere tra le mie parti per essere chi sono.",
    },
    coverImage: '/inteira.jpeg',
    date: 'Junho 2026',
    datetime: '2026-06-01',
    readTime: 6,
    excerpt: {
      en: 'I am made precisely of improbable encounters — an essay on identity, new beginnings, and the discovery that I don\'t have to choose between my parts to be who I am.',
      pt: 'Sou feita justamente dos encontros improváveis — um ensaio sobre identidade, recomeços e a descoberta de que não preciso escolher entre as minhas partes para ser quem sou.',
      it: 'Sono fatta proprio degli incontri improbabili — un saggio sull\'identità, i nuovi inizi e la scoperta che non devo scegliere tra le mie parti per essere chi sono.',
    },
    body: {
      pt: {
        intro: '',
        sections: [],
        closing: '',
        html: `<p><span style="float:left;font-family:'Bodoni Moda',serif;font-weight:700;font-size:84px;line-height:.76;color:#B5546A;padding:8px 12px 0 0">H</span>á algum tempo, eu acreditava que a vida exigia definições. Que era preciso escolher um lado, uma versão de si mesma, um caminho principal e permanecer nele. Como se a coerência fosse uma linha reta e não uma coleção de curvas.</p>

<p style="font-family:'Bodoni Moda',serif;font-weight:500;font-size:clamp(26px,4vw,34px);line-height:1.25;color:#2E211F;text-align:center;margin:52px auto;max-width:540px">Hoje, percebo que sou feita justamente dos encontros improváveis.</p>

<p>Sou a mistura de um samba no fim de tarde de domingo com ABBA tocando numa noite de verão europeu. Amo gelato quase na mesma intensidade que amo açaí. Cresci acreditando que gostar de coisas tão diferentes era um sinal de indecisão, quando, na verdade, talvez fosse apenas uma forma mais ampla de experimentar o mundo.</p>

<p>Demorei para entender que não precisava escolher entre uma coisa e outra. Que podia abraçar o paradoxo.</p>

<p>Sou desenvolvedora de sistemas. Tenho fascínio por lógica, padrões e problemas complexos. Fiz três semestres de Física em uma universidade pública, encantada pela elegância das equações e pela forma como elas tentam explicar o universo. Mas também sou apaixonada por viagens, livros, escrita e histórias. Produzo conteúdo em três idiomas e encontro prazer tanto em organizar códigos quanto em organizar palavras.</p>

<p>Por muito tempo, achei que minha profissão deveria responder à pergunta: "Quem é você?". Até descobrir que ela responde apenas a uma parte dela.</p>

<div style="display:flex;align-items:center;gap:16px;margin:48px 0"><span style="flex:1;height:1px;background:#E2CDB8"></span><span style="color:#DDA94A;font-size:18px">✦</span><span style="flex:1;height:1px;background:#E2CDB8"></span></div>

<p style="font-family:'Bodoni Moda',serif;font-weight:500;font-size:clamp(24px,3.4vw,30px);line-height:1.3;color:#2E211F;text-align:center;margin:0 auto 44px;max-width:520px">Essa descoberta não veio de forma tranquila.</p>

<p>No início deste ano, a vida me obrigou a encarar uma pergunta que eu evitava havia muito tempo: quem sou eu quando o meu cargo deixa de existir?</p>

<p>Quando um contrato de trabalho chegou ao fim, algo dentro de mim também pareceu se desfazer. Sem emprego, percebi que havia depositado uma parte perigosa da minha identidade naquilo que eu fazia para viver. E, quando essa estrutura desapareceu, eu já não sabia exatamente quem era.</p>

<p>A busca por uma nova oportunidade se tornou quase obsessiva. Eu acreditava que o próximo emprego preencheria o vazio, devolveria a segurança e restauraria a imagem que eu tinha de mim mesma. Mas, quanto mais eu procurava, mais percebia que estava tentando vender uma versão incompleta da minha própria história.</p>

<p>Foi durante esse processo — e atravessando um período em que a depressão quase me consumiu — que comecei a entender algo transformador: eu nunca fui apenas uma desenvolvedora frontend.</p>

<p>Eu era a pessoa que escrevia código, sim. Mas também era aquela que enxergava o produto pelos olhos do usuário. A que fazia perguntas sobre comportamento, experiência e significado. A que possuía uma sensibilidade natural para design, uma criatividade inquieta e uma curiosidade que ultrapassava qualquer descrição de cargo.</p>

<p>Passei tanto tempo tentando me encaixar em uma definição profissional que me esqueci de enxergar tudo o que existia ao redor dela.</p>

<p>Foi somente quando parei de tentar provar que era uma boa desenvolvedora e comecei a mostrar quem eu realmente era — os problemas que gosto de resolver, a forma como penso, a combinação improvável entre lógica e criatividade, técnica e sensibilidade — que algo mudou.</p>

<blockquote><p>Percebi que minha força nunca esteve em caber dentro de uma função específica. Ela sempre esteve na minha multiplicidade.</p></blockquote>

<p>Talvez eu devesse ter percebido isso antes.</p>

<p>Cresci entre extremos que nunca pareceram extremos para mim. Entre a cidade e o sítio. Entre a escola particular e os dias de dar comida aos porcos, andar a cavalo e voltar para casa com cheiro de terra. Entre o asfalto e a poeira, entre a tecnologia e a simplicidade da vida rural.</p>

<p>Talvez tenha sido ali que aprendi, sem perceber, que uma pessoa pode habitar mundos diferentes sem deixar de pertencer a nenhum deles.</p>

<p>Ainda assim, durante muitos anos, essa multiplicidade me incomodou. Chamei de indecisão aquilo que era curiosidade. Chamei de falta de personalidade aquilo que era amplitude. Julguei como defeito aquilo que hoje reconheço como uma das minhas maiores qualidades.</p>

<p>Passei tempo demais tentando me encaixar em definições simples, quando a verdade é que nunca fui simples. E não porque eu seja contraditória, mas porque sou humana.</p>

<p>Hoje entendo que somos mais do que os cargos que ocupamos, os diplomas que colecionamos ou as descrições que cabem em um perfil profissional. Somos também os livros que nos transformaram, as viagens que nos desafiaram, as conversas que nos marcaram, os lugares de onde viemos e os sonhos que insistimos em carregar.</p>

<div style="text-align:center;margin:56px auto;max-width:540px"><p style="font-family:'Bodoni Moda',serif;font-weight:700;font-size:clamp(26px,4vw,36px);line-height:1.25;color:#2E211F;margin:0 0 8px">Somos as nossas contradições.</p><p style="font-family:'Bodoni Moda',serif;font-weight:700;font-size:clamp(26px,4vw,36px);line-height:1.25;color:#B5546A;margin:0 0 8px">Somos os nossos paradoxos.</p><p style="font-family:'Bodoni Moda',serif;font-style:italic;font-weight:500;font-size:clamp(22px,3.2vw,28px);line-height:1.3;color:#6B554F;margin:0">Somos todas as versões de nós mesmos que aprendemos a aceitar.</p></div>

<p>Hoje, trocaria todos os adjetivos que usei para me diminuir por apenas um: <strong style="color:#C28A2C;font-weight:700">incrível</strong>.</p>

<p>Não porque eu faça tudo perfeitamente. Muito pelo contrário. Mas porque finalmente compreendi que não preciso escolher entre as minhas partes para ser inteira.</p>

<div style="background:#FFFBF5;border:1px solid #ECDBCB;border-radius:20px;padding:36px 40px;margin:44px 0;display:flex;flex-direction:column;gap:14px"><p style="margin:0;font-size:21px;color:#3A2A28">Posso amar <strong style="color:#B5546A;font-weight:600">samba e ABBA</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso escolher entre <strong style="color:#B5546A;font-weight:600">gelato e açaí</strong> dependendo do dia.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso escrever <strong style="color:#B5546A;font-weight:600">códigos e histórias</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso ser <strong style="color:#B5546A;font-weight:600">racional e criativa</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso ser <strong style="color:#B5546A;font-weight:600">técnica e sensível</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso ser <strong style="color:#B5546A;font-weight:600">muitas coisas ao mesmo tempo</strong>.</p></div>

<p>E talvez a maior liberdade da vida seja justamente essa: descobrir que não precisamos nos reduzir para caber nas expectativas dos outros. Podemos carregar todas as nossas versões conosco, misturá-las, reinventá-las e, ainda assim, continuar exatamente quem somos.</p>

<p style="font-family:'Bodoni Moda',serif;font-style:italic;font-weight:500;font-size:clamp(24px,3.6vw,34px);line-height:1.3;color:#2E211F;text-align:center;margin:52px auto 0;max-width:560px">Ou melhor: nos tornar, a cada dia, mais de quem sempre fomos.</p>

<div style="display:flex;align-items:center;gap:16px;justify-content:center;margin:60px 0 0"><span style="flex:0 0 40px;height:1px;background:#E2CDB8"></span><span style="font-family:'Bodoni Moda',serif;font-style:italic;font-size:24px;color:#B5546A">Any</span><span style="flex:0 0 40px;height:1px;background:#E2CDB8"></span></div>`,
      },
      en: {
        intro: '',
        sections: [],
        closing: '',
        html: `<p><span style="float:left;font-family:'Bodoni Moda',serif;font-weight:700;font-size:84px;line-height:.76;color:#B5546A;padding:8px 12px 0 0">F</span>or a long time, I believed that life required definitions. That you had to choose a side, a version of yourself, one main path and stick to it. As if coherence were a straight line and not a collection of curves.</p>

<p style="font-family:'Bodoni Moda',serif;font-weight:500;font-size:clamp(26px,4vw,34px);line-height:1.25;color:#2E211F;text-align:center;margin:52px auto;max-width:540px">Today, I realize I am made precisely of improbable encounters.</p>

<p>I am the blend of a Sunday afternoon samba with ABBA playing on a European summer night. I love gelato almost as much as I love açaí. I grew up believing that liking such different things was a sign of indecision, when, in truth, it was perhaps just a broader way of experiencing the world.</p>

<p>It took me a long time to understand that I didn't have to choose between one thing and another. That I could embrace the paradox.</p>

<p>I am a software developer. I am fascinated by logic, patterns and complex problems. I studied three semesters of Physics at a public university, enchanted by the elegance of equations and by the way they attempt to explain the universe. But I am also passionate about travel, books, writing and stories. I create content in three languages and find pleasure both in organizing code and in organizing words.</p>

<p>For a long time, I thought my profession should answer the question: "Who are you?" Until I discovered that it only answers a part of it.</p>

<div style="display:flex;align-items:center;gap:16px;margin:48px 0"><span style="flex:1;height:1px;background:#E2CDB8"></span><span style="color:#DDA94A;font-size:18px">✦</span><span style="flex:1;height:1px;background:#E2CDB8"></span></div>

<p style="font-family:'Bodoni Moda',serif;font-weight:500;font-size:clamp(24px,3.4vw,30px);line-height:1.3;color:#2E211F;text-align:center;margin:0 auto 44px;max-width:520px">This discovery did not come quietly.</p>

<p>Earlier this year, life forced me to face a question I had been avoiding for a long time: who am I when my job title ceases to exist?</p>

<p>When a work contract came to an end, something inside me also seemed to dissolve. Unemployed, I realized I had placed a dangerous part of my identity in what I did for a living. And when that structure disappeared, I no longer knew exactly who I was.</p>

<p>The search for a new opportunity became almost obsessive. I believed the next job would fill the void, restore my sense of security and bring back the image I had of myself. But the more I searched, the more I realized I was trying to sell an incomplete version of my own story.</p>

<p>It was during this process — and through a period in which depression almost consumed me — that I began to understand something transformative: I was never just a front-end developer.</p>

<p>I was the person who wrote code, yes. But I was also the one who saw the product through the user's eyes. The one who asked questions about behaviour, experience and meaning. The one who had a natural sensitivity for design, a restless creativity and a curiosity that went beyond any job description.</p>

<p>I had spent so much time trying to fit into a professional definition that I forgot to see everything that existed around it.</p>

<p>It was only when I stopped trying to prove I was a good developer and started showing who I really was — the problems I love solving, the way I think, the improbable combination of logic and creativity, technique and sensitivity — that something changed.</p>

<blockquote><p>I realized that my strength was never in fitting inside a specific role. It was always in my multiplicity.</p></blockquote>

<p>Perhaps I should have realized this sooner.</p>

<p>I grew up between extremes that never seemed like extremes to me. Between the city and the countryside. Between private school and the days of feeding the pigs, riding horses and coming home smelling of earth. Between asphalt and dust, between technology and the simplicity of rural life.</p>

<p>Perhaps that was where I learned, without realizing it, that a person can inhabit different worlds without ceasing to belong to any of them.</p>

<p>And yet, for many years, this multiplicity troubled me. I called curiosity indecision. I called breadth a lack of personality. I judged as a flaw what I now recognize as one of my greatest qualities.</p>

<p>I spent too much time trying to fit into simple definitions, when the truth is I was never simple. Not because I am contradictory, but because I am human.</p>

<p>Today I understand that we are more than the titles we hold, the degrees we collect or the descriptions that fit in a professional profile. We are also the books that transformed us, the trips that challenged us, the conversations that marked us, the places we came from and the dreams we insist on carrying.</p>

<div style="text-align:center;margin:56px auto;max-width:540px"><p style="font-family:'Bodoni Moda',serif;font-weight:700;font-size:clamp(26px,4vw,36px);line-height:1.25;color:#2E211F;margin:0 0 8px">We are our contradictions.</p><p style="font-family:'Bodoni Moda',serif;font-weight:700;font-size:clamp(26px,4vw,36px);line-height:1.25;color:#B5546A;margin:0 0 8px">We are our paradoxes.</p><p style="font-family:'Bodoni Moda',serif;font-style:italic;font-weight:500;font-size:clamp(22px,3.2vw,28px);line-height:1.3;color:#6B554F;margin:0">We are every version of ourselves that we learned to accept.</p></div>

<p>Today, I would trade every adjective I used to diminish myself for just one: <strong style="color:#C28A2C;font-weight:700">incredible</strong>.</p>

<p>Not because I do everything perfectly. Quite the opposite. But because I finally understood that I don't have to choose between my parts to be whole.</p>

<div style="background:#FFFBF5;border:1px solid #ECDBCB;border-radius:20px;padding:36px 40px;margin:44px 0;display:flex;flex-direction:column;gap:14px"><p style="margin:0;font-size:21px;color:#3A2A28">I can love <strong style="color:#B5546A;font-weight:600">samba and ABBA</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">I can choose between <strong style="color:#B5546A;font-weight:600">gelato and açaí</strong> depending on the day.</p><p style="margin:0;font-size:21px;color:#3A2A28">I can write <strong style="color:#B5546A;font-weight:600">code and stories</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">I can be <strong style="color:#B5546A;font-weight:600">rational and creative</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">I can be <strong style="color:#B5546A;font-weight:600">technical and sensitive</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">I can be <strong style="color:#B5546A;font-weight:600">many things at once</strong>.</p></div>

<p>And perhaps the greatest freedom in life is precisely this: discovering that we don't have to reduce ourselves to fit others' expectations. We can carry all our versions with us, blend them, reinvent them and still remain exactly who we are.</p>

<p style="font-family:'Bodoni Moda',serif;font-style:italic;font-weight:500;font-size:clamp(24px,3.6vw,34px);line-height:1.3;color:#2E211F;text-align:center;margin:52px auto 0;max-width:560px">Or rather: to become, each day, more of who we always were.</p>

<div style="display:flex;align-items:center;gap:16px;justify-content:center;margin:60px 0 0"><span style="flex:0 0 40px;height:1px;background:#E2CDB8"></span><span style="font-family:'Bodoni Moda',serif;font-style:italic;font-size:24px;color:#B5546A">Any</span><span style="flex:0 0 40px;height:1px;background:#E2CDB8"></span></div>`,
      },
      it: {
        intro: '',
        sections: [],
        closing: '',
        html: `<p><span style="float:left;font-family:'Bodoni Moda',serif;font-weight:700;font-size:84px;line-height:.76;color:#B5546A;padding:8px 12px 0 0">P</span>er molto tempo, ho creduto che la vita richiedesse definizioni. Che fosse necessario scegliere una parte, una versione di sé stessa, un percorso principale e rimanere su di esso. Come se la coerenza fosse una linea retta e non una collezione di curve.</p>

<p style="font-family:'Bodoni Moda',serif;font-weight:500;font-size:clamp(26px,4vw,34px);line-height:1.25;color:#2E211F;text-align:center;margin:52px auto;max-width:540px">Oggi, mi rendo conto di essere fatta proprio degli incontri improbabili.</p>

<p>Sono la combinazione di un samba nel tardo pomeriggio domenicale con gli ABBA che suonano in una notte d'estate europea. Adoro il gelato quasi quanto adoro l'açaí. Sono cresciuta credendo che amare cose così diverse fosse un segno di indecisione, quando, in realtà, forse era solo un modo più ampio di vivere il mondo.</p>

<p>Ho impiegato molto tempo per capire che non dovevo scegliere tra una cosa e l'altra. Che potevo abbracciare il paradosso.</p>

<p>Sono una sviluppatrice di software. Sono affascinata dalla logica, dai modelli e dai problemi complessi. Ho frequentato tre semestri di Fisica in un'università pubblica, incantata dall'eleganza delle equazioni e dal modo in cui tentano di spiegare l'universo. Ma sono anche appassionata di viaggi, libri, scrittura e storie. Creo contenuti in tre lingue e trovo piacere tanto nell'organizzare codice quanto nell'organizzare parole.</p>

<p>Per molto tempo, ho pensato che la mia professione dovesse rispondere alla domanda: "Chi sei?". Fino a scoprire che risponde solo a una parte di essa.</p>

<div style="display:flex;align-items:center;gap:16px;margin:48px 0"><span style="flex:1;height:1px;background:#E2CDB8"></span><span style="color:#DDA94A;font-size:18px">✦</span><span style="flex:1;height:1px;background:#E2CDB8"></span></div>

<p style="font-family:'Bodoni Moda',serif;font-weight:500;font-size:clamp(24px,3.4vw,30px);line-height:1.3;color:#2E211F;text-align:center;margin:0 auto 44px;max-width:520px">Questa scoperta non è arrivata in modo tranquillo.</p>

<p>All'inizio di quest'anno, la vita mi ha costretta ad affrontare una domanda che evitavo da molto tempo: chi sono quando il mio ruolo lavorativo cessa di esistere?</p>

<p>Quando un contratto di lavoro è giunto al termine, qualcosa dentro di me sembrava anche dissolversi. Senza lavoro, mi sono resa conto di aver depositato una parte pericolosa della mia identità in ciò che facevo per vivere. E quando quella struttura è scomparsa, non sapevo più esattamente chi fossi.</p>

<p>La ricerca di una nuova opportunità è diventata quasi ossessiva. Credevo che il prossimo lavoro avrebbe colmato il vuoto, restituito la sicurezza e ripristinato l'immagine che avevo di me stessa. Ma più cercavo, più mi rendevo conto che stavo cercando di vendere una versione incompleta della mia storia.</p>

<p>È stato durante questo processo — e attraversando un periodo in cui la depressione quasi mi ha consumata — che ho cominciato a capire qualcosa di trasformativo: non sono mai stata solo una sviluppatrice front-end.</p>

<p>Ero la persona che scriveva codice, sì. Ma ero anche quella che vedeva il prodotto con gli occhi dell'utente. Quella che faceva domande su comportamento, esperienza e significato. Quella che aveva una sensibilità naturale per il design, una creatività inquieta e una curiosità che andava oltre qualsiasi mansione professionale.</p>

<p>Avevo trascorso così tanto tempo cercando di adattarmi a una definizione professionale che avevo dimenticato di vedere tutto ciò che esisteva intorno ad essa.</p>

<p>È stato solo quando ho smesso di cercare di dimostrare di essere una buona sviluppatrice e ho iniziato a mostrare chi ero davvero — i problemi che amo risolvere, il modo in cui penso, la combinazione improbabile tra logica e creatività, tecnica e sensibilità — che qualcosa è cambiato.</p>

<blockquote><p>Ho capito che la mia forza non è mai stata nel rientrare in un ruolo specifico. È sempre stata nella mia molteplicità.</p></blockquote>

<p>Forse avrei dovuto accorgermene prima.</p>

<p>Sono cresciuta tra estremi che non mi sembravano mai estremi. Tra la città e la campagna. Tra la scuola privata e i giorni in cui davo da mangiare ai maiali, cavalcavo e tornavo a casa con l'odore di terra. Tra l'asfalto e la polvere, tra la tecnologia e la semplicità della vita rurale.</p>

<p>Forse è stato lì che ho imparato, senza rendermene conto, che una persona può abitare mondi diversi senza smettere di appartenere a nessuno di essi.</p>

<p>Eppure, per molti anni, questa molteplicità mi ha disturbata. Ho chiamato indecisione quella che era curiosità. Ho chiamato mancanza di personalità quella che era ampiezza. Ho giudicato come difetto ciò che oggi riconosco come una delle mie qualità più grandi.</p>

<p>Ho trascorso troppo tempo cercando di adattarmi a definizioni semplici, quando la verità è che non sono mai stata semplice. Non perché sia contraddittoria, ma perché sono umana.</p>

<p>Oggi capisco che siamo molto più dei titoli che occupiamo, dei diplomi che collezioniamo o delle descrizioni che rientrano in un profilo professionale. Siamo anche i libri che ci hanno trasformati, i viaggi che ci hanno sfidati, le conversazioni che ci hanno segnato, i luoghi da cui veniamo e i sogni che insistiamo nel portare con noi.</p>

<div style="text-align:center;margin:56px auto;max-width:540px"><p style="font-family:'Bodoni Moda',serif;font-weight:700;font-size:clamp(26px,4vw,36px);line-height:1.25;color:#2E211F;margin:0 0 8px">Siamo le nostre contraddizioni.</p><p style="font-family:'Bodoni Moda',serif;font-weight:700;font-size:clamp(26px,4vw,36px);line-height:1.25;color:#B5546A;margin:0 0 8px">Siamo i nostri paradossi.</p><p style="font-family:'Bodoni Moda',serif;font-style:italic;font-weight:500;font-size:clamp(22px,3.2vw,28px);line-height:1.3;color:#6B554F;margin:0">Siamo tutte le versioni di noi stessi che abbiamo imparato ad accettare.</p></div>

<p>Oggi, scambierei tutti gli aggettivi che ho usato per sminuirmi con uno solo: <strong style="color:#C28A2C;font-weight:700">incredibile</strong>.</p>

<p>Non perché faccia tutto perfettamente. Tutt'altro. Ma perché ho finalmente capito che non devo scegliere tra le mie parti per essere intera.</p>

<div style="background:#FFFBF5;border:1px solid #ECDBCB;border-radius:20px;padding:36px 40px;margin:44px 0;display:flex;flex-direction:column;gap:14px"><p style="margin:0;font-size:21px;color:#3A2A28">Posso amare <strong style="color:#B5546A;font-weight:600">samba e ABBA</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso scegliere tra <strong style="color:#B5546A;font-weight:600">gelato e açaí</strong> a seconda del giorno.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso scrivere <strong style="color:#B5546A;font-weight:600">codice e storie</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso essere <strong style="color:#B5546A;font-weight:600">razionale e creativa</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso essere <strong style="color:#B5546A;font-weight:600">tecnica e sensibile</strong>.</p><p style="margin:0;font-size:21px;color:#3A2A28">Posso essere <strong style="color:#B5546A;font-weight:600">molte cose allo stesso tempo</strong>.</p></div>

<p>E forse la più grande libertà della vita è proprio questa: scoprire che non dobbiamo ridurci per rientrare nelle aspettative degli altri. Possiamo portare tutte le nostre versioni con noi, mescolarle, reinventarle e, eppure, continuare ad essere esattamente chi siamo.</p>

<p style="font-family:'Bodoni Moda',serif;font-style:italic;font-weight:500;font-size:clamp(24px,3.6vw,34px);line-height:1.3;color:#2E211F;text-align:center;margin:52px auto 0;max-width:560px">O meglio: diventare, ogni giorno, sempre più chi siamo sempre stati.</p>

<div style="display:flex;align-items:center;gap:16px;justify-content:center;margin:60px 0 0"><span style="flex:0 0 40px;height:1px;background:#E2CDB8"></span><span style="font-family:'Bodoni Moda',serif;font-style:italic;font-size:24px;color:#B5546A">Any</span><span style="flex:0 0 40px;height:1px;background:#E2CDB8"></span></div>`,
      },
    },
  },
  {
    slug: 'post-1',
    primaryTag: 'Tech & Dev',
    tags: ['React', 'Front-End'],
    accentColor: '#4DB89E',
    icon: '⌨️',
    title: {
      en: 'Your Post Title Goes Here — Make It Compelling',
      pt: 'O Título do Seu Post Vai Aqui — Deixe-o Convincente',
    },
    subtitle: {
      en: 'A subtitle that gives context to the article. One or two sentences that expand on the title and hook the reader.',
      pt: 'Um subtítulo que dá contexto ao artigo. Uma ou duas frases que expandem o título e prendem o leitor.',
    },
    date: 'Jan 2025',
    datetime: '2025-01-01',
    readTime: 8,
    excerpt: {
      en: 'A short excerpt that gives the reader a taste of what the article is about. Two or three sentences is ideal.',
      pt: 'Um trecho curto que dá ao leitor uma ideia do que o artigo é. Duas ou três frases é o ideal.',
    },
    body: {
      en: {
        intro: "This is where your article begins. The opening paragraph should hook the reader and give them a clear sense of what they'll learn or gain from reading this piece. Keep it conversational and direct.",
        sections: [
          {
            heading: 'First Section Title',
            paragraphs: [
              "Each section should flow naturally from the one before it. Use clear, accessible language — your readers have different backgrounds, and great writing is inclusive by default.",
              "You can include code snippets to illustrate technical concepts:",
            ],
            code: `// Example: a simple custom hook
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};`,
          },
          {
            heading: 'What I Learned From This',
            paragraphs: ["This is a great spot for a blockquote — something that summarizes a key insight or a lesson that shaped your thinking:"],
            blockquote: {
              text: "The best front-end code is the kind that users never have to think about — it just works, beautifully.",
              cite: '— Any Medola',
            },
            pullquote: "Accessibility isn't a feature — it's a foundation. Build it in from the start, not as an afterthought.",
            subheading: 'Key Takeaways',
            list: [
              'First key point from the article goes here.',
              'Second insight — keep it concise and actionable.',
              'Third takeaway that the reader can apply right away.',
            ],
          },
        ],
        closing: "Your closing paragraph wraps everything up. Invite the reader to try something, leave a comment, or follow you for more. Keep it warm and personal — people connect with people, not with content factories.",
      },
      pt: {
        intro: "Aqui é onde o seu artigo começa. O parágrafo de abertura deve prender o leitor e dar-lhe uma ideia clara do que aprenderá ao ler este texto. Mantenha um tom conversacional e direto.",
        sections: [
          {
            heading: 'Título da Primeira Seção',
            paragraphs: [
              "Cada seção deve fluir naturalmente da anterior. Use linguagem clara e acessível — seus leitores têm diferentes backgrounds, e uma boa escrita é inclusiva por padrão.",
              "Você pode incluir trechos de código para ilustrar conceitos técnicos:",
            ],
            code: `// Exemplo: um custom hook simples
const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    return localStorage.getItem(key) ?? initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};`,
          },
          {
            heading: 'O Que Aprendi Com Isso',
            paragraphs: ["Este é um ótimo lugar para uma citação em destaque — algo que resume um insight importante:"],
            blockquote: {
              text: "O melhor código front-end é aquele com o qual os usuários nunca precisam se preocupar — simplesmente funciona, lindamente.",
              cite: '— Any Medola',
            },
            pullquote: "Acessibilidade não é uma funcionalidade — é uma fundação. Construa desde o início, não como um afterthought.",
            subheading: 'Pontos Principais',
            list: [
              'Primeiro ponto principal do artigo vai aqui.',
              'Segundo insight — seja conciso e prático.',
              'Terceiro ponto que o leitor pode aplicar imediatamente.',
            ],
          },
        ],
        closing: "O parágrafo final resume tudo. Convide o leitor a experimentar algo, deixar um comentário ou te seguir para mais conteúdo. Mantenha um tom caloroso e pessoal.",
      },
    },
  },
  {
    slug: 'post-2',
    primaryTag: 'UI/UX',
    tags: ['Design', 'Figma'],
    accentColor: '#C43560',
    icon: '✏️',
    title: { en: 'Your Post Title Goes Here', pt: 'O Título do Seu Post Vai Aqui' },
    subtitle: { en: 'A subtitle that gives context to the article.', pt: 'Um subtítulo que dá contexto ao artigo.' },
    date: 'Feb 2025',
    datetime: '2025-02-01',
    readTime: 6,
    excerpt: {
      en: 'A short excerpt that gives the reader a taste of what the article is about.',
      pt: 'Um trecho curto que dá ao leitor uma ideia do que o artigo é.',
    },
    body: {
      en: { intro: 'Coming soon.', sections: [], closing: '' },
      pt: { intro: 'Em breve.', sections: [], closing: '' },
    },
  },
  {
    slug: 'post-3',
    primaryTag: 'Career & Life',
    tags: ['Europe', 'Dev Life'],
    accentColor: '#8B7355',
    icon: '🌍',
    title: { en: 'Your Post Title Goes Here', pt: 'O Título do Seu Post Vai Aqui' },
    subtitle: { en: 'A subtitle that gives context to the article.', pt: 'Um subtítulo que dá contexto ao artigo.' },
    date: 'Mar 2025',
    datetime: '2025-03-01',
    readTime: 5,
    excerpt: {
      en: 'A short excerpt that gives the reader a taste of what the article is about.',
      pt: 'Um trecho curto que dá ao leitor uma ideia do que o artigo é.',
    },
    body: {
      en: { intro: 'Coming soon.', sections: [], closing: '' },
      pt: { intro: 'Em breve.', sections: [], closing: '' },
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
