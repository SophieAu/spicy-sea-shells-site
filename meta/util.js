exports.createSlug = (rawTitle, date) => {
  const title = rawTitle
    .toLowerCase()
    .replace(/\s/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/(-+)/g, '-');

  return `${date}-${title}`;
};
