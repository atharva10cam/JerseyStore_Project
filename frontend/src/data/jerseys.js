// src/data/jerseys.js

const jerseyData = {
  club: {
    Barcelona: [
      {
        id: 'barcelona-home',
        name: 'Barcelona Home Kit',
        image: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9a477f39-480c-41e8-9937-0e9e20312167/FCB+M+NK+DF+JSY+SS+STAD+HM.png',
        price: '990',
        material: '100% Polyester',
        quality: 'High-performance fabric designed for comfort and durability. Breathable and moisture-wicking.',
        clubInfo: 'FC Barcelona, founded in 1899, is one of the most successful and popular football clubs in the world. Known for its attacking style of play and its commitment to youth development.',
        history: 'Barcelona is renowned for its rich history, including numerous La Liga and UEFA Champions League titles. The club is a symbol of Catalan pride and has a passionate global fan base.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not use bleach. Iron on low heat. Do not tumble dry.',
        maintenanceTips: 'To maintain the jersey’s quality, avoid washing with harsh chemicals and store it in a cool, dry place. Avoid direct sunlight to prevent fading.',
        category: 'Club'
      },
      {
        id: 'barcelona-away',
        name: 'Barcelona Away Kit',
        image: 'https://store.fcbarcelona.com/cdn/shop/files/25200C_1.jpg?v=1725428228&width=823',
        price: '990',
        material: '100% Polyester',
        quality: 'Lightweight and breathable, ideal for high-intensity games. Offers excellent moisture management.',
        clubInfo: 'FC Barcelona’s away kit is designed to be worn during matches played away from their home stadium, Camp Nou. The kit reflects the club’s iconic style and commitment to excellence.',
        history: 'The away kit is part of Barcelona’s rich tradition, representing the club in various domestic and international competitions away from home.',
        washingGuidelines: 'Machine wash cold. Do not bleach. Iron inside out on low heat. Do not dry clean.',
        maintenanceTips: 'Keep the jersey away from abrasive surfaces and wash with a gentle detergent to preserve its color and fabric integrity.',
        category: 'Club'
      },
      {
        id: 'barcelona-third',
        name: 'Barcelona Third Kit',
        image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bfdb91ed-c760-4b5c-be6a-70921fb6bd09/FCB+M+NK+DF+STAD+JSY+SS+3R.png',
        price: '990',
        material: '100% Polyester',
        quality: 'Features advanced moisture-wicking technology and a sleek design for added comfort and performance.',
        clubInfo: 'The third kit of FC Barcelona is often used for special matches and tournaments. It provides a unique look that stands out from the home and away kits.',
        history: 'Introduced in various seasons, the third kit showcases Barcelona’s innovative design approach and commitment to excellence on and off the pitch.',
        washingGuidelines: 'Cold machine wash. Avoid bleach. Iron on low heat inside out. Do not tumble dry.',
        maintenanceTips: 'Store the jersey in a cool, dry place and avoid exposing it to extreme temperatures to maintain its shape and color.',
        category: 'Club'
      }
    ],
    Liverpool: [
      {
        id: 'liverpool-home',
        name: 'Liverpool Home Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35d0a3e6-c33c-46d2-9b60-a6418f50fd4c/liverpool-fc-2024-25-match-home-dri-fit-adv-football-authentic-shirt-0Xqfz6.png',
        price: '985',
        material: '100% Cotton',
        quality: 'Soft and comfortable with enhanced durability. Designed for both performance and everyday wear.',
        clubInfo: 'Liverpool FC, established in 1892, is one of England’s most prestigious football clubs. Known for its passionate fan base and historical success in domestic and international competitions.',
        history: 'Liverpool FC has a storied history with numerous English Premier League titles and UEFA Champions League victories. The club is celebrated for its rich tradition and footballing excellence.',
        washingGuidelines: 'Machine wash warm. Do not use bleach. Iron on medium heat. Do not tumble dry.',
        maintenanceTips: 'To keep the jersey in top condition, wash it with similar colors and avoid excessive wringing. Store it in a cool, dry place to prevent stretching and wear.',
        category: 'Club'
      },
      {
        id: 'liverpool-away',
        name: 'Liverpool Away Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9e4a84f8-7d22-40bb-9f29-f9e06ea881b1/liverpool-fc-2024-25-match-away-dri-fit-adv-football-authentic-shirt-WZ4xp0.png',
        price: '985',
        material: '100% Polyester',
        quality: 'Lightweight and breathable with moisture-wicking properties. Ideal for high-performance games.',
        clubInfo: 'The away kit represents Liverpool FC during away games, combining style with functionality for optimal performance.',
        history: 'Liverpool’s away kit is a part of the club’s extensive history, used in various domestic and European fixtures away from Anfield.',
        washingGuidelines: 'Machine wash cold. Do not bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'Avoid washing with harsh chemicals and hang dry to maintain the fabric’s integrity and color.',
        category: 'Club'
      },
      {
        id: 'liverpool-third',
        name: 'Liverpool Third Kit',
        image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTncupGEnbWEvI44InKrMN10-pbEcOtpC1-ZLmqJmOTgta-ypXlRwWQ6JcT71hIZVB5c6h0ogPPVg3tGNsgigpvT8rtAt-_YLKME894HViw',
        price: '985',
        material: '100% Polyester',
        quality: 'Designed with advanced technology for comfort and durability. Perfect for both game and casual wear.',
        clubInfo: 'Liverpool’s third kit offers a unique look for special occasions and alternate matches, showcasing the club’s innovative design.',
        history: 'The third kit highlights Liverpool’s commitment to style and performance, adding a distinctive touch to their wardrobe of kits.',
        washingGuidelines: 'Machine wash cold with similar colors. Iron inside out on low heat. Avoid tumble drying.',
        maintenanceTips: 'To preserve the jersey’s quality, avoid exposing it to direct sunlight and wash it with mild detergents.',
        category: 'Club'
      }
      
    ],
    RealMadrid: [
      {
        id: 'real-madrid-home',
        name: 'Real Madrid Home Kit',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bba09c80cdf3416c9957d5ea0dee0738_9366/Real_Madrid_24-25_Home_Jersey_White_IU5011_HM1.jpg',
        price: '995',
        material: '100% Polyester',
        quality: 'Breathable and durable fabric with moisture-wicking properties. Ideal for high-performance games.',
        clubInfo: 'Real Madrid CF, founded in 1902, is one of the most successful football clubs in history. Known for its star-studded lineup and numerous UEFA Champions League titles.',
        history: 'Real Madrid has a rich history of success, including numerous La Liga and Champions League titles. The club is renowned for its prestigious reputation and global fan base.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron on low heat. Do not tumble dry.',
        maintenanceTips: 'To keep the jersey in optimal condition, avoid using harsh detergents and store it in a cool, dry place.',
        category: 'Club'
      },
      {
        id: 'real-madrid-away',
        name: 'Real Madrid Away Kit',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3308086a783f43b2a6b309b13c693f71_9366/Real_Madrid_24-25_Away_Jersey_Orange_IU5013_HM1.jpg',
        price: '995',
        material: '100% Polyester',
        quality: 'Lightweight and moisture-wicking with advanced performance features. Designed for both comfort and style.',
        clubInfo: 'The Real Madrid away kit is designed for matches away from Santiago Bernabéu Stadium, reflecting the club’s high standards and stylish design.',
        history: 'Used in various domestic and international fixtures, the away kit is a staple in Real Madrid’s collection, showcasing the club’s commitment to excellence.',
        washingGuidelines: 'Machine wash cold. Do not bleach. Iron inside out on low heat. Do not dry clean.',
        maintenanceTips: 'Avoid exposing the jersey to extreme temperatures and wash with mild detergent to preserve its quality.',
        category: 'Club'
      },
      {
        id: 'real-madrid-third',
        name: 'Real Madrid Third Kit',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/bbadcee6603b486b87cbbfb564b8b329_9366/Real_Madrid_24-25_Third_Jersey_Brown_IY1763_HM1.jpg',
        price: '995',
        material: '100% Polyester',
        quality: 'Features advanced technology for comfort and durability. Ideal for both performance and casual wear.',
        clubInfo: 'Real Madrid’s third kit offers a unique design for special matches and events, complementing the club’s prestigious image.',
        history: 'The third kit is part of Real Madrid’s diverse kit collection, known for its innovative design and performance features.',
        washingGuidelines: 'Cold machine wash. Do not use bleach. Iron on low heat inside out. Do not tumble dry.',
        maintenanceTips: 'Store the jersey in a cool, dry place and avoid exposing it to harsh conditions to maintain its quality.',
        category: 'Club'
      }
    ],
    BayernMunich: [
      {
        id: 'bayern-munich-home',
        name: 'Bayern Munich Home Kit',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/08878adbb6194d28acf0245d8506a0e4_9366/FC_Bayern_24-25_Home_Jersey_Red_IT8511_HM1.jpg',
        price: '850',
        material: '100% Polyester',
        quality: 'High-quality fabric with moisture-wicking technology. Designed for both performance and style.',
        clubInfo: 'FC Bayern Munich, founded in 1900, is one of Germany’s most successful football clubs, known for its dominance in domestic and European competitions.',
        history: 'Bayern Munich has a storied history with numerous Bundesliga titles and UEFA Champions League victories, establishing itself as a football powerhouse.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron on low heat. Do not tumble dry.',
        maintenanceTips: 'Avoid harsh chemicals and excessive heat when washing. Store the jersey properly to maintain its shape and color.',
        category: 'Club'
      },
      {
        id: 'bayern-munich-away',
        name: 'Bayern Munich Away Kit',
        image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/f4441248db9249189a9a7b0f5853c2e5_9366/fc-bayern-24-25-away-jersey.jpg',
        price: '850',
        material: '100% Polyester',
        quality: 'Breathable and lightweight with advanced moisture management features. Ideal for high-performance play.',
        clubInfo: 'The away kit represents Bayern Munich during away games, combining style with performance for optimal results on the pitch.',
        history: 'The away kit is a key part of Bayern Munich’s apparel, used in various domestic and international matches.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'To extend the life of the jersey, wash it with mild detergent and avoid exposing it to direct sunlight.',
        category: 'Club'
      },
      {
        id: 'bayern-munich-third',
        name: 'Bayern Munich Third Kit',
        image: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/e43475199ede437780c5f5e5656faae0_9366/fc-bayern-24-25-third-jersey.jpg',
        price: '850',
        material: '100% Polyester',
        quality: 'Designed with advanced technology for comfort and durability. Perfect for both performance and casual use.',
        clubInfo: 'Bayern Munich’s third kit provides a unique design for special fixtures, reflecting the club’s innovative approach to football apparel.',
        history: 'The third kit is part of Bayern Munich’s diverse range of jerseys, showcasing their commitment to excellence and style.',
        washingGuidelines: 'Machine wash cold. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'Store the jersey in a cool, dry environment and avoid excessive heat and direct sunlight to preserve its quality.',
        category: 'Club'
      }
    ],
    TottenhamHotspur: [
      {
        id: 'tottenham-hotspur-home',
        name: 'Tottenham Hotspur Home Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/562aa8a3-2f99-4a69-89ae-f0e03a195e8f/tottenham-hotspur-2024-25-match-home-dri-fit-adv-authentic-football-shirt-5nqn6V.png',
        price: '980',
        material: '100% Polyester',
        quality: 'Soft and durable fabric with moisture-wicking properties. Designed for high performance and comfort.',
        clubInfo: 'Tottenham Hotspur FC, established in 1882, is a prominent English football club known for its exciting attacking play and passionate fan base.',
        history: 'Tottenham Hotspur has a proud history in English football, including numerous domestic and European competitions. The club is known for its competitive spirit and thrilling matches.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron on low heat inside out. Do not tumble dry.',
        maintenanceTips: 'To maintain the jersey’s quality, wash it with mild detergents and store it in a cool, dry place.',
        category: 'Club'
      },
      {
        id: 'tottenham-hotspur-away',
        name: 'Tottenham Hotspur Away Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a754cb29-9b46-446e-89e2-99067680261d/tottenham-hotspur-2024-25-match-away-dri-fit-adv-football-authentic-shirt-9nJsNR.png',
        price: '980',
        material: '100% Polyester',
        quality: 'Breathable and lightweight with advanced moisture management. Perfect for both performance and casual wear.',
        clubInfo: 'The away kit is used during matches away from Tottenham Hotspur Stadium, reflecting the club’s commitment to performance and style.',
        history: 'Tottenham’s away kit is an integral part of their apparel range, used in various domestic and international fixtures.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron inside out on low heat. Do not dry clean.',
        maintenanceTips: 'Avoid exposing the jersey to harsh chemicals and hang dry to maintain its quality and fit.',
        category: 'Club'
      },
      {
        id: 'tottenham-hotspur-third',
        name: 'Tottenham Hotspur Third Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/00945208-57d2-40b5-a331-64bf827781ff/tottenham-hotspur-2023-24-stadium-third-dri-fit-football-shirt-2xXvjb.png',
        price: '980',
        material: '100% Polyester',
        quality: 'Designed with advanced technology for comfort and durability. Ideal for both high-performance play and casual wear.',
        clubInfo: 'Tottenham Hotspur’s third kit offers a distinctive design for special occasions, showcasing the club’s innovative approach to football apparel.',
        history: 'The third kit is a part of Tottenham’s collection, known for its stylish design and commitment to performance.',
        washingGuidelines: 'Machine wash cold. Do not bleach. Iron on low heat inside out. Do not tumble dry.',
        maintenanceTips: 'Store in a cool, dry place and avoid direct sunlight to maintain the jersey’s appearance and fit.',
        category: 'Club'
      }
    ],
    Chelsea: [
      {
        id: 'chelsea-home',
        name: 'Chelsea Home Kit',
        image: 'https://images.footballfanatics.com/chelsea/chelsea-nike-home-stadium-shirt-2024-25_ss5_p-200851164+u-canixtzkdetrqr6ldmyh+v-farrng6ubhvsnugxt69d.jpg?_hv=2&w=340',
        price: '850',
        material: '100% Polyester',
        quality: 'Comfortable and durable fabric designed for high performance. Features advanced moisture-wicking technology.',
        clubInfo: 'Chelsea FC, founded in 1905, is a major English football club known for its competitive play and numerous domestic and international trophies.',
        history: 'Chelsea has a storied history with several Premier League titles, FA Cups, and a UEFA Champions League victory.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'Use mild detergent and avoid exposing the jersey to high temperatures or harsh chemicals.',
        category: 'Club',
      },
      {
        id: 'chelsea-away',
        name: 'Chelsea Away Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/48beb34d-6200-4325-b7d1-73cfa5721baa/chelsea-fc-2023-24-match-away-dri-fit-adv-football-shirt-2l80ZZ.png',
        price: '850',
        material: '100% Polyester',
        quality: 'Breathable and lightweight with moisture management features. Ideal for both sports and casual wear.',
        clubInfo: 'Chelsea’s away kit is designed to reflect the club’s modern aesthetic while ensuring optimal comfort and performance.',
        history: 'The away kit is a crucial aspect of Chelsea’s apparel, representing the club in various away fixtures.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'To keep the jersey in top condition, wash with mild detergent and store in a cool, dry place.',
        category: 'Club',
      },
      {
        id: 'chelsea-third',
        name: 'Chelsea Third Kit',
        image: 'https://images.footballfanatics.com/chelsea/chelsea-nike-away-stadium-shirt-2024-25_ss5_p-201095783+u-vfx0sc8fgctpjop9net3+v-tg8sk8wxsgzqwkylvafl.jpg?_hv=2&w=340',
        price: '850',
        material: '100% Polyester',
        quality: 'Designed for comfort and style with advanced fabric technology. Perfect for both high-intensity play and casual use.',
        clubInfo: 'Chelsea’s third kit features a distinctive design for select matches, showcasing the club’s innovative spirit.',
        history: 'Part of Chelsea’s diverse range of kits, known for its unique design and excellent performance characteristics.',
        washingGuidelines: 'Machine wash cold. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'Keep away from direct sunlight and excessive heat to preserve the jersey’s quality.',
        category: 'Club',
      }
    ],
    ParisSaintGermain: [
      {
        id: 'psg-home',
        name: 'PSG Home Kit',
        image: 'https://static.nike.com/a/images/t_default/5faa6e3c-d726-4b8d-a547-fcb8811b459c/paris-saint-germain-2024-25-match-home-dri-fit-adv-football-shirt-5D5x7x.png',
        price: '850',
        material: '100% Polyester',
        quality: 'Features advanced moisture-wicking technology and a comfortable fit. Ideal for both performance and leisure.',
        clubInfo: 'Paris Saint-Germain (PSG), founded in 1970, is a prominent French club known for its strong domestic performance and growing European presence.',
        history: 'PSG has achieved significant domestic success and aims to secure its first UEFA Champions League title.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'Avoid high temperatures and harsh chemicals to maintain the jersey’s quality.',
        category: 'Club',
      },
      {
        id: 'psg-away',
        name: 'PSG Away Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2b961e16-8385-4949-9d55-c1ef1e15a97e/paris-saint-germain-2024-25-match-away-dri-fit-adv-football-authentic-shirt-5dVNrT.png',
        price: '850',
        material: '100% Polyester',
        quality: 'Breathable fabric with advanced moisture control. Suitable for both game days and casual wear.',
        clubInfo: 'The away kit reflects PSG’s dynamic image while providing comfort and functionality for various settings.',
        history: 'Used in domestic and international competitions, the away kit complements PSG’s overall apparel range.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'Wash with mild detergent and store in a cool, dry place to preserve its quality.',
        category: 'Club',
      },
      {
        id: 'psg-third',
        name: 'PSG Third Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c84dbba1-6217-4ca5-bbcf-e01840aa1ca9/paris-saint-germain-academy-pro-home-dri-fit-football-pre-match-short-sleeve-top-TfmG5Z.png',
        price: '850',
        material: '100% Polyester',
        quality: 'Designed for performance and style with advanced fabric technology. Ideal for various occasions.',
        clubInfo: 'PSG’s third kit is crafted with a unique design for special occasions, reflecting the club’s innovative approach.',
        history: 'Part of PSG’s diverse kit collection, known for its stylish design and high-performance attributes.',
        washingGuidelines: 'Machine wash cold. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'Avoid direct sunlight and high temperatures to maintain the jersey’s appearance and quality.',
        category: 'Club',
      }
    ],
    ManchesterUnited:[
      {
        id: 'man-utd-home',
        name: 'Manchester United Home Kit',
        image: 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/bb34e2d7ef774076b2384c4aecc3c090_9366/manchester-united-24-25-home-jersey.jpg',
        price: '850',
        material: '100% Polyester',
        quality: 'Comfortable and durable with advanced moisture-wicking properties. Designed for optimal performance on the pitch.',
        clubInfo: 'Manchester United, founded in 1878, is one of the most successful football clubs in England, known for its rich history and global fan base.',
        history: 'The club has numerous Premier League titles, FA Cups, and three UEFA Champions League victories.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'Use mild detergent and avoid exposing the jersey to excessive heat or harsh chemicals.',
        category: 'Club',
      },
      {
        id: 'man-utd-away',
        name: 'Manchester United Away Kit',
        image: 'https://images.footballfanatics.com/manchester-united/manchester-united-adidas-away-shirt-2024-25_ss5_p-200954459+u-rbkpal1cgg4uvmqqszaf+v-j0oe5ouoevl5g8zn1may.jpg?_hv=2&w=340',
        price: '850',
        material: '100% Polyester',
        quality: 'Breathable and lightweight with advanced moisture control. Ideal for both performance and casual wear.',
        clubInfo: 'Manchester United’s away kit blends style and functionality, representing the club in various away fixtures.',
        history: 'This kit is a key part of Manchester United’s apparel, used in domestic and international competitions.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'To maintain quality, wash with mild detergent and store in a cool, dry place.',
        category: 'Club',
      },
      {
        id: 'man-utd-third',
        name: 'Manchester United Third Kit',
        image: 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/00807ed890c5497f89bbcd4bae02a308_9366/manchester-united-24-25-third-jersey.jpg',
        price: '850',
        material: '100% Polyester',
        quality: 'Designed for comfort and performance with advanced fabric technology. Suitable for various occasions.',
        clubInfo: 'Manchester United’s third kit offers a distinctive design for special matches, reflecting the club’s innovative style.',
        history: 'The third kit is part of Manchester United’s extensive kit range, known for its unique designs and performance features.',
        washingGuidelines: 'Machine wash cold. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'Avoid exposure to high temperatures and harsh chemicals to preserve the jersey’s quality.',
        category: 'Club',
      }
    ],
    ManchesterCity: [
      {
        id: 'manchester-city-home',
        name: 'Manchester City Home Kit',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/775050/01/mod01/fnd/IND/fmt/png/Manchester-City-24/25-Men',
        price: '990',
        material: '100% Polyester',
        quality: 'Comfortable and durable fabric with excellent moisture-wicking properties. Designed for optimal performance.',
        clubInfo: 'Manchester City FC, founded in 1880, is one of England’s top football clubs, known for its exciting attacking style and recent success in domestic and European competitions.',
        history: 'Manchester City has a rich history with multiple Premier League titles and domestic cups, making it a formidable team in English football.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'Wash with mild detergent and avoid exposing the jersey to excessive heat or harsh chemicals.',
        category: 'Club'
      },
      {
        id: 'manchester-city-away',
        name: 'Manchester City Away Kit',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/775086/02/mod01/fnd/IND/fmt/png/Manchester-City-24/25-Away-Mens-Football-Jersey',
        price: '990',
        material: '100% Polyester',
        quality: 'Breathable and lightweight with advanced moisture control. Ideal for both performance and casual wear.',
        clubInfo: 'Manchester City’s away kit combines style with performance for games away from home, reflecting the club’s modern and dynamic image.',
        history: 'The away kit is a crucial part of Manchester City’s apparel range, used in various domestic and international fixtures.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'To maintain the jersey’s quality, wash it with mild detergent and store it in a cool, dry place.',
        category: 'Club'
      },
      {
        id: 'manchester-city-third',
        name: 'Manchester City Third Kit',
        image: 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/775096/03/mod01/fnd/IND/fmt/png/Manchester-City-24/25-Authentic-Third-Mens-Football-Jersey',
        price: '990',
        material: '100% Polyester',
        quality: 'Designed with advanced technology for comfort and performance. Suitable for both high-intensity play and casual wear.',
        clubInfo: 'Manchester City’s third kit features a unique design for special matches, showcasing the club’s innovative approach to football apparel.',
        history: 'The third kit is part of Manchester City’s diverse collection, known for its stylish design and commitment to performance.',
        washingGuidelines: 'Machine wash cold. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'Store in a cool, dry place and avoid exposing it to direct sunlight to preserve its quality.',
        category: 'Club'
      }
    ]
    // Add more clubs here
  },
  national: {
    Argentina: [
      {
        id: 'argentina-home',
        name: 'Argentina Home Kit',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/05596cc5f7724da8946f5362652319d0_9366/Argentina_24_Home_Jersey_White_IP8409_21_model.jpg',
        price: '$80',
        material: '100% Polyester',
        quality: 'Premium quality fabric for maximum comfort and durability. Breathable and lightweight.',
        clubInfo: 'Argentina National Team is renowned for its footballing talent and has a rich history in international football, including winning the FIFA World Cup.',
        history: 'The Argentina Home Kit represents the team’s pride and legacy, worn during home matches in major tournaments.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron on low heat. Do not tumble dry.',
        maintenanceTips: 'Store the jersey in a dry, cool place and avoid washing with abrasive materials to maintain its quality.',
        category: 'National'
      },
      {
        id: 'argentina-away',
        name: 'Argentina Away Kit',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRhkwGFifl0V-SaQMxqqGXDjvOxTVToi9qbflryCdFgjZ536a5XPEcesTesAXjBbxxIHJN0fGmlfkhJvgVFn_xikcprDyJ29g4WNKqH3oyJzeyOdWNTN6tDYA',
        price: '$80',
        material: '100% Polyester',
        quality: 'Lightweight and moisture-wicking, designed for high performance and comfort.',
        clubInfo: 'The Argentina Away Kit is used during away matches, showcasing the team’s colors and emblem in a stylish design.',
        history: 'This kit represents Argentina’s international stature and is worn with pride in away games and tournaments.',
        washingGuidelines: 'Machine wash cold. Do not bleach. Iron inside out on low heat. Do not dry clean.',
        maintenanceTips: 'Wash the jersey with mild detergent and avoid exposure to direct sunlight to prevent fading.',
        category: 'National'
      },
    ],
    Portugal: [
      {
        id: 'portugal-home',
        name: 'Portugal Home Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/34b61ef1-b966-4dd5-839b-9f91049553c1/portugal-2024-25-stadium-home-dri-fit-football-replica-shirt-GPSmc1.png',
        price: '990',
        material: '100% Polyester',
        quality: 'Made with lightweight and breathable fabric. Features advanced moisture control for high performance.',
        clubInfo: 'The Portugal national team, known for its skilled players and tactical prowess, has achieved significant success on the international stage, including winning the UEFA Euro 2016.',
        history: 'Portugal has a rich football history with a strong presence in international tournaments and a recent surge in success.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'To keep the jersey in good condition, wash with mild detergent and store in a cool, dry place.',
        category: 'National Team',
      },
      {
        id: 'portugal-away',
        name: 'Portugal Away Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fad5c87e-194c-4ebc-b554-e1bf9e763b75/portugal-2024-25-stadium-away-dri-fit-football-replica-shirt-MsxTFt.png',
        price: '990',
        material: '100% Polyester',
        quality: 'Breathable and lightweight fabric with moisture-wicking technology. Suitable for both high performance and casual wear.',
        clubInfo: 'The away kit features a modern design, representing Portugal’s growing reputation in international football.',
        history: 'Portugal’s away kit is used in various international matches and reflects the team’s competitive spirit.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'Wash with mild detergent and avoid direct sunlight to maintain the jersey’s quality.',
        category: 'National Team',
      },
    ],
    Spain: [
      {
        id: 'spain-home',
        name: 'Spain Home Kit',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb20923633b7495cab7e7c2a456de4d2_9366/Spain_24_Home_Jersey_Red_IP9331_21_model.jpg',
        price: '995',
        material: '100% Polyester',
        quality: 'Breathable and comfortable fabric designed for optimal performance.',
        clubInfo: 'Spain’s home kit features a vibrant red color with subtle design elements that reflect the team’s rich heritage.',
        history: 'The Spain Home Kit is worn during international matches and showcases the team’s prestigious football history.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'To maintain the jersey’s color and fabric quality, wash with mild detergent and avoid direct sunlight.',
        category: 'National Team'
      },
      {
        id: 'spain-away',
        name: 'Spain Away Kit',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d42f520be50444858f01d8fa75dfd29a_9366/Spain_24_Away_Jersey_Yellow_IS9033_21_model.jpg',
        price: '995',
        material: '100% Polyester',
        quality: 'Lightweight and moisture-wicking, designed for comfort and high performance.',
        clubInfo: 'Spain’s away kit features a bright yellow design, representing the team during away matches and major tournaments.',
        history: 'The away kit continues Spain’s tradition of innovative and stylish football apparel.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron inside out on low heat. Do not dry clean.',
        maintenanceTips: 'Store in a cool, dry place and avoid harsh chemicals to keep the jersey in top condition.',
        category: 'National Team'
      }
    ],
    Italy: [
      {
        id: 'italy-home',
        name: 'Italy Home Kit',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/46564b4defef48258f218b189278576c_9366/Italy_24_Home_Jersey_Blue_IN0657_21_model.jpg',
        price: '850',
        material: '100% Polyester',
        quality: 'High-quality fabric with excellent breathability and comfort.',
        clubInfo: 'Italy’s home kit features a classic blue design with gold accents, reflecting the team’s prestigious football legacy.',
        history: 'The Italy Home Kit is a symbol of the team’s rich history and success in international football.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'To preserve the jersey’s color and fabric, wash with mild detergent and avoid direct sunlight.',
        category: 'National Team'
      },
      {
        id: 'italy-away',
        name: 'Italy Away Kit',
        image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c278dc2839744765a5f6dba689caea21_9366/Italy_24_Away_Jersey_White_IN0656_21_model.jpg',
        price: '850',
        material: '100% Polyester',
        quality: 'Lightweight and comfortable with advanced moisture-wicking technology.',
        clubInfo: 'Italy’s away kit features a clean white design with subtle blue accents, used during away matches and international tournaments.',
        history: 'The away kit represents Italy’s commitment to style and performance on the global stage.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'Store in a cool, dry place and wash with mild detergents to maintain its quality.',
        category: 'National Team'
      }
    ],
    England: [
      {
        id: 'england-home',
        name: 'England Home Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/71dc7945-6668-4988-847d-a0dc072c7d3e/england-2024-25-stadium-home-dri-fit-football-replica-shirt-Rw5fxF.png',
        price: '990',
        material: '100% Polyester',
        quality: 'High-performance fabric with moisture-wicking properties for comfort and durability.',
        clubInfo: 'England’s home kit features the classic white with red accents, symbolizing the national team’s tradition and pride.',
        history: 'The home kit is worn during international fixtures at Wembley and showcases England’s rich footballing history.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'Wash with a mild detergent and avoid exposure to direct sunlight to maintain the jersey’s quality.',
        category: 'National Team'
      },
      {
        id: 'england-away',
        name: 'England Away Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c1612bf7-91aa-4c77-b85e-18c299e151fb/england-2024-25-stadium-away-dri-fit-football-replica-shirt-x0KhF4.png',
        price: '990',
        material: '100% Polyester',
        quality: 'Breathable and lightweight, designed for high-performance play and comfort.',
        clubInfo: 'England’s away kit features a stylish design with navy blue accents, ideal for away games and international tournaments.',
        history: 'The away kit is part of England’s football heritage, used in various away matches and competitions.',
        washingGuidelines: 'Cold machine wash with similar colors. Do not bleach. Iron inside out on low heat. Do not dry clean.',
        maintenanceTips: 'Store in a cool, dry place and avoid washing with harsh chemicals to keep the jersey in top condition.',
        category: 'National Team'
      }
    ],
    Brazil: [
      {
        id: 'brazil-home',
        name: 'Brazil Home Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4d8cd5c8-12b2-42ac-9bdd-93549d1c5674/brazil-2024-stadium-home-dri-fit-football-replica-shirt-H8RX4k.png',
        price: '990',
        material: '100% Polyester',
        quality: 'Premium fabric with advanced moisture control for comfort and durability.',
        clubInfo: 'Brazil’s home kit features the iconic yellow with green accents, symbolizing the team’s vibrant football culture.',
        history: 'The home kit is worn in major international tournaments and represents Brazil’s footballing legacy and flair.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'To preserve the jersey’s quality, wash with mild detergent and avoid direct sunlight.',
        category: 'National Team'
      },
      {
        id: 'brazil-away',
        name: 'Brazil Away Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/364ce512-9a9f-43ba-abab-c9a0a7510f07/brazil-2024-stadium-away-dri-fit-football-replica-shirt-Lxzpkh.png',
        price: '990',
        material: '100% Polyester',
        quality: 'Lightweight and breathable with moisture-wicking technology for enhanced performance.',
        clubInfo: 'Brazil’s away kit features a stylish design with blue accents, used during away games and international fixtures.',
        history: 'The away kit continues Brazil’s tradition of excellence and style in football, worn in various global competitions.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'Keep in a cool, dry place and avoid washing with harsh chemicals to extend the jersey’s life.',
        category: 'National Team'
      }
    ],
    Germany: [
      {
        id: 'germany-home',
        name: 'Germany Home Kit',
        image: 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/08a3d03008934eba9f4377c2e7a009df_9366/germany-24-home-jersey.jpg',
        price: '990',
        material: '100% Polyester',
        quality: 'High-performance fabric with advanced moisture management for comfort and durability.',
        clubInfo: 'Germany’s home kit features a classic white design with black accents, reflecting the team’s traditional colors.',
        history: 'The home kit is worn in major international tournaments, showcasing Germany’s footballing history and success.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'Wash with a mild detergent and avoid direct sunlight to keep the jersey in optimal condition.',
        category: 'National Team'
      },
      {
        id: 'germany-away',
        name: 'Germany Away Kit',
        image: 'https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/b5d16914aa5e41029ea31f52e67587e1_9366/germany-24-away-jersey.jpg',
        price: '990',
        material: '100% Polyester',
        quality: 'Breathable and lightweight with advanced moisture-wicking technology for high performance.',
        clubInfo: 'Germany’s away kit features a sleek design with black and red accents, used for away matches and international competitions.',
        history: 'The away kit represents Germany’s innovative approach to football apparel and is worn in various global tournaments.',
        washingGuidelines: 'Cold machine wash with similar colors. Do not use bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'Store in a cool, dry place and wash with mild detergent to extend the jersey’s lifespan.',
        category: 'National Team'
      }
    ],
    Belgium: [
      {
        id: 'belgium-home',
        name: 'Belgium Home Kit',
        image: 'https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-home-shirt-2024_ss5_p-200793086+u-ljidle7q4io5gp4qqtbe+v-wxtjym5ks5vrmi2dgptu.jpg?_hv=2&w=340',
        price: '990',
        material: '100% Polyester',
        quality: 'High-quality fabric with moisture-wicking properties for comfort and durability.',
        clubInfo: 'Belgium’s home kit features a bold red design with black and yellow accents, symbolizing the national team’s colors and spirit.',
        history: 'The home kit is used in international fixtures and tournaments, reflecting Belgium’s growing football reputation.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'To maintain the jersey’s quality, avoid direct sunlight and wash with mild detergents.',
        category: 'National Team'
      },
      {
        id: 'belgium-away',
        name: 'Belgium Away Kit',
        image: 'https://images.footballfanatics.com/belgium-national-team/belgium-fa-adidas-away-shirt-2024_ss5_p-200793094+u-moythd6wuge9b0wzceht+v-qjfpbxtywzuu7lqfhdcj.jpg?_hv=2&w=340',
        price: '990',
        material: '100% Polyester',
        quality: 'Lightweight and breathable with advanced moisture control for high performance.',
        clubInfo: 'Belgium’s away kit features a stylish design with black and gold accents, used for away games and international competitions.',
        history: 'The away kit continues Belgium’s tradition of stylish and functional football apparel, worn in various global tournaments.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'Store in a cool, dry place and avoid washing with harsh chemicals to maintain the jersey’s condition.',
        category: 'National Team'
      }
    ],
    France: [
      {
        id: 'france-home',
        name: 'France Home Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/882bbc91-40e5-42fb-981c-ad94a8a0f7f4/fff-2024-25-stadium-home-dri-fit-football-replica-shirt-CRR56Z.png',
        price: '850',
        material: '100% Polyester',
        quality: 'Premium fabric with advanced moisture-wicking technology for ultimate comfort and durability.',
        clubInfo: 'France’s home kit features a classic blue design with subtle red and white accents, representing the national team’s traditional colors.',
        history: 'The home kit is worn during international fixtures and major tournaments, symbolizing France’s rich footballing heritage.',
        washingGuidelines: 'Machine wash cold with similar colors. Do not bleach. Iron inside out on low heat. Do not tumble dry.',
        maintenanceTips: 'To preserve the jersey’s quality, wash with a mild detergent and avoid exposure to direct sunlight.',
        category: 'National Team'
      },
      {
        id: 'france-away',
        name: 'France Away Kit',
        image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d17a52c6-4a53-455e-8915-42f84490d4c8/fff-2024-25-stadium-away-dri-fit-football-replica-shirt-3pBLcb.png',
        price: '850',
        material: '100% Polyester',
        quality: 'Lightweight and breathable with moisture-control technology for enhanced performance.',
        clubInfo: 'France’s away kit features a sleek design with white and navy blue accents, used for away matches and international competitions.',
        history: 'The away kit continues France’s tradition of stylish football apparel, worn in various global tournaments.',
        washingGuidelines: 'Cold machine wash with similar colors. Avoid bleach. Iron on low heat inside out. Do not dry clean.',
        maintenanceTips: 'Store in a cool, dry place and wash with mild detergents to maintain the jersey’s lifespan.',
        category: 'National Team'
      }
    ]
    // Add more national teams here
  }
};

export default jerseyData;
