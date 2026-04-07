import requests
username = input("Enter the username:")

def search(site, url):
    response = requests.get(url)

    if response.status_code == 200:
        print(f"{site}: FOUND")
    else:
        print(f"{site}: NOT FOUND")



search("Instagram", f"https://instagram.com/{username}")
search("GitHub", f"https://github.com/{username}")
search("Reddit", f"https://reddit.com/user/{username}")