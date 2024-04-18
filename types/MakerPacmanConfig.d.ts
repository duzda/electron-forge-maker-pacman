export interface MakerPacmanConfigOptions {
    /**
     * Human-friendly name of the application.
     *
     * Defaults to `packageJSON.productName`.
     *
     * @since v1.0.0
     */
    productName?: string,

    /**
     * List of desktop file categories to append.
     *
     * @since v1.0.0
     */
    categories?: (
        FreeDesktopCategories["main"] | FreeDesktopCategories["additional"]
    )[],
}

export interface MakerPacmanConfig {
    /**
     * Pacman maker configuration options.
     * 
     * @since v1.0.0
     */
    options?: MakerPacmanConfigOptions,
}

/**
 * FreeDesktop software categories, grouped as in FreeDesktop specification.
 *
 * @privateRemarks
 *
 * Generated using DevTools with:
 * ```js
 * const out = [];
 * for(const td of document.querySelectorAll("table.informaltable>tbody>tr>td:first-child"))
 *     out.push('"'+td.innerText+'"');
 * console.log(out.join(' | '));
 * ```
 */
 export interface FreeDesktopCategories {
    /** Categories that every desktop confirming environment **must** support. */
    main: (
        "AudioVideo" | "Audio" | "Video" | "Development" | "Education" |
        "Game" | "Graphics" | "Network" | "Office" | "Science" | "Settings" |
        "System" | "Utility"
    );
    /**
     * Categories that provide more fine grained information about the
     * application.
     */
    additional: (
        "Building" | "Debugger" | "IDE" | "GUIDesigner" | "Profiling" |
        "RevisionControl" | "Translation" | "Calendar" | "Database" |
        "Dictionary" | "Email" | "Finance" | `${"Flow"|""}Chart` | "PDA" |
        "Presentation" | "Spreadsheet" | "WordProcessor" | "Scanning" | "OCR" |
        "Photography" | `${"Contact"|"Project"}Management` |
        `${"2D"|"3D"|"Vector"|"Raster"}Graphics` | "Publishing" | "Viewer" |
        `Text${"Tools"|"Editor"}` | "DesktopSettings" | "HardwareSettings" |
        "Printing" | "PackageManager" | "Dialup" | "InstantMessaging" | "Chat" |
        "IRCClient" | "Feed" | "FileTransfer" | "HamRadio" | "News" | "P2P" |
        "RemoteAccess" | `Telephony${""|"Tools"}` | "VideoConference" |
        `Web${"Browser"|"Development"}` | "Midi" | "Mixer" | "Sequencer" |
        "Tuner" | "TV" | "AudioVideoEditing" | "Player" | "Recorder" |
        "DiscBurning"  | "RolePlaying" | "Shooter" | `${"Action" | "Adventure" |
        "Arcade" | "Board" | "Blocs" | "Card" | "Kids" | "Logic" | "Sports" |
        "Strategy"}Game` | "Simulation" | "Art" | "Construction" | "Music" |
        "Languages" | "ArtificialIntelligence" | "Astronomy" | "Biology" |
        "Chemistry" | "ComputerScience" | "DataVisualization" | "Economy" |
        "Electricity" | `Geo${"graphy"|"logy"|"science"}` | "History" |
        "Humanities" | "ImageProcessing" | "Literature" | "Maps" | "Math" |
        "NumericalAnalysis" | "MedicalSoftware" | "Physics" | "Robotics" |
        "Spirituality" |"Sports" |"ParallelComputing" | "Amusement" |
        "Archiving" | "Compression" | "Electronics" | "Engineering" |
        `File${"Tools"|"Manager"|"system"}` | "Monitor" | "Security" |
        `${""|"Terminal"}Emulator` | "Accessibility" | "Calculator" | "Clock" |
        "Documentation" | "Adult" | "Core" | "KDE" | "GNOME" | "XFCE" | "GTK" |
        "Qt" | "Motif" | "Java" | "ConsoleOnly"
    );
}

export default MakerPacmanConfig;
