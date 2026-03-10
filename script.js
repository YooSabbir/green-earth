const categoriesContainer = document.getElementById("categories-container")
const cardContainer = document.getElementById("card-container")

async function loadCategories() {
    //data fetch korlam
    const res = await fetch("https://openapi.programming-hero.com/api/categories")
    const data = await res.json();
    //loop caliye categories item gula console korlam
    data.categories.forEach(element => {
        const btn = document.createElement("button"); //btn create
        btn.classList = "block px-3 py-2 rounded-lg text-sm font-semibold bg-[#15803D] text-white";//classlist add
        btn.textContent = element.category_name;//bitoorer text add
        categoriesContainer.append(btn)//append
    });
}


async function loadCard() {
    const res = await fetch("https://openapi.programming-hero.com/api/plants");
    const card =await res.json();
    
    card.plants.forEach(cards => {
        const div = document.createElement("div");
        div.classList = "bg-white rounded-2xl overflow-hidden border border-green-100 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-100 transition-all duration-200";
        div.innerHTML = `
        <div class="w-full h-44 bg-gray-100 flex items-center justify-center">
            <img src="${cards.image}" alt="${cards.name}" class="w-full h-full object-cover"
                onerror="this.parentElement.innerHTML='<svg width=48 height=48 viewBox=&quot;0 0 24 24&quot; fill=none stroke=&quot;#86efac&quot; stroke-width=&quot;1.5&quot;><path d=&quot;M12 22V12M12 12C12 7 7 4 3 6c0 4 3 8 9 8M12 12c0-5 5-8 9-6c0 4-3 8-9 8&quot;/></svg>'" />
        </div>
        <div class="p-4">
            <h3 class="font-bold text-gray-900 text-sm mb-1">${cards.name}</h3>
            <p class="text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">${cards.description}</p>
            <div class="flex items-center justify-between mb-3">
                <span class="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
                    ${cards.category}
                </span>
                <span class="font-bold text-gray-800 text-sm">৳${cards.price}</span>
            </div>
            <button class="w-full bg-[#15803D] hover:bg-green-700 active:scale-95 text-white font-bold py-2.5 rounded-xl text-xs transition-all">
                Add to Cart
            </button>
        </div>
    `;
        cardContainer.append(div)
    }) 
}

loadCard()

loadCategories()