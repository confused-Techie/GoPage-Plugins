# GoPage-Plugins
 Collection of Plugins made for GoPage

## Status Check

Simple way to see if the address is currently reachable.

`Version: 0.3`
`Type: Item`

### Features

* Will check a link you provide with clear visual feedback as to whether its accessible.
* Will check again every 5 minutes the page is open.
* Has per Item configuration as to what Status Codes are acceptable to consider as online.
* Configuration option available to Ignore Security on a per Item basis, allowing checks against items with improper certificates configured.

### Configuration

`statusCodes=[200];disableSecurity=false;`

* statusCodes: An array of acceptable status codes. This can be set to whatever works for your specific website. Such as if the website will redirect you would set `statusCodes=[200,301]`. If your Link is up but Status Check says otherwise, hovering over the Status Symbol will show its status code, and that can be added to the array to be more accurate. Refer to [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) on status codes and what they mean.
* disableSecurity: This should ONLY be used on a Self Hosted Site that may use `https://` but you've never set up proper certificates. Meaning when you visit the page (Most but not all browsers will do this) it shows an alert or warning that its insecure. This will disable all security checks for the site and should never be enabled for a website outside of your control.

## Self Hosted Icons

Get self Hosted High Quality Icons alongside their links. (All Rights to Image Owners)

`Version: 0.1`
`Type: Item`

### Features

### Icon Definitions

| Service | Icon Name | Icon |
| --- | --- | --- |
| Jellyfin | jellyfin | <img src="selfHostedIcons/icons/jellyfin/icon-transparent.svg" width="50"> |
| BookStack | bookstack | <img src="selfHostedIcons/icons/bookstack/logo.png" width="50"> |
| Pi-hole | pihole | <img src="selfHostedIcons/icons/pihole/icon.png" width="50"> |
| FreeNas | freenas | <img src="selfHostedIcons/icons/freenas/logo.png" width="50"> |
| Omada Controller | omada | <img src="selfHostedIcons/icons/omada/icon.png" width="50" > |
| OpnSense | opnsense | <img src="selfHostedIcons/icons/opnsense/icon.png" width="50" > |
| AdGuard | adguard | <img src="selfHostedIcons/icons/adguard/icon.png" width="50"> |
| Plex | plex | <img src="selfHostedIcons/icons/plex/icon.png" width="50"> |
| Portainer | portainer | <img src="selfHostedIcons/icons/portainer/icon.png" width="50"> |

### Configuration

`icon=SERVICE;`

* SERVICE: Should match one of the above Icon Names to display that icon.

## AQI Current

Get Air Quality Information at a glance. Via AirNow.gov.

`Version: 0.2`
`Type: Header`

### Features

* Uses a Zip Code and AirNow.gov API Key set in the configuration options to retrieve the Air Quality Index information.

## Favicon Swiper

Retrieve Favicons via known methods or Google APIs as a fallback.

`Version: 0.2`
`Type: Item`

### Features

* Attempts to get Favicons using several methods.
* Will fallback to Google API's if all methods fail.

## Jellyfin API

Get information about your Jellyfin Instance.

`Version: 0.1`
`Type: Item`

### Features

* Uses configuration options of your Jellyfin Instance IP/Port and API Key
* Currently returns the count of Total Movies, and Episodes on the server.

### Configuration

`url=http://your-server:port;apiKey=yourKey;`

* url: The exact root url of your Jellyfin Instance.
* apiKey: An API Key for your Jellyfin Instance.

## Light Theme

Simple Light Theme for those not loving the Dark Theme.

`Version: 0.1`
`Type: Theme`
