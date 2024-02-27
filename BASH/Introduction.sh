#!/bin/bash

# This function is used to introduce myself
display_info() {

  echo "Hello! My name is Paden Ruckman and I am 24 years old."
  echo "I am new to programming but I enjoy the challenge and the problem solving."
  echo "I have 4 siblings, 3 older brothers and a little sister; and a blended family, which includes 7 of us."
  echo "What I like to do for my free time is go to outside to walk my dog, read my bible, and I just picked up golfing."
  echo "I am excited where this course will take me and for my future."

}

# Read in sensitive data to a variable.
read -s -p "Enter your sensitive data (secret or topsecret): " sensitive_data

# Two variables.
family_size=7
hobbies=3

# One if statements using unique expressions.

if [[ $sensitive_data == "secret" || $sensitive_data == "topsecret" ]]; then
    echo "You have access to sensitive information."
fi

# Display personal information. 
display_info

# Another if statements using unique expressions.
if ((family_size > 2 )); then
    echo "I have a big family!"
fi

 # Two types of loops.
 family_members=("olderBrother1" "olderBrother2" "littleSister")
 echo "Family Members:"
   for member in "${family_members[@]}"; do
       echo "- $member"
done

echo "Favorite hobbies: "
favorite_hobbies=("Walking" "Bible" "Golfing") 
   for (( i = 0; i < hobbies; i++ )); do
      echo "- ${favorite_hobbies[$1]}"
done

# Uses `grep` and `|` (pipe)
echo "Walking my dog is one of my favorite hobbies." | grep "Walking my dog"

# Two operators (logical and arithmetic)
echo "I have told you my family size of $family_size and my $hobbies favorite hobbies."

# Case statement
case $hobbies in
  1)  
      echo "My first favorite hobby is to walk my dog."
          ;;
  2) 
      echo "My second favorite hobby is to read my bible."
          ;;
  3) 
      echo "My third favorite hobby is to go golfing."
          ;;
esac

        

 
