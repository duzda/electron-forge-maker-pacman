# electron-forge-maker-pacman

Simple electron forge maker for pacman utilizing [electron-builder](https://www.electron.build/), 
based of [Reforged](https://github.com/SpacingBat3/ReForged)

## Usage

```
import { MakerPacman } from 'electron-forge-maker-pacman';

const config: ForgeConfig = {
  makers: [
    new MakerPacman({}),
  ],
};
```

## Shortcomings

The config doesn't really work, but it is not necessary for my use case and I might extend it later on.
