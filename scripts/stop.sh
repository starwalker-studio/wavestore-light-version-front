#!/bin/sh
# Detiene y elimina los contenedores (dev o prod, según cuál esté corriendo)

echo "░█▀▀░▀█▀░█▀█░█▀█░░░█▀▀░█▀█░█▀█░▀█▀░█▀█░▀█▀░█▀█░█▀▀░█▀▄";
echo "░▀▀█░░█░░█░█░█▀▀░░░█░░░█░█░█░█░░█░░█▀█░░█░░█░█░█▀▀░█▀▄";
echo "░▀▀▀░░▀░░▀▀▀░▀░░░░░▀▀▀░▀▀▀░▀░▀░░▀░░▀░▀░▀▀▀░▀░▀░▀▀▀░▀░▀";

sudo docker compose -f docker-compose.dev.yml down 2>/dev/null
sudo docker compose -f docker-compose.yml down 2>/dev/null
