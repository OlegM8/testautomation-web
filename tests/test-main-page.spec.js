import { test, expect } from '@playwright/test';
import { MainPage } from '../page-objects/main-page';
import * as usersData from '../test-data/users.json';
import * as testData from '../test-data/main-page.json';


test.describe('Main page test suite', () => {
  let mainPage

  test.beforeEach(async({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage()
  })

  test('Verify main page title text @smoke', async ({ page }) => {
    await expect(page).toHaveTitle(testData.pageTitle)
  })

  test('Verify main page body text @smoke', async ({ page }) => {
    await expect(mainPage.mainPageText).toHaveText(testData.pageText)
  })

  test('Verify login with incorrect password', async ({ page }) => {
    await mainPage.login(usersData.users[0].email, 'incorrect password')
    await expect(mainPage.mainPageText).toHaveText(testData.pageText)
  })
})
