
export default function setting() {

  const categoriesContainer = document.createElement("main");
  categoriesContainer.className = 'category__main';

    const headElm = document.createElement("h2");
    headElm.className = 'category--heading';
    headElm.textContent = 'Settings';

    const catElm = document.createElement("p");
    catElm.className = 'category--para';
    catElm.textContent = 'Categories';
  categoriesContainer.append(headElm, catElm)

  
  // const toggleDark = document.getElementById("toggleDark");
  
  const storedCategories = JSON.parse(localStorage.getItem("nyt-categories")) || {};
  
  const categories = ['europe','health', 'sports', 'business', 'travel'];
  
      if (categories) {
        categories.forEach(section => {
          // console.log(section.section);          
          const categoryKey = section.toLowerCase();
          
          // console.log(categoryKey);
          
          const isChecked = storedCategories[categoryKey] ?? true;
  
          const div = document.createElement("div");
          div.className = "category";
  
          const label = document.createElement("label");
          label.textContent = section;
  
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = isChecked;
          checkbox.onchange = () => {
            storedCategories[categoryKey] = checkbox.checked;
            localStorage.setItem("nyt-categories", JSON.stringify(storedCategories));
          };
          // div.append(label);
          div.append(label, checkbox);
          categoriesContainer.append(div);
        });
      }
      
      return categoriesContainer;
    }

  
  // toggleDark.addEventListener("click", () => {
  //   document.body.classList.toggle("dark");
  // });
  
  // fetchCategories();
