import React from 'react';
import './App.css';
import CardPequeno from './components/CardPequeno/cardPequeno';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFNTRixTlCZOA/profile-displayphoto-shrink_800_800/0/1592835168420?e=1620864000&v=beta&t=G8J2CfFLOhcnfT_hAJL5X85ciWCNY072boqV0fIxjeU" 
          nome="Gabriel Mina da Silva" 
          descricao="Oi, eu sou o Gabriel.Sou estudante da Labenu , apaixonado por tecnologia e os resultados que ela promove para a sociedade. Busco crescimento profissional na área de desenvolvimento back-end e testes automatizados."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        
      </div>
      <div className="page-section-container">
          <CardPequeno 
            nome="EMAIL:gabrielmina118@gmail.com"
            descricao="Endereço: Rua das acerolas,90- Caçapava"
          />
      </div>
      
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
