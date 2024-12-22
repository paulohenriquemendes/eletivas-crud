import Cabecalho from "./cabecalho";

export default function FormEletiva() {
    return (
        <div>
            <Cabecalho/>
            <form
                action="/testes/retorno"
                method="GET"
                className="flex flex-col bg-slate-200"
            >

                <div className="flex flex-row items-center p-4">
                    <label htmlFor="id_escolas" className="mr-2">
                        <strong>Escola:</strong>
                    </label>
                    
                    <select
                        name="escolas"
                        id="id_escolas"
                        className="bg-slate-100 p-2"
                    >   
                        <option>Selecione</option>
                        <option value="eemti_wr">EEMTI Wladimir Roriz</option>
                        <option value="eemti_ovo">EEMTI Cuzcuz com Ovo</option>
                    </select>
                </div>

                <div className="flex flex-row items-center p-4">
                    <label htmlFor="id_eixo" className="mr-2">
                        <strong>Eixo:</strong>
                    </label>
                    
                    <select
                        name="eixo"
                        id="id_eixo"
                        className="bg-slate-100 p-2"
                    >
                        <option>Selecione</option>
                        <option value="tec">Tecnologia</option>
                        <option value="human">Humanidades</option>
                        <option value="sport">Esportivo</option>
                    </select>
                </div>


                <button
                    type="submit"
                    className="
                        bg-slate-300
                        p-2
                        hover:bg-slate-400
                        active:bg-slate-500
                    "
                >
                    Enviar
                </button>

                <button
                    type="reset"
                    className="
                        bg-red-300
                        p-2
                        hover:bg-red-400
                        active:bg-red-500
                    "
                >
                    Limpar
                </button>


            </form>
        </div>
    );
}
