// Build-time fetch adapter for Nitro's entryless static preset.
// Matches Nitro's official standard fetch entry; never uploaded to Pages.
import "#nitro/virtual/polyfills";
import { useNitroApp } from "nitro/app";

const nitroApp = useNitroApp();
export default { fetch: nitroApp.fetch };