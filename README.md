# m347 – Webserver mit Docker
Autor: Etienne Schwab

In diesem Projekt wird eine eigene Webseite mit einem Nginx-Webserver in einem Docker-Container betrieben. Die Webseite wird beim Build in das Docker-Image integriert und bleibt auch nach dem Stoppen und erneuten Starten des Containers verfügbar. Ziel ist es, einen Webserver zu installieren, eine Webseite bereitzustellen und das Projekt so aufzubauen, dass es reproduzierbar über Docker Compose gestartet werden kann.

Das Projekt kann in Play with Docker mit folgenden Befehlen gestartet werden:
```bash
git clone https://github.com/etschwab/m347.git
cd m347
docker-compose -f docker-compose/docker-compose.yml up -d
```
Nach dem Start ist die Webseite über Port 8080 erreichbar. (http://localhost:8080/)

Technische Umsetzung:

Dockerfile:
```bash
FROM nginx:alpine
COPY . /usr/share/nginx/html

docker-compose.yml:

services:
  web:
    build: ..
    container_name: m347-web
    ports:
      - "8080:80"
    restart: unless-stopped
```
Der Webserver basiert auf dem offiziellen Nginx-Image. Beim Build werden alle HTML-, CSS- und Bilddateien in das Verzeichnis /usr/share/nginx/html kopiert. Docker Compose baut das Image und startet den Container. Port 8080 des Hosts wird auf Port 80 im Container weitergeleitet.
