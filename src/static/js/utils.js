export const getDateFromUnixTS = (ts) => {
  const formattedTime = new Date(ts * 1000);
  const date = formattedTime.toLocaleDateString() + ' at ' + formattedTime.toLocaleTimeString();
  return date;
} 