'use client'
import axios from "axios";
import React, { useState } from "react";

interface ILead {
    nome_empresa: string;
    cnpj: string;
    email: string;
}


const Chat: React.FC = () => {

    //manter os dados do formulário
    const [formData, setFormData] = useState<ILead>(
        {
            nome_empresa:'',
            cnpj: '',
            email: ''
        }
    );


    //aparecer o formulário ao clicar em Saber Mais
    const [showForm, setShowForm] = useState(false);

    const handleButtonClick = () =>{
        setShowForm(true);
    };

    //const handleCloseForm = ()=>{
      //  setShowForm(false);
    //}

    //envio de dados do formulário para o db.json

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault(); //prevenir comportamento padrão do formulário

        try{

                //enviar dados para json
                //para comunicação o método é post
            await axios.post('http://localhost:3000/leads', formData);
            alert('Contato registrado com sucesso');

            //limpar os dados do formulário
            setFormData({
                nome_empresa: '',
                cnpj: '',
                email: ''
            })
            setShowForm(false)
        }
        catch(error){
            console.error('erro ao adicionar contato', error)
            alert ('erro ao adicionar')
        }
    };

    //função para mudanças no formulário
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        };


    return(
        <>
        <button className="chat-button" onClick={handleButtonClick}>Saiba Mais</button>

        {showForm&& (
            <div className="box-form">
                <h2>Preencha seus dados</h2>
                <form onSubmit={handleSubmit}>
                    <label>Nome da Empresa</label>
                    <input type="text" 
                            name="nome_empresa" 
                            value={formData.nome_empresa} 
                            onChange={handleChange}
                            required />

                    <label>CNPJ:</label>
                    <input type="text" 
                            name="cnpj" 
                            value={formData.cnpj} 
                            onChange={handleChange}
                            required />

                    <label>Email de Contato Corporativo:</label>
                    <input type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required />

                    <button type="submit">Enviar</button>

                </form>

            </div>

        )}
        </>
    )
}
export default Chat;