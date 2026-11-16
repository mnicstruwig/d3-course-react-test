#!/usr/bin/env python3
"""Convert source Pokémon GIFs to animated WebP; requires gifsicle and gif2webp."""
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import subprocess
import tempfile
import argparse

ROOT = Path(__file__).resolve().parents[1]
DESTINATION = ROOT / 'src/assets/pokemon/generation-vii/front-webp'


def convert(source):
    target = DESTINATION / source.with_suffix('.webp').name
    with tempfile.TemporaryDirectory(prefix='pokemon-webp-') as directory:
        resized = Path(directory) / source.name
        output = Path(directory) / target.name
        subprocess.run([
            'gifsicle', '--resize-fit', '192x192', '-O3',
            str(source), '-o', str(resized),
        ], check=True, capture_output=True)
        subprocess.run([
            'gif2webp', '-lossy', '-q', '60', '-m', '4',
            str(resized), '-o', str(output),
        ], check=True, capture_output=True)
        target.write_bytes(output.read_bytes())
    return source.stat().st_size, target.stat().st_size


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, required=True, help='Directory of original GIFs (kept outside Git).')
    args = parser.parse_args()
    sources = sorted(args.source.glob('*.gif'))
    if not sources:
        parser.error('Source directory contains no GIFs')
    DESTINATION.mkdir(exist_ok=True)
    sizes = []
    with ThreadPoolExecutor(max_workers=4) as executor:
        for count, result in enumerate(executor.map(convert, sources), 1):
            sizes.append(result)
            if count % 100 == 0:
                print(f'{count}/{len(sources)} converted', flush=True)
    original = sum(size[0] for size in sizes)
    converted = sum(size[1] for size in sizes)
    print(f'{original / 1024**2:.2f} MiB -> {converted / 1024**2:.2f} MiB '
          f'({100 * (1 - converted / original):.1f}% smaller)')
