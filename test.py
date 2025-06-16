import re

def check_password_strength(password):
    score = 0
    if len(password) >= 8: score += 1
    if re.search(r'[A-Z]', password): score += 1
    if re.search(r'[a-z]', password): score += 1
    if re.search(r'\d', password): score += 1
    if re.search(r'\W', password): score += 1
    return score

pwd = input("Enter a password to check: ")
strength = check_password_strength(pwd)
print(f"Strength score: {strength}/5")
