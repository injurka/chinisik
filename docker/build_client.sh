#!/bin/bash

# Проверяем, был ли передан аргумент с версией
if [ -z "$1" ]; then
  echo "Ошибка: Не указана версия."
  echo "Пример использования: ./build_client.sh v1.0.0"
  exit 1
fi

VERSION=$1

echo "--- Сборка образа клиента с тегом: chinisik-client:$VERSION ---"

# Переходим в директорию сервера
cd apps/client

docker build -t chinisik-client:$VERSION .

echo "--- Сборка образа клиента chinisik-client:$VERSION завершена успешно! ---"
