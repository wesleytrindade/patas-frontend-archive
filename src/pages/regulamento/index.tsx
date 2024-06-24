import Head from 'next/head';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import styles from '../../styles/Regras.module.scss';
import { Banner } from '../../components/Banner';
export default function Regulamento() {
    return (
        <>
            <main className={styles.regras}>
                <Head>
                    <title>Patas 2024 | Regulamento Patas</title>
                    <meta name="description" content="Regulamento Patas 2024" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>

                <Header />

                <Banner bannerBackground="/img/foto_hotel_03.jpg" bannerLabel="Regulamento Patas 2024" />

                <div className={styles.main__regras}>
                    <div className={styles.main__regras__grid}>
                        <div className={styles.main__regras__grid__item}>
                        <h3>SEÇÃO 1 - DO EVENTO</h3>
                        {/* <p>1.1 - O Patas é uma festa particular beneficente sem fins lucrativos em formato de convenção, realizada pela ?????????, CNPJ 53.149.546/0001-75, que reúne apreciadores das artes antropomórficas, também conhecidos como “furries”, para um fim de semana de atividades e interação, bem como a respectiva divulgação deste tipo de arte. O Patas tem como meta levantar fundos para caridade em prol do Projeto Social ????????????, que ajuda ???????????.</p> */}
                        <p>1.1 - Como condição de fazer parte do Patas, os participantes concordam tacitamente com este regulamento e com as regras de conduta comuns a locais públicos.</p>
                        <p>1.2 - Este regulamento será aplicado às áreas comuns do hotel e aos demais locais onde atividades relacionadas ao Patas estejam sendo realizadas.</p>
                        <p>1.3 - O Patas é um evento sem fins lucrativos e realizado por um grupo de organizadores voluntários, que neste regulamento serão chamados de “staff”.</p>
                        <p>1.4 - O Patas é aberto àqueles que pagarem a taxa de colaboração (inscrição) e que aqui serão chamados de “participantes”. Durante todo o período do Patas e em todos os lugares de acesso não públicos alocados pelo hotel à festa, os participantes devem usar a credencial de identificação, que neste regulamento será chamada de “badge”.</p>
                        <p>1.5 - Para fins deste regulamento, serão considerados maiores de idade aqueles que tiverem 18 anos ou mais completos à meia-noite do dia 10 de maio de 2024 e serão considerados menores de idade aqueles que tiverem 17 anos ou menos à meia-noite do dia 10 de maio de 2024.</p>
                        <p>1.6 - As atividades que sejam gincanas com um vencedor, ou que possuam algum tipo de premiação, são meramente recreativas e informais, que buscam a integração de todos os participantes.</p>
                        <p>1.7.a - Os troféus e/ou demais prêmios entregues possuem apenas valor afetivo e não representam qualquer espécie de valor comercial, nem podem ser trocados por qualquer quantia em dinheiro.</p>
                        <p>1.8 - O Mercadinho Furry é um espaço dedicado unicamente à exposição e/ou venda de obras de artesanato, arte (desenhos, colagens, montagens feitas digitalmente que sejam autorais), fursuits e demais produtos autorais com temática furry/antropomórfica e à reserva por antecipação (slot) para comissões/encomenda de arte, fursuits e produtos autorais com temática furry/antropomórfica.</p>
                        <p>1.9.a - O Mercadinho Furry será disciplinado por regulamento próprio cuja divulgação será realizada quando da abertura de inscrições para esta atividade.</p>
                        <h3>SEÇÃO 2 - DOS DIREITOS</h3>
                        <p>Das disposições gerais</p>
                        <p>2.1 - Todos os participantes que efetuaram o pagamento da taxa de colaboração (inscrição) ou foram convidados pelo staff do Patas têm direito a, nos termos do disposto na cláusula 1.5:</p>
                        <p>2.1.a - Livre acesso ao centro de convenções do hotel na sexta (17/05/2024 - para e após a cerimônia de abertura), sábado (18/05/2024) e domingo (19/05/2024), bem como espaços não públicos alocados pelo hotel aos organizadores da festa (vide 1.5);</p>
                        <p>2.1.b - Receber uma cópia da íntegra deste regulamento, e de receber os demais brindes de acordo com o tipo da sua inscrição;</p>
                        <p>2.1.c - Participar das atividades promovidas pelo Patas.</p>
                        <p>2.2. Todos os participantes do Patas, staff e funcionários têm direito e dever mútuos de se tratarem com gentileza. Em caso de quaisquer problemas referentes ao tratamento, a comunicação do acontecido deverá ser feita imediatamente a quaisquer membros do staff.</p>
                        <p>2.3 - Todos os participantes têm o direito de serem ouvidos pelo staff sobre sugestões, reclamações, elogios ou quaisquer assuntos que considerem relevantes à organização, a qualquer momento, durante o Patas e depois dele.</p>
                        <p>2.4 - Todos os participantes, independentemente da idade, possuem o direito de serem acompanhados por pai e/ou mãe sem cobrança de taxa de colaboração para estes, que serão incluídos na categoria “acompanhante”, conforme descrito na cláusula 2.9.</p>
                        <p>2.4.a - Em caso de menores de idade que não vivam com os pais, o acompanhante poderá ser o guardião ou o tutor, mediante apresentação do termo de guarda que possua fé pública (documento original e/ou cópia autenticada do original).</p>
                        <p>2.4.b - O benefício de acompanhante é exclusivo para pais, mães e tutores legais. Os demais parentes do participante não possuem direito a este benefício;</p>
                        <p>2.4.c - Nos casos em que o participante tenha 15 anos ou menos, este deverá ser obrigatoriamente acompanhado por responsável legal ou pessoa devidamente autorizada para tanto, incluindo mas não se limitando aos parentes que não sejam pai ou mãe do participante;</p>
                        <p>2.4.d - O Patas somente permitirá a entrada, sem a presença de algumas das pessoas indicadas na cláusula 2.4.c, dos menores que tiverem a idade entre 16 e 17 anos. Devendo estes estarem em posse de uma autorização válida de seu responsável.</p>
                        <p>2.5 - O Patas autoriza antecipadamente o uso de todo o material feito pelos participantes durante o decorrer das atividades por ela promovidas para uso que tenha por fim a livre divulgação com fins não-comerciais, nos termos da cláusula 1.1 deste regulamento.</p>
                        <p>Das disposições específicas</p>
                        <p>2.6 - O uso de fursuits, kigurumis, fantasias e cosplays são liberados (desde que respeitem o decoro e o bom senso), no centro de convenções e em todas as áreas de acesso público do hotel em que venham a ser realizadas as atividades do Patas (vide cláusula 1.5).</p>
                        <p>2.7 - Somente participantes “fursuiters” poderão participar da atividade “Fursuit Parade” como “fursuiters” e seus respectivos handlers, salvo, eventualmente, se os staffs anunciarem o contrário.</p>
                        <p>2.7.a - Como “fursuiter”, o staff do Patas entende que seja um participante trajando, pelo menos, uma cabeça de fursuit ou máscara que esconda o rosto completamente e que obrigatoriamente possua características zooantropomórficas;</p>
                        <p>2.7.b - Cosplayers, Kigurumis, Zentais e demais tipos de vestimenta não serão considerados fursuits, exceção feita àqueles que preencherem os requisitos mínimos descritos na cláusula 2.7.a.</p>
                        <p>2.8 - Pais e mães ou guardião/tutor com comprovação de termo de guarda ou parentes autorizados pelo staff, portando autorização dos pais dos participantes menores, têm direito e dever de acompanhar os menores participantes durante o Patas, sob a condição de “acompanhante(s)”, sendo isentos da taxa de colaboração (inscrição), desde que inscritos dentro do prazo estipulado pelo staff.</p>
                        <p>2.8.a - Os acompanhantes somente têm direito à badge de “acompanhante” que dá acesso ao centro de convenções do hotel e acesso ao fursuit lounge, este último no caso do participante ser fursuiter.</p>
                        <p>2.8.b - Serão concedidos aos acompanhantes os mesmos descontos oferecidos aos demais participantes em lojas, restaurantes e estabelecimentos conveniados ao Patas e oficialmente divulgados durante as atividades, na internet ou em canais oficiais.</p>
                        <p>2.8.c - Sem prejuízo ao direito de adentrar e permanecer no local da atividade, os acompanhantes não têm direito a participar das atividades interativas, a receber premiações, a aparecer nas fotos oficiais e de participar de quaisquer atividades relacionadas ao Patas, salvo, eventualmente, se os staffs anunciarem o contrário.</p>
                        <p>Dos direitos do Patas</p>
                        <p>2.9 - O Patas poderá utilizar, a título gratuito e sem prévia comunicação, todo o material produzido por participantes, convidados ou credenciados durante as atividades por ela realizadas, nas áreas de realização da festa.</p>
                        <p>2.9.a - Tal direito de cessão de uso se estende a todo o material produzido durante as atividades realizadas em ambiente externo, como por exemplo a Fursuit Parade.</p>
                        <p>2.9.b - O Patas garantirá aos autores os seus devidos créditos pelo material produzido, caso este venha a ser utilizado na forma da cláusula 2.10.</p>
                        <p>2.10 - O staff do Patas produzirá vídeos e fotos com os participantes antes, durante e eventualmente após a festa. Os participantes concordam tacitamente e irrevogavelmente com o uso das imagens pelo Patas por período indeterminado, de forma não onerosa, irrevogável e irretratável, salvo se expresso por meio de requerimento junto ao staff no ato do credenciamento ou antes do início da festa.</p>
                        <h3>SEÇÃO 3 - DOS DEVERES</h3>
                        <p>3.1 - Todos os participantes se comprometem a seguirem as regras deste regulamento e a manter a postura conforme as regras comuns de decoro e bom senso, além de todas as regras de uso do local que estará sediando o Patas (Sorocaba Park Hotel e cercanias) e a legislação nacional pertinente.</p>
                        <p>3.2 - Todos os participantes devem tratar respeitosamente os demais participantes, staffs, hóspedes do hotel, funcionários dos estabelecimentos comerciais atrelados ao Patas e demais pessoas que estiverem no local, conforme cláusula 2.2.</p>
                        <p>3.3 - Todos os participantes devem respeitar e se atentar aos avisos dados pelo staff.</p>
                        <p>3.4 - Todos os participantes devem se manter apresentáveis durante o Patas, mantendo padrões mínimos de higiene pessoal, de forma a evitar reclamações dos demais.</p>
                        <p>3.4.a - Roupas, fursuits, trajes, cosplays, acessórios e similares também devem ser mantidos dentro dos padrões de higiene.</p>
                        <p>3.5 - Todos os participantes se responsabilizam por seus pertences em todos os locais onde as atividades estarão sendo realizadas durante toda a duração do Patas.</p>
                        <p>3.5.a - Sob nenhuma hipótese o staff e/ou o hotel serão responsáveis pelos pertences pessoais dos participantes;</p>
                        <p>3.5.b - Para a utilização do “Achados e Perdidos”, os próprios participantes deverão buscar seus pertences, sendo vedado a retirada por terceiros com procuração,</p>
                        <p>3.5.c - O staff não possui qualquer obrigação de buscar ou avisar os proprietários dos bens perdidos.</p>
                        <p>3.5.d - Pertences abandonados que forem encontrados pelo staff nos locais de atividades serão levados ao “Achados e Perdidos”. Ao final das atividades diárias os objetos abandonados serão descartados definitivamente, não importando o valor material ou sentimental do mesmo, sem qualquer comunicação prévia do aludido descarte.</p>
                        <p>3.5.e - Caso o pertence for localizado na última atividade do dia, este será disponibilizado no “Achados e Perdidos” até o final do dia seguinte de atividade, com a exceção dos objetos localizados no domingo, dia 19/05/2024.</p>
                        <p>3.6 - Todos os participantes devem estar munidos de um documento original de identidade (ou outro que tenha fé pública), que possua foto, no momento do credenciamento. Cópias autenticadas ou fotos não são considerados documentos válidos, por lei.</p>
                        <p>3.7 - Os participantes se comprometem a usar a badge fornecida para identificação durante todo o Patas.</p>
                        <p>3.7.a - As badges podem e serão requisitadas pelos staffs a qualquer momento em todas as atividades e durante a permanência em áreas onde o Patas esteja ocorrendo.</p>
                        <p>3.7.b - Será considerada “ausência da badge” a não apresentação/exposição da credencial para acessar o local onde está localizado o centro de convenções ou participar das atividades atreladas ao Patas ou estando em local de difícil ou impossível visualização.</p>
                        <p>3.7.c - Esconder a badge por baixo de vestimentas não é permitido e será considerado “ausência de badge”, sem prejuízo de eventual sanção na reincidência do ato.</p>
                        <p>3.7.d - O staff se reserva ao direito de negar entrada ou remover os participantes em todos os casos de “ausência de badge”, conforme cláusula 3.7.c., ou pedir a retirada de estranhos do local caso seja constatada essa situação.</p>
                        <p>3.8 - É obrigatório a todos, em todas áreas de acesso público, durante todo o período do Patas, conforme a legislação vigente, trajar vestimentas que cubram as partes íntimas e que evitem que elas fiquem evidentes mesmo que cobertas por algum tipo de tecido.</p>
                        <p>3.9 - O contato físico entre participantes só poderá acontecer com o consentimento de ambos; caso contrário, é obrigatório respeitar o espaço dos demais.</p>
                        <p>3.10 - A utilização de forma não onerosa de qualquer material (áudio/visual) do Patas é livre para divulgação e uso, desde que creditado e identificada a edição do Patas na qual foi coletado aquele material.</p>
                        <p>3.10.a - Para uso com fins comerciais ou ganho financeiro pessoal, a utilização deste material somente será liberada desde que autorizado previamente pelo staff (através de e-mail prévio enviado para patas_oficial@outlook.com) e que no produto final conste créditos à origem do material.</p>
                        <p>3.11 - A gravação e/ou a posterior exibição das palestras e workshops devem ser autorizadas pelos palestrantes antes do início das mesmas.</p>
                        <p>3.12 - Outras regras em torno da produção de fotos e vídeos podem ser anunciadas conforme o decorrer das atividades.</p>
                        <p>Das proibições</p>
                        <p>3.13 - O Patas não tolerará:</p>
                        <p>I - Quaisquer formas de assédio ou intolerância (moral, físico, preconceito, intimidação, não respeitar o espaço alheio);</p>
                        <p>II - Violência física ou verbal;</p>
                        <p>III - Perseguição a participantes e/ou aos staffs;</p>
                        <p>IV - Vestimentas que mostrem ou simulem partes íntimas; e</p>
                        <p>V - Danos materiais a material e/ou locais relacionados o Patas (centro de convenções, dependências do hotel, estabelecimentos conveniados e mobiliário público no caminho da fursuit parade).</p>
                        <p>3.14 - Conforme as regras do hotel, não é permitido consumir comidas e bebidas nas salas do Centro de Convenções, salvo água mineral engarrafada.</p>
                        <p>3.14.a - Excetuam-se ao caput as pessoas que possuem condição médica comprovada e informada no ato do credenciamento (aquelas que precisam se alimentar em determinados horários, por exemplo) ou caso os staffs anunciarem o contrário.</p>
                        <p>3.15 - É proibido usar maquiagens pesadas e/ou pinturas corporais sem prévio consentimento/permissão do staff, para que providências sejam tomadas a fim de evitar sujar trajes dos demais participantes.</p>
                        <p>3.16 - São proibidos trajes fetichistas e/ou demonstrações de fetiches, mesmo sendo apenas uma parte da composição ou todo de uma fantasia ou traje.</p>
                        <p>3.16.a - Qualquer adereço por menor que seja é aplicável o disposto no caput.</p>
                        <p>3.17 - São proibidos trajes ou objetos que façam alusão racista, fóbica a que título for, sexual, religiosa, credo, ideológica ou política.</p>
                        <p>3.18 - São estritamente proibidos quaisquer espécies de trajes, roupas e acessórios que sugiram, mostrem ou simulem, com desenhos ou com relevo, partes íntimas ou, ainda, que possuam conotação sexual.</p>
                        <p>3.18.a - Coleiras e arreios são permitidos, porém nunca conjugados a uma guia, corrente ou qualquer outro objeto similar utilizado para restringir a mobilidade.</p>
                        <p>3.18.b - Máscaras antropomórficas são permitidas desde que estejam desacompanhadas de outros acessórios relacionados à prática fetichista.</p>
                        <p>3.18.c - Roupas íntimas não poderão ser utilizadas de forma a estarem visíveis ou parcialmente visíveis, ou ainda visíveis através da peça de roupa.</p>
                        <p>3.18.d - Malhas, macacões, zentais e outras roupas de corpo inteiro são permitidas apenas caso não seja possível visualizar as partes íntimas ou seu contorno.</p>
                        <p>3.19 - É proibido exibir fotos ou qualquer material gráfico com pornografia humana ou antropomórfica (yiff) em locais públicos, áreas destinadas ao Patas e Mercadinho Furry.</p>
                        <p>3.19.a - Em caso de dúvidas a respeito dos limites dessa regra, o participante deverá consultar previamente um staff.</p>
                        <p>3.20 - É proibido comportamento sexual ou comportamento que ultrapasse o limite de demonstração pública de afeto.</p>
                        <p>3.21 - É proibido contato físico entre maiores e menores de idade que extrapolem o limite de um abraço amistoso/fraternal ou beijos de saudação/cumprimento.</p>
                        <p>3.22 - Armas de fogo, armas de pressão, armas brancas, soco inglês ou qualquer utensílio que infrinja ferimento a outrem são totalmente proibidos.</p>
                        <p>3.22.a - Conforme determinação do Exército Brasileiro, airsofts são consideradas armas de pressão, sendo proibidas dentro dos locais onde ocorre o Patas.</p>
                        <p>3.22.b - Réplicas, simulacros ou armas de brinquedo que componham o traje de um personagem devem ser apresentados previamente ao staff no momento do credenciamento para vistoria e liberação.</p>
                        <p>3.22.c - As réplicas ou armas de brinquedos não são permitidas dentro das salas de conferência, nos corredores e hall do hotel.</p>
                        <p>3.23 - Tesouras, agulhas, pregos, alfinetes e outros utensílios cortantes estão proibidos no lounge do centro de convenções e nas áreas comuns do hotel, salvo se estiver devidamente guardado junto com demais materiais para reparo de fursuits e/ou outras vestimentas/adereços e sejam utilizados unicamente para este fim dentro da sala reservada para os fursuiters (Fursuit Lounge).</p>
                        <p>3.24 - Brincadeiras que envolvam lutas simuladas (incluindo simulação de luta com espadas e armas falsas) não são permitidas dentro das áreas onde ocorre o Patas.</p>
                        <h3>SEÇÃO 4 - DOS PROCEDIMENTOS</h3>
                        <p>Disposições gerais</p>
                        <p>4.1 - Em caso de descumprimento de qualquer uma das regras previstas neste regulamento, serão responsabilizados todos os envolvidos.</p>
                        <p>4.2 - Participantes que reportem estar passando mal, que visivelmente exagerarem na dosagem alcoólica e/ou que estejam em estado de incapacitação serão levados a seus quartos e poderá ser acionado unicamente pelo hotel o bombeiro civil do estabelecimento e/ou uma ambulância do SAMU.</p>
                        <p>4.3 - Qualquer participante flagrado em posse de drogas, substâncias entorpecentes ou outras não permitidas por lei, tampouco com respectivos registros ausentes nos órgãos competentes, terão seus nomes comunicados à autoridade policial para que tomem as legais providências, bem como serão expulsos imediatamente do local.</p>
                        <p>4.4 - Caso presencie alguma situação de descumprimento das regras ou tenha dúvidas sobre as mesmas, o participante se compromete a entrar em contato imediatamente com qualquer staff (resguardado o anonimato), sob pena de aplicação da cláusula 4.4.a. abaixo:</p>
                        <p>4.4.a - O Patas se exime de qualquer responsabilidade sobre a apuração de fatos e ocorrências relatadas ao staff após o fim das atividades, bem como não aplicará qualquer tipo de punição.</p>
                        <p>4.5 - Em caso de barulho excessivo, em qualquer local, será dado apenas um aviso por parte do staff. O segundo aviso será feito pelos funcionários do hotel acompanhados de autoridade policial.</p>
                        <p>Da inscrição</p>
                        <p>4.6 - De acordo com a legislação vigente, a inscrição para o Patas é considerada compra feita pela internet, e possui período de 7 (sete) dias corridos para desistência da inscrição, a partir da data do pagamento.</p>
                        <p>4.7 - O prazo de devolução do dinheiro pago não deverá ultrapassar 30 (trinta) dias após o pedido de cancelamento e será feito de acordo com o meio de pagamento utilizado pelo participante;</p>
                        <p>4.8 - As inscrições são intransferíveis, não sendo possível repassá-las para outras pessoas após o pagamento e a confirmação da mesma.</p>
                        <p>4.9 - Serão considerados “menores de idade acompanhados” aqueles que estejam acompanhados de pelo menos um dos pais ou de guardião/tutor ou responsável, conforme apresentação de documento que prove a guarda do menor.</p>
                        <p>4.9.a - Estando acompanhado de um dos pais, basta apresentar os documentos de identidade originais do menor e do pai e/ou mãe no momento do credenciamento.</p>
                        <p>4.9.b - Em caso de estar acompanhado de um guardião/tutor ou parente devem ser apresentados documentos de identidade originais do menor e do guardião/tutor ou pais, além de cópia autenticada do documento que prove a guarda do menor, para credenciamento.</p>
                        <p>4.10 - Serão considerados “menores de idade desacompanhados” os menores entre 16 e 17 anos de idade que sejam brasileiros e que não estejam acompanhados de pai, mãe ou tutor.</p>
                        <p>4.11 - Os menores de idade desacompanhados (cláusula 4.10) deverão obrigatoriamente apresentar no ato do credenciamento todos os seguintes documentos (conforme art. 82 do Estatuto da Criança e do Adolescente –Lei 8.069/1990):</p>
                        <p>I - Autorização de um dos pais ou de responsável legal/tutor preenchida corretamente, conforme modelo disponível no site do Patas, devidamente assinada com firma reconhecida em cartório (em duas vias) autorizando um maior de idade como responsável, que esteja inscrito no Patas e não faça parte da organização da festa;</p>
                        <p>II - Cópias autenticadas dos documentos de um dos pais ou de ambos (em duas vias). Em caso de guardião/tutor, cópias autenticadas de documento que comprove a guarda do menor (em duas vias), além de cópias do documento do guardião/tutor (em duas vias); e</p>
                        <p>III - Documento original de identidade do menor e do maior de idade responsável nomeado pelos pais, que será responsável legal do menor desacompanhado.</p>
                        <p>4.12 - Menores de idade que não sejam brasileiros, serão considerados “menores de idade estrangeiros” e, só poderão participar do Patas na presença de um dos pais e estando munidos de documentos de identidade (para países em que o Brasil possui acordo para uso de documentos de identidade nacionais) ou passaportes originais.</p>
                        <p>4.13 - Demais disposições sobre o cadastro, as inscrições e o pagamento estão nos Termos de Serviço que o participante deve assinalar que leu e compreendeu ao final da inscrição via website do Patas.</p>
                        <h3>SEÇÃO 5 - DAS PENALIDADES</h3>
                        <p>5.1 - O descumprimento das regras será punido adotando-se o seguinte procedimento:</p>
                        <p>I - Na primeira incidência, será providenciado um aviso verbal ao participante;</p>
                        <p>II - Na segunda incidência (não necessariamente no mesmo descumprimento), será aplicada uma advertência por escrito, identificadas duas testemunhas do descumprimento;</p>
                        <p>III - Na terceira incidência, o participante será expulso imediatamente do Patas ao qual esteja inscrito e, a depender da gravidade do descumprimento, com posterior decisão sobre banimento permanente.</p>
                        <p>5.2 - Quaisquer ações que causem interferência ao andamento do Patas resultarão em expulsão imediata dos participantes envolvidos e, em casos mais graves, a convocação de autoridade policial para ser lavrado boletim de ocorrência, notadamente:</p>
                        <p>I - Que afetem a relação entre os participantes e/ou entre os participantes e o staff;</p>
                        <p>II - Que causem desconforto ou constrangimento aos participantes e/ou ao staff; e</p>
                        <p>III - Que causem danos materiais ao hotel e/ou locais que abriguem atividades do Patas</p>
                        <p>5.2.a - Em sendo constatada atividade que notadamente tem o fito de macular ou causar dano financeiro ao Patas, quer seja antes, durante ou após sua execução, permitirá que o staff negue ou cancele a inscrição realizada na edição presente, podendo ser também aplicado o banimento permanente a depender da gravidade do dano.</p>
                        <p>5.3 - Em caso de infrações cometidas por menores de idade, os pais, guardiões/tutores e/ou os responsáveis legais nomeados pelos pais serão responsabilizados e punidos em conjunto com o menor de idade, de acordo com este regulamento.</p>
                        <p>5.4 - Caso um ou mais participantes causarem danos ao hotel e/ou áreas onde o Patas é realizado e a staff for comunicada de tal ocorrência, todos os participantes envolvidos serão sumariamente expulsos do local.</p>
                        <p>5.5 - Os participantes que descumprirem estas regras serão expulsos do Patas e, posteriormente, poderão ser banidos permanentemente do Patas, conforme julgamento do staff.</p>
                        <h3>SEÇÃO 6 - DAS DISPOSIÇÕES FINAIS</h3>
                        <p>6.1 - Ocorrências não cobertas por este regulamento serão objeto de decisão pelo staff, seguindo o bom senso e a legislação vigente;</p>
                        <p>6.2 - Este regulamento poderá sofrer alterações até a data do Patas. Os participantes receberão uma cópia da versão final do presente regulamento durante o credenciamento;</p>
                        <p>6.3 - Em caso de quaisquer dúvidas acerca deste regulamento, favor consultar imediatamente o staff do Patas;</p>
                        <p>6.4 - Este regulamento entrará em vigor imediatamente após publicação em site oficial e páginas do Patas nas mídias sociais.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </main>

            </>
    )
}