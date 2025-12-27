
BOLD = '\033[1m'
RESET = '\033[0m'

print("Welcome to the Unit Converter!")

while True:
    print("\n--- Unit Converter ---")
    
    convert_from = input('Enter starting Unit of Measurements (feet, yards, inches) or "exit" to quit: ').lower()
    
    if convert_from == 'exit':
        print("Goodbye!")
        break
    
    convert_to = input(f'{BOLD}Enter Unit of Measurements to convert to (feet, yards, inches): {RESET}').lower()

    if convert_from in ['inches', 'in', 'inch']:
        number_of_inches = float(input('Enter starting Measurement in Inches: '))
        
        if convert_to in ['feet', 'ft', 'foot']: 
            print(f'Result: {number_of_inches} Inches = {round(number_of_inches / 12, 2)} Feet')
        
        elif convert_to in ['yards', 'yard', 'yds', 'yd']: 
            print(f'Result: {number_of_inches} Inches = {round(number_of_inches / 36, 2)} Yards')
        
        else:
            print('Please Enter either Inches, Feet, or Yards for correct results.')
    
    elif convert_from in ['feet', 'ft', 'foot']: 
        number_of_feet = float(input('Enter starting Measurement in Feet: '))
        
        if convert_to in ['inches', 'in', 'inch']:
            print(f'Result: {number_of_feet} Feet = {round(number_of_feet * 12, 2)} Inches')
        
        elif convert_to in ['yards', 'yard', 'yds', 'yd']: 
            print(f'Result:  {number_of_feet} Feet = {round(number_of_feet / 3, 2)} Yards')
        
        else:
            print('Please Enter either Inches, Feet, or Yards for correct results.')
    
    elif convert_from in ['yards', 'yard', 'yds', 'yd']: 
        number_of_yards = float(input('Enter starting Measurement in Yards: '))
        
        if convert_to in ['inches', 'in', 'inch']:
            print(f'Result: {number_of_yards} Yards = {round(number_of_yards * 36, 2)} Inches')
        
        elif convert_to in ['feet', 'ft', 'foot']:
            print(f'Result: {number_of_yards} Yards = {round(number_of_yards * 3, 2)} Feet')
        
        else:
            print('Please Enter either Inches, Feet, or Yards for correct results.')
    
    else:
        print('Invalid unit! Please enter inches, feet, or yards.')