import { useRouter } from "next/router";
import { useVerifyBadge } from "../../hooks/useVerifyBadge";
import Head from "next/head";
import { BadgePresentation } from "../../components/Presentations/BadgePresentation";
import toast, { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { api } from "../../config/axios";

interface VerifyBadge {
    name: string;
    ticketTier: string;
    email: string;
    transactionId: string;
    badgeFilled: boolean;

}

export default function Badge() {
    const router = useRouter();

    const { transactionId } = router.query;

    const [isLoading, setLoading] = useState(true);
    const [badgeData, setBadgeData] = useState({} as any);

    useEffect(() => {

        const getData = async () => {
            const { data } = await api.get(`badgeverify?transactionId=${transactionId}`);
            setBadgeData(data);
            setLoading(false);
        }

        if (transactionId && transactionId.length > 0) {
            getData();  
        }

    }, [transactionId]);


    if (isLoading) {
        return (
            <>
                <Head>
                    <title>Patas 2024 | Carregando...</title>
                </Head>
            </>
        )
    }

    else {
        if (badgeData && !badgeData.badgeFilled) {
            return (
                <BadgePresentation name={badgeData.name} ticketTier={badgeData.ticketTierId} email={badgeData.email} transactionId={badgeData.transactionId} haveShirt={badgeData.haveShirt}/>
            )
        }

        else if (badgeData && badgeData.badgeFilled) {

            toast.error("A sua badge já foi enviada, não é possível alterar ela");

            setInterval(() => {
                router.push('/')
            }, 3000);

            return (
                <>
                    <Head>
                        <title>Patas 2024 | Sua badge já foi preenchida</title>
                    </Head>
                    <Toaster position="bottom-center" />
                </>
            )
        }

        else {
            toast.error("Você não tem autorização para acessar essa página");

            setTimeout(() => {
                router.push('/');
            }, 3000);

            return (
                <>
                    <Head>
                        <title>Patas 2024 | Acesso Negado</title>
                    </Head>
                    <Toaster position="bottom-center" />
                </>
            )
        }
    }

}