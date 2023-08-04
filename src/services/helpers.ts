export function formatDate(
  inputDate: string,
  format: "long" | "medium" | "short"
  ): string {
  const dateObj = new Date(inputDate);
  if (isNaN(dateObj.getTime())) {
    return "Invalid date format";
  }

  if (format === "long") {
    const formattedDate = dateObj
      .toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      })
      .replace(/\//g, "/");
    return formattedDate;
  } else if (format === "medium") {

    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const day = dateObj.getDate();
    const month = monthNames[dateObj.getMonth()];
    const year = dateObj.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  } else if (format === "short") {
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear().toString().slice(-2);
    const formattedDate = `${month}/${year}`;

    return formattedDate;
  }

  return "Invalid format";
}

