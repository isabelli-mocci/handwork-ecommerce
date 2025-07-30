const formatDescription = (description: string | string[]): string =>
  Array.isArray(description) ? description.join(' ') : description;

export default formatDescription;
