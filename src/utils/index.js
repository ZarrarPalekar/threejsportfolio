export function diff_months(dt2, dt1) {
  var diff = (dt2.getTime() - dt1.getTime()) / 1000;
  diff /= 60 * 60 * 24 * 7 * 4;
  return Math.abs(Math.round(diff));
}

// dt1 = new Date("Mar 2017");
// dt2 = new Date("Apr 2019");
// console.log(diff_months(dt1, dt2));

export function getWords(monthCount) {
  function getPlural(number, word) {
    return (number === 1 && word.one) || word.other;
  }

  var months = { one: "month", other: "months" },
    years = { one: "year", other: "years" },
    m = monthCount % 12,
    y = Math.floor(monthCount / 12),
    result = [];

  y && result.push(y + " " + getPlural(y, years));
  m && result.push(m + " " + getPlural(m, months));
  return result.join(" and ");
}

export function getWordsWithoutMonths(monthCount) {
  function getPlural(number, word) {
    return (number === 1 && word.one) || word.other;
  }

  var years = { one: "year", other: "years" },
    y = Math.floor(monthCount / 12),
    result = [];

  y && result.push(y + " " + getPlural(y, years));

  return result.join(" and ");
}
