import { test, expect } from '@playwright/test';
import { HomePage } from '../page-objects/home-page';
import * as usersData from '../test-data/users.json';
import * as homePageData from '../test-data/home-page.json';

test.describe('Main page test suite', () => {
  for(const user of usersData.users) {
    let homePage

    test.beforeEach(async({ page }) => {
      homePage = new HomePage(page);
      await homePage.openMainPage()
    })

    test(`Verify top menu is displayed for ${user.name} user @smoke`, async ({ page }) => {
      await homePage.login(user.email, user.password)
      await homePage.verifyTopMenu()
    })

    test(`Verify sign out for ${user.name} user`, async ({ page }) => {
      await homePage.login(user.email, user.password)
      await homePage.verifyTopMenu()
      await homePage.logout()
      await expect(homePage.loginButton).toBeVisible()
    })

    test(`Verify home page text is displayed for ${user.name} user`, async ({ page }) => {
      await homePage.login(user.email, user.password)
      await expect(homePage.pageText).toContainText(homePageData.homePageText)
    })

    test(`Verify console logs after login for ${user.name} user`, async ({ page }) => {
      let consoleLogText = ''
      page.on('console', msg => consoleLogText = msg.text())
    
      await homePage.login(user.email, user.password)
      expect(consoleLogText).toContain(`User logged: ${user.email}`)
    })
  }
})
