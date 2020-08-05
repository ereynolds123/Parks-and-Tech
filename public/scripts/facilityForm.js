function submitFacility() {
  event.preventDefault();

  let facilityName = document.getElementById("facilityName").value;
  // let facilityType = document.getElementById("facilityType").value;
  // let activityType = document.getElementById("activityType").value;
  let location = document.getElementById("location").value;
  let announcements = document.getElementById("announcements").value;
  let contactInfo = document.getElementById("contactInfo").value;
  let website = document.getElementById("website").value;
  let lat = document.getElementById("facilityLatitude").value;
  let long = document.getElementById("facilityLongitude").value;
  let uid = Date.now();

//Facilities Activities Checkboxes
  let beach = document.getElementById("beach");
  console.log(beach)

  if (beach.checked ) {
    beach = "beach";
  } else {
    beach = "";
  }

  let park = document.getElementById("park");

  if (park.checked) {
    park = "park";
  } else {
    park = "";
  }

  let playground = document.getElementById("playground");

  if (playground.checked) {
    playground = "playground";
  } else {
    playground= "";
  }

  let dogPark = document.getElementById("dogPark");

  if (dogPark.checked) {
    dogPark = "dogPark";
  } else {
    dogPark= "";
  }

  let biking = document.getElementById("biking");

  if (biking.checked) {
    biking = "biking";
  } else {
    biking= "";
  }

  let hiking = document.getElementById("hiking");

  if (hiking.checked) {
    hiking = "hiking";
  } else {
    hiking= "";
  }

  let basketball = document.getElementById("basketball");

  if (basketball.checked){
    basketball = "basketball";
  } else {
    basketball= "";
  }

  let fields = document.getElementById("fields");

  if (fields.checked) {
    fields = "fields";
  } else {
    fields= "";
  }

  formObj = {
    facilityName: facilityName,
    // facilityType: facilityType,
    // activityType: activityType,
    location: location,
    announcements: announcements,
    contactInfo: contactInfo,
    website: website,
    lat: lat,
    long: long,
    beach: beach,
    park: park,
    playground: playground,
    dogPark: dogPark, 
    biking: biking,
    hiking: hiking, 
    basketball: basketball,
    fields: fields, 
    uid: uid,
  };

  console.log(formObj)

  //Opens the connection to the database and sets the object to the database
  myDb.ref(`/Facilities/facility_${uid}`).set(formObj);
  document.getElementById("facilitiesForm").reset();
}
