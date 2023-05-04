import { createContext, useState } from "react";
import Images from "../imagens";

export const GlobalContext = createContext([]);

export const GlobalProvider = ({children}) =>{

    //Imagems Carrossel
    const carrossel = [
      {alt:"Bandeja de doces",imagem: Images.carrossel1},
      {alt:"Bolo de chocolate", imagem: Images.carrossel2},
      {alt:"Doces caseiros", imagem: Images.carrossel3},
      {alt:"Arranjo de confeitaria", imagem: Images.carrossel4},
      {alt:"Confeiteitro mexendo massa", imagem: Images.carrossel5},
    ]

    //Catalogo de sites
    const catalogo = [
        {nome: "Bolo de Abacaxi", imagem: Images.card1},
        {nome: "Bolo Temático", imagem: Images.card2},
        {nome: "Empada", imagem: Images.card3},
        {nome: "Ganache", imagem: Images.card4},
        {nome: "Cesta de doces", imagem: Images.card5},
        ];

    //Const de busca 
    const[busca,setBusca] = useState('');

    //Filtro por nome
    const filtro = catalogo.filter((item) =>item.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase()))

    //Informação do Usuário
    const userData = {
      telefone:"41 3333-3333",
      celular:"+5541992722245",
      twitter:"http://twitter.com.br",
      facebook:"http://facebook.com.br",
      insta:"http://instagram.com.br",
      cidade:"Cidade",
      bairro:"Bairro",
      rua:"Rua - nº xxxx"

    }

    //Transforma o número de ceular em legível
    const cellText= userData.celular.slice(0,3)+" "+userData.celular.slice(3,5)+" "+userData.celular.slice(5,10)+" "+userData.celular.slice(10,14);

    return (
        <GlobalContext.Provider
         value={{ catalogo, busca, setBusca, filtro, carrossel, userData, cellText }}>
          {children}
        </GlobalContext.Provider>
       )

}