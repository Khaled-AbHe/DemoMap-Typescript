export interface Mappable {
    location: {
        lat: number,
        lon: number
    },
    markerContent(): string
}

export class CustomMap {

    private googleMap = google.maps.Map;

    constructor(divID: string) {
        this.googleMap = google.maps.Map(document.getElementById(divID) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lon: 0
            }
        })
    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lon
            }
        })

        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            })
            infoWindow.open(this.googleMap, marker)
        })
    }

}