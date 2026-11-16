const files = import.meta.glob('./*.svg', {
  eager: true,
  query: '?url',
  import: 'default',
});


// Match filenames such as 001.svg to Pokémon ID 1.
const names = {}
Object.entries(files).forEach(([path, url]) => {
  const id = Number(path.replace("./", "").replace(".svg", ""))
  names[id] = url
})

export default names;
