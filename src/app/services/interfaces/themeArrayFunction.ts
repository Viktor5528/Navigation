import { Theme } from "../enums/theme.enum";

export function getThemeArray() {
  const arrayObjects = [];

  for (const [propertyKey, propertyValue] of Object.entries(Theme)) {
    if (!Number.isNaN(Number(propertyKey))) {
      continue;
    }
    arrayObjects.push({ id: propertyValue, name: propertyKey });
  }

  return arrayObjects;
}
