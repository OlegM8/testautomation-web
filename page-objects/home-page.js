import { expect } from "@playwright/test";
import { MainPage } from "./main-page";
import * as homePageData from '../test-data/home-page.json';

export class HomePage extends MainPage {

  constructor(page) {
    super(page)
    this.page = page
    this.homeButton = page.locator('.home')
    this.productsButton = page.locator('.products')
    this.contactButton = page.locator('.contact')
    this.userButton = page.locator('.user')
    this.signOutButton = page.locator('#logout')
    this.pageText = page.locator('#content div')
  }

  async verifyTopMenu () {
    await expect(this.homeButton).toContainText(homePageData.topMenu.homeButtonText)
    await expect(this.productsButton).toContainText(homePageData.topMenu.productsButtonText)
    await expect(this.contactButton).toContainText(homePageData.topMenu.contactButtonText)
    await expect(this.userButton).toBeVisible()
  }

  async logout () {
    await this.userButton.click()
    await this.signOutButton.click()
  }
}
