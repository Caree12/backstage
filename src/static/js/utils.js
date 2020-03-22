export const getUnixDateNow = () => {
  const unixDate = Math.round((new Date()).getTime() / 1000)
  return unixDate;
}
export const getDateFromUnixTS = (ts) => {
  const formattedTime = new Date(ts * 1000);
  const date = formattedTime.toLocaleDateString() + ' at ' + formattedTime.toLocaleTimeString();
  return date;
} 