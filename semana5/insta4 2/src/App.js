import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post 
            nomeUsuario={'Gabriel'}
            fotoUsuario={'https://conteudo.imguol.com.br/c/entretenimento/16/2017/06/27/naruto-1498593686428_v2_900x506.png'}
            fotoPost={'https://criticalhits.com.br/wp-content/uploads/2021/01/boruto-54-ler-online.jpg'}
        />
        <Post 
            nomeUsuario={'Anderson'}
            fotoUsuario={'https://www.einerd.com.br/wp-content/uploads/2017/10/Naruto_Uzumaki-890x466.jpg'}
            fotoPost={'https://i1.wp.com/narutokonoha.com/wp-content/uploads/2019/10/Assista-a-luta-completa-de-Naruto-vs-Pain-online.jpg?w=1280&ssl=1'}
        />
      </div>
    );
  }
}
export default App;