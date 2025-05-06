import darkMode from "./conponents/darkmode";

export default function setting() {

  const categoriesContainer = document.createElement("main");
  categoriesContainer.className = 'category__main';

    const headElm = document.createElement("h2");
    headElm.className = 'category--heading';
    headElm.textContent = 'Settings';

    const catElm = document.createElement("p");
    catElm.className = 'category--para';
    catElm.textContent = 'Categories';
  categoriesContainer.append(headElm, catElm);
  
    const storedCategories = JSON.parse(localStorage.getItem("nyt-categories")) || {};

    const categories = ['europe','health', 'sports', 'business', 'travel'];

      categories.forEach(category => {
        // console.log(section.section);          
        const categoryKey = category.toLowerCase();          
        // console.log(categoryKey);      
        const isChecked = storedCategories[categoryKey] ?? true;
        const catElm = document.createElement("div");
        catElm.className = "category";
        
        const catName = document.createElement("span");
        catName.textContent = category;

          const labelElm = document.createElement("label");
          labelElm.className = 'switch';
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = isChecked;
            checkbox.addEventListener('change', () => {
                storedCategories[categoryKey] = checkbox.checked;
                localStorage.setItem("nyt-categories", JSON.stringify(storedCategories));
            });
            const sliderElm = document.createElement('span')
            sliderElm.className ='slider';
          labelElm.append(checkbox, sliderElm);
        catElm.append(catName, labelElm);
    categoriesContainer.append(catElm);
    });
    
    //-----------Dark mode---------
    const darkElm = document.createElement("div");
    darkElm.className = 'dark--toggle';
      const toggelLabelElm = document.createElement('label');
      toggelLabelElm.className = "dark--label"
      toggelLabelElm.textContent = 'Toogle dark mode';
          const buttonElm = document.createElement('input');
          buttonElm.type = "checkbox";
          buttonElm.className = 'dark--btn'
          // const checkbox = document.createElement("input");
          toggelLabelElm.append(buttonElm);

    darkElm.append(toggelLabelElm);
      
      const toggleDark = darkElm.querySelector('.dark--btn');
      // console.log(toggleDark);    
      darkMode(toggleDark);

  categoriesContainer.append(darkElm);    

    
  return categoriesContainer;
}

  
  // toggleDark.addEventListener("click", () => {
  //   document.body.classList.toggle("dark");
  // });
  
  // fetchCategories();
