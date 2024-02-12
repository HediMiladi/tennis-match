export const formatWeight = (weight: number) => {
  return `${weight / 1000} kg`;
};

export const formatAge = (age: number) => {
  return `${age} years`;
};

export const formatHeight = (height: number) => {
  const heightMeter = height / 100;
  return String(heightMeter).replace(".", "m");
};

export const formatGender = (gender: string) => {
  return gender === "M" ? "Male" : "Female";
};
