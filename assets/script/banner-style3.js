// import Header
fetch("../../components/banner-style3.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("BannerStyle3").innerHTML = data;
  });
