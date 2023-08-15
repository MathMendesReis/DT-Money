export function dataAtualFormatada(date:string){
  const dbDate = date;
  const originalDate = new Date(dbDate);

  const day = String(originalDate.getDate()).padStart(2, '0');
  const month = String(originalDate.getMonth() + 1).padStart(2, '0');
  const year = originalDate.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate
}

