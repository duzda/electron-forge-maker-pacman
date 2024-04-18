import { MakerBase, MakerOptions } from "@electron-forge/maker-base";
import { ForgePlatform } from "@electron-forge/shared-types";
import { buildForge } from "app-builder-lib";
import { MakerPacmanConfig, MakerPacmanConfigOptions } from "../types/MakerPacmanConfig";

export default class MakerPacman extends MakerBase<MakerPacmanConfig> {
  name: string = "pacman";
  defaultPlatforms: ForgePlatform[] = ["linux"];

  override isSupportedOnCurrentPlatform(): boolean {
      return process.platform === 'linux'
  }

  override async make(options: (MakerPacmanConfigOptions & MakerOptions)): Promise<string[]> {
    return buildForge(options, { linux: [`pacman:${options.targetArch}`] })
  }
}

export { MakerPacman };
