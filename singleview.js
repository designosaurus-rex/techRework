const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

window.addEventListener("load", getProduct);

function getProduct() {
  fetch(`https://eivlorcsdzigwscwpwbo.supabase.co/rest/v1/TSL?id=eq.${id}`, {
    headers: {
      apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpdmxvcmNzZHppZ3dzY3dwd2JvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5MTkxNjksImV4cCI6MjA0MTQ5NTE2OX0.XHr02wIxJcMzmOajL33TOq2DWiMQgFRh1H6WLDIHQdU"
    }
  })
    .then((res) => res.json())
.then((product) => showProduct(product))
}

function showProduct(product) {
  console.log(product)


  // Meget vigtig, denne åbner objektet 
  const productInfo = product[0]

  document.querySelector("h1").textContent = productInfo.anvendelse;
  document.querySelector("p").textContent = productInfo.produktnavn;
  document.querySelector("h2").textContent = productInfo.Mærke;
  document.querySelector("h3").textContent = productInfo.category;

}
