# gibbM293 – Webserver (Nginx) mit Docker Compose

## Auftrag 1 – Webserver + Website persistent
Diese Lösung startet einen Nginx-Webserver in einem Docker-Container und liefert die Website-Dateien aus diesem Repository aus.
Die Website bleibt nach Stop/Start verfügbar, weil die Dateien per Volume (Bind-Mount) in den Container eingebunden werden.

---

## Start (Play with Docker / Bewertung)
```bash
git clone https://github.com/etschwab/m347.git
cd gibbM293
docker-compose -f docker-compose/docker-compose.yml up -d
