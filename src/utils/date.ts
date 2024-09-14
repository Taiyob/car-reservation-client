const formatDate = (date: string | Date | undefined) => {
  if (!date) return "No Date Provided";

  const parsedDate = typeof date === "string" ? new Date(date) : date;

  if (parsedDate instanceof Date && !isNaN(parsedDate.getTime())) {
    const year = parsedDate.getUTCFullYear();
    const month = (parsedDate.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = parsedDate.getUTCDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
  } else {
    return "Invalid Date";
  }
};

export default formatDate;
