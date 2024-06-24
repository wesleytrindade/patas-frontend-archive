import Head from 'next/head';
import styles from '../../styles/Badge.module.scss';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { queryClient } from '../../services/queryClient';
import { useMutation } from 'react-query';
import { api } from '../../config/axios';
import toast, { Toaster } from 'react-hot-toast';
import { Header } from '../../components/Header';
import { Banner } from '../../components/Banner'

import { ErrorMessage } from '@hookform/error-message';
import { useEffect, useState } from 'react';
import { uploadFile } from '../../utils/awsFileUploader';
import { ShirtSize } from '../../Enuns/ShirtSize';
import { useRouter } from 'next/router';


// interface BadgeFormData {
//     ticketEmail: string;
//     ticketName: string;
//     fursonaName: string;
//     fursonaImageSrc: string;
//     ticketTierId: number;
// };


const createBadgeSchema = yup.object().shape({
    fursonaName: yup.string().required('Digite o nome da fursona'),
});

export function BadgePresentation({ name, ticketTier, email, transactionId, haveShirt }) {

    const router = useRouter();

    const [ticketTiers, setTicketTiers] = useState(null);
    const [selectedTicket, setSelectedTicket] = useState(ticketTier);
    const [selectedFile, setSelectedFile] = useState("");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [shirtSize, setShirtSize] = useState("");
    const [isMinor,setIsMinor] = useState(false);

    useEffect(async () => {
        const { data } = await api.get("ticketTier");
        setTicketTiers(data);
        setSelectedTicket(ticketTier);

        if (haveShirt) {
            setShirtSize("P");
        }
    }, [])

    const createBadge = useMutation(async (badge) => {

        const response = await api.post("badge", {
            ticketEmail: email,
            ticketName: name,
            fursonaName: badge.fursonaName,
            fursonaImageSrc: selectedFile,
            ticketTierId: ticketTier,
            shirtSize: shirtSize,
            idTransaction: transactionId,
            isMinor: isMinor
        })

        return response.data.user;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('badge');
            toast.success("Badge cadastrada com sucesso");
            setTimeout(()=>{
                router.push("/")
            },2000)

        },

        onError: (e) => {
            toast.error(e.message);
        }
    });

    const { handleSubmit, register, formState, reset } = useForm({
        resolver: yupResolver(createBadgeSchema)
    });

    const { errors, isValid, isSubmitting } = formState;

    async function handleBadgeSubmit(value) {

        await createBadge.mutateAsync(value);
    }


    const handleChangeShirtSize = (e)=>{
        setShirtSize(e.target.value);
    }

    const handleChangeIsMinor = (e)=>{
        setIsMinor(e.target.value === "true");
    }
    const handleFileChange = async (e) => {
        if (e.target.files && e.target.files.length > 0) {

            if (e.target.files[0].size <= 5242880) {
                setButtonDisabled(true);
                const fileName = await uploadFile(e.target.files[0]);
                setSelectedFile(fileName);
                setButtonDisabled(false);
            }

            else {
                toast.error("O tamanho da imagem não pode ser maior que 5MB!");
                setButtonDisabled(true);
            }
        }
    };

    return (
        <>
            <Toaster position='bottom-center' />
            <Header />
            <main className={styles.badge}>
                <Head>
                    <title>Patas 2024 | Solicite a sua Badge</title>
                    <meta name="description" content="Solicite a sua badge aqui" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>


                <div className={styles.badge__content}>
                    <Banner bannerBackground="/img/patas_banner_3.gif" bannerLabel="Registre a sua badge" />
                    <div className={styles.badge__content__title}>
                        <h3>Preencha os dados do formulário para receber a badge no evento</h3>

                        <h4>AVISO: PREENCHA OS DADOS COM CUIDADO, POIS ELES NÃO PODERÃO SER ALTERADOS FUTURAMENTE</h4>
                    </div>
                    <form className={styles.badge__content__form} onSubmit={handleSubmit(handleBadgeSubmit)}>

                        <div className={styles.badge__content__form__grid}>
                            <div className={styles.badge__content__form__grid__container}>
                                <label htmlFor="ticketEmail"> Email do Ingresse </label>
                                <input type="email" name="ticketEmail" value={email} disabled={true} />
                            </div>

                            <div className={styles.badge__content__form__grid__container}>
                                <label htmlFor="ticketTierId"> Tipo do Ingresso </label>
                                <select error={errors.ticketTierId} value={selectedTicket} name="Tipo do Ingresso" placeholder="Selecione" disabled={true}>
                                    {ticketTiers && ticketTiers.map((op) => { return (<option key={op.id} value={op.id}>{op.ticketTier.toUpperCase()}</option>) })}
                                </select>
                            </div>

                            <div className={styles.badge__content__form__grid__container}>
                                <label htmlFor="ticketName"> Nome Completo</label>
                                <input type="input" name="ticketName" error={errors.ticketName} placeholder="Digite o seu nome" value={name} disabled={true} />
                            </div>

                            <div className={styles.badge__content__form__grid__container}>
                                <label htmlFor="fursonaName"> Nome da Fursona </label>
                                <input type="input" name="fursonaName" error={errors.fursonaName} placeholder="Digite o nome da fursona" {...register("fursonaName")} />
                                <ErrorMessage
                                    errors={errors}
                                    name="fursonaName"
                                    render={({ message }) => <p>{message}</p>}
                                />
                            </div>

                            <div className={styles.badge__content__form__grid__container}>
                                <label htmlFor="fursonaImageSrc"> Foto da fursona </label>
                                <input
                                    type="file"
                                    accept="image/png, image/gif, image/jpeg, image/jpg"
                                    error={errors.fursonaImageSrc}
                                    onChange={handleFileChange}
                                    name="fursonaImageSrc"
                                    placeholder="Selecione a imagem"
                                />
                            </div>

                            {haveShirt &&
                                <div className={styles.badge__content__form__grid__container}>
                                    <label htmlFor="shirtSize"> Tamanho da camiseta </label>
                                    <select error={errors.ticketTierId} placeholder="Selecione" onChange={handleChangeShirtSize} value={shirtSize}>
                                        {ShirtSize && ShirtSize.map((op, i) => { return (<option key={i} value={op}>{op.toUpperCase()}</option>) })}
                                    </select>
                                </div>
                            }

                            <div className={styles.badge__content__form__grid__container}>
                                <label htmlFor="isMinor"> Menor de Idade </label>
                                <select error={errors.ticketTierId} value={isMinor} name="isMinor" onChange={handleChangeIsMinor} placeholder="Selecione">
                                    <option value={false}>NÃO</option>
                                    <option value={true}>SIM</option>
                                </select>
                            </div>

                        </div>

                        <button type="submit" disabled={buttonDisabled || isSubmitting}>Enviar</button>
                    </form>
                </div>

            </main>
        </>
    )
}