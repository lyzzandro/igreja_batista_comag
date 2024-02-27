export function convertMonthNumberInName(number) {
  const obj = {
    1: "Janeiro",
    2: "Fevereiro",
    3: "Março",
    4: "Abril",
    5: "Maio",
    6: "Junho",
    7: "Julho",
    8: "Agosto",
    9: "Setembro",
    10: "Outubro",
    11: "Novembro",
    12: "Dezembro",
  };
  return obj[number];
}

export function formatDate(value) {
  const date = new Date(value);

  const year = date.getFullYear();
  const day = date.getDate();

  const monthNumber = date.getMonth() + 1;
  const month = convertMonthNumberInName(monthNumber);

  return `${day} de ${month}, ${year}`;
}
