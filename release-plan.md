# Twilio Node SDK — Release Plan

## test-release.yml — Pre-release Validation

**Triggers:** Manual dispatch | Cron (Monday 9AM IST)

### Jobs

1. **lockfile-hygiene**
   - Checkout
   - `npm-lockfile-hygiene` action (fails if internal Artifactory hosts found in lockfile)

2. **test** (Node 22, 24 matrix) — _needs: lockfile-hygiene_
   - Checkout
   - Artifactory OIDC Auth
   - Setup Node + cache
   - `npm ci`
   - `npm test`
   - `npm run build`

3. **deploy-dry-run** (Pre-release validation) — _needs: test_
   - Checkout
   - Artifactory OIDC Auth
   - Setup Node 24
   - `npm ci`
   - `npm run build`
   - `npm pack` (creates tarball locally)
   - Print summary
   - **Does NOT publish**

4. **notify-on-failure** (cron runs only)
   - Slack notification with job results

---

## deploy.yml — Publish to npm

**Trigger:** Tag push matching `v*`

### How to release

1. Bump `version` in `package.json`, merge to `main`
2. Tag and push: `git tag v6.0.3 && git push --tags`
3. Workflow fires automatically
4. Approve the `production` environment gate when prompted
5. Verify: `npm view twilio@6.0.3` + check provenance badge on npmjs.org

### Jobs

1. **test** (Node 22, 24 matrix)
   - Checkout
   - Artifactory OIDC Auth
   - Setup Node + cache
   - `npm ci`
   - `npm test`
   - `npm run build`

2. **deploy** (Publish to npm) — _needs: test, requires `production` env approval_
   - Checkout
   - Artifactory OIDC Auth
   - Setup Node 24
   - Create GitHub Release (auto-generated notes)
   - `npm ci`
   - `npm run build`
   - Validate tag matches `package.json` version
   - Publish to `registry.npmjs.org` (OIDC, `--provenance`, `--access public`)
   - Prerelease tag (e.g. `v1.2.3-rc.1`) publishes to `next` dist-tag
   - Stable tag (e.g. `v1.2.3`) publishes to `latest` dist-tag

---

## End-to-end Release Day Flow

| Step | Action                                                                           |
| --- |----------------------------------------------------------------------------------|
| Weekly | Monday cron runs `test-release.yml` — confirms infra is healthy                  |
| 1 | [ **_Librarian_** ] PR: bump `package.json` version, merge to `main`             |
| 2 | [ **_Librarian_** ]  `git tag vX.Y.Z && git push --tags`                         |
| 3 | `deploy.yml` fires automatically on tag creation, tests run                      |
| 4 | [ **_Manual_** ] Approve `production` environment gate                           |
| 5 | GitHub Release created, package published to npm                                 |
| 6 | [ **_Manual_** ] Verify: `npm view twilio@X.Y.Z` + provenance badge on npmjs.org |

---

## Platform Team Dependencies

| Dependency | Owner | Breaks if... |
| --- | --- | --- |
| Artifactory OIDC provider (`github-actions`) | SSC / Platform | Repo renamed, org changed, trust not configured |
| `vars.ARTIFACTORY_URL` | Repo admin | Variable not set or URL changes |
| `virtual-npm-thirdparty` Artifactory repo | SSC / Artifactory admin | Repo missing, packages not proxied |
| `production` GitHub environment | Repo admin | Environment doesn't exist or approvals misconfigured |
| `ubuntu-x64` runner group | Enterprise admin | Repo not added to runner group, or runner pool down |
| npm trusted publisher | npm org admin | Not registered, or workflow filename / environment mismatch |
