import { useState } from "react";

export default function Contador(){
    const [contador, setContador] = useState<number>(0);
    return (
      <div>
        <h1>Contador</h1>
        <p>{contador}</p>
        <button onClick={()=>setContador(contador + 1)
        }>Incrementar (+)</button>
        <br />
        <button onClick={()=>setContador(contador - 1)
        }>Decrementar (-)</button>
      </div>
    )
  }