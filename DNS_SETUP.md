# DNS Configuration for JarHeadTutor.com

To connect your domain **`jarheadtutor.com`** and **`www.jarheadtutor.com`** to your live GitHub Pages tutoring landing page, log into your domain registrar (GoDaddy, Namecheap, Google Domains/Squarespace, Cloudflare, Porkbun, etc.) and add the following DNS records:

---

### Record 1: CNAME for `www` (Required)
This points `www.jarheadtutor.com` to GitHub Pages:
- **Type**: `CNAME`
- **Host / Name**: `www`
- **Value / Points to**: `keithowns.github.io.`
- **TTL**: Automatic (or 1 Hour / 3600)

---

### Record 2: A Records for Apex `jarheadtutor.com` (Recommended)
These point root `jarheadtutor.com` (without `www`) to GitHub's CDN IP addresses:
- **Record A**:
  - **Type**: `A`
  - **Host / Name**: `@` (or leave blank / root)
  - **Value / IP**: `185.199.108.153`
- **Record B**:
  - **Type**: `A`
  - **Host / Name**: `@`
  - **Value / IP**: `185.199.109.153`
- **Record C**:
  - **Type**: `A`
  - **Host / Name**: `@`
  - **Value / IP**: `185.199.110.153`
- **Record D**:
  - **Type**: `A`
  - **Host / Name**: `@`
  - **Value / IP**: `185.199.111.153`

*(Alternatively, if your registrar provides a "Domain Forwarding" feature, you can simply forward `jarheadtutor.com` to `https://www.jarheadtutor.com` with 301 Permanent Redirect).*

---

### Automatic SSL / HTTPS Verification

1. Once you save the DNS records, DNS propagation typically takes between 5 to 30 minutes.
2. GitHub automatically requests a free, auto-renewing **Let's Encrypt SSL certificate** for `www.jarheadtutor.com`.
3. In **GitHub Repository Settings > Pages**, ensure **Enforce HTTPS** is checked once the certificate finishes provisioning.
