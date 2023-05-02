import { createContext, useState } from "react";

export const GlobalContext = createContext([]);

export const GlobalProvider = ({children}) =>{

    //Imagems Carrossel
    const carrossel = [
      {alt:"Bandeja de doces",imagem:"https://img.freepik.com/fotos-gratis/close-up-de-uma-bandeja-cheia-de-deliciosas-sobremesas-de-geleia-sabores-de-framboesa-e-chocolate-chantilly-bagas-chocolate-cacau-tiramisu-receita-cozinhando-cozinha-cozinha-festa-buffet-de-doces_7502-5859.jpg?w=740&t=st=1683043512~exp=1683044112~hmac=a92d891e4ab98be398dcda63d1b30345356fce322ecae4fafeb9beb78ac8abaa"},
      {alt:"Bolo de chocolate", imagem:"https://img.freepik.com/fotos-gratis/vista-frontal-do-conceito-de-bolo-de-chocolate-delicioso_23-2148801126.jpg?w=740&t=st=1683043527~exp=1683044127~hmac=5787ed1351889392b5811dd429519bfa8baa302aad09c95599b6c3034e86918a"},
      {alt:"Doces caseiros", imagem:"https://img.freepik.com/fotos-gratis/decorar-deliciosos-doces-caseiros-com-chocolate-e-amendoim_155003-1868.jpg?w=740&t=st=1683043535~exp=1683044135~hmac=2d5a0e02b768ef8e0786423813dba86baebb0656aee56c5c5d64aeae44a6009d"},
      {alt:"Arranjo de confeitaria", imagem:"https://img.freepik.com/fotos-gratis/arranjo-de-confeitaria-com-vista-frontal-e-espaco-de-copia_23-2148654059.jpg?w=826&t=st=1683043565~exp=1683044165~hmac=b777e5d721e7e378eae24bb436cf27cfb7c2b06c5e40314cef811e61426f852a"},
      {alt:"Confeiteitro mexendo massa", imagem:"https://img.freepik.com/fotos-gratis/decorar-deliciosos-doces-caseiros-com-chocolate-e-amendoim_155003-4396.jpg?w=740&t=st=1683043576~exp=1683044176~hmac=a913eb51e45dfd9caaaa3ab37bc16269194876d18e80c0df62e40db473bec9cf"},
    ]

    //Catalogo de sites
    const catalogo = [
        {nome: "Abacaxi", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/abacaxi_144627-22208.jpg?t=st=1656598131~exp=1656598731~hmac=3c9855c67b07eaa0934d3ec9aaba46c6578a690e006648dad6068f2c6983c4a2&w=740"},
        {nome: "Kiwi", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/kiwis-frescos-isolados_144627-30034.jpg?t=st=1656598897~exp=1656599497~hmac=063f52cae110502bcd344933acd5ed955ed14727a6eae5de972e93559a4d0f90&w=740"},
        {nome: "Uva Roxa", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/uva_74190-1201.jpg?t=st=1656598913~exp=1656599513~hmac=0e8e3ba0d58a3771178b09a8f941013a69db550505388d9a8cd1e45bf60b88a2&w=740"},
        {nome: "Laranja", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/corte-partes-alaranjadas-e-frutas-inteiras-com-folhas-verdes_74855-5381.jpg?w=740&t=st=1681317876~exp=1681318476~hmac=79834be6b3fdb34bf0112dee0c815b6d6e35cef63cb60a1699c948b2f6722d95"},
        {nome: "Morango 2", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/morangos-lindos-isolados-no-branco_93675-23690.jpg?w=740"},
        {nome: "Abacaxi 2", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/abacaxi_144627-22208.jpg?t=st=1656598131~exp=1656598731~hmac=3c9855c67b07eaa0934d3ec9aaba46c6578a690e006648dad6068f2c6983c4a2&w=740"},
        {nome: "Kiwi 2", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/kiwis-frescos-isolados_144627-30034.jpg?t=st=1656598897~exp=1656599497~hmac=063f52cae110502bcd344933acd5ed955ed14727a6eae5de972e93559a4d0f90&w=740"},
        {nome: "Uva Roxa 2", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/uva_74190-1201.jpg?t=st=1656598913~exp=1656599513~hmac=0e8e3ba0d58a3771178b09a8f941013a69db550505388d9a8cd1e45bf60b88a2&w=740"},
        {nome: "Laranja 2", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/corte-partes-alaranjadas-e-frutas-inteiras-com-folhas-verdes_74855-5381.jpg?w=740&t=st=1681317876~exp=1681318476~hmac=79834be6b3fdb34bf0112dee0c815b6d6e35cef63cb60a1699c948b2f6722d95"},
        {nome: "Morango 3", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/morangos-lindos-isolados-no-branco_93675-23690.jpg?w=740"},
        {nome: "Abacaxi 3", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/abacaxi_144627-22208.jpg?t=st=1656598131~exp=1656598731~hmac=3c9855c67b07eaa0934d3ec9aaba46c6578a690e006648dad6068f2c6983c4a2&w=740"},
        {nome: "Kiwi 3", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/kiwis-frescos-isolados_144627-30034.jpg?t=st=1656598897~exp=1656599497~hmac=063f52cae110502bcd344933acd5ed955ed14727a6eae5de972e93559a4d0f90&w=740"},
        {nome: "Uva Roxa 3", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/uva_74190-1201.jpg?t=st=1656598913~exp=1656599513~hmac=0e8e3ba0d58a3771178b09a8f941013a69db550505388d9a8cd1e45bf60b88a2&w=740"},
        {nome: "Laranja 3", descri: "Descrição vem aqui", imagem: "https://img.freepik.com/fotos-gratis/corte-partes-alaranjadas-e-frutas-inteiras-com-folhas-verdes_74855-5381.jpg?w=740&t=st=1681317876~exp=1681318476~hmac=79834be6b3fdb34bf0112dee0c815b6d6e35cef63cb60a1699c948b2f6722d95"}
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