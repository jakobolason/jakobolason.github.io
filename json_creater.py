import os

def img_syntax_creator(path):
    data = os.listdir(path)
    for file in data:
        print(f"<img src='{path}\{file}' width=400px>")

img_syntax_creator("Media\Pictures\Iceland-2023")
# img_syntax_creator("Media\Pictures\Kilimanjaro")
