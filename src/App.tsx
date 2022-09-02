import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

//author: { avatar_url: "", name: "", role: "" }
//publishedAt: Date
//content: String

//array de objetos
const posts = 
[
  {
    id: 1,
    author: 
    { 
      avatarUrl: 'https://github.com/LucasCCA.png',
      name: 'Pessoa 1',
      role: 'Dev Front-End'
    },
    content: [
    { type: 'paragraph', content: 'Fala galeraa 👋' },
    { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
    { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-08-03 20:00:00'),
  },
  {
    id: 2,
    author: 
    { 
      avatarUrl: 'https://github.com/LucasCCA.png',
      name: 'Pessoa 2',
      role: 'Desenvolvedor'
    },
    content: [
    { type: 'paragraph', content: 'Teste de texto diferente' },
    { type: 'link', content: 'jane.design/outrolink' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];


//iteração (repetir alguma coisa)

export function App() { //Componente (funçao que retorna html) - .jsx = JS + XML
  return ( //Nao da para colocar o mesmo component um embaixo do outro sem algo entre eles (no caso a div)
    <div> 
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>      
    </div>
  )
}

