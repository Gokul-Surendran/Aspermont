//search
const searchbtn = document.querySelector(".asp-header__searchimg");
const searchbar = document.querySelector(".asp-header__ipouter");

searchbtn.addEventListener("click", () => {
  searchbar.classList.add("active");
});
