# Binary Search

Intro:- Binary search is useful in finding a specific value in the finite range of sorted values.

Algorithm:- 

1. Let min = 1 and max = n
2. Guess the average value of max and min. Rounded down to integer value.
3. If you guessed the number. Stop. You find it.
4. If guess is too low. Then min will be one larger to the guess.
5. If guess is too high. Then max will be one smaller to the guess.
6. Go back to step 2.

Pseudocode:-

1. Let min = 0 and max = n - 1.
2. Compete guess as the average of max and min, rounded down (so it is an integer).
3. If array[guess] = target, then stop. You found it! Ruturn guess.
4. If array[guess] is too low, that is, array[guess] < target, then set min = guess + 1.
5. If array[guess] is too high, that is, array[guess] > target, then set max = guess - 1.
6. Go back to step 2.
