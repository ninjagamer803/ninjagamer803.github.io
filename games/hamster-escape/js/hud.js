import * as THREE from 'three';
import { player, inCage } from './player.js';
import { WEAPONS, current } from './weapons.js';
import { game } from './game.js';

// door trigger positions, set by main
let cageTrigger = new THREE.Vector3();
let frontTrigger = new THREE.Vector3();

export function setDoorTriggers(cagePos, frontPos) {
  cageTrigger = cagePos;
  frontTrigger = frontPos;
}

export function updateHud() {
  const w = WEAPONS[current];
  document.getElementById('healthfill').style.width = Math.max(0, player.health) + '%';
  document.getElementById('hpText').textContent =
    Math.max(0, Math.round(player.health)) + (player.crouched ? '  [CROUCHED]' : '');
  document.getElementById('weapon').textContent = w.name;
  document.getElementById('ammo').textContent = w.melee ? '∞' : `${w.ammo} / ${w.reserve}`;

  const obj = document.getElementById('objective');
  if (game.won) obj.innerHTML = 'You did it!';
  else if (!game.cageDoorOpen && inCage())
    obj.innerHTML = '🔒 Escape the cage <span class="sub">Press E at the cage door</span>';
  else if (!game.frontDoorOpen)
    obj.innerHTML = '🔒 Escape the house <span class="sub">Find the front door and press E</span>';
  else
    obj.innerHTML = '🌱 Reach the Seed of Gold! <span class="sub">It glitters out in the garden…</span>';

  const prompt = document.getElementById('prompt');
  let text = null;
  if (!game.cageDoorOpen && player.pos.distanceTo(cageTrigger) < 1.6) text = '[E] Open cage door';
  if (!game.frontDoorOpen && player.pos.distanceTo(frontTrigger) < 1.8) text = '[E] Open front door';
  prompt.style.display = text ? 'block' : 'none';
  if (text) prompt.textContent = text;

  document.getElementById('vignette').style.opacity =
    Math.min(0.9, player.damageFlash) * 0.9;
}
