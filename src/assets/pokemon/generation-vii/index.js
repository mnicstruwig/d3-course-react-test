import records from './pokemon.json';
import names from '../../names';

// Resolve animated WebPs through Vite so URLs also work in production builds.
const images = import.meta.glob('./front-webp/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
});

const pokemon = records
  .slice(0, 80)
  .filter((record) => record.id <= 151)
  .map((record) => ({
    ...record,
    frontImage: record.frontGif
      ? images[record.frontGif.replace('./front/', './front-webp/').replace(/\.gif$/, '.webp')]
      : null,
    nameImage: names[record.id] ?? null,
  }));

export default pokemon;
