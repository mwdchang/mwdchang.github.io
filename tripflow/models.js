/********************************************************************************
*
* Basic building blocks
* 
* Trip
* - id: string
* - name:  string
* - plans: Plan[]
*
* Plan:
* - id: string
* - name: string
* - start: number
* - end:   number 
* - items: Item[]
*
*
********************************************************************************/
class Trip {
  constructor() {
    this.name = ''
    this.plans = []
    this.places = []
  }

  addPlan(plan) {
    this.plans.push(plan)
  }

  addPlace(place) {
    this.places.push(place)
  }

  findPlace(placeId) {
    let r = _.find(this.places, d => d.place_id === placeId)
    return r || {}
  }

  load(text) {
    let data = JSON.parse(text)
    this.loadJSON(data)
  }

  loadJSON(data) {
    this.name = data.name || ''
    this.places = data.places || []
    this.plans = data.plans || []
  }

  toObj() {
    return {
      name: this.name,
      places: this.places.map(d => d.place_id),
      plans: this.plans
    }
  }

}

class Plan {
  constructor() {
    this.name = ''
    this.start = 0
    this.end = 0
    this.itineraries = []
  }

  remove(idx) {
  }

  add(placeId, duration) {
    this.itineraries.push({
      placeId: placeId,
      duration: duration
    })
  }
}


