
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

    
  // async function fetchCategories() {
  //   try {
  //     const res = await fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=cnTesjSt30g0HpdGvpWqPLOGVpl7TgMv");
      
  //     const data = await res.json();

  //     // console.log(data.results.filter( sect => sect.section == 'health' || sect.section == 'sports' || sect.section == 'business' || sect.section == 'travel'));    
      
  //     const categorieFilter = data.results.filter( sect => sect.section == 'health' || sect.section == 'sports' || sect.section == 'business' || sect.section == 'travel' || sect.section == 'arts');
  //     // console.log(categorieFilter)

      // const dataResults = data.results.slice(0, 10);
    
    // } catch (error) {
    //   categoriesContainer.textContent = "Failed to load categories.";
    //   console.error("Error fetching categories:", error);
    // }
  // }
  
  // toggleDark.addEventListener("click", () => {
  //   document.body.classList.toggle("dark");
  // });
  
  // fetchCategories();
