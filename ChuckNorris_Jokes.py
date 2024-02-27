import requests

def get_random_joke(category="dev"):
    url = f"https://api.chucknorris.io/jokes/random?category={category}"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        return data
    else:
        print("Error:", response.status_code)
        return None

def main():
    # Module 2: Uses an integer, string, and/or bool
    category_list = [
        "animal", "career", "celebrity", "dev", "explicit", "fashion",
        "food", "history", "money", "movie", "music", "political",
        "religion", "science", "sport", "travel"
    ]

    # Module 3: Uses an if statement or a loop
    for category in category_list:
        joke_data = get_random_joke(category)
        if joke_data:
            # Module 4: Uses a function
            print_joke_info(joke_data)

def print_joke_info(data):
    # Module 5: Uses a list or tuple
    info_keys = ["url", "value"]
    
    # Module 6: Uses a dictionary or set
    info_dict = {key: data[key] for key in info_keys}
    
    print("Joke Information:")
    for key, value in info_dict.items():
        print(f"{key.capitalize()}: {value}")

if __name__ == "__main__":
    main()
