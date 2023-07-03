import json
import ast
food_list_of_lists = ast.literal_eval(open("original_data", "r").read())
food_list_of_dicts = []
for food in food_list_of_lists:
    food_dict = {}
    food_dict["food"] = food[0]
    food_dict["quantity"] = food[1]
    food_dict["oxalate"] = food[2]
    food_dict["source"] = food[3]
    food_dict["sort"] = food[4]
    food_list_of_dicts.append(food_dict)
out_file = open('original_data.json', 'w')
json.dump(food_list_of_dicts, out_file, indent=4)
out_file.close()
