export const minutesTohours = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const min = minutes % 60;
  return `${hours}h ${min}m`;
};

export const ratingToPercentage = (rating) => {
  return (rating * 10)?.toFixed(0);
};

export const resolveRatingColor = (rating) => {
  if (rating >= 7) {
    return "green.400";
  } else if (rating >= 5) {
    return "orange.400";
  } else {
    return "red.400";
  }
};
