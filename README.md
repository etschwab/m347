# m347 – Webserver (Nginx) mit Docker Compose - Etienne Schwab

## Auftrag 1 – Webserver + Website persistent
Diese Lösung startet einen Nginx-Webserver in einem Docker-Container und liefert die Website-Dateien aus diesem Repository aus.
Die Website bleibt nach Stop/Start verfügbar, weil die Dateien per Volume (Bind-Mount) in den Container eingebunden werden.

---

## Start (Play with Docker / Bewertung)
```bash
git clone https://github.com/etschwab/m347.git
cd m347
docker-compose -f docker-compose/docker-compose.yml up -d
