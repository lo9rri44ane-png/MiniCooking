import test from 'node:test';
import assert from 'node:assert/strict';
import {canonicalSignature} from '../tools/route-generation.mjs';
import {CAMPAIGN_LEVELS} from '../assets/scripts/features/kitchen/CampaignData.ts';
test('campaign uniqueness includes gameplay-relevant mechanism placement rather than only bare floor geometry',()=>{const a=CAMPAIGN_LEVELS.find(l=>l.id===41),b=CAMPAIGN_LEVELS.find(l=>l.id===44);assert.notEqual(canonicalSignature(a),canonicalSignature(b));const c=structuredClone(a);c.stopPads=[[0,0]];assert.notEqual(canonicalSignature(a),canonicalSignature(c));assert.equal(canonicalSignature(a),canonicalSignature(structuredClone(a)));});
test('conveyor direction participates in canonical geometry',()=>{const l=structuredClone(CAMPAIGN_LEVELS.find(l=>l.id===121)),changed=structuredClone(l);changed.conveyors[0].direction={up:'down',down:'up',left:'right',right:'left'}[changed.conveyors[0].direction];assert.notEqual(canonicalSignature(l),canonicalSignature(changed));});
