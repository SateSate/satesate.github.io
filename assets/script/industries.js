const categoryNames = document.querySelectorAll(".category-name");

// get all category names
const getCategoryNames = () => {
  const names = new Set();
  categoryNames.forEach((name) => {
    names.add(name.textContent.toUpperCase());
  });
  return Array.from(names);
};

const categoryFiltersContainer = document.querySelector(".category-filters");

// append category filters to the DOM as checkboxes that we can use to filter the industries
const appendCategoryFilters = () => {
  const names = getCategoryNames();
  names.forEach((name) => {
    const filter = document.createElement("div");
    filter.classList.add("category-filter");
    filter.innerHTML = `
      <div class="form-group">
        <input type="checkbox" id="${name}" name="${name}" value="${name}">
        <label for="${name}">${name}</label>
      </div>
    `;
    categoryFiltersContainer.appendChild(filter);
  });
};

appendCategoryFilters();

const industries = document.querySelectorAll(".industry");

// filter industries based on the selected categories
const filterIndustries = () => {
  const selectedCategories = new Set();
  document
    .querySelectorAll(".category-filter input:checked")
    .forEach((input) => {
      selectedCategories.add(input.value);
    });

  industries.forEach((industry) => {
    const industryCategory = industry
      .querySelector(".category-name")
      .textContent.toUpperCase();
    if (
      selectedCategories.size === 0 ||
      selectedCategories.has(industryCategory)
    ) {
      industry.style.display = "block";
    } else {
      industry.style.display = "none";
    }
  });

  // Update the category count after filtering the industries
  updateCategoryCount();
};

const categoryFilters = document.querySelectorAll(".category-filter input");

categoryFilters.forEach((filter) => {
  filter.addEventListener("change", filterIndustries);
});

const updateCategoryCount = () => {
  const visibleIndustries = Array.from(industries).filter(
    (industry) => industry.style.display !== "none"
  );
  const count = visibleIndustries.length;
  document.querySelector("#count").textContent = count;
};

updateCategoryCount();

const filterBtn = document.querySelector(".filter-btn");
filterBtn.addEventListener("click", () => {
  categoryFiltersContainer.classList.toggle("show");
  const minusSign = document.querySelector(".plus-sign span:last-child");
  minusSign.classList.toggle("minus");
});
