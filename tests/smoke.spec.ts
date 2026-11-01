import { test, expect } from '@playwright/test';
const IDS = ['myogramme', 'fatigue', 'zoom3d', 'glissement', 'atp'];
test('chaque module se charge sans erreur', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Labo Virtuel SVT - Le Muscle' })).toBeVisible();
  for (const id of IDS) {
    await page.getByTestId('tab-' + id).click();
    await expect(page.locator('main')).not.toBeEmpty();
  }
  expect(errors).toEqual([]);
});
test('le zoom 3D affiche un canvas', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('tab-zoom3d').click();
  await expect(page.locator('canvas').first()).toBeVisible();
});
test('le glissement des filaments affiche un canvas ou un svg', async ({ page }) => {
  await page.goto('/');
  await page.getByTestId('tab-glissement').click();
  await expect(page.locator('canvas, svg').first()).toBeVisible();
});
