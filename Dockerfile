FROM elmsln/haxcms:1f7a2b4ae2 as base

FROM socialengine/nginx-spa as prod
WORKDIR /app
COPY . .
COPY --from=base /var/www/html/build /app/build