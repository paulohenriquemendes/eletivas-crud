import { useRouter } from 'next/router';

// interface Eletiva{
//     nome: string;
// }

export default function Retorno(){
    const router = useRouter();
    const {escolas, eixo} = router.query;
    console.log(escolas, eixo);
    return (
        <div>
            {escolas} - {eixo}
        </div>
    )
}