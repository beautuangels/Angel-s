/* ═══════════════════════════════════════════
   ANGEL'S BEAUTY — Catálogo L'Oréal Professionnel (Serie Expert)
   Conteúdo baseado em informações oficiais divulgadas pela marca.
   ═══════════════════════════════════════════ */
window.PRODUCTS = window.PRODUCTS || [];
(function(){
const MARCA = "L'Oréal Professionnel";

function L(o){
  o.marca = MARCA;
  o.marcaCurta = "L'Oréal Pro";
  o.serie = "Serie Expert";
  o.tipo = o.tipo || (o.cat === 'mascara' ? 'jar' : 'bottle');
  o.vol = o.vol || (o.cat === 'mascara' ? '250 ml' : '300 ml');
  window.PRODUCTS.push(o);
}

/* ────────────── SHAMPOOS ────────────── */

L({
  id:'lp-sh-absolut', nome:'Absolut Repair Shampoo', nomeCurto:'Absolut Repair',
  linha:'Absolut Repair', cat:'shampoo', cor:'#D9A84E',
  desc:'Shampoo reconstrutor para cabelos secos e danificados, com Proteína e Gold Quinoa.',
  needs:['reconstrucao','danificados'], best:2, rec:12,
  ativos:['Gold Quinoa','Proteína de trigo'],
  tecnologia:'A fórmula combina Gold Quinoa — grão rico em aminoácidos, colhido nos Andes — com proteína, que atua na superfície da fibra capilar preenchendo as áreas danificadas da cutícula. O sistema de limpeza remove impurezas enquanto deposita ativos reparadores, devolvendo uniformidade e brilho ao fio.',
  beneficios:['Limpa suavemente enquanto repara a fibra','Devolve força e resistência aos fios danificados','Superfície do fio mais uniforme e selada','Brilho intenso desde a primeira aplicação','Facilita o desembaraço e o penteado'],
  modo:'Aplique no cabelo molhado, massageie o couro cabeludo e o comprimento até formar espuma cremosa. Enxágue abundantemente. Repita se necessário. Em seguida, aplique a Máscara Absolut Repair para potencializar a reconstrução.',
  resultado:'Cabelo visivelmente reparado, mais forte, macio e com brilho de salão desde a primeira aplicação.',
  indicacao:'Cabelos secos, danificados, ressecados por química, calor ou agressões diárias.',
  freq:'Uso contínuo, em todas as lavagens (2 a 4 vezes por semana).',
  tipos:'Todos os tipos de cabelo danificado — liso, ondulado, cacheado ou crespo.',
  etapa:'Reconstrução',
  combina:['lp-mq-absolut','lp-sh-molecular','jo-reconstructor']
});

L({
  id:'lp-sh-molecular', nome:'Absolut Repair Molecular Shampoo', nomeCurto:'Absolut Repair Molecular',
  linha:'Absolut Repair Molecular', cat:'shampoo', cor:'#6B5A48',
  desc:'Shampoo sem sulfato que repara a estrutura molecular de cabelos muito danificados.',
  needs:['reconstrucao','danificados'], best:5, rec:2,
  ativos:['Peptídeos Bonder','Complexo de 5 aminoácidos'],
  tecnologia:'Primeiro sistema de reparação molecular da L\'Oréal Professionnel: os Peptídeos Bonder se ligam às cadeias internas da queratina enquanto o complexo de cinco aminoácidos reconstrói as ligações internas do fio, reparando a macroestrutura do cabelo sem sobrecarregar. Fórmula sem sulfatos.',
  beneficios:['Repara a fibra em nível molecular','Limpeza suave, sem sulfato','Fios 90% mais fortes ao combinar com a rotina completa da linha','Não pesa nem cria efeito emborrachado','Toque sedoso e movimento natural'],
  modo:'Aplique uma pequena quantidade no cabelo molhado, emulsione e massageie. Enxágue bem. Complete com a Máscara Molecular ou o sérum leave-in da linha para resultados profissionais.',
  resultado:'Fibra reconstruída de dentro para fora, cabelo forte, flexível e com aparência saudável renovada.',
  indicacao:'Cabelos muito danificados por descoloração, alisamento, coloração ou calor extremo.',
  freq:'Em todas as lavagens, como parte da rotina de reparação molecular.',
  tipos:'Todos os tipos de cabelo com dano severo.',
  etapa:'Reconstrução',
  combina:['lp-sh-absolut','lp-mq-absolut','se-pe-mask'],
  faq:[
    ['Qual a diferença entre Absolut Repair e Absolut Repair Molecular?','O Absolut Repair clássico repara a superfície da fibra com proteína e Gold Quinoa. O Molecular age mais profundamente, reconstruindo as ligações internas da queratina com peptídeos e aminoácidos — indicado para danos severos.'],
    ['O shampoo Molecular tem sulfato?','Não. A fórmula é livre de sulfatos, com limpeza suave que preserva os ativos reparadores no fio.']
  ]
});

L({
  id:'lp-sh-metal', nome:'Metal Detox Shampoo', nomeCurto:'Metal Detox',
  linha:'Metal Detox', cat:'shampoo', cor:'#E6E2D8',
  desc:'Shampoo antimetal que protege contra quebra e alteração da cor causadas por metais da água.',
  needs:['protecao-cor','coloridos','danificados','reconstrucao'], best:3, rec:4,
  ativos:['Glicoamina','Ionène G'],
  tecnologia:'A água do banho deposita partículas de metal (como o cobre) dentro do fio; durante a coloração ou descoloração, esse metal provoca quebra e desvio de cor. A Glicoamina é uma molécula quelante que penetra na fibra e neutraliza o metal acumulado, enquanto o polímero Ionène G protege a superfície do cabelo.',
  beneficios:['Neutraliza os metais acumulados dentro da fibra','Reduz o risco de quebra','Evita que a cor "vire" ou perca a tonalidade','Cor mais duradoura e uniforme','Fios mais macios e brilhantes'],
  modo:'Aplique no cabelo molhado, massageie delicadamente e enxágue. Ideal como preparação antes de serviços de cor e como manutenção semanal em casa, sempre acompanhado da Máscara Metal Detox.',
  resultado:'Cabelo protegido contra os efeitos dos metais: menos quebra, cor limpa, fiel e luminosa por mais tempo.',
  indicacao:'Cabelos coloridos, descoloridos ou com mechas; indispensável para quem faz química com frequência.',
  freq:'2 a 3 vezes por semana ou conforme orientação do seu profissional.',
  tipos:'Todos os tipos de cabelo com cor, mechas ou descoloração.',
  etapa:'Tratamento especial — pode ser usado em qualquer dia do cronograma',
  combina:['lp-mq-metal','lp-sh-vitamino','lp-sh-blondifier'],
  faq:[
    ['Por que os metais da água danificam o cabelo?','Partículas de cobre e outros metais presentes na água se acumulam dentro da fibra. Em contato com oxidantes (coloração, descoloração), geram reações que quebram o fio e alteram o resultado da cor.'],
    ['Posso usar Metal Detox mesmo sem cabelo colorido?','Sim. Ele também beneficia cabelos naturais expostos a água com alto teor de metais, deixando os fios mais protegidos e brilhantes.']
  ]
});

L({
  id:'lp-sh-vitamino', nome:'Vitamino Color Shampoo', nomeCurto:'Vitamino Color',
  linha:'Vitamino Color', cat:'shampoo', cor:'#F2A7C3',
  desc:'Shampoo protetor da cor que prolonga a vida e a luminosidade dos cabelos coloridos.',
  needs:['protecao-cor','coloridos'], best:4, rec:11,
  ativos:['Resveratrol','Filtro UV'],
  tecnologia:'Enriquecido com Resveratrol — poderoso antioxidante extraído da videira — que combate a oxidação, principal causa do desbotamento. A fórmula de limpeza suave preserva os pigmentos dentro da fibra e sela a cutícula, mantendo a cor vibrante por mais tempo.',
  beneficios:['Prolonga a intensidade da cor','Ação antioxidante contra o desbotamento','Brilho espelhado e luminosidade','Limpeza suave que não agride a fibra colorida','Fios macios e protegidos'],
  modo:'Aplique no cabelo molhado, massageie até formar espuma e enxágue. Complete o ritual com a Máscara Vitamino Color.',
  resultado:'Cor protegida e radiante por até 8 semanas, com fios visivelmente mais brilhantes.',
  indicacao:'Cabelos coloridos ou com mechas que desejam prolongar a cor do salão.',
  freq:'Em todas as lavagens.',
  tipos:'Todos os tipos de cabelo colorido.',
  etapa:'Hidratação / Proteção da cor',
  combina:['lp-mq-vitamino','lp-sh-metal','lp-sh-spectrum']
});

L({
  id:'lp-sh-spectrum', nome:'Vitamino Color Spectrum Shampoo', nomeCurto:'Vitamino Color Spectrum',
  linha:'Vitamino Color Spectrum', cat:'shampoo', cor:'#8E1F4D',
  desc:'Shampoo iluminador que protege todo o espectro da cor e entrega brilho espelhado.',
  needs:['protecao-cor','coloridos'], best:16, rec:1,
  ativos:['Ácido Ferúlico','Ácido Cítrico'],
  tecnologia:'Combina Ácido Ferúlico — antioxidante que neutraliza os radicais livres responsáveis pelo desbotamento — com Ácido Cítrico, que realinha e sela a cutícula em um efeito "resurfacing". O resultado é uma superfície lisa que reflete a luz e mantém a cor fiel em todas as nuances.',
  beneficios:['Protege todas as nuances do espectro da cor','Efeito resurfacing: superfície do fio realinhada','Brilho espelhado profissional','Ação antioxidante prolongada','Cor vibrante por mais tempo'],
  modo:'Aplique no cabelo molhado, massageie suavemente e enxágue. Use com a Máscara Vitamino Color Spectrum para o efeito brilho máximo.',
  resultado:'Cor luminosa e profunda, com brilho de espelho e fibra selada.',
  indicacao:'Cabelos coloridos, especialmente tons intensos, acobreados, vermelhos e castanhos iluminados.',
  freq:'Em todas as lavagens.',
  tipos:'Todos os tipos de cabelo colorido.',
  etapa:'Hidratação / Proteção da cor',
  combina:['lp-mq-spectrum','lp-sh-vitamino','lp-sh-metal']
});

L({
  id:'lp-sh-prolonger', nome:'Pro Longer Shampoo', nomeCurto:'Pro Longer',
  linha:'Pro Longer', cat:'shampoo', cor:'#E2607A',
  desc:'Shampoo fortalecedor para cabelos longos com pontas finas e desgastadas.',
  needs:['reconstrucao','longos','danificados'], best:9, rec:9,
  ativos:['Filler-A100','Aminoácido'],
  tecnologia:'O Filler-A100 é uma molécula preenchedora que atua nas pontas afinadas pelo tempo, enquanto o aminoácido fortalece o comprimento. A tecnologia renova os comprimentos e devolve massa e corpo à parte mais antiga — e mais frágil — do cabelo.',
  beneficios:['Fortalece cabelos longos da raiz às pontas','Pontas visivelmente mais preenchidas','Reduz o aspecto de pontas finas e ralas','Ajuda a manter o comprimento saudável','Movimento e brilho renovados'],
  modo:'Aplique no cabelo molhado, massageie e enxágue. Siga com a Máscara Pro Longer concentrando o produto no comprimento e nas pontas.',
  resultado:'Comprimento renovado, pontas mais grossas na aparência e cabelo longo com cara de saudável.',
  indicacao:'Cabelos longos ou em transição de crescimento, com pontas desgastadas.',
  freq:'Em todas as lavagens.',
  tipos:'Todos os tipos de cabelo longo.',
  etapa:'Reconstrução',
  combina:['lp-mq-prolonger','lp-sh-inforcer']
});

L({
  id:'lp-sh-inforcer', nome:'Inforcer Shampoo', nomeCurto:'Inforcer',
  linha:'Inforcer', cat:'shampoo', cor:'#E2704C',
  desc:'Shampoo antiquebra fortificante para cabelos frágeis e quebradiços.',
  needs:['reconstrucao','antiqueda','danificados'], best:11, rec:10,
  ativos:['Vitamina B6','Biotina'],
  tecnologia:'A dupla Vitamina B6 + Biotina atua na resistência da fibra: fortalece a estrutura do fio e reduz drasticamente a quebra causada por escovação, atrito e manipulação diária. Uso contínuo da linha completa reduz significativamente a quebra.',
  beneficios:['Reduz a quebra dos fios','Fortalece cabelos frágeis','Fios mais resistentes à escovação','Ajuda a manter o comprimento','Cabelo mais encorpado e saudável'],
  modo:'Aplique no cabelo molhado, massageie até formar espuma e enxágue bem. Complete com a Máscara Inforcer nos comprimentos.',
  resultado:'Cabelo visivelmente mais forte, com menos fios quebrados no travesseiro, na escova e no chão do banheiro.',
  indicacao:'Cabelos frágeis, quebradiços, que não conseguem ganhar comprimento.',
  freq:'Em todas as lavagens.',
  tipos:'Todos os tipos de cabelo fragilizado.',
  etapa:'Reconstrução',
  combina:['lp-mq-inforcer','lp-sh-prolonger','jo-reconstructor']
});

L({
  id:'lp-sh-blondifier', nome:'Blondifier Shampoo', nomeCurto:'Blondifier',
  linha:'Blondifier', cat:'shampoo', cor:'#8B87C6',
  desc:'Shampoo iluminador para cabelos loiros, descoloridos ou com mechas.',
  needs:['loiros','protecao-cor'], best:8, rec:8,
  ativos:['Polifenóis de Açaí'],
  tecnologia:'Enriquecido com polifenóis de açaí, antioxidante natural da Amazônia que combate a oxidação e o aspecto opaco dos loiros. A fórmula recupera a luminosidade, ilumina cada mecha e restaura o brilho frio ou dourado do loiro conforme o tom.',
  beneficios:['Ilumina e revive o brilho dos loiros','Ação antioxidante que evita o aspecto opaco','Nutre sem pesar','Loiro luminoso e saudável','Fios macios e desembaraçados'],
  modo:'Aplique no cabelo molhado, massageie e enxágue. Use com a Máscara Blondifier. Para neutralizar tons amarelados, alterne com o shampoo Silver.',
  resultado:'Loiro radiante, luminoso e com aparência de recém-saído do salão.',
  indicacao:'Todos os loiros: naturais, descoloridos, com mechas ou balayage.',
  freq:'Em todas as lavagens.',
  tipos:'Cabelos loiros de todos os tipos de fio.',
  etapa:'Nutrição / Proteção da cor',
  combina:['lp-mq-blondifier','lp-sh-silver','lp-sh-metal']
});

L({
  id:'lp-sh-silver', nome:'Silver Shampoo', nomeCurto:'Silver',
  linha:'Silver', cat:'shampoo', cor:'#C9C9C9',
  desc:'Shampoo desamarelador para cabelos grisalhos, brancos ou loiros muito claros.',
  needs:['loiros','grisalhos','protecao-cor'], best:15, rec:13,
  ativos:['Magnésio','Pigmentos violeta'],
  tecnologia:'Os pigmentos violeta neutralizam instantaneamente os reflexos amarelados indesejados pela lei do contraste de cores, enquanto o Magnésio ilumina e realça a beleza natural dos fios grisalhos e brancos, devolvendo um aspecto prateado e limpo.',
  beneficios:['Neutraliza tons amarelados','Ilumina cabelos grisalhos e brancos','Efeito prateado luminoso','Limpeza suave','Fios mais brilhantes e uniformes'],
  modo:'Aplique no cabelo molhado, deixe agir de 2 a 5 minutos conforme a intensidade de neutralização desejada e enxágue bem. Use luvas se preferir.',
  resultado:'Grisalhos e loiros claros livres do amarelado, com reflexos limpos e elegantes.',
  indicacao:'Cabelos grisalhos, brancos, loiro platinado ou com mechas muito claras.',
  freq:'1 a 2 vezes por semana, alternando com um shampoo de tratamento.',
  tipos:'Cabelos grisalhos, brancos e loiros muito claros.',
  etapa:'Tratamento especial — matização',
  combina:['lp-sh-blondifier','lp-mq-blondifier'],
  contra:'Pode manchar toalhas claras durante o uso. Em cabelos muito porosos, respeite o tempo de pausa para evitar reflexos violeta.'
});

L({
  id:'lp-sh-curl', nome:'Curl Expression Shampoo', nomeCurto:'Curl Expression',
  linha:'Curl Expression', cat:'shampoo', cor:'#7A1F44',
  desc:'Shampoo para cachos e crespos com limpeza suave e alta dose de hidratação.',
  needs:['cacheados','hidratacao'], best:7, rec:3,
  ativos:['Glicerina','Ureia H','Semente de Hibisco'],
  tecnologia:'Sistema hidratante intensivo com Glicerina (umectante que atrai água para o fio), Ureia H (derivado hidratante de alta afinidade com a fibra) e Semente de Hibisco. Limpa suavemente sem remover a oleosidade natural que protege cachos e crespos.',
  beneficios:['Limpeza suave que respeita o cacho','Hidratação intensa desde a lavagem','Reduz o ressecamento e o frizz','Cachos mais definidos e elásticos','Toque natural, sem pesar'],
  modo:'Aplique no cabelo molhado, massageie o couro cabeludo com as pontas dos dedos e deslize a espuma pelo comprimento. Enxágue e siga com a máscara Curl Expression ideal para seu nível de ressecamento.',
  resultado:'Cachos limpos, hidratados, macios e prontos para definição.',
  indicacao:'Cabelos ondulados, cacheados e crespos (2A a 4C).',
  freq:'Em todas as lavagens.',
  tipos:'Ondulados, cacheados, crespos e em transição.',
  etapa:'Hidratação',
  combina:['lp-mq-curl-int','lp-mq-curl-rich']
});

L({
  id:'lp-sh-scalp', nome:'Scalp Advanced Shampoo', nomeCurto:'Scalp Advanced',
  linha:'Scalp Advanced', cat:'shampoo', cor:'#17767A',
  desc:'Shampoo dermopurificante que reequilibra o couro cabeludo oleoso ou sensibilizado.',
  needs:['couro-cabeludo','oleosos'], best:14, rec:5,
  ativos:['AHA 3%'],
  tecnologia:'Com 3% de AHA (alfa-hidroxiácido), promove uma esfoliação química suave do couro cabeludo, removendo o excesso de sebo, resíduos e células mortas. Reequilibra a raiz sem ressecar os comprimentos, criando o ambiente ideal para um cabelo saudável.',
  beneficios:['Purifica profundamente o couro cabeludo','Controla a oleosidade da raiz','Reduz desconforto e aspecto pesado','Sensação de frescor e limpeza prolongada','Raiz equilibrada, fios leves'],
  modo:'Aplique no couro cabeludo molhado, massageie com movimentos circulares por 1 a 2 minutos e enxágue bem. Pode ser alternado com o shampoo de tratamento do seu cronograma.',
  resultado:'Couro cabeludo limpo, equilibrado e saudável — a base de qualquer cabelo bonito.',
  indicacao:'Couro cabeludo oleoso, com acúmulo de produto ou sensação de desconforto.',
  freq:'2 a 3 vezes por semana.',
  tipos:'Todos os tipos de cabelo com couro cabeludo oleoso ou desequilibrado.',
  etapa:'Tratamento do couro cabeludo',
  combina:['lp-sh-aminexil','lp-sh-pure'],
  contra:'Evite aplicar em couro cabeludo com lesões abertas. Em caso de irritação persistente, suspenda o uso e consulte um dermatologista.'
});

L({
  id:'lp-sh-pure', nome:'Pure Resource Shampoo', nomeCurto:'Pure Resource',
  linha:'Pure Resource', cat:'shampoo', cor:'#BFD9BF',
  desc:'Shampoo purificante para cabelos oleosos e com acúmulo de resíduos.',
  needs:['oleosos','couro-cabeludo'], best:19, rec:14,
  ativos:['Citramine'],
  tecnologia:'A Citramine é um agente purificante cítrico que remove com eficiência o excesso de oleosidade e os resíduos de produtos acumulados na fibra, devolvendo leveza imediata sem agredir o fio.',
  beneficios:['Remove oleosidade e resíduos','Leveza e movimento imediatos','Sensação de limpeza profunda','Brilho natural restaurado','Raiz solta por mais tempo'],
  modo:'Aplique no cabelo molhado, massageie até formar espuma abundante e enxágue. Ideal também como limpeza profunda semanal antes de tratamentos.',
  resultado:'Cabelo limpo de verdade: leve, solto, brilhante e sem acúmulo.',
  indicacao:'Cabelos normais a oleosos, ou qualquer cabelo que use muitos finalizadores.',
  freq:'Em todas as lavagens ou 1 vez por semana como detox.',
  tipos:'Cabelos normais a oleosos.',
  etapa:'Limpeza profunda — primeiro passo do cronograma',
  combina:['lp-sh-scalp','lp-mq-absolut']
});

L({
  id:'lp-sh-density', nome:'Density Advanced Shampoo', nomeCurto:'Density Advanced',
  linha:'Density Advanced', cat:'shampoo', cor:'#8E6FA8',
  desc:'Shampoo preenchedor para cabelos finos e com aparência de afinamento.',
  needs:['volume','antiqueda','finos'], best:20, rec:6,
  ativos:['Niacinamida'],
  tecnologia:'Formulado com Niacinamida (vitamina B3), que atua na vitalidade do fio e da raiz. Limpa removendo resíduos que pesam sobre cabelos finos e devolve corpo e densidade visível ao cabelo.',
  beneficios:['Corpo e densidade visíveis','Limpa sem pesar','Fios finos com mais estrutura','Sensação de cabelo mais cheio','Raiz revitalizada'],
  modo:'Aplique no cabelo molhado, massageie o couro cabeludo e enxágue bem. Uso contínuo potencializa o resultado.',
  resultado:'Cabelo com aparência mais densa, encorpada e cheia de vida.',
  indicacao:'Cabelos finos, ralos ou com aparência de afinamento progressivo.',
  freq:'Em todas as lavagens.',
  tipos:'Cabelos finos e com perda de densidade.',
  etapa:'Fortalecimento',
  combina:['lp-sh-aminexil','lp-sh-volumetry']
});

L({
  id:'lp-sh-liss', nome:'Liss Unlimited Shampoo', nomeCurto:'Liss Unlimited',
  linha:'Liss Unlimited', cat:'shampoo', cor:'#C86FA5',
  desc:'Shampoo disciplinante antifrizz para cabelos rebeldes ou alisados.',
  needs:['frizz','protecao-termica'], best:13, rec:15,
  ativos:['Pro-Keratina','Óleo de Kukui'],
  tecnologia:'A Pro-Keratina reforça a fibra e disciplina o fio, enquanto o óleo de Kukui — extraído de uma noz polinésia — nutre e sela a cutícula contra a umidade, principal gatilho do frizz. Controle antifrizz prolongado mesmo em ambientes úmidos.',
  beneficios:['Controle do frizz por até 4 dias','Fios alinhados e disciplinados','Proteção contra umidade','Maciez e toque sedoso','Facilita a escovação'],
  modo:'Aplique no cabelo molhado, massageie e enxágue. Complete com o tratamento Liss Unlimited antes da escova ou chapinha.',
  resultado:'Cabelo liso, alinhado e sem frizz, com movimento natural e brilho.',
  indicacao:'Cabelos com frizz, rebeldes, alisados ou com escova progressiva.',
  freq:'Em todas as lavagens.',
  tipos:'Cabelos lisos, ondulados ou alisados quimicamente.',
  etapa:'Nutrição / Disciplina',
  combina:['lp-mq-absolut','we-fu-mask']
});

L({
  id:'lp-sh-volumetry', nome:'Volumetry Shampoo', nomeCurto:'Volumetry',
  linha:'Volumetry', cat:'shampoo', cor:'#7FCBB4',
  desc:'Shampoo de volume para cabelos finos que precisam de corpo e leveza.',
  needs:['volume','finos','oleosos'], best:18, rec:16,
  ativos:['Ácido Salicílico'],
  tecnologia:'O Ácido Salicílico realiza uma limpeza profunda da raiz, removendo os resíduos que "colam" o fio no couro cabeludo. Livre do peso, o cabelo fino ganha sustentação e um volume natural que dura da raiz às pontas.',
  beneficios:['Volume visível desde a raiz','Limpeza profunda anti-resíduos','Leveza total, sem pesar','Corpo e movimento duradouros','Fios finos com mais presença'],
  modo:'Aplique no cabelo molhado, concentre a massagem na raiz e enxágue bem. Evite aplicar máscaras pesadas na raiz para manter o efeito.',
  resultado:'Cabelo fino com volume, corpo e movimento de comercial.',
  indicacao:'Cabelos finos, sem volume ou que murcham ao longo do dia.',
  freq:'Em todas as lavagens.',
  tipos:'Cabelos finos e lisos a ondulados.',
  etapa:'Limpeza / Volume',
  combina:['lp-sh-density','lp-sh-pure']
});

L({
  id:'lp-sh-aminexil', nome:'Aminexil Advanced Shampoo', nomeCurto:'Aminexil Advanced',
  linha:'Aminexil Advanced', cat:'shampoo', cor:'#5A6B7C',
  desc:'Shampoo antiqueda para cabelos com queda por quebra ou enfraquecimento.',
  needs:['antiqueda','couro-cabeludo'], best:12, rec:7,
  ativos:['Aminexil','Ômega 6'],
  tecnologia:'O Aminexil é uma molécula reconhecida que atua no ancoramento do fio, combatendo o enrijecimento do colágeno ao redor da raiz — uma das causas da queda. O Ômega 6 nutre e fortalece o bulbo, mantendo o fio firme por mais tempo.',
  beneficios:['Ajuda a reduzir a queda dos fios','Fortalece o cabelo desde a raiz','Nutre o bulbo capilar','Fios mais firmes e resistentes','Uso diário, textura leve'],
  modo:'Aplique no couro cabeludo molhado, massageie suavemente por 1 a 2 minutos e enxágue. Resultados progressivos com uso contínuo.',
  resultado:'Menos fios no ralo e na escova; cabelo mais firme, denso e saudável.',
  indicacao:'Cabelos com queda sazonal, queda por estresse ou fios que soltam com facilidade.',
  freq:'Em todas as lavagens, por pelo menos 6 semanas.',
  tipos:'Todos os tipos de cabelo com queda.',
  etapa:'Tratamento do couro cabeludo / Antiqueda',
  combina:['lp-sh-scalp','lp-sh-density'],
  contra:'Quedas intensas ou persistentes devem ser avaliadas por um dermatologista. Uso externo.'
});

L({
  id:'lp-sh-chroma', nome:'Chroma Crème Shampoo', nomeCurto:'Chroma Crème',
  linha:'Chroma Crème', cat:'shampoo', cor:'#1D2A6B',
  desc:'Shampoo azul que neutraliza tons alaranjados em cabelos castanhos escuros.',
  needs:['protecao-cor','coloridos','grisalhos'], best:17, rec:17,
  ativos:['Pigmentos azuis'],
  tecnologia:'Shampoo em creme com pigmentos azuis concentrados que neutralizam os reflexos alaranjados de castanhos escuros com mechas, morena iluminada ou coloração desbotada. A base cremosa nutre enquanto matiza, sem ressecar.',
  beneficios:['Neutraliza o alaranjado em castanhos','Base cremosa que nutre enquanto matiza','Castanho frio e sofisticado','Cor uniforme entre as retocagens','Brilho e maciez'],
  modo:'Aplique no cabelo molhado com luvas, distribua uniformemente e deixe agir de 3 a 5 minutos. Enxágue bem. Use 1 a 2 vezes por semana, alternando com seu shampoo de tratamento.',
  resultado:'Morena iluminada sem tons quentes indesejados, com reflexos frios e elegantes.',
  indicacao:'Cabelos castanhos com mechas, ombré ou coloração que puxou para o laranja.',
  freq:'1 a 2 vezes por semana.',
  tipos:'Castanhos claros a escuros, com ou sem química.',
  etapa:'Tratamento especial — matização',
  combina:['lp-mq-vitamino','lp-sh-metal'],
  contra:'Use luvas na aplicação. Respeite o tempo de pausa em cabelos muito porosos.'
});

L({
  id:'lp-sh-fresh', nome:'Fresh Extreme Shampoo', nomeCurto:'Fresh Extreme',
  linha:'Fresh Extreme', cat:'shampoo', cor:'#6FB7D9',
  desc:'Shampoo refrescante que purifica o cabelo e o couro cabeludo com efeito gelado.',
  needs:['oleosos','couro-cabeludo'], best:21, rec:18,
  ativos:['Mentol'],
  tecnologia:'O Mentol proporciona uma sensação instantânea de frescor no couro cabeludo enquanto a base de limpeza remove oleosidade e impurezas do dia. Ideal para quem treina, usa capacete ou vive em clima quente.',
  beneficios:['Sensação refrescante imediata','Limpeza eficaz da raiz','Couro cabeludo revigorado','Fios leves e soltos','Perfume fresco e marcante'],
  modo:'Aplique no cabelo molhado, massageie o couro cabeludo e aproveite o efeito gelado por alguns instantes antes de enxaguar.',
  resultado:'Cabelo e couro cabeludo limpos, frescos e revigorados.',
  indicacao:'Uso frequente, cabelos oleosos, praticantes de esporte e climas quentes.',
  freq:'Em todas as lavagens, inclusive diariamente.',
  tipos:'Todos os tipos de cabelo.',
  etapa:'Limpeza',
  combina:['lp-sh-scalp','lp-sh-pure']
});

/* ────────────── MÁSCARAS ────────────── */

L({
  id:'lp-mq-absolut', nome:'Absolut Repair Máscara', nomeCurto:'Absolut Repair',
  linha:'Absolut Repair', cat:'mascara', cor:'#E4B85F',
  desc:'Máscara de reparação profunda que repara, fortalece e devolve força e brilho aos fios.',
  needs:['reconstrucao','danificados'], best:1, rec:12,
  ativos:['Gold Quinoa','Proteína de trigo'],
  tecnologia:'Concentrado reparador com Gold Quinoa e Proteína que promove o "resurfacing instantâneo" da fibra: preenche as falhas da cutícula, sela as áreas danificadas e redensifica o fio, devolvendo resistência e luminosidade.',
  beneficios:['Reparação profunda da fibra','Fios mais fortes e resistentes','Brilho intenso imediato','Maciez e desembaraço','Resultados visíveis desde a 1ª aplicação'],
  modo:'Após o shampoo Absolut Repair, retire o excesso de água e aplique mecha a mecha no comprimento e pontas. Deixe agir de 3 a 5 minutos e enxágue abundantemente.',
  resultado:'Cabelo reconstruído, encorpado, macio e com brilho de salão.',
  indicacao:'Cabelos secos e danificados por química, calor ou desgaste diário.',
  freq:'1 a 2 vezes por semana no lugar do condicionador.',
  tipos:'Todos os tipos de cabelo danificado.',
  etapa:'Reconstrução',
  combina:['lp-sh-absolut','lp-sh-molecular','ss-inner-restore']
});

L({
  id:'lp-mq-metal', nome:'Metal Detox Máscara', nomeCurto:'Metal Detox',
  linha:'Metal Detox', cat:'mascara', cor:'#E6E2D8',
  desc:'Máscara antimetal que protege a fibra, previne a quebra e mantém a cor radiante.',
  needs:['protecao-cor','coloridos','reconstrucao'], best:6, rec:4,
  ativos:['Glicoamina','Ionène G'],
  tecnologia:'Complementa a ação do shampoo Metal Detox: a Glicoamina continua neutralizando os metais dentro da fibra enquanto a base nutritiva repõe lipídios, sela a cutícula e cria uma barreira protetora contra novos depósitos de metal.',
  beneficios:['Protege a fibra contra metais da água','Previne a quebra','Impede que a cor "vire"','Nutrição e selagem profunda','Cor radiante por mais tempo'],
  modo:'Após o shampoo Metal Detox, aplique no comprimento e pontas, deixe agir de 3 a 5 minutos e enxágue bem.',
  resultado:'Fios protegidos, fortes, com cor limpa e luminosa por semanas.',
  indicacao:'Cabelos coloridos, descoloridos ou com mechas.',
  freq:'1 a 2 vezes por semana.',
  tipos:'Todos os tipos de cabelo com química de cor.',
  etapa:'Tratamento especial + Nutrição',
  combina:['lp-sh-metal','lp-sh-vitamino']
});

L({
  id:'lp-mq-vitamino', nome:'Vitamino Color Máscara', nomeCurto:'Vitamino Color',
  linha:'Vitamino Color', cat:'mascara', cor:'#F2A7C3',
  desc:'Máscara fixadora da cor que protege e prolonga a luminosidade dos cabelos coloridos.',
  needs:['protecao-cor','coloridos','hidratacao'], best:10, rec:11,
  ativos:['Resveratrol'],
  tecnologia:'O Resveratrol, antioxidante de alto desempenho, age dentro da fibra combatendo a oxidação dos pigmentos. A textura cremosa sela a cutícula e devolve os lipídios perdidos na coloração, prolongando o brilho e a fidelidade da cor.',
  beneficios:['Fixa e prolonga a cor','Luminosidade intensa','Hidratação e maciez','Cutícula selada, cor protegida','Desembaraço imediato'],
  modo:'Após o shampoo Vitamino Color, aplique no comprimento e pontas, deixe agir de 3 a 5 minutos e enxágue.',
  resultado:'Cor viva, protegida e cheia de brilho até a próxima visita ao salão.',
  indicacao:'Cabelos coloridos ou com mechas.',
  freq:'1 a 2 vezes por semana.',
  tipos:'Todos os tipos de cabelo colorido.',
  etapa:'Hidratação / Proteção da cor',
  combina:['lp-sh-vitamino','lp-sh-metal']
});

L({
  id:'lp-mq-spectrum', nome:'Vitamino Color Spectrum Máscara', nomeCurto:'V. Color Spectrum',
  linha:'Vitamino Color Spectrum', cat:'mascara', cor:'#7C1E3F',
  desc:'Máscara profissional com brilho espelhado, cor vibrante e proteção profunda.',
  needs:['protecao-cor','coloridos','hidratacao'], best:22, rec:1,
  ativos:['Ácido Ferúlico','Ácido Cítrico 2,5%'],
  tecnologia:'Sistema resurfacing profissional: o Ácido Cítrico a 2,5% realinha a cutícula criando uma superfície espelhada, enquanto o Ácido Ferúlico protege os pigmentos da oxidação. Proteção profunda para todas as nuances da cor.',
  beneficios:['Brilho espelhado profissional','Cor vibrante e profunda','Efeito resurfacing na fibra','Proteção antioxidante prolongada','Toque sedoso'],
  modo:'Após o shampoo Spectrum, aplique mecha a mecha, deixe agir 5 minutos e enxágue abundantemente.',
  resultado:'Cabelo colorido com brilho de espelho e cor intensa por mais tempo.',
  indicacao:'Cabelos coloridos que buscam brilho extremo, especialmente tons intensos.',
  freq:'1 a 2 vezes por semana.',
  tipos:'Todos os tipos de cabelo colorido.',
  etapa:'Hidratação / Proteção da cor',
  combina:['lp-sh-spectrum','lp-sh-vitamino']
});

L({
  id:'lp-mq-prolonger', nome:'Pro Longer Máscara', nomeCurto:'Pro Longer',
  linha:'Pro Longer', cat:'mascara', cor:'#D95F73',
  desc:'Máscara renovadora que fortalece os fios e ajuda a manter o comprimento saudável.',
  needs:['reconstrucao','longos'], best:23, rec:9,
  ativos:['Filler-A100','Aminoácido'],
  tecnologia:'Concentra a tecnologia Filler-A100 nas pontas: preenche a fibra afinada pelo desgaste do tempo, engrossando visivelmente as pontas e renovando os comprimentos sem precisar abrir mão do cabelo longo.',
  beneficios:['Pontas visivelmente mais preenchidas','Comprimentos renovados','Fios fortalecidos','Menos necessidade de cortar','Brilho e movimento'],
  modo:'Após o shampoo Pro Longer, aplique concentrando nas pontas, deixe agir 5 minutos e enxágue.',
  resultado:'Cabelo longo com pontas cheias e saudáveis da raiz às pontas.',
  indicacao:'Cabelos longos com pontas finas e desgastadas.',
  freq:'1 a 2 vezes por semana.',
  tipos:'Todos os tipos de cabelo longo.',
  etapa:'Reconstrução',
  combina:['lp-sh-prolonger','lp-sh-inforcer']
});

L({
  id:'lp-mq-inforcer', nome:'Inforcer Máscara', nomeCurto:'Inforcer',
  linha:'Inforcer', cat:'mascara', cor:'#DB7350',
  desc:'Máscara antiquebra que reduz a quebra, fortalece e deixa os fios mais resistentes.',
  needs:['reconstrucao','antiqueda','danificados'], best:24, rec:10,
  ativos:['Vitamina B6','Biotina'],
  tecnologia:'Tratamento fortificante intensivo com Vitamina B6 e Biotina que reforça a estrutura interna do fio frágil. Com uso contínuo da rotina completa, a quebra é drasticamente reduzida e o cabelo consegue finalmente ganhar comprimento.',
  beneficios:['Reduz a quebra drasticamente','Fios mais resistentes','Fortalecimento profundo','Ajuda a ganhar comprimento','Maciez sem pesar'],
  modo:'Após o shampoo Inforcer, aplique no comprimento e pontas, deixe agir de 3 a 5 minutos e enxágue.',
  resultado:'Cabelo forte, resistente e íntegro, com muito menos fios quebrados.',
  indicacao:'Cabelos frágeis e quebradiços.',
  freq:'1 a 2 vezes por semana.',
  tipos:'Todos os tipos de cabelo fragilizado.',
  etapa:'Reconstrução',
  combina:['lp-sh-inforcer','lp-sh-prolonger']
});

L({
  id:'lp-mq-blondifier', nome:'Blondifier Máscara', nomeCurto:'Blondifier',
  linha:'Blondifier', cat:'mascara', cor:'#8B87C6',
  desc:'Máscara iluminadora que nutre, ilumina e realça o brilho dos cabelos loiros.',
  needs:['loiros','nutricao','protecao-cor'], best:25, rec:8,
  ativos:['Polifenóis de Açaí'],
  tecnologia:'Sistema nutritivo e iluminador com polifenóis de açaí: repõe a nutrição que a descoloração retira do fio e envolve a fibra em uma película antioxidante que devolve luminosidade a cada mecha loira.',
  beneficios:['Nutre profundamente loiros sensibilizados','Ilumina e realça o brilho','Ação antioxidante','Maciez e elasticidade','Loiro saudável e luminoso'],
  modo:'Após o shampoo Blondifier ou Silver, aplique no comprimento e pontas, deixe agir 5 minutos e enxágue.',
  resultado:'Loiro nutrido, elástico, brilhante e sem aspecto de palha.',
  indicacao:'Cabelos loiros, descoloridos ou com mechas.',
  freq:'1 a 2 vezes por semana.',
  tipos:'Todos os loiros.',
  etapa:'Nutrição',
  combina:['lp-sh-blondifier','lp-sh-silver']
});

L({
  id:'lp-mq-curl-int', nome:'Curl Expression Máscara Intensiva', nomeCurto:'Curl Expression',
  linha:'Curl Expression', cat:'mascara', cor:'#8E2B55',
  desc:'Máscara de hidratação intensiva que garante maciez e definição dos cachos.',
  needs:['cacheados','hidratacao'], best:26, rec:3,
  ativos:['Glicerina','Ureia H','Semente de Hibisco'],
  tecnologia:'Sistema hidratante intensivo de toque natural: Glicerina e Ureia H repõem e retêm água dentro da fibra enquanto a Semente de Hibisco condiciona. Hidratação profunda que define sem pesar nem criar crosta.',
  beneficios:['Hidratação profunda e duradoura','Cachos definidos e elásticos','Maciez com toque natural','Menos frizz e ressecamento','Não pesa nos cachos'],
  modo:'Após o shampoo Curl Expression, aplique mecha a mecha amassando os cachos, deixe agir 5 minutos e enxágue. Finalize como preferir.',
  resultado:'Cachos hidratados, definidos, macios e cheios de movimento.',
  indicacao:'Cabelos ondulados e cacheados que precisam de hidratação frequente.',
  freq:'1 a 2 vezes por semana.',
  tipos:'Ondulados a cacheados (2A a 3C).',
  etapa:'Hidratação',
  combina:['lp-sh-curl','lp-mq-curl-rich']
});

L({
  id:'lp-mq-curl-rich', nome:'Curl Expression Máscara Rica Intensiva', nomeCurto:'Curl Expression Rich',
  linha:'Curl Expression', cat:'mascara', cor:'#1F5F5B',
  desc:'Máscara rica de nutrição intensa para cachos e crespos mais saudáveis e definidos.',
  needs:['cacheados','nutricao','hidratacao'], best:27, rec:3,
  ativos:['Glicerina','Ureia H','Semente de Hibisco'],
  tecnologia:'Versão rica do sistema hidratante Curl Expression, desenvolvida para fios muito cacheados, crespos e coilys: textura densa que envolve cada espiral, repõe nutrição intensa e retém a umidade por mais tempo, mantendo o toque natural.',
  beneficios:['Nutrição intensa para crespos','Cachos mais saudáveis e definidos','Umidade retida por mais tempo','Elasticidade e força','Toque natural, sem residuo pesado'],
  modo:'Após o shampoo Curl Expression, aplique generosamente mecha a mecha, deixe agir de 5 a 10 minutos e enxágue. Ideal para o dia de nutrição do cronograma.',
  resultado:'Crespos e cachos fechados nutridos, fortes, definidos e brilhantes.',
  indicacao:'Cabelos muito cacheados, crespos e coilys (3C a 4C).',
  freq:'1 vez por semana ou conforme necessidade.',
  tipos:'Cacheados fechados e crespos.',
  etapa:'Nutrição',
  combina:['lp-sh-curl','lp-mq-curl-int']
});
})();
