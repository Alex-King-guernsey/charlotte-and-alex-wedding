fetch("data/content.json").then(r=>r.json()).then(data=>{const target=new Date(data.date);const now=new Date();const diff=target-now;const days=Math.max(0,Math.floor(diff/86400000));document.getElementById('app').innerHTML=`<div class="nav"><a href="#story">Story</a><a href="#day">The Day</a><a href="#venue">Venue</a><a href="#stay">Stay</a><a href="#faq">FAQ</a></div><div class="hero"><div class="overlay">

<h1>${data.couple}</h1>

<h2>${data.homepage.title}</h2>

<p>${data.homepage.subtitle}</p>

<p class="hero-message">
  ${data.homepage.message}
</p>

<div class="count">

<div class="tile"><strong>${days}</strong><br>Days</div></div><a class="btn" href="${data.rsvp.url}">RSVP Now</a></div></div><div class="section"><h2 id="story">Our Story</h2><div class="card">${data.story.content}</div><h2 id="day">The Big Day</h2>${data.timeline.map(t=>`<div class='card'><strong>${t.time}</strong><br>${t.event}</div>`).join('')}<h2>The Day After</h2><div class='card'><strong>${data.bbq.date}</strong><br>${data.bbq.time}<br><br>${data.bbq.description}</div><h2 id='venue'>Venue</h2><div class='card'><h3>${data.venue.name}</h3><p>${data.venue.description}</p><p>${data.venue.address}<br>${data.venue.postcode}</p></div>

<h2>Transport & Parking</h2>

<div class='card'>
  <strong>Parking</strong><br>
  ${data.travel.parking}
</div>

<div class='card'>
  <strong>Accessible Parking</strong><br>
  ${data.travel.accessibleParking}
</div>

<div class='card'>
  <strong>Camping Access</strong><br>
  ${data.travel.camping}
</div>

<div class='card'>
  <strong>Rail Travel</strong><br>
  ${data.travel.rail}
</div>

<div class='card'>
  <strong>Taxis</strong><br>
  ${data.travel.taxi}
</div>

<div class='card'>
  <strong>By Road</strong><br>
  ${data.travel.road}
</div>

<h2 id='stay'>Accommodation</h2>

<div class='card'>
  <h3>🏕 ${data.campingCaravanning.title}</h3>

  <p>${data.campingCaravanning.description}</p>

  <p>
    <strong>Tent Pitch:</strong>
    ${data.campingCaravanning.tentPrice}
  </p>

  <p>
    <strong>Caravan Pitch:</strong>
    ${data.campingCaravanning.caravanPrice}
  </p>

  <p>
    <strong>Electric Hook-Ups Available:</strong>
    ${data.campingCaravanning.electricHookupsAvailable}
  </p>

  <ul>
    ${data.campingCaravanning.facilities.map(
      f => `<li>${f}</li>`
    ).join('')}
  </ul>

  <p>${data.campingCaravanning.notes}</p>

  <a class='btn'
     href='${data.campingCaravanning.url}'
     target='_blank'>
     Request Camping or Caravan Pitch
  </a>
</div>

<h3>🏨 Nearby Accommodation</h3>

${data.accommodation.map(h=>`
<div class='card hotel'>
  <h3>${h.name}</h3>
  <p>${h.description}</p>
  <a class='btn' href='${h.website}'>
    View Accommodation
  </a>
</div>
`).join('')}

<h2>Gallery</h2><div class='gallery'>${data.gallery.map(g=>`<img src='${g}'>`).join('')}</div><h2 id='faq'>FAQ</h2>${data.faq.map(f=>`<details><summary>${f.question}</summary><p>${f.answer}</p></details>`).join('')}<h2>Photo Sharing</h2><div class='card'><a class='btn' href='${data.photoSharing.url}'>Share Photos</a></div><h2>Contact</h2><div class='card'>${data.contact.email}</div></div><footer><h2>${data.couple}</h2><p>Froginwell Vineyard • 12 June 2027</p></footer>`})
