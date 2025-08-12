# Playwright UI & API Regression

![CI](https://github.com/sswampil/playwright-ui-api-regression/actions/workflows/playwright.yml/badge.svg)

Mini regression suite using **Playwright + TypeScript**:
- UI: OrangeHRM demo (smoke + login positive/negative)
- API: JSONPlaceholder (GET users, POST posts)
- CI/CD: GitHub Actions with HTML report artifact

## Run locally
```bash
npm ci
npx playwright install --with-deps
npx playwright test
npx playwright show-report

tests/
  ui-smoke.spec.ts
  ui-login.spec.ts
  ui-login-negative.spec.ts
  api-users.spec.ts
playwright.config.ts
.github/workflows/playwright.yml
