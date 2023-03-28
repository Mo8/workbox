# workbox

I - Workbox
1) liste des fonctionnalités offertes
https://developer.chrome.com/docs/workbox/what-is-workbox/
Simplifie l’utilisation des services worker en donnant une interface haut niveau
Permet d’avoir du precaching, du runtimecaching, du caching management
```
workbox-routing for request matching.
workbox-strategies for caching strategies.
workbox-precaching for precaching.
workbox-expiration for managing caches.
workbox-window for registering a service worker and handling updates in the window context.
```
2) Méthodes de cache et utilisations possibles
https://developer.chrome.com/docs/workbox/modules/workbox-strategies/
Méthode de cache :
-Stale-While-Revalidate
-Cache First (Cache Falling Back to Network)
-Network First (Network Falling Back to Cache)
-Network Only
-Cache Only
Utilisation possible:
Cache sur des requete API en offline 
Cache sur des informations lourdes avec expiration pour resynchroniser ( provenant d’une base de donnée par exemple)
3) uses cases à intégrer dans le projet doctoliberal

cache des données en networkfirst pour la liste des rdvs et en cache first pour les assets + html + css
lors d'une prise de rdv client, on peut effectué une action ( par exemple envoyé une push notification au doctor lié au rdv)
