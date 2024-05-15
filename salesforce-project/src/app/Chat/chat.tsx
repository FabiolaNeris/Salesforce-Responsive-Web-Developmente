'use client'
import { useState } from "react";


const Chat =()=>{

    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () =>{
        setShowForm(true);
    };

    const handleCloseForm = ()=>{
        setShowForm(false);
    }


    return(
        <>
        <button className="chat-button" onClick={handleButtonClick}>Saiba Mais</button>

        {showForm&& (
            <div className="box-form">
                <h2>Preencha seus dados</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="companyName">Nome da Empresa</label>
                    <input type="text" id="companyName" name="companyName" required />

                    <label htmlFor="cnpj">CNPJ:</label>
                    <input type="text" id="cnpj" name="cnpj" required />

                    <label htmlFor="email">Email de Contato Corporativo:</label>
                    <input type="email" id="email" name="email" required />

                    <button type="submit" onClick={handleCloseForm}>Enviar</button>

                </form>

            </div>

        )}
        </>
    )
}
export default Chat;