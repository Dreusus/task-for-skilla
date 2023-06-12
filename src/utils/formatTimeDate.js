function formatTimeDate(timeString) {
  const dateTime = new Date(timeString);
  const time = dateTime.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit" });
  return time;
}

export default formatTimeDate;