import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { style_01 } from '../styles/style_01';


const images = {
  Acuario: require('../imgs/Zodiacal/03_Aries.png'),
  Piscis: require('../imgs/Zodiacal/03_Aries.png'),
  Aries: require('../imgs/Zodiacal/03_Aries.png'),
  Tauro: require('../imgs/Zodiacal/03_Aries.png'),
  Geminis: require('../imgs/Zodiacal/03_Aries.png'),
  Cancer: require('../imgs/Zodiacal/03_Aries.png'),
  Leo: require('../imgs/Zodiacal/03_Aries.png'),
  Virgo: require('../imgs/Zodiacal/03_Aries.png'),
  Libra: require('../imgs/Zodiacal/03_Aries.png'),
  Escorpio: require('../imgs/Zodiacal/03_Aries.png'),
  Sagitario: require('../imgs/Zodiacal/03_Aries.png'),
  Capricornio: require('../imgs/Zodiacal/03_Aries.png'),
};

const data = [

  {
    Signo: 'Acuario',
    Dias: 'Ene/20 - Feb/18',
    Elemento: "Aire",
    Astro: "Urano",
    Piedra: "Turquoise",
    Imagen: images.Libra
  },
  {
    Signo: 'Piscis',
    Dias: 'Feb/19 - Mar/20',
    Elemento: "Agua",
    Astro: "Neptuno",
    Piedra: "Ametyst",
	Imagen: images.Libra
  },
  {
    Signo: 'Aries',
    Dias: 'Mar/21 - Abr/19',
    Elemento: "Fuego",
    Astro: "Marte",
    Imagen: images.Libra
  },
  {
    Signo: 'Tauro',
    Dias: 'Abr/20 - May/20',
    Elemento: "Tierra",
    Astro: "Venus",
    Piedra: "Quarz",
	Imagen: images.Libra
  },
  {
    Signo: 'Geminis',
    Dias: 'May/21 - Jun/20',
    Elemento: "Aire",
    Astro: "Mercurio",
    Piedra: "Agate",
	Imagen: images.Libra
  },
  {
    Signo: 'Cancer',
    Dias: 'Jun/21 - Jul/22',
    Elemento: "Agua",
    Astro: "Luna",
    Piedra: "Aventurine",
	Imagen: images.Libra
  },
  {
    Signo: 'Leo',
    Dias: 'Jul/23 - Ago/22',
    Elemento: "Fuego",
    Astro: "Sol",
    Piedra: "Honey Agate",
	Imagen: images.Libra
  },
  {
    Signo: 'Virgo',
    Dias: 'Ago/23 - Sep/22',
    Elemento: "Tierra",
    Astro: "Mercurio",
    Piedra: "Carnelian",
	Imagen: images.Libra
  },
  {
    Signo: 'Libra',
    Dias: 'Sep/23 - Oct/22',
    Elemento: "Aire",
    Astro: "Venus",
    Piedra: "Jasper",
	Imagen: images.Libra
  },
  {
    Signo: 'Escorpio',
    Dias: 'Oct/23 - Nov/21',
    Elemento: "Agua",
    Astro: "Urano",
    Piedra: "Chrysoprase",
	Imagen: images.Libra
  },
  {
    Signo: 'Sagitario',
    Dias: 'Nov/22 - Dic/21',
    Elemento: "Fuego",
    Astro: "Jupiter",
    Piedra: "Blue Agate",
	Imagen: images.Libra
  },
  {
    Signo: 'Capricornio',
    Dias: 'Dic/22 - Ene/19',
    Elemento: "Tierra",
    Astro: "Saturno",
    Piedra: "Blue Quartz",
	Imagen: images.Libra
  },
];

const Index = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={style_01.divHeader}>
        <Image source={require('../imgs/logos/logo_universidad.png')} style={{ width: 100, height: 50 }} />
      </View>

      <View style={style_01.divMain}>
        <Text style={style_01.h1}>Signos Zodiacales</Text>
        <Text style={style_01.p1}>Práctica de añadir los signos zodiacales</Text>

        <ScrollView style={{ marginTop: 8 }}>
          {data.map((item, index) => (
            <View style={style_01.tarjeta} key={index}>
              <Text>Signo: {item.Signo}</Text>
              <Text>Días: {item.Dias}</Text>
              <Text>Elemento: {item.Elemento}</Text>
              <Text>Astro: {item.Astro}</Text>
              <Text>Piedra: {item.Piedra}</Text>
              <Image source={item.Imagen} style={{ width: 80, height: 80, left: 200, top: -75}} />
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={style_01.divFooter}>
        <Text style={style_01.textFooter}>
          Carrera de Tecnologías de Información
        </Text>
        <Text style={style_01.textFooter}>Sede del Pacífico</Text>
      </View>
    </View>
  );
};

export default Index;

