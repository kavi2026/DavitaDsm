# DaVita Secure Messaging Playwright Tests

End-to-end login tests for the DaVita Secure Messaging staging application, written with Playwright and TypeScript using the Page Object Model.

## Setup

1. Install dependencies:

   ```powershell
   npm install
   npx playwright install chromium
   ```

2. Copy `.env.example` to `.env` and enter the staging credentials. The `.env` file is ignored by Git and must not be committed.

## Run tests

```powershell
npm test
```

Run with a visible browser:

```powershell
npm run test:headed
```

Open the latest HTML report:

```powershell
npm run test:report
```

The HTML report is generated in `playwright-report/`. Failure screenshots and other test artifacts are generated in `test-results/`. Both directories are ignored by Git because they are generated output and may contain sensitive application data.

## GitHub Actions

Set the repository variable `BASE_URL` and these GitHub Actions secrets before running the workflow:

- `TEST_USER_1_USERNAME`
- `TEST_USER_1_PASSWORD`
- `TEST_USER_2_USERNAME`
- `TEST_USER_2_PASSWORD`

The workflow uploads the generated HTML report as a GitHub Actions artifact for 30 days. Reports and screenshots are not committed because they can contain credentials or sensitive staging data.

## Project structure

- `pages/` contains page objects and selectors.
- `tests/` contains Playwright specifications.
- `test-data/` contains non-secret JSON test scenarios and environment-variable mappings.
- `playwright.config.ts` configures the base URL, HTML report, traces, and failure screenshots.