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

## Self Hosted Icons

Get self Hosted High Quality Icons alongside their links. (All Rights to Image Owners)

`Version: 0.1`
`Type: Item`

### Features

### Icon Definitions

| Service | Icon Name |
| --- | --- |
| Jellyfin | jellyfin |
| BookStack | bookstack |
| Pi-hole | pihole |
| FreeNas | freenas |
| Omada Controller | omada |
| OpnSense | opnsense |

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

## Light Theme

Simple Light Theme for those not loving the Dark Theme.

`Version: 0.1`
`Type: Theme`
