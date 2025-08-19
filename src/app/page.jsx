import React from 'react';
import Cards from '../components/Cards/Cards'; 
import styles from './page.module.css';      


const cardData = [
  {
    id: 1,
    image: '/images/anacarolina.jpeg',
    name: 'Ana Carolina',
    description: 'Descubra mais sobre a tecnologia do Next.js',
  },
  {
    id: 2,
    image: '/images/andrelucca.jpeg',
    name: 'André Lucca',
    description: 'Navegue pelo menu para descobrir mais sobre outras tecnologias.',
  },
  {
    id: 3,
    image: '/images/evelyn.jpeg',
    name: 'Evelyn Oliveira',
    description: 'Explore a versatilidade de bibliotecas em suas aplicações.',
  },

  {
    id: 4,
    image: '/images/giovanna.jpeg',
    name: 'Giovanna Alba',
    description: 'Conheça Arquivos Especiais',
  },

  {
    id: 5,
    image: '/images/laura.jpg',
    name: 'Laura Violla',
    description: 'Descubra como implementar frameworks em suas aplicações.',
  }
];

export default function Page() {
  return (
    <main className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Mini Wiki Tech</h1>
      <div className={styles.cardGrid}>
        {cardData.map(card => (
          <Cards
            key={card.id}
            image={card.image}
            name={card.name}
            description={card.description}
          />
        ))}
      </div>
    </main>
  );
}