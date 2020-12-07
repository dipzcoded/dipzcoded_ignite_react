// base url
const baseUrl = "https://api.rawg.io/api/";
// getting the current month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// getting the current day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

const year = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const lastYear = `${year - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${year + 1}-${currentMonth}-${currentDay}`;
const currentYear = `${year}-${currentMonth}-${currentDay}`;

// popuplar games
const popularGames = `games?key=YOUR_API_KEY&dates=${lastYear},${currentYear}&ordering-rating&page_size=10`;
const upcomingGames = `games?key=YOUR_API_KEY&dates=${currentYear},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=YOUR_API_KEY&dates=${lastYear},${currentYear}&ordering=-released&page_size=10`;

export const popularGamesUrl = (apikey) =>
  `${baseUrl}${popularGames.replace("YOUR_API_KEY", apikey)}`;
export const upcomingGamesUrl = (apikey) =>
  `${baseUrl}${upcomingGames.replace("YOUR_API_KEY", apikey)}`;
export const newGamesUrl = (apikey) =>
  `${baseUrl}${newGames.replace("YOUR_API_KEY", apikey)}`;
