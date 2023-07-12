function Recipe(name, calories, protein, carbs, fat, servings, ingrediants, link) {
    this.name = name;
    this.calories = calories;
    this.protein = protein;
    this.fat = fat;
    this.carbs = carbs;
    this.servings = servings;
    this.ingrediants = ingrediants;
    this.link = link;
}

const firecrackerBeef = new Recipe("Firecracker Beef and Brussels", 3097.6, 220.8, 314.2, 106.4, 5, ["3 3/4 cups (563g) cooked rice", "2lbs (908g) 90/10 ground beef", "1lb (454g) brussels sprouts", "1/2 medium (100g) onion", "2 medium (200g) poblano pepper", "1 tbsp (15 g) minced garlic", "1 tbsp (6 g) red pepper flakes", "4 stalks (20 g) green onions optional for garnish", "1 lime optional for garnish", "1 tbsp (15 g) oil", "1/4 cup (60 g) hot sauce", "1 1/3 tbsp (20 g) apple cider vinegar", "5 tbsp (84 g) honey", "1 1/2 tbsp (15 g) cornstarch", "water to thin if necessary"], "https://mealprepmanual.com/firecracker-beef-brussels/");