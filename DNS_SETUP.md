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

### Record 2: A Records for Apex `jarheadtutor.com` (Required for Root Domain)
These point root `jarheadtutor.com` (without `www`) to GitHub's CDN IPv4 addresses:
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

---

### Record 3: AAAA Records for Apex `jarheadtutor.com` (Required for IPv6 & Mobile Networks)
Modern mobile carriers (T-Mobile, AT&T, Verizon) and many home Wi-Fi networks route IPv6 natively. These point root `jarheadtutor.com` to GitHub's CDN IPv6 addresses:
- **Record AAAA 1**:
  - **Type**: `AAAA`
  - **Host / Name**: `@`
  - **Value / IP**: `2606:50c0:8000::153`
- **Record AAAA 2**:
  - **Type**: `AAAA`
  - **Host / Name**: `@`
  - **Value / IP**: `2606:50c0:8001::153`
- **Record AAAA 3**:
  - **Type**: `AAAA`
  - **Host / Name**: `@`
  - **Value / IP**: `2606:50c0:8002::153`
- **Record AAAA 4**:
  - **Type**: `AAAA`
  - **Host / Name**: `@`
  - **Value / IP**: `2606:50c0:8003::153`

---

### GoDaddy Setup Checklist

Log into [GoDaddy DNS Management](https://dcc.godaddy.com/manage/dns) for `jarheadtutor.com`:

1. **CNAME**:
   - `www` &rarr; `keithowns.github.io`
2. **A Records** (Ensure all 4 exist under `@`):
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. **AAAA Records** (Add all 4 under `@`):
   - `2606:50c0:8000::153`
   - `2606:50c0:8001::153`
   - `2606:50c0:8002::153`
   - `2606:50c0:8003::153`

---

### Automatic SSL / HTTPS Verification

1. Once you save the DNS records, DNS propagation typically takes between 5 to 30 minutes.
2. GitHub automatically requests a free, auto-renewing **Let's Encrypt SSL certificate** for `www.jarheadtutor.com` and `jarheadtutor.com`.
3. In **GitHub Repository Settings > Pages**, ensure **Enforce HTTPS** is checked once the certificate finishes provisioning.
