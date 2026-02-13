# Downloads Directory

This directory contains plugin installer files for download.

## Structure

```
public/downloads/
├── amp-spot-eq-v1.0.0.zip
├── amp-spot-comp-v1.0.0.zip
├── amp-spot-analyzer-v1.0.0.zip
└── amp-spot-ms-v1.0.0.zip
```

## File Naming Convention

`{plugin-name}-v{version}.zip`

Example: `amp-spot-eq-v1.0.0.zip`

## How to Add Files

1. Build the VST plugin (see: /projects/amp-spot/vst/)
2. Copy the `.vst3` bundle directory to a temporary location
3. Create a ZIP file following the naming convention
4. Place the ZIP file in this directory
5. Update the plugin entry in the database with the correct download URL

## Automation

Consider adding a build script to automate this process:

```bash
# Example script
./scripts/copy-plugins-to-downloads.sh
```

## Notes

- Files should be ZIP archives containing the `.vst3` bundle
- macOS users: Include both `.vst3` and `.component` bundles if needed
- Windows users: `.vst3` bundle is sufficient
- Linux users: `.vst3` bundle is sufficient

---

**Last Updated:** 2026-02-13
