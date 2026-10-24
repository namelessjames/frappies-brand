#!/usr/bin/env python3
"""
Derive a *-shell.png (for the dark clover shell) from a light illustration.

The owner's decision of 2026-10-21 (guide/05-illustration.md): the white coat stays
opaque white, inner ink stays clover ink, and only ink that touches the transparent
outside (the silhouette and the motion marks) turns chalk, so the drawing keeps its
outline on a dark ground. Felt is untouched.

Usage: python3 scripts/derive-shell.py <source.png> <target-shell.png> [--band 6]
Writes the PNG and a sidecar <target>.json naming the source and the transform.
"""
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

INK = np.array([0x14, 0x30, 0x1F])
CHALK = np.array([0xF2, 0xF4, 0xEC])


def derive(src: Path, dst: Path, band: int) -> None:
    im = Image.open(src).convert("RGBA")
    px = np.array(im).astype(np.int16)
    rgb, alpha = px[..., :3], px[..., 3]

    # Ink: dark pixels of any opacity. Felt and white never qualify.
    ink = (rgb.max(axis=2) < 110) & (alpha > 0)
    # The transparent outside, grown by `band` pixels so the outline strokes fall in it.
    outside = Image.fromarray(((alpha < 40) * 255).astype(np.uint8), "L")
    near_outside = np.array(outside.filter(ImageFilter.MaxFilter(2 * band + 1))) > 0

    recolour = ink & near_outside
    out = px.copy()
    out[recolour, :3] = CHALK
    Image.fromarray(out.astype(np.uint8), "RGBA").save(dst, optimize=True)

    sidecar = {
        "prompt": (
            f"Derived from {src.name} by a deterministic pixel pass for dark ground "
            "(scripts/derive-shell.py): the white coat stays opaque white, inner ink stays #14301F, "
            f"ink within {band}px of the transparent outside (silhouette, motion marks) is recoloured to "
            "chalk #F2F4EC, felt kept. Owner decision 2026-10-21; applied to every pose 2026-10-24."
        ),
        "createdAt": datetime.now(timezone.utc).isoformat(timespec="milliseconds").replace("+00:00", "Z"),
        "tool": "scripts/derive-shell.py (python PIL/numpy edge pass)",
        "derivedFrom": str(src.relative_to(Path(__file__).resolve().parent.parent)),
        "transform": f"silhouette ink within {band}px of transparency -> #F2F4EC; inner ink, white and felt kept",
    }
    Path(str(dst) + ".json").write_text(json.dumps(sidecar, indent=2) + "\n")


if __name__ == "__main__":
    argv = sys.argv[1:]
    band = 6
    if "--band" in argv:
        at = argv.index("--band")
        band = int(argv[at + 1])
        del argv[at : at + 2]
    args = argv
    if len(args) != 2:
        sys.exit(__doc__)
    derive(Path(args[0]).resolve(), Path(args[1]).resolve(), band)
