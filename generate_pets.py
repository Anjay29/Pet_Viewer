import json
import random

# A larger list of unique pet names
unique_names = [
    "Bella", "Max", "Charlie", "Lucy", "Cooper", "Bailey", "Daisy", "Sadie", "Molly", "Buddy",
    "Rocky", "Toby", "Riley", "Lola", "Duke", "Luna", "Zoey", "Bentley", "Chloe", "Jake",
    "Maggie", "Sophie", "Oliver", "Gracie", "Gizmo", "Jasper", "Dexter", "Nala", "Buster", "Oreo",
    "Teddy", "Simba", "Milo", "Penny", "Jack", "Shadow", "Coco", "Missy", "Bruno", "Pepper",
    "Lucky", "Rusty", "Zeus", "Rosie", "Bandit", "Willow", "Murphy", "Lulu", "Harley", "Holly",
    "Hunter", "Izzy", "Sammy", "Maddie", "Rex", "Marley", "Stella", "Leo", "Honey", "Boomer",
    "Zoe", "Benji", "Boomer", "Lily", "Brody", "Emma", "Jax", "Koda", "Winston", "Ellie",
    "Chester", "Otis", "Ranger", "Moose", "Roxy", "Blue", "Henry", "Dakota", "Ace", "Nikki",
    "Sasha", "Beau", "Baxter", "Ginger", "Oscar", "Finn", "Raven", "Samson", "Benny", "Hazel",
    "Louie", "Minnie", "Scout", "Sugar", "Boomer", "Simba", "Ruby", "Freddy", "Mickey", "Peanut"
]

# Ensure the list has exactly 100 unique names
unique_names = unique_names[:100]

animal_types = ["Dog", "Cat", "Bird", "Rabbit", "Hamster"]
breeds = {
    "Dog": ["Labrador", "Poodle", "Bulldog", "Beagle", "Rottweiler"],
    "Cat": ["Siamese", "Persian", "Maine Coon", "Ragdoll", "Sphynx"],
    "Bird": ["Parrot", "Canary", "Finch", "Cockatoo", "Budgerigar"],
    "Rabbit": ["Dutch", "Lionhead", "Flemish Giant", "Angora", "Mini Rex"],
    "Hamster": ["Syrian", "Dwarf", "Chinese", "Roborovski", "Campbell's"]
}
colors = ["Yellow", "Cream", "Green", "Brown", "Black", "White", "Gray"]

pets = []

for i in range(1, 101):
    animal_type = random.choice(animal_types)
    pet = {
        "id": i,
        "name": unique_names[i-1],  # Ensure unique names
        "animal_type": animal_type,
        "breed": random.choice(breeds[animal_type]),
        "weight": f"{random.randint(1, 30)}kg",
        "color": random.choice(colors)
    }
    pets.append(pet)

with open("pets.json", "w") as file:
    json.dump(pets, file, indent=2)


