# deploy/DEPLOYMENT.md

## Purpose
Provide the exact host-side deployment instructions for serving the static `WE OUT HERE` site at `weouthere.ussyco.de` on the `ussyco.de` machine.

## Owner/Subagent
ops_agent

## Status
Live on `weouthere.ussyco.de`; nginx vhost installed and verified on 2026-04-10

## Dependencies
- `site/`
- `deploy/nginx/weouthere.ussyco.de.conf`
- existing nginx installation on the `ussyco.de` host
- existing wildcard TLS certificate for `*.ussyco.de`

## Hosting Findings
- Nginx is the active edge server on this machine.
- `ussyco.de` is already serving a valid wildcard certificate covering `DNS:*.ussyco.de` and `DNS:ussyco.de`.
- Because of that wildcard cert, `weouthere.ussyco.de` does **not** require a self-signed certificate.
- The only required host-side change is adding a dedicated nginx server block for `weouthere.ussyco.de` that points to this project's static `site/` directory.

## Installed Host Actions
The following commands were run on the host with root access:

```bash
sudo cp /home/mojo/projects/show/we-out-here/deploy/nginx/weouthere.ussyco.de.conf /etc/nginx/sites-available/weouthere.ussyco.de
sudo ln -s /etc/nginx/sites-available/weouthere.ussyco.de /etc/nginx/sites-enabled/weouthere.ussyco.de
sudo nginx -t
sudo systemctl reload nginx
```

## Verified Result
- `http://weouthere.ussyco.de` redirects to HTTPS
- `https://weouthere.ussyco.de` serves `/home/mojo/projects/show/we-out-here/site`
- TLS is provided by the existing `ussyco.de` wildcard certificate

## Why No Self-Signed Certificate
The live server certificate already includes:

- `DNS:*.ussyco.de`
- `DNS:ussyco.de`

Using the existing wildcard certificate is the correct deployment path. A self-signed certificate would be a downgrade in trust and browser compatibility.

## Validation Commands
Used during live verification:

```bash
curl -I http://weouthere.ussyco.de
curl -I https://weouthere.ussyco.de
openssl s_client -connect weouthere.ussyco.de:443 -servername weouthere.ussyco.de </dev/null
```

## Local Paths
- Site root: `/home/mojo/projects/show/we-out-here/site`
- Nginx vhost source: `/home/mojo/projects/show/we-out-here/deploy/nginx/weouthere.ussyco.de.conf`

## Notes
- Root credentials were provided interactively for the host install step.
- `nginx -t` passed with pre-existing warning noise about unrelated duplicate server names elsewhere in the host config; the `weouthere.ussyco.de` vhost itself validated successfully.

## Next related files
- `site/index.html`
- `README.md`
- `00_admin/studio_manifest.md`
- `deploy/nginx/weouthere.ussyco.de.conf`
