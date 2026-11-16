const outlineFiles = import.meta.glob('./**/*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});

console.log(outlineFiles);

const outlines = Object.entries(outlineFiles)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([, image]) => image);

export default outlines;
