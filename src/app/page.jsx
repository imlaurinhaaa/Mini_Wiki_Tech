import React from 'react';
import Cards from '../components/Cards/Cards'; 
import styles from './page.module.css';      


const cardData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
    name: 'Relógio Clássico',
    description: 'Um design atemporal que combina elegância e precisão para o seu dia a dia.',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    name: 'Smartwatch Moderno',
    description: 'Fique conectado e monitore sua saúde com a mais alta tecnologia no seu pulso.',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80',
    name: 'Câmera Vintage',
    description: 'Capture momentos com estilo e qualidade de imagem que evocam nostalgia.',
  },

  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&q=80',
    name: 'Fones de Ouvido Bluetooth',
    description: 'Experimente a liberdade sem fio com qualidade de som excepcional.',
  },

  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&q=80',
    name: 'Cadeira Ergonomica',
    description: 'Conforto e estilo para o seu home office.',
  }
];

export default function Page() {
  return (
    <main className={styles.pageContainer}>
      <h1 className={styles.pageTitle}>Teste</h1>
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