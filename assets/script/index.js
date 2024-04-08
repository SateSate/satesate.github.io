// import Header
fetch("../../components/banner-style1.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("BannerStyle1").innerHTML = data;
  });
