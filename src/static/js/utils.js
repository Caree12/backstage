export const getDateFromUnixTS = (ts) => {
	console.log('getDateFromUnixTS called ts', ts);
    const date = new Date(ts * 1000).toLocaleDateString() + ' at ' + new Date().toLocaleTimeString();
    return date;
} 