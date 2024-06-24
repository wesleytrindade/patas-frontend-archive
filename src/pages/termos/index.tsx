import Head from 'next/head';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import styles from '../../styles/Regras.module.scss';
import { Banner } from '../../components/Banner';
export default function Termos() {
    return (
        <>
            <main className={styles.regras}>
                <Head>
                    <title>Patas 2024 | Termos e Condições</title>
                    <meta name="description" content="Termos e Condições" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>

                <Header />

                <Banner bannerBackground="/img/foto_hotel_02.jpg" bannerLabel="Termos e Condições" />

                <div className={styles.main__regras}>
                    <div className={styles.main__regras__grid}>
                        <div className={styles.main__regras__grid__item}>
                            <h1>TERMOS E CONDIÇÕES PARA AQUISIÇÃO DE INGRESSOS, ENTRADA E PERMANÊNCIA NO EVENTO PATAS 2024</h1>
                            <p>A aquisição e o porte do ingresso, a qualquer título, implicam na aceitação das seguintes condições:</p>

                            <h3>1. DA COMPRA DOS INGRESSOS</h3>
                            <p>1.1. Os ingressos são confeccionados sob a forma de CREDENCIAIS (badges), vinculadas ao nome informado pelo participante, e terão caráter pessoal e intransferível.</p>
                            <p>1.2. Para entrar no evento, o participante deverá apresentar um documento oficial com foto, a fim de comprovar a sua titularidade. NÃO SERÁ ADMITIDA, EM NENHUMA HIPÓTESE, A ENTRADA COM CÓPIAS, AUTENTICADAS OU NÃO, DE DOCUMENTOS.</p>
                            <p>1.3. A credencial permite que o participante entre e saia do local onde se realizará o evento quantas vezes quiser, durante os 3 dias de atividades, notadamente, de 17 a 19 de Maio de 2024.</p>
                            <p>1.4. Os ingressos do Patas são comercializados exclusivamente pela plataforma Ingresse, mencionada no site do evento (patas.site) até o dia 17/05/2024 às 11:00h  e, após, na bilheteria durante o evento, em caso de não esgotarem os ingressos em venda online. O limite de ingressos é de 600 pagantes.</p>
                            <p>1.5. A compra está sujeita à análise e aprovação da nossa equipe, que poderá solicitar documentos complementares para a comprovação do cadastro para a finalização e entrega do seu pedido.</p>
                            <p>1.6. Os pedidos de compra estão condicionados à confirmação do pagamento, independente da forma de pagamento escolhida pelo adquirente. O adquirente declara conhecer e aceitar que as informações fornecidas sejam utilizadas para confirmar a veracidade dos dados do comprador.</p>
                            <p>1.7. Não é permitido trocar, transferir e/ou alterar a titularidade do ingresso para terceiros.</p>
                            <p>1.8. É possível realizar upgrade do tipo de ingresso, a qualquer momento, dentro dos prazos de venda dos ingressos. Para tal, entre em contato através do e-mail patas_oficial@outlook.com. Não há a possibilidade de fazer downgrade do tipo de ingresso.</p>
                            <p>1.9. Menores de idade podem participar do evento desacompanhados dos pais apenas acompanhados com um participante pagante responsável, devidamente autorizado por um dos pais através de autorização com firma registrada em cartório, nos termos do Estatuto da Criança e do Adolescente (Lei 8.069/90).</p>
                            <p>1.10. Pais e mães de todos os participantes pagantes, menores ou maiores de idade, têm direito a entrar gratuitamente no evento desde que estejam previamente cadastrados na compra de ingresso do adquirente e mediante comprovação por documento oficial.</p>

                            
                            <h3>2. DO PREENCHIMENTO/FORNECIMENTO CORRETO DOS DADOS NECESSÁRIOS À COMPRA</h3>
                            <p>2.1. É de responsabilidade do participante o preenchimento correto dos dados pessoais solicitados para a realização da compra do ingresso na plataforma Ingresse.</p>
                            <p>2.2. Confira atentamente os dados de seu pedido antes da confirmação de sua compra. Não serão permitidos cancelamentos, trocas ou devoluções de ingressos fora das condições aqui definidas. O seu ingresso é único, ou seja, após sua compra ele não estará mais disponível para venda a terceiros, trocas ou devoluções.</p>
                            <p>2.3. Em até 5 dias úteis após a compra do ingresso, o participante receberá um e-mail com o link do formulário onde deverá enviar os dados para a confecção de credencial. A foto enviada para confecção de credencial não poderá ser alterada após o envio. Em caso de atraso no recebimento do e-mail ou outro problema técnico, entrar em contato através do e-mail patas_oficial@outlook.com.</p>
                            <p>2.4. Pais e mães só poderão usufruir da gratuidade de acompanhante caso tenham sido registrados na compra do ingresso pelo adquirente.</p>


                            <h3>3. DA RETIRADA DO INGRESSO</h3>
                            <p>3.1. O adquirente deverá retirar sua credencial e brindes (conforme tipo de ingresso) no momento de chegada ao evento, na seção de credenciamento.</p>
                            <p>3.2. Apenas o titular do ingresso poderá retirar a credencial, mediante a apresentação de documento de identidade original.</p>
                            <p>3.3. Pais e mães não têm direito aos brindes do ingresso, sendo tão somente acompanhantes dos adquirentes.</p>


                            <h3>4. PERDA, EXTRAVIO, FURTO, ROUBO OU DANIFICAÇÃO DO INGRESSO POR MAL USO OU POR ATOS DE TERCEIROS</h3>
                            <p>4.1. O Patas não se responsabiliza pela perda, extravio, furto, roubo ou danificação da credencial (badge) causada por má utilização/conservação ou por ato de terceiros.</p>
                            <p>4.2. O Patas poderá emitir uma badge provisória apenas no caso de danificação da credencial, mediante a apresentação e entrega da badge danificada à organização.</p>

                            <h3>5. DA MEIA-ENTRADA</h3>
                            <p>5.1. Têm direito ao benefício da meia-entrada, conforme LEI Nº 12.933, DE 26 DE DEZEMBRO DE 2013. :</p>
                            <p>5.1.1. Estudantes com carteirinha original: Participantes que estejam regularmente matriculados em uma instituição de ensino. Sendo ela pública, privada, nível fundamental, médio, técnico, superior ou pós-graduação (especialização, mestrado e/ou doutorado), precisa apresentar documento de identificação oficial original com foto, válido em território nacional, dentro do prazo de validade e:
                                (I) carteira de identificação estudantil (CIE), nos termos do regulamento, emitida pela ANPG, UNE, UBES, entidades estaduais e municipais, Diretórios Centrais dos Estudantes, Centros e Diretórios Acadêmicos, conforme modelo única nacionalmente padronizado;
                                (II) Declaração Original, emitida em papel timbrado, carimbada e assinada pela instituição de ensino;</p>

                            <h3>5.1.2. Pessoas com deficiência:</h3>
                            <p>Para comprovação da condição de PCD serão aceitos laudos médicos contendo nome legível do médico atestado, CRM e CID 10, assim como carteira de identidade oficial que indica a deficiência ou carteira de entidade associada ou o Cartão de Benefício de Prestação Continuada da Assistência Social ou documento comprobatório emitido pelo Instituto Nacional do Seguro Social - INSS, que ateste a aposentadoria de acordo com os critérios estabelecidos na Lei Complementar 142 de maio de 2013, acompanhado de documento de identificação oficial original com foto, válido em território nacional e dentro do prazo de validade.</p>
                            <p>Será garantida a entrada gratuita a acompanhante do participante portador de deficiência que, em virtude da sua condição, necessite de acompanhamento;</p>
                            <p>Lista de deficiências válidas para PCD, conforme regulamentação do DECRETO Nº 5.296 DE 2 DE DEZEMBRO DE 2004.</p>
                            <ul>
                                <li><p>Pessoas Cegas;</p></li>
                                <li><p>Pessoas com Baixa Visão;</p></li>
                                <li><p>Pessoa com Visão Monocular;</p></li>
                                <li><p>Deficiência auditiva:</p></li>
                                <li><p>Pessoa com perda da audição bilateral;</p></li>
                                <li><p>Pessoa com perda da audição parcial;</p></li>
                                <li><p>Pessoa com perda da audição total;</p></li>
                                <li><p>Deficiência física:</p></li>
                                <li><p>Deficiência física é toda aquela que compreende limitações nos movimentos, ou alteração parcial ou completa de um ou mais segmentos do corpo humano. Porém, o termo deficiência física abrange todas as deficiências, inclusive as intelectuais, vez que a palavra física está ligada à fisiologia, ou seja, todo o corpo é “físico”, e todas as deficiência estão abrangidas no corpo.</p></li>
                                <li><p>Paraplegia;</p></li>
                                <li><p>Paraparesia;</p></li>
                                <li><p>Monoplegia;</p></li>
                                <li><p>Monoparesia;</p></li>
                                <li><p>Tetraplegia;</p></li>
                                <li><p>Tetraparesia;</p></li>
                                <li><p>Triplegia;</p></li>
                                <li><p>Triparesia;</p></li>
                                <li><p>Hemiplegia;</p></li>
                                <li><p>Hemiparesia;</p></li>
                                <li><p>Ostomia;</p></li>
                                <li><p>Ausência de um membro;</p></li>
                                <li><p>Nanismo;</p></li>
                                <li><p>Paralisia cerebral;</p></li>
                                <li><p>Membros com deformidade adquirida ou congênita.</p></li>
                                <li><p>Deformidades estéticas não se enquadram pois não apresentam dificuldades no desempenho das funções.</p></li>
                                <li><p>Deficiência intelectual:</p></li>
                                <li><p>Síndrome do X frágil;</p></li>
                                <li><p>Síndrome de down;</p></li>
                                <li><p>Síndrome de Rett;</p></li>
                                <li><p>Discalculia;</p></li>
                                <li><p>Síndrome do álcool fetal;</p></li>
                                <li><p>Erros inatos do metabolismo;</p></li>
                                <li><p>Transtorno do Espectro Autista.</p></li>
                                <li><p>Deficiência múltipla: É a associação de duas ou mais deficiências em uma pessoa.</p></li>
                            </ul>

                            <h3>5.1.3. ID Jovem:</h3>
                            <p>Jovens de 15 a 29 anos de baixa renda, inscritos no Cadastro Único para Programas Sociais do Governo Federal (CadÚnico) e com renda familiar mensal de até 2 salários mínimos. A comprovação do benefício se dará com a apresentação do ID Jovem emitido pelo Governo Federal.</p>
                            
                            <h3>5.2. Idosos com mais de 60 anos - LEI No 10.741, DE 1º DE OUTUBRO DE 2003.</h3>
                            <p>Participantes com idade igual ou superior a 60 anos de idade devem apresentar junto com o ingresso meia entrada, documento de identificação oficial original com foto, válido em território nacional e dentro do prazo de validade;</p>

                            <h3>5.3. Professores com documento de identificação profissional</h3>
                            <p>(a): Participante que seja servidor estadual e/ou municipal, no cargo de professor da rede pública estadual e/ou das redes municipais de ensino: apresentar carteira funcional emitida pela Secretaria da Educação ou o respectivo holerite do servidor;</p>
                            <p>(b) Lei Estadual 15.298/14: Participante que seja servidor estadual e/ou municipal, no cargo de diretor, coordenador pedagógico, supervisor e/ou titular de cargo do quadro de apoio das escolas da rede pública estadual e/ou municipal de ensino: apresentar carteira funcional emitida pela Secretaria da Educação ou o respectivo holerite do servidor;</p>
                            
                            <h3>5.4. Caso o beneficio não seja comprovado, o participante deverá complementar o valor do ingresso adquirido para o valor do ingresso integral, caso contrário o acesso ao evento não será permitido.</h3>
                            
                            <h3>6. DA ENTRADA SOCIAL</h3>
                            <p>6.1. Terão direito ao desconto promocional no valor do ingresso ENTRADA SOCIAL todos os adquirentes que doarem 1 quilo de alimento não perecível, em embalagem original fechada, bem conservada e dentro do prazo de validade. O desconto não é acumulativo. Será considerado para desconto o alimento que pode ser guardado por períodos longos em temperatura ambiente, sem danos à sua conservação. Dê preferência aos alimentos com prazo de validade longo. Não serão aceitos alimentos perecíveis, líquidos ou armazenados em embalagens que não possibilitem a identificação da sua origem.</p>
                            <p>6.2. O alimento deverá ser entregue no momento do credenciamento no primeiro dia que o adquirente for participar da convenção. A não entrega do alimento implicará no cancelamento do desconto promocional, assim o portador deverá complementar o valor do ingresso adquirido com desconto para o valor do ingresso integral, caso contrário o acesso ao evento não será permitido.</p>
                            <p>6.3. Os alimentos serão distribuídos através de uma ou mais ONGs de assistência social a serem escolhidas pela organização do evento.</p>


                            <h3>7. DOS MENORES DE IDADE</h3>
                           
                            <p>7.1. - Serão considerados “menores de idade acompanhados” aqueles que estejam acompanhados de pelo menos um dos pais ou de guardião/tutor ou responsável, conforme apresentação de documento original que prove a guarda do menor.</p>
                            <p>7.1.1 - Menores de até 15 anos devem, obrigatoriamente, estar acompanhados de pai/mãe ou guardião/tutor. Sendo vedada sua entrada no evento desacompanhada de um responsável, no qual deve ser apresentado documento original que comprove o parentesco ou apresentar documento que comprove a guarda do menor.</p>
                            <p>7.2. - Estando acompanhado de um dos pais, basta apresentar os documentos de identidade originais do menor e do pai e/ou mãe no momento do credenciamento.</p>
                            <p>7.3. - Em caso de estar acompanhado de um guardião/tutor ou parente devem ser apresentados documentos de identidade originais do menor e do guardião/tutor ou pais, além de cópia autenticada do documento que prove a guarda do menor, para credenciamento.</p>
                            <p>7.4. - Serão considerados “menores de idade desacompanhados” os adolescentes entre 16 e 17 anos de idade que sejam brasileiros e que não estejam acompanhados de pai, mãe ou tutor.</p>
                            <p>7.5. - Os menores de idade desacompanhados deverão obrigatoriamente apresentar no ato do credenciamento todos os seguintes documentos (conforme art. 82 do Estatuto da Criança e do Adolescente -Lei 8.069/1990):</p>
                            <p>I - Autorização de um dos pais ou de responsável legal/tutor preenchida corretamente, conforme modelo disponível no site da Patas, devidamente assinada com firma reconhecida em cartório (em duas vias) autorizando um maior de idade como responsável, que esteja inscrito na Patas e não faça parte da organização da festa;</p>
                            <p>II - Cópias autenticadas dos documentos de um dos pais ou de ambos (em duas vias). Em caso de guardião/tutor, cópias autenticadas de documento que comprove a guarda do menor (em duas vias), além de cópias do documento do guardião/tutor (em duas vias); e</p>
                            <p>III - Documento original de identidade do menor e do maior de idade responsável nomeado pelos pais, que será responsável legal do menor desacompanhado.</p>
                            <p>7.6. - Menores de idade que não sejam brasileiros, serão considerados “menores de idade estrangeiros” e, só poderão participar da Patas na presença de um dos pais e estando munidos de documentos de identidade (para países em que o Brasil possui acordo para uso de documentos de identidade nacionais) ou passaportes originais.</p>

                            <h3>8. DA TRANSFERÊNCIA DO INGRESSO</h3>
                            <p>8.1. Não é permitida a transferência do ingresso, sendo ele pessoal e intransferível.</p>
                            <p>8.2. Em hipótese alguma serão realizadas transferências de ingressos antes ou durante o evento.</p>

                            <h3>9. DO CANCELAMENTO DA COMPRA DO INGRESSO</h3>
                            <p>9.1. O adquirente poderá cancelar a compra do(s) ingresso(s) em até 7 (sete) dias corridos após o recebimento do e-mail de confirmação da compra, desde que este prazo também não exceda 48h (quarenta e oito horas) antes do evento.</p>
                            <p>9.2. A requisição de cancelamento deverá ser realizada através do e-mail patas_oficial@outlook.com. Será considerada a data e horário do envio do e-mail para o prazo de cancelamento.</p>
                            <p>9.3. Não realizamos cancelamentos parciais.</p>
                            <p>9.4. Em caso de cancelamento do evento Patas 2024, o adquirente receberá integralmente o valor pago pelo ingresso (exceto as taxas da plataforma Ingresse).</p>
                            <p>9.5. Em caso de adiamento do evento Patas 2024 por motivos de força maior ou caso fortuito (como, por exemplo, em decorrência das condições sanitárias que estiverem vigentes à época do evento em razão da pandemia de COVID-19), os valores dos ingressos não serão devolvidos e estes permanecerão válidos para as novas datas de realização do Evento, salvo se alguma legislação específica for publicada sobre este tema - neste caso, serão seguidas as normas da legislação específica que for publicada.</p>

                            
                            <h3>10. DA GRAVAÇÃO DA IMAGEM E ÁUDIO DOS PARTICIPANTES</h3>
                            <p>10.1. Toda e qualquer atividade realizada dentro do Patas 2024 poderá ser filmada, gravada ou fotografada, a critério do promotor/produtor, para posterior publicação, transmissão, retransmissão, reprodução ou divulgação em TV, cinema, rádio, Internet, publicidade ou qualquer outro veículo de comunicação, produção de DVD e home-vídeo, sem qualquer tipo de limitação.</p>
                            <p>10.2. Ao comparecer à Patas 2024 você concorda, autoriza e cede o uso gratuito de sua imagem, nome e voz nos termos ora mencionados, sem limitação, sem que este uso caracterize uso indevido de imagem ou qualquer outra violação de direitos e sem que deste uso decorra qualquer ônus e/ou indenização.</p>


                            <h3>11. DAS ATRAÇÕES, BRINDES, PROGRAMAÇÃO E OUTROS</h3>
                            <h3>11.2. DOS BRINDES</h3>
                            <p>11.1.1. Cada tipo de ingresso dá direito a uma série de brindes e experiências conforme a compra feita. Os brindes/itens deverão ser retirados durante o momento do credenciamento ou até o fim do evento dependendo do item.</p>
                            <p>11.1.2. Os brindes são pessoais e intransferíveis.</p>
                            <p>11.1.3. Todos os itens adquiridos nos pacotes de experiência deverão ser retirados pelos participantes até o fim do evento. Itens que não foram reivindicados durante o evento serão descartados. O Patas não possui o dever de enviar, sob nenhuma hipótese, quaisquer itens para o participante.</p>


                            <h3> 11.2. DAS ALTERAÇÕES NAS PROGRAMAÇÕES</h3>
                           
                            <p>11.2.1. A participação dos palestrantes, DJs e convidados e a realização das palestras e eventos dentro do Patas 2024 estão sujeitas à alteração ou cancelamento sem prévio aviso. A Patas se compromete a divulgar informações atualizadas sobre o evento, tão logo tenha conhecimento de qualquer mudança em relação a isso, mas esclarece que algumas mudanças poderão ocorrer sem a possibilidade de comunicação prévia ao público.</p>

                            <h3>12. DO ACEITE DO PRESENTE TERMO</h3>
                            <p>12.1. O adquirente do ingresso declara expressamente que leu, compreendeu e aceitou estes Termos e Condições e que está totalmente ciente dos direitos e obrigações que deles emanam.</p>

                        </div>
                    </div>
                </div>
                <Footer />
            </main>
        </>
    )
}