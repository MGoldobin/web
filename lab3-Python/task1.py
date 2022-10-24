from math import *

def is_float(str):
    try:
        float(str)
        return True
    except ValueError:
        return False

def is_int(str):
    try:
        int(str)
        return True
    except ValueError:
        return False

def GCD(a, b): 
    while a != 0 and b != 0:
        if a > b:
            a = a % b 
        else:
            b = b % a 
    return max(a, b)

print("Программа находит наибольший общий делитель(НОД) для двух чисел. Введите два числа. Для выхода введите в консоль 'q'.")

while True:
  a = input('Первое число = ')
  b = input('Второе число = ')
  if(a=='q' or b=='q'):
    print('Выход из программы')
    break
  elif(is_float(a) and is_float(b)):
    if(float(a)==0 or float(b)==0):
      print('Ошибка! Одно из чисел равно 0')
      break
    if(float(a)<0 or float(b)<0):
      print('Ошибка! Одно из чисел меньше 0')
      break
    a1 = int(a if is_int(a) else a[:a.find('.')])
    b1 = int(b if is_int(b) else b[:b.find('.')])
    print(f"Наибольший общий делитель для чисел {a} и {b} = {GCD(a1, b1)}")
  else:
    print('Не корректный ввод! Попробуйте еще раз')