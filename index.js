// ! JANGAN DIMODIFIKASI
const dates = [
  "2019-01-02", // 1546387200 (epoch time, dalam detik)
  "2022-05-06 00:00:00 UTC-2", // 1651802400 (epoch time, dalam detik)
  "2021-03-04 07:00:00 UTC", // 1614841200 (epoch time, dalam detik)
  "2021-04-05 00:00:00 UTC+2", // 1617573600 (epoch time, dalam detik)
  "2020-02-03 UTC+7", // 1580662800 (epoch time, dalam detik)
];

// TODO: Buatlah fungsi createDate
//const createDate = null;
const createDate = (dates, index) => {
  const date = new Date(dates[index]);
  let dateResult = [];
  if (index == null) {
    for (counter = 0; counter < dates.length; counter++) {
      dateResult.push(Date.parse(dates[counter]).toString() / 1000);
    }
    return dateResult.sort().join("-");
  } else {
    for (counter = 0; counter < dates.length; counter++) {
      dateResult.push(Date.parse(dates[counter]) / 1000);
    }
    return dateResult.sort()[index].toString();
  }
};

// ! JANGAN DIMODIFIKASI
(() => {
  // IIFE

  // '1546387200-1580662800-1614841200-1617573600-1651802400' (dalam string)
  console.log(createDate?.(dates));

  // '1614841200' (dalam string)
  console.log(createDate?.(dates, 2));
})();

module.exports = {
  dates,
  createDate,
};
