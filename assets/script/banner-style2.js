// import Header
fetch("../../components/banner-style2.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("BannerStyle2").innerHTML = data;
  });
