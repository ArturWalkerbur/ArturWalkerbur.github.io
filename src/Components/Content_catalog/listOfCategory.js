import {productsImg} from '../../assets/imgs/productsImg.js';



export const listOfCategory = {
  cats: [
    'Товары для кошек',
    [
      {
        id: 6,
        img: productsImg[0],
        title: 'Felix Sensation,кусочки индейки с беконом в соусе для кошек,пауч 85гр.',
        price: '15000'
      },
      {
        id: 7,
        img: productsImg[1],
        title: 'Kitekat сухой корм для кошек Мясной пир,уп.1,9 кг.',
        price: '7400'
      },
      {
        id: 8,
        img: productsImg[2],
        title: 'Whiskas,влажный корм для котят желе с телятиной,уп.28*85 гр.',
        price: '8100'
      }
    ]
  ],
  dogs: [
    'Товары для собак',
    [
      {
        id: 9,
        img: productsImg[3],
        title: 'ROYAL CANIN GIANT ADULT ДЛЯ ВЗРОСЛЫХ СОБАК ГИГАНТСКИХ ПОРОД',
        price: '4500'
      },
      {
        id: 10,
        img: productsImg[4],
        title: 'TRIOL ЛЕЖАНКА ОВАЛЬНАЯ "СКАЗОЧНЫЙ ЛЕС"',
        price: '21000'
      }
    ]
    
  ],
  rats: [
    'Товары для грызунов',
    [
      {
        id: 11,
        img: productsImg[5],
        title: 'TRIOL КОЛЕСО БЕГОВОЕ ДЛЯ МЕЛКИХ ЖИВОТНЫХ WL',
        price: '9899'
      }
    ]
  ],
  birds: [
    'Товары для птиц',
    [
      {
        id: 12,
        img: productsImg[6],
        title: 'PADOVAN GRANDMIX PARROCCHETTI КОРМ ДЛЯ СРЕДНИХ ПОПУГАЕВ',
        price: '4990'
      }
    ]
  ],
  fishes: [
    'Товары для рыб',
    [
      {
        id: 13,
        img: productsImg[7],
        title: 'AQUAEL ВНУТРЕННИЙ ФИЛЬТР FAN',
        price: '9990'
      }
    ]
  ],
  reptiles: [
    'Товары для рептили',
    [
      {
        id: 14,
        img: productsImg[8],
        title: 'Террариум Зооэкспресс 42*30,5*22,5',
        price: '16990'
      }
    ]
  ]

};