# BLOCK HUNT 3D — updated prototype

## Included
- Six simple 3D map layouts with basic local collision.
- PC WASD and touch directional controls, sprint (Shift / touch button), movement normalization and avatar turning.
- Drag to orbit the preview camera.
- Local glowing collectible objects with pickup feedback (local-only; not account currency).
- Lobby create/join/ready/host flow and server-side abstract tag validation.
- Outfit/accessory preview and locally saved settings.
- Countdown HUD and room status feedback.

## Run locally
1. Install Node.js 20+.
2. In this folder run `npm install`.
3. Run `npm start`.
4. Open `http://localhost:3000`.
5. Run `npm test` for static source tests.

## Known limitations
This is a prototype. No browser, mobile, or live multiplayer integration test has been completed. Collectibles are local preview objects and do not award server currency. Hot-room cards are mock UI. Account/session security, gameplay state synchronization, map-specific authoritative collision, persistent missions/inventory/ranking, audio, graphics quality effects, deployment and security review are unfinished.
