import React from 'react';
import JerseyCard from './JerseyCard'; // Assuming this is where your JerseyCard component is
import './pages/JerseysPage.css'; // Ensure you have proper CSS for this page

const jerseys = [
  {
    team: 'Barcelona',
    kits: [
      {
        id: 'barcelona-home',
        name: 'Home',
        image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9a477f39-480c-41e8-9937-0e9e20312167/FCB+M+NK+DF+JSY+SS+STAD+HM.png',
        price: '₹990',
      },
      {
        id: 'barcelona-away',
        name: 'Away',
        image: 'https://store.fcbarcelona.com/cdn/shop/files/25200C_1.jpg?v=1725428228&width=823',
        price: '₹990',
      },
      {
        id: 'barcelona-third',
        name: 'Third',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bfdb91ed-c760-4b5c-be6a-70921fb6bd09/FCB+M+NK+DF+STAD+JSY+SS+3R.png',
        price: '₹990',
      },
    ],
  },
  {
    team: 'Liverpool',
    kits: [
      {
        id: 'liverpool-home',
        name: 'Home',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35d0a3e6-c33c-46d2-9b60-a6418f50fd4c/liverpool-fc-2024-25-match-home-dri-fit-adv-football-authentic-shirt-0Xqfz6.png',
        price: '₹985',
      },
      {
        id: 'liverpool-away',
        name: 'Away',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9e4a84f8-7d22-40bb-9f29-f9e06ea881b1/liverpool-fc-2024-25-match-away-dri-fit-adv-football-authentic-shirt-WZ4xp0.png',
        price: '₹985',
      },
      {
        id: 'liverpool-third',
        name: 'Third',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTncupGEnbWEvI44InKrMN10-pbEcOtpC1-ZLmqJmOTgta-ypXlRwWQ6JcT71hIZVB5c6h0ogPPVg3tGNsgigpvT8rtAt-_YLKME894HViw',
        price: '₹985',
      },
    ],
  },
  {
    team: 'Real Madrid',
    kits: [
      {
        id: 'real-madrid-home',
        name: 'Home',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bba09c80cdf3416c9957d5ea0dee0738_9366/Real_Madrid_24-25_Home_Jersey_White_IU5011_HM1.jpg',
        
        price: '₹850',
      },
      {
        id: 'real-madrid-away',
        name: 'Away',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3308086a783f43b2a6b309b13c693f71_9366/Real_Madrid_24-25_Away_Jersey_Orange_IU5013_HM1.jpg',

        price: '₹850',
      },
      {
        id: 'real-madrid-third',
        name: 'Third',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bbadcee6603b486b87cbbfb564b8b329_9366/Real_Madrid_24-25_Third_Jersey_Brown_IY1763_HM1.jpg',
        
        price: '₹850',
      },
    ],
  },
  {
    team: 'Bayern Munich',
    kits: [
      {
        id: 'bayern-home',
        name: 'Home',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08878adbb6194d28acf0245d8506a0e4_9366/FC_Bayern_24-25_Home_Jersey_Red_IT8511_HM1.jpg',
        
        price: '₹995',
      },
      {
        id: 'bayern-away',
        name: 'Away',
        image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4441248db9249189a9a7b0f5853c2e5_9366/fc-bayern-24-25-away-jersey.jpg',
        
        price: '₹995',
      },
      {
        id: 'bayern-third',
        name: 'Third',
        image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e43475199ede437780c5f5e5656faae0_9366/fc-bayern-24-25-third-jersey.jpg',
        
        price: '₹995',
      },
    ],
  },
  {
    team: 'Tottenham Hotspur',
    kits: [
      {
        id: 'tottenham-home',
        name: 'Home',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/562aa8a3-2f99-4a69-89ae-f0e03a195e8f/tottenham-hotspur-2024-25-match-home-dri-fit-adv-authentic-football-shirt-5nqn6V.png',
        
        price: '₹980',
      },
      {
        id: 'tottenham-away',
        name: 'Away',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a754cb29-9b46-446e-89e2-99067680261d/tottenham-hotspur-2024-25-match-away-dri-fit-adv-football-authentic-shirt-9nJsNR.png',
        
        price: '₹980',
      },
      {
        id: 'tottenham-third',
        name: 'Third',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00945208-57d2-40b5-a331-64bf827781ff/tottenham-hotspur-2023-24-stadium-third-dri-fit-football-shirt-2xXvjb.png',
        
        price: '₹980',
      },
    ],
  },
  {
    team: 'Chelsea',
    kits: [
      {
        id: 'chelsea-home',
        name: 'Home',
        image: 'https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2024-25_ss5_p-200851164+u-canixtzkdetrqr6ldmyh+v-farrng6ubhvsnugxt69d.jpg?_hv=2&w=340',
        
        price: '₹985',
      },
      {
        id: 'chelsea-away',
        name: 'Away',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/48beb34d-6200-4325-b7d1-73cfa5721baa/chelsea-fc-2023-24-match-away-dri-fit-adv-football-shirt-2l80ZZ.png',
        
        price: '₹985',
      },
      {
        id: 'chelsea-third',
        name: 'Third',
        image: 'https://images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2024-25_ss5_p-201095783+u-vfx0sc8fgctpjop9net3+v-tg8sk8wxsgzqwkylvafl.jpg?_hv=2&w=340',
        
        price: '₹985',
      },
    ],
  },
  {
    team: 'Paris Saint-Germain',
    kits: [
      {
        id: 'psg-home',
        name: 'Home',
        image: 'https://static.nike.com/a/images/t_default/5faa6e3c-d726-4b8d-a547-fcb8811b459c/paris-saint-germain-2024-25-match-home-dri-fit-adv-football-shirt-5D5x7x.png',
        
        price: '₹850',
      },
      {
        id: 'psg-away',
        name: 'Away',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b961e16-8385-4949-9d55-c1ef1e15a97e/paris-saint-germain-2024-25-match-away-dri-fit-adv-football-authentic-shirt-5dVNrT.png',
        
        price: '₹850',
      },
      {
        id: 'psg-third',
        name: 'Third',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c84dbba1-6217-4ca5-bbcf-e01840aa1ca9/paris-saint-germain-academy-pro-home-dri-fit-football-pre-match-short-sleeve-top-TfmG5Z.png',
        
        price: '₹850',
      },
    ],
  },
  {
    team: 'Manchester City',
    kits: [
      {
        id: 'manchester-city-home',
        name: 'Home',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/775050/01/mod01/fnd/IND/fmt/png/Manchester-City-24/25-Men',
        
        price: '₹990',
      },
      {
        id: 'manchester-city-away',
        name: 'Away',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/775086/02/mod01/fnd/IND/fmt/png/Manchester-City-24/25-Away-Mens-Football-Jersey',
        
        price: '₹990',
      },
      {
        id: 'manchester-city-third',
        name: 'Third',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/775096/03/mod01/fnd/IND/fmt/png/Manchester-City-24/25-Authentic-Third-Mens-Football-Jersey',
        
        price: '₹990',
      },
    ],
  },
  {
    team: 'Manchester United',
    kits: [
      {
        id: 'manchester-united-home',
        name: 'Home',
        image: 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb34e2d7ef774076b2384c4aecc3c090_9366/manchester-united-24-25-home-jersey.jpg',
        
        price: '₹985',
      },
      {
        id: 'manchester-united-away',
        name: 'Away',
        image: 'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-away-shirt-2024-25_ss5_p-200954459+u-rbkpal1cgg4uvmqqszaf+v-j0oe5ouoevl5g8zn1may.jpg?_hv=2&w=340',
        
        price: '₹985',
      },
      {
        id: 'manchester-united-third',
        name: 'Third',
        image: 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/00807ed890c5497f89bbcd4bae02a308_9366/manchester-united-24-25-third-jersey.jpg',
        
        price: '₹985',
      },
    ],
  },
  {
    team: 'Spain',
    kits: [
      {
        id: 'spain-home',
        name: 'Home',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb20923633b7495cab7e7c2a456de4d2_9366/Spain_24_Home_Jersey_Red_IP9331_21_model.jpg',
        price: '₹995',
      },
      {
        id: 'spain-away',
        name: 'Away',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d42f520be50444858f01d8fa75dfd29a_9366/Spain_24_Away_Jersey_Yellow_IS9033_21_model.jpg',
        price: '₹995',
      },
    ],
  },
  {
    team: 'Italy',
    kits: [
      {
        id: 'italy-home',
        name: 'Home',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/46564b4defef48258f218b189278576c_9366/Italy_24_Home_Jersey_Blue_IN0657_21_model.jpg',
        price: '₹850',
      },
      {
        id: 'italy-away',
        name: 'Away',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c278dc2839744765a5f6dba689caea21_9366/Italy_24_Away_Jersey_White_IN0656_21_model.jpg',
        price: '₹850',
      },
    ],
  },
  {
    team: 'Argentina',
    kits: [
      {
        id: 'argentina-home',
        name: 'Home',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05596cc5f7724da8946f5362652319d0_9366/Argentina_24_Home_Jersey_White_IP8409_21_model.jpg',
        price: '$80',
      },
      {
        id: 'argentina-away',
        name: 'Away',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRhkwGFifl0V-SaQMxqqGXDjvOxTVToi9qbflryCdFgjZ536a5XPEcesTesAXjBbxxIHJN0fGmlfkhJvgVFn_xikcprDyJ29g4WNKqH3oyJzeyOdWNTN6tDYA',
        price: '$80',
      },
      
    ],
  },
  {
    team: 'Portugal',
    kits: [
      {
        id: 'portugal-home',
        name: 'Home',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/34b61ef1-b966-4dd5-839b-9f91049553c1/portugal-2024-25-stadium-home-dri-fit-football-replica-shirt-GPSmc1.png',
        
        price: '₹990',
      },
      {
        id: 'portugal-away',
        name: 'Away',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fad5c87e-194c-4ebc-b554-e1bf9e763b75/portugal-2024-25-stadium-away-dri-fit-football-replica-shirt-MsxTFt.png',
        
        price: '₹990',
      },
    ],
  },
  {
    team: 'England',
    kits: [
      {
        id: 'england-home',
        name: 'Home',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/71dc7945-6668-4988-847d-a0dc072c7d3e/england-2024-25-stadium-home-dri-fit-football-replica-shirt-Rw5fxF.png',
        
        price: '₹980',
      },
      {
        id: 'england-away',
        name: 'Away',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c1612bf7-91aa-4c77-b85e-18c299e151fb/england-2024-25-stadium-away-dri-fit-football-replica-shirt-x0KhF4.png',
        
        price: '₹980',
      },
    ],
  },
  {
    team: 'Brazil',
    kits: [
      {
        id: 'brazil-home',
        name: 'Home',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d8cd5c8-12b2-42ac-9bdd-93549d1c5674/brazil-2024-stadium-home-dri-fit-football-replica-shirt-H8RX4k.png',
        
        price: '₹990',
      },
      {
        id: 'brazil-away',
        name: 'Away',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/364ce512-9a9f-43ba-abab-c9a0a7510f07/brazil-2024-stadium-away-dri-fit-football-replica-shirt-Lxzpkh.png',
        
        price: '₹990',
      },
    ],
  },
  {
    team: 'Germany',
    kits: [
      {
        id: 'germany-home',
        name: 'Home',
        image: 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/08a3d03008934eba9f4377c2e7a009df_9366/germany-24-home-jersey.jpg',
        
        price: '₹995',
      },
      {
        id: 'germany-away',
        name: 'Away',
        image: 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/b5d16914aa5e41029ea31f52e67587e1_9366/germany-24-away-jersey.jpg',
        
        price: '₹995',
      },
    ],
  },
  {
    team: 'Belgium',
    kits: [
      {
        id: 'belgium-home',
        name: 'Home',
        image: 'https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-home-shirt-2024_ss5_p-200793086+u-ljidle7q4io5gp4qqtbe+v-wxtjym5ks5vrmi2dgptu.jpg?_hv=2&w=340',
        
        price: '₹985',
      },
      {
        id: 'belgium-away',
        name: 'Away',
        image: 'https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-away-shirt-2024_ss5_p-200793094+u-moythd6wuge9b0wzceht+v-qjfpbxtywzuu7lqfhdcj.jpg?_hv=2&w=340',
        
        price: '₹985',
      },
    ],
  },
  {
    team: 'France',
    kits: [
      {
        id: 'france-home',
        name: 'Home',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/882bbc91-40e5-42fb-981c-ad94a8a0f7f4/fff-2024-25-stadium-home-dri-fit-football-replica-shirt-CRR56Z.png',
        price: '₹850',
      },
      {
        id: 'france-away',
        name: 'Away',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d17a52c6-4a53-455e-8915-42f84490d4c8/fff-2024-25-stadium-away-dri-fit-football-replica-shirt-3pBLcb.png',
        price: '₹850',
      },
    ],
  },
];

const JerseysPage = () => {
  return (
    <div className="jerseys-page">
      {jerseys.map((team) => (
        <div key={team.team} className="team-section">
          <h2>{team.team}</h2>
          <div className="jersey-row">
            {team.kits.map((kit) => (
              <JerseyCard
                key={kit.id}
                id={kit.id}
                name={`${team.team} ${kit.name}`}
                image={kit.image}
                price={kit.price}
              />
              
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default JerseysPage;
