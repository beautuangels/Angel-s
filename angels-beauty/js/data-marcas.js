/* ═══════════════════════════════════════════
   ANGEL'S BEAUTY — Joico · Wella · Sebastian · Senscience
   Conteúdo baseado em informações oficiais divulgadas pelas marcas.
   ═══════════════════════════════════════════ */
window.PRODUCTS = window.PRODUCTS || [];
(function(){
const push = o => window.PRODUCTS.push(o);

/* ────────────── JOICO — K-PAK PROFESSIONAL ──────────────
   Protocolo profissional de reconstrução em 4 etapas,
   com o exclusivo Quadramine Complex. */

const KPAK_FAQ_PROTOCOLO = [
  ['O que é o protocolo K-PAK de 4 etapas?','É o sistema profissional de reconstrução da Joico: 1) Clarifying Shampoo faz a limpeza profunda; 2) Cuticle Sealer equilibra o pH e sela a cutícula; 3) Reconstructor reconstrói a fibra com o Quadramine Complex; 4) Hydrator repõe a hidratação e a elasticidade. Usadas em sequência, as quatro etapas restauram cabelos muito danificados.'],
  ['Posso usar as etapas separadamente?','Sim, cada produto funciona sozinho, mas o resultado profissional completo — cabelo forte, brilhante e maleável — vem da sequência das 4 etapas.'],
  ['O que é o Quadramine Complex?','É o complexo exclusivo da Joico que repõe os aminoácidos perdidos pelo cabelo, com composição e tamanho ideais para penetrar e se fixar nas áreas danificadas da fibra.']
];

push({
  id:'jo-clarifying', nome:'K-PAK Clarifying Shampoo — Etapa 1', nomeCurto:'K-PAK Clarifying',
  marca:'Joico', marcaCurta:'JOICO', linha:'K-PAK Professional', cat:'shampoo',
  vol:'1 litro', tipo:'bottle', cor:'#C9A96B',
  desc:'Etapa 1 do protocolo K-PAK: limpeza profunda que remove cloro, minerais e resíduos.',
  needs:['reconstrucao','danificados','oleosos'], best:29, rec:20,
  ativos:['Quadramine Complex','Agentes quelantes'],
  tecnologia:'Primeira etapa do protocolo de reconstrução: um shampoo de limpeza profunda com textura cremosa que remove cloro, minerais e acúmulo de produtos — resíduos que impedem os tratamentos de penetrar. Diferente de shampoos antirresíduo comuns, deixa o fio macio e preparado, não ressecado.',
  beneficios:['Remove cloro, minerais e acúmulo de produtos','Prepara a fibra para receber o tratamento','Textura cremosa que não resseca','Cabelo limpo, macio e radiante','Base indispensável do protocolo K-PAK'],
  modo:'Etapa 1 de 4: aplique no cabelo molhado, massageie até formar espuma e enxágue bem. Siga imediatamente para o K-PAK Cuticle Sealer (Etapa 2).',
  resultado:'Fibra completamente limpa e receptiva, pronta para a reconstrução profunda.',
  indicacao:'Início do protocolo de reconstrução; cabelos com acúmulo de resíduos, cloro ou minerais.',
  freq:'No dia do protocolo completo ou 1 vez por semana como limpeza profunda.',
  tipos:'Todos os tipos de cabelo, especialmente danificados.',
  etapa:'Reconstrução — Etapa 1 (Limpeza)',
  combina:['jo-sealer','jo-reconstructor','jo-hydrator'],
  faq:KPAK_FAQ_PROTOCOLO
});

push({
  id:'jo-sealer', nome:'K-PAK Cuticle Sealer — Etapa 2', nomeCurto:'K-PAK Cuticle Sealer',
  marca:'Joico', marcaCurta:'JOICO', linha:'K-PAK Professional', cat:'tratamento',
  vol:'1 litro', tipo:'bottle', cor:'#C9A96B',
  desc:'Etapa 2 do protocolo K-PAK: neutralizador de pH que sela e alinha a cutícula.',
  needs:['reconstrucao','danificados'], best:30, rec:20,
  ativos:['Neutralizador de pH','Quadramine Complex'],
  tecnologia:'Segunda etapa do protocolo: reequilibra o pH do cabelo para a faixa natural de 4,5 a 5,5, revertendo o inchaço alcalino causado por químicas. Com o pH equilibrado, a cutícula se fecha e trava — selando cor, cachos e os benefícios do tratamento dentro do fio.',
  beneficios:['Restaura o pH natural do cabelo (4,5–5,5)','Sela e alinha as cutículas','Trava a cor e a forma dentro do fio','Reduz porosidade','Prepara para a reconstrução da Etapa 3'],
  modo:'Etapa 2 de 4: após o Clarifying Shampoo, aplique no cabelo úmido, deixe agir 5 minutos e enxágue. Siga para o K-PAK Reconstructor (Etapa 3).',
  resultado:'Cutículas seladas, pH equilibrado e fibra organizada para receber a reconstrução.',
  indicacao:'Cabelos porosos, quimicamente tratados ou em processo de reconstrução.',
  freq:'Sempre que realizar o protocolo K-PAK completo.',
  tipos:'Todos os tipos de cabelo com dano químico.',
  etapa:'Reconstrução — Etapa 2 (Equilíbrio de pH)',
  combina:['jo-clarifying','jo-reconstructor','jo-hydrator'],
  faq:KPAK_FAQ_PROTOCOLO
});

push({
  id:'jo-reconstructor', nome:'K-PAK Reconstructor — Etapa 3', nomeCurto:'K-PAK Reconstructor',
  marca:'Joico', marcaCurta:'JOICO', linha:'K-PAK Professional', cat:'tratamento',
  vol:'1 litro', tipo:'bottle', cor:'#D8CDBB',
  desc:'Etapa 3 do protocolo K-PAK: o icônico reconstrutor profundo para cabelos danificados.',
  needs:['reconstrucao','danificados'], best:5, rec:19,
  ativos:['Quadramine Complex','Queratina','Arginina'],
  tecnologia:'O coração do protocolo — e o produto com a maior concentração de Quadramine Complex de toda a Joico. O complexo repõe os aminoácidos exatos que o cabelo perdeu, penetrando profundamente e reconstruindo a estrutura de dentro para fora. Com queratina e arginina, devolve força e elasticidade a fios estressados por química e calor.',
  beneficios:['Reconstrução profunda da estrutura do fio','Maior concentração de Quadramine Complex da marca','Devolve força e elasticidade','Reduz quebra visivelmente','Ícone mundial da reconstrução profissional'],
  modo:'Etapa 3 de 4: após o Cuticle Sealer, aplique mecha a mecha, deixe agir 5 minutos e enxágue bem. Finalize com o K-PAK Hydrator (Etapa 4).',
  resultado:'Fibra reconstruída, cabelo forte, elástico e visivelmente revitalizado.',
  indicacao:'Cabelos danificados, quimicamente tratados, quebradiços ou elásticos.',
  freq:'1 vez por semana ou conforme avaliação profissional. Sempre finalize com hidratação.',
  tipos:'Todos os tipos de cabelo danificado.',
  etapa:'Reconstrução — Etapa 3 (Reconstrução)',
  combina:['jo-clarifying','jo-sealer','jo-hydrator'],
  faq:KPAK_FAQ_PROTOCOLO.concat([
    ['Reconstrução em excesso faz mal?','Sim. Reconstrutores concentrados em proteína devem respeitar a frequência indicada — o excesso pode deixar o fio rígido. Por isso a Etapa 4 (Hydrator) é obrigatória para devolver flexibilidade.']
  ])
});

push({
  id:'jo-hydrator', nome:'K-PAK Intense Hydrator — Etapa 4', nomeCurto:'K-PAK Hydrator',
  marca:'Joico', marcaCurta:'JOICO', linha:'K-PAK Professional', cat:'tratamento',
  vol:'1 litro', tipo:'bottle', cor:'#D8CDBB',
  desc:'Etapa 4 do protocolo K-PAK: hidratação intensa que devolve maciez e elasticidade.',
  needs:['reconstrucao','hidratacao','danificados'], best:31, rec:19,
  ativos:['Quadramine Complex','Lipídios repositores'],
  tecnologia:'Etapa final do protocolo: repõe a umidade e os lipídios que o cabelo seco e danificado perdeu, sela as cutículas e equilibra a reconstrução proteica da Etapa 3 — garantindo que o fio fique forte E flexível, nunca rígido.',
  beneficios:['Hidratação intensa pós-reconstrução','Repõe lipídios essenciais','Melhora a elasticidade do fio','Sela as cutículas','Maciez, brilho e maleabilidade'],
  modo:'Etapa 4 de 4: após enxaguar o Reconstructor, aplique no comprimento e pontas, deixe agir 5 minutos e enxágue. Protocolo completo!',
  resultado:'Cabelo forte, hidratado, macio, brilhante e com movimento — o equilíbrio perfeito.',
  indicacao:'Fecho obrigatório do protocolo K-PAK; também funciona como máscara de hidratação semanal.',
  freq:'Sempre após o Reconstructor, ou semanalmente como hidratação.',
  tipos:'Todos os tipos de cabelo seco ou danificado.',
  etapa:'Reconstrução — Etapa 4 (Hidratação) / Hidratação',
  combina:['jo-clarifying','jo-sealer','jo-reconstructor'],
  faq:KPAK_FAQ_PROTOCOLO
});

/* ────────────── WELLA PROFESSIONALS ────────────── */

const FUSION_TEC = 'Tecnologia SilkSteel™: inspirada na seda de aranha — um dos materiais mais resistentes e flexíveis da natureza — combina aminoácidos de seda e lipídios micronizados que penetram na fibra nos níveis micro e macro, reforçando a resistência de dentro para fora. Usada como rotina completa, deixa o cabelo até 95% mais resistente contra a quebra por escovação e dano mecânico.';

push({
  id:'we-fu-sh', nome:'Fusion Shampoo', nomeCurto:'Fusion',
  marca:'Wella Professionals', marcaCurta:'WELLA', linha:'Fusion — Intense Repair', cat:'shampoo',
  vol:'1 litro', tipo:'bottle', cor:'#D8AE94',
  desc:'Shampoo de reparação intensa com tecnologia SilkSteel e aminoácidos de seda.',
  needs:['reconstrucao','danificados'], best:8, rec:21,
  ativos:['Aminoácidos de seda','SilkSteel™','Purificador de metais'],
  tecnologia:FUSION_TEC + ' O shampoo ainda conta com purificador de metais, que protege o fio dos metais nocivos presentes na água por ação antioxidante.',
  beneficios:['Limpa suavemente enquanto repara','Repara a fibra nos níveis micro e macro','Proteção antioxidante contra metais da água','Fios mais lisos e resilientes','Prepara para o tratamento Fusion'],
  modo:'Aplique no cabelo molhado, massageie suavemente e enxágue. Siga com o Condicionador e/ou a Máscara Fusion.',
  resultado:'Cabelo limpo, sedoso e visivelmente mais resistente à quebra.',
  indicacao:'Cabelos danificados, quebradiços ou desgastados por escovação e químicas.',
  freq:'Em todas as lavagens.',
  tipos:'Todos os tipos de cabelo danificado.',
  etapa:'Reconstrução',
  combina:['we-fu-cond','we-fu-mask'],
  faq:[['O que é a tecnologia SilkSteel?','É a tecnologia de reparação da Wella inspirada na seda de aranha, que une a força do aço à flexibilidade da seda: aminoácidos de seda e lipídios micronizados reforçam a fibra por dentro e por fora, deixando o cabelo até 95% mais resistente contra quebra.']]
});

push({
  id:'we-fu-cond', nome:'Fusion Condicionador', nomeCurto:'Fusion',
  marca:'Wella Professionals', marcaCurta:'WELLA', linha:'Fusion — Intense Repair', cat:'condicionador',
  vol:'1 litro', tipo:'bottle', cor:'#D8AE94',
  desc:'Condicionador de reparação intensa que protege contra a quebra na escovação.',
  needs:['reconstrucao','danificados','hidratacao'], best:32, rec:21,
  ativos:['Aminoácidos de seda','Lipídios micronizados'],
  tecnologia:FUSION_TEC + ' O condicionador desembaraça instantaneamente e cria proteção imediata contra a quebra mecânica do pente e da escova.',
  beneficios:['Desembaraço instantâneo','Proteção imediata contra quebra mecânica','Selagem e maciez sedosa','Reparação micro e macro da fibra','Brilho saudável'],
  modo:'Após o Fusion Shampoo, aplique no comprimento e pontas, deixe agir de 1 a 2 minutos e enxágue.',
  resultado:'Fios sedosos, desembaraçados e protegidos contra o dano diário da escovação.',
  indicacao:'Cabelos danificados que embaraçam e quebram ao pentear.',
  freq:'Em todas as lavagens.',
  tipos:'Todos os tipos de cabelo danificado.',
  etapa:'Reconstrução / Condicionamento',
  combina:['we-fu-sh','we-fu-mask']
});

push({
  id:'we-fu-mask', nome:'Fusion Máscara', nomeCurto:'Fusion Mask',
  marca:'Wella Professionals', marcaCurta:'WELLA', linha:'Fusion — Intense Repair', cat:'mascara',
  vol:'500 ml', tipo:'jar', cor:'#D8AE94',
  desc:'Máscara de reparação intensa que reconstrói e blinda o cabelo contra a quebra.',
  needs:['reconstrucao','danificados','nutricao'], best:12, rec:21,
  ativos:['Aminoácidos de seda','Lipídios micronizados'],
  tecnologia:FUSION_TEC + ' Na versão máscara, a concentração de ativos é máxima: o tratamento penetra profundamente e reconstrói a resiliência do fio em poucos minutos.',
  beneficios:['Reparação profunda e intensa','Até 95% mais resistência contra quebra (rotina completa)','Maciez de seda com força de aço','Protege do dano mecânico diário','Resultado profissional em 5 minutos'],
  modo:'Após o Fusion Shampoo, retire o excesso de água e aplique no comprimento e pontas. Deixe agir 5 minutos e enxágue abundantemente.',
  resultado:'Cabelo reconstruído, flexível, sedoso e blindado contra a quebra.',
  indicacao:'Cabelos danificados, elásticos ou que quebram com facilidade.',
  freq:'1 a 2 vezes por semana.',
  tipos:'Todos os tipos de cabelo danificado.',
  etapa:'Reconstrução',
  combina:['we-fu-sh','we-fu-cond'],
  faq:[['O que é a tecnologia SilkSteel?','É a tecnologia de reparação da Wella inspirada na seda de aranha: aminoácidos de seda e lipídios micronizados penetram nos níveis micro e macro da fibra, unindo flexibilidade e resistência — cabelo até 95% mais resistente contra quebra com a rotina completa.']]
});

const NUTRI_TEC = 'Fórmula nutritiva com Goji Berry — superfruta rica em vitaminas, minerais e antioxidantes — combinada a Ácido Oleico (ômega-9 que restaura a barreira lipídica e a maciez do fio) e Pantenol (pró-vitamina B5 que atrai e retém umidade dentro da fibra). Juntos, nutrem profundamente cabelos secos e estressados sem pesar.';

push({
  id:'we-ne-sh', nome:'Nutri Enrich Shampoo', nomeCurto:'Nutri Enrich',
  marca:'Wella Professionals', marcaCurta:'WELLA', linha:'Invigo Nutri-Enrich', cat:'shampoo',
  vol:'1 litro', tipo:'bottle', cor:'#E48E5F',
  desc:'Shampoo de nutrição profunda com Goji Berry para cabelos secos e estressados.',
  needs:['nutricao','hidratacao','danificados'], best:13, rec:22,
  ativos:['Goji Berry','Ácido Oleico','Pantenol'],
  tecnologia:NUTRI_TEC,
  beneficios:['Limpa e nutre ao mesmo tempo','Goji Berry rica em vitaminas e antioxidantes','Repõe lipídios com Ácido Oleico','Umidade retida com Pantenol','Fios macios, flexíveis e luminosos'],
  modo:'Aplique no cabelo molhado, massageie até formar espuma e enxágue. Siga com o Condicionador ou a Máscara Nutri Enrich.',
  resultado:'Cabelo nutrido desde a lavagem: macio, flexível e com brilho saudável.',
  indicacao:'Cabelos secos, ásperos, opacos ou estressados por sol e vento.',
  freq:'Em todas as lavagens.',
  tipos:'Todos os tipos de cabelo seco.',
  etapa:'Nutrição',
  combina:['we-ne-cond','we-ne-mask'],
  faq:[['Por que Goji Berry no cabelo?','A Goji Berry é uma superfruta concentrada em vitaminas, minerais e antioxidantes que nutrem a fibra e combatem o estresse oxidativo, devolvendo vitalidade a cabelos secos e opacos.']]
});

push({
  id:'we-ne-cond', nome:'Nutri Enrich Condicionador', nomeCurto:'Nutri Enrich',
  marca:'Wella Professionals', marcaCurta:'WELLA', linha:'Invigo Nutri-Enrich', cat:'condicionador',
  vol:'1 litro', tipo:'bottle', cor:'#E48E5F',
  desc:'Condicionador nutritivo que desembaraça e devolve maciez aos fios secos.',
  needs:['nutricao','hidratacao'], best:33, rec:22,
  ativos:['Goji Berry','Ácido Oleico','Pantenol'],
  tecnologia:NUTRI_TEC + ' O condicionador sela a nutrição, facilita o desembaraço e controla o aspecto áspero imediatamente.',
  beneficios:['Nutrição imediata sem pesar','Desembaraço fácil','Controle do ressecamento','Maciez e toque sedoso','Brilho revitalizado'],
  modo:'Após o Nutri Enrich Shampoo, aplique no comprimento e pontas, deixe agir 1 a 2 minutos e enxágue.',
  resultado:'Fios sedosos, nutridos e fáceis de pentear todos os dias.',
  indicacao:'Cabelos secos a muito secos.',
  freq:'Em todas as lavagens.',
  tipos:'Todos os tipos de cabelo seco.',
  etapa:'Nutrição / Condicionamento',
  combina:['we-ne-sh','we-ne-mask']
});

push({
  id:'we-ne-mask', nome:'Nutri Enrich Máscara', nomeCurto:'Nutri Enrich Mask',
  marca:'Wella Professionals', marcaCurta:'WELLA', linha:'Invigo Nutri-Enrich', cat:'mascara',
  vol:'500 ml', tipo:'jar', cor:'#E48E5F',
  desc:'Máscara de nutrição profunda com Goji Berry, Ácido Oleico e Pantenol.',
  needs:['nutricao','hidratacao','danificados'], best:14, rec:22,
  ativos:['Goji Berry','Ácido Oleico','Pantenol'],
  tecnologia:NUTRI_TEC + ' Na máscara, a concentração nutritiva é intensificada para tratar profundamente fios muito secos e estressados em poucos minutos.',
  beneficios:['Nutrição profunda intensiva','Restaura a barreira lipídica do fio','Umidade selada por mais tempo','Elasticidade e maciez renovadas','Ideal para o dia de nutrição do cronograma'],
  modo:'Após o shampoo, aplique generosamente no comprimento e pontas, deixe agir de 5 a 10 minutos e enxágue bem.',
  resultado:'Cabelo profundamente nutrido, sedoso, flexível e radiante.',
  indicacao:'Cabelos secos, ásperos, opacos ou expostos a sol, vento e mar.',
  freq:'1 a 2 vezes por semana.',
  tipos:'Todos os tipos de cabelo seco.',
  etapa:'Nutrição',
  combina:['we-ne-sh','we-ne-cond']
});

/* ────────────── SEBASTIAN PROFESSIONAL ────────────── */

const PEN_TEC = 'Sistema de reparação profunda Penetraitt: um "rescue system" ativo que penetra na fibra em profundidade, remove impurezas, repõe os elos enfraquecidos pelo dano químico e mecânico e reduz a quebra. Desenvolvido para cabelos em modo de recuperação — coloridos, com química ou desgastados por styling — devolve força, maciez e brilho sem abrir mão do caimento leve.';

push({
  id:'se-pe-sh', nome:'Penetraitt Shampoo', nomeCurto:'Penetraitt',
  marca:'Sebastian Professional', marcaCurta:'SEBASTIAN', linha:'Penetraitt', cat:'shampoo',
  vol:'250 ml', tipo:'bottle', cor:'#2E2A26',
  desc:'Shampoo fortalecedor e reparador para cabelos danificados e com química.',
  needs:['reconstrucao','danificados','protecao-cor'], best:15, rec:23,
  ativos:['Rescue system reparador'],
  tecnologia:PEN_TEC + ' No shampoo, o sistema limpa profundamente enquanto reduz a quebra, deixando o cabelo encorpado e cheio de vida.',
  beneficios:['Limpa e fortalece ao mesmo tempo','Reduz a quebra','Ideal para fios enfraquecidos por química ou calor','Corpo e vitalidade renovados','Seguro para cabelos coloridos'],
  modo:'Aplique no cabelo molhado, massageie e enxágue. Siga com o Condicionador ou a Máscara Penetraitt.',
  resultado:'Cabelo limpo, forte, com balanço e aparência saudável.',
  indicacao:'Cabelos danificados, coloridos ou desgastados por styling.',
  freq:'Em todas as lavagens.',
  tipos:'Todos os tipos de cabelo danificado ou com química.',
  etapa:'Reconstrução',
  combina:['se-pe-cond','se-pe-mask']
});

push({
  id:'se-pe-cond', nome:'Penetraitt Condicionador', nomeCurto:'Penetraitt',
  marca:'Sebastian Professional', marcaCurta:'SEBASTIAN', linha:'Penetraitt', cat:'condicionador',
  vol:'250 ml', tipo:'bottle', cor:'#2E2A26',
  desc:'Condicionador reparador de condicionamento profundo para fios estressados e opacos.',
  needs:['reconstrucao','danificados','hidratacao'], best:34, rec:23,
  ativos:['Rescue system reparador'],
  tecnologia:PEN_TEC + ' O condicionador entrega desembaraço sem esforço e hidratação profunda, especialmente formulado para cabelos secos e coloridos.',
  beneficios:['Condicionamento profundo','Desembaraço sem esforço','Hidratação para fios coloridos e secos','Maciez, brilho e movimento','Sela a fibra após a limpeza'],
  modo:'Após o Penetraitt Shampoo, aplique no comprimento e pontas, deixe agir 2 minutos e enxágue.',
  resultado:'Fios macios, brilhantes, hidratados e fáceis de pentear.',
  indicacao:'Cabelos secos, opacos, estressados ou coloridos.',
  freq:'Em todas as lavagens.',
  tipos:'Todos os tipos de cabelo danificado.',
  etapa:'Reconstrução / Condicionamento',
  combina:['se-pe-sh','se-pe-mask']
});

push({
  id:'se-pe-mask', nome:'Penetraitt Máscara', nomeCurto:'Penetraitt Mask',
  marca:'Sebastian Professional', marcaCurta:'SEBASTIAN', linha:'Penetraitt', cat:'mascara',
  vol:'150 ml', tipo:'jar', cor:'#2E2A26',
  desc:'Máscara intensiva de reparação profunda para cabelos com química ou muito estressados.',
  needs:['reconstrucao','danificados','nutricao'], best:16, rec:23,
  ativos:['Rescue system reparador'],
  tecnologia:PEN_TEC + ' A máscara é o tratamento intensivo da linha: reabastece o fio com condicionamento profundo e devolve força, maciez e brilho a cabelos quimicamente tratados.',
  beneficios:['Reparação profunda intensiva','Revive força, maciez e brilho','Para fios com química ou coloração','Cabelo super forte e sedoso','Fácil de desembaraçar e manejar'],
  modo:'Após o shampoo, aplique no comprimento e pontas, deixe agir de 5 a 10 minutos e enxágue bem.',
  resultado:'Cabelo visivelmente recuperado: forte, sedoso, brilhante e manejável.',
  indicacao:'Cabelos quimicamente tratados, coloridos ou muito estressados.',
  freq:'1 a 2 vezes por semana.',
  tipos:'Todos os tipos de cabelo danificado.',
  etapa:'Reconstrução',
  combina:['se-pe-sh','se-pe-cond'],
  faq:[['Para que tipo de dano a Penetraitt é indicada?','Para cabelos em "modo de recuperação": danos de coloração, descoloração, alisamento, calor de secador e chapinha ou desgaste mecânico do styling diário.']]
});

/* ────────────── SENSCIENCE ────────────── */

push({
  id:'ss-inner-restore', nome:'Inner Restore Intensif', nomeCurto:'Inner Restore Intensif',
  marca:'Senscience', marcaCurta:'SENSCIENCE', linha:'Inner Restore', cat:'mascara',
  vol:'500 ml', tipo:'jar', cor:'#4A2334',
  desc:'Máscara de reparação profunda dos laboratórios Shiseido para cabelos danificados.',
  needs:['reconstrucao','hidratacao','danificados','nutricao'], best:4, rec:18,
  ativos:['Blend exclusivo de emulsões de silicone','Aminoácidos essenciais','Condicionadores poliméricos','Umectantes'],
  tecnologia:'Desenvolvida com o blend exclusivo dos laboratórios Shiseido: emulsões de silicone de alta pureza que repõem e travam a umidade dentro da fibra, combinadas a aminoácidos-chave que promovem a saúde do fio. Condicionadores poliméricos e umectantes proporcionam deslizamento excepcional enquanto equilibram o nível de umidade do cabelo — o tratamento age profundamente na estrutura para fortalecer, reforçar e realçar o cabelo.',
  beneficios:['Reparação profunda de dentro para fora','Reposição de umidade e aminoácidos essenciais','Fios fortalecidos e reforçados','Brilho radiante e maciez de toque','Desembaraço e deslizamento excepcionais','Equilíbrio do nível de umidade da fibra'],
  modo:'Após o shampoo, retire o excesso de água com a toalha e aplique no comprimento e pontas. Deixe agir de 5 a 10 minutos e enxágue abundantemente. Use semanalmente para melhores resultados.',
  resultado:'Cabelo profundamente reparado, forte, sedoso, hidratado e com brilho radiante.',
  indicacao:'Cabelos danificados, ressecados ou desvitalizados; ideal como tratamento intensivo semanal.',
  freq:'1 vez por semana (ou 2, em casos de dano severo).',
  tipos:'Todos os tipos de cabelo — especialmente eficaz em fios danificados.',
  etapa:'Reconstrução + Hidratação (trata as duas frentes no mesmo dia)',
  combina:['lp-sh-absolut','se-pe-sh','we-fu-sh'],
  faq:[
    ['O que torna a Inner Restore Intensif especial?','Ela nasce dos laboratórios Shiseido, referência mundial em pesquisa capilar: o blend exclusivo une emulsões de silicone que travam a umidade a aminoácidos que restauram a saúde estrutural do fio — reparação e hidratação profundas em um único tratamento.'],
    ['Serve para todos os tipos de cabelo?','Sim. A fórmula equilibra o nível de umidade da fibra, então trata profundamente sem pesar, de fios finos a grossos.'],
    ['Com que frequência devo usar?','Uma aplicação semanal de 5 a 10 minutos já entrega resultados visíveis. Em cabelos muito danificados, use duas vezes por semana até a recuperação.'],
    ['Posso usar com meu shampoo atual?','Pode. Para potencializar, recomendamos combinar com um shampoo reparador profissional, como os das linhas Absolut Repair, Fusion ou Penetraitt.']
  ]
});
})();
