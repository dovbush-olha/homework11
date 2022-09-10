module.exports = function (userName) {
  const date = new Date();
  const currentHour = date.getHours();
  let message;
  switch (true) {
    case currentHour >= 23 || currentHour < 5:
      message = "Good night";
      break;
    case 5 <= currentHour && currentHour < 11:
      message = "Good morning";
      break;
    case 11 <= currentHour && currentHour < 17:
      message = "Good day";
      break;
    default:
      message = "Good evening";
  }
  return `${date} ${message}, ${userName}`;
};
