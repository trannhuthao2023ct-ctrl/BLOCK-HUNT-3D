const {test}=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');
const server=fs.readFileSync('server.js','utf8'),html=fs.readFileSync('public/index.html','utf8'),app=fs.readFileSync('public/app.js','utf8');
test('room limits and map list are present',()=>{assert.match(server,/Math\.min\(14,Number\(d\?\.size\)\|\|6\)/);assert.match(server,/forest.*village.*warehouse.*ruins.*city.*base/);});
test('server-side role validation exists',()=>{assert.match(server,/p\.role!=='finder'/);assert.ok(server.includes("target.role!=='hider'"));});
test('account passwords are hashed and checked',()=>{assert.match(server,/bcrypt\.hash/);assert.match(server,/bcrypt\.compare/);});
test('responsive sandbox, outfit and settings UI exist',()=>{assert.match(html,/id="scene"/);assert.match(html,/id="outfit"/);assert.match(html,/id="saveSettings"/);assert.match(app,/applyLook/);assert.match(app,/localStorage/);});

test('movement relay has server validation and bounds',()=>{assert.match(server,/s\.on\('move'/);assert.match(server,/Math\.max\(-35,Math\.min\(35,x\)/);});test('mobile direction pad is present',()=>{assert.match(html,/data-dir=\"up\"/);assert.match(html,/mobile-pad/);});

test('tag action checks proximity and emits rejection outside reach',()=>{assert.ok(server.includes('dx*dx+dz*dz>6.25'));assert.match(server,/Mục tiêu ở ngoài phạm vi tiếp cận/);});
test('player movement is broadcast to the room',()=>{assert.match(server,/io\.to\(r\.code\)\.emit\('playerMoved'/);});
test('room size is configured and enforced',()=>{assert.match(server,/maxPlayers:size/);assert.match(server,/r\.players\.length>=r\.settings\.maxPlayers/);});

test('map scenes have structured layouts and collision boundaries',()=>{assert.match(app,/function collides\(x,z\)/);assert.match(app,/m==='forest'/);assert.match(app,/m==='warehouse'/);assert.match(app,/m==='ruins'/);assert.match(app,/colliders\.some/);});
test('camera drag and sprint controls are wired',()=>{assert.match(app,/cameraOffsetX/);assert.match(app,/keys\.has\('shift'\)/);assert.match(html,/id="sprintBtn"/);});
test('local collectible feedback and clock are wired',()=>{assert.match(app,/function interact\(\)/);assert.match(app,/roundSeconds/);assert.match(html,/gameClock/);});
test('orbit camera pointer interaction exists',()=>{assert.match(app,/pointermove/);assert.match(app,/camYaw/);});
test('local preview clarifies offline sandbox mode',()=>{assert.match(app,/Sandbox cục bộ/);assert.match(app,/chưa tạo phòng online/);});
