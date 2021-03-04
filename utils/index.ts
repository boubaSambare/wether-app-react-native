export const weatherIcons = [
  { keyIcon: "01d", icon: "md-sunny-outline", provider: "Ionicons" },
  { keyIcon: "02d", icon: "partly-sunny-outline", provider: "Ionicons" },
  { keyIcon: "03d", icon: "cloudy-outline", provider: "Ionicons" },
  { keyIcon: "04d", icon: "cloudy", provider: "Ionicons" },
  { keyIcon: "09d", icon: "rainy-outline", provider: "Ionicons" },
  { keyIcon: "010d", icon: "cloud-sun-rain", provider: "FontAwesome5" },
  { keyIcon: "011d", icon: "cloud-lightning", provider: "Feather" },
  { keyIcon: "013d", icon: "md-snow-outline", provider: "Ionicons" },
  { keyIcon: "050d", icon: "weather-fog", provider: "MaterialCommunityIcons" },
  { keyIcon: "01n", icon: "moon-outline", provider: "Ionicons" },
  { keyIcon: "02n", icon: "cloudy-night", provider: "Ionicons" },
  { keyIcon: "03n", icon: "cloudy-outline", provider: "Ionicons" },
  { keyIcon: "04n", icon: "cloudy", provider: "Ionicons" },
  { keyIcon: "09n", icon: "rainy", provider: "Ionicons" },
  { keyIcon: "010n", icon: "cloud-moon-rain", provider: "FontAwesome5" },
  { keyIcon: "011n", icon: "cloud-lightning", provider: "Feather" },
  { keyIcon: "013n", icon: "md-snow-outline", provider: "Ionicons" },
  { keyIcon: "050n", icon: "weather-fog", provider: "MaterialCommunityIcons" },
];


export const icons = {
  i01d: require('../assets/icons/01d.png'),
  i01n: require('../assets/icons/01n.png'),
  i02d: require('../assets/icons/02d.png'),
  i02n: require('../assets/icons/02n.png'),
  i03d: require('../assets/icons/03d.png'),
  i03n: require('../assets/icons/03n.png'),
  i04d: require('../assets/icons/04d.png'),
  i04n: require('../assets/icons/04n.png'),
  i09d: require('../assets/icons/09d.png'),
  i09n: require('../assets/icons/09n.png'),
  i10d: require('../assets/icons/10d.png'),
  i10n: require('../assets/icons/10n.png'),
  i11d: require('../assets/icons/11d.png'),
  i11n: require('../assets/icons/11n.png'),
  i13d: require('../assets/icons/13d.png'),
  i13n: require('../assets/icons/13n.png'),
  i50d: require('../assets/icons/50d.png'),
  i50n: require('../assets/icons/50n.png'),
}


export const kelvinToCelcius = (data:number) => Math.floor(data - 273)
export const getDayString = (data:number) => new Date(data * 1000).toDateString().split(" ")[0]