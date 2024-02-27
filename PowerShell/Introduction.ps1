# This function is used to introduce myself
    function display_info {
            Write-Host "Hello! My name is Paden Ruckman and I am 24 years old." 
            Write-Host "I am new to programming but I enjoy the challenge and problem solving." 
            Write-Host "I have 4 siblings, 3 older brothers and a little sister; and a blended family, which includes 7 of us."
            Write-Host "What I like to do for my free time is go outside to walk my dog, read my bible, and I just picked up golfing." 
            Write-Host "I am excited where this course will take me and for my future."
    }

# Read in sensitive data to a variable.
    $sensitive_data = Read-Host -Prompt "Enter your sensitive data (secret or topsecret)" -AsSecureString 

# Converting the secure string back to plain text.
    $plain_text_sensitive_data = [System.Runtime.InteropServices.Marshal]::PtrToStringAuto([System.Runtime.InteropServices.Marshal]::SecureStringToGlobalAllocUnicode($sensitive_data))

# Two variables.
    $family_size = 7
    $hobbies = 3

# One if statement using unique expressions.
    if ($plain_text_sensitive_data -eq "secret" -or $plain_text_sensitive_data -eq "topsecret") {
            Write-Host "You have access to sensitive information."
    }

# Display personal information.
    display_info

# Another if statement using unique expressions.
    if ($family_size -gt 2) {
            Write-Host "I have a big family!"
    }

# Two types of loops.
    $family_members = "olderBrother1", "olderBrother2", "littleSister"
        Write-Host "Family Members:"
            foreach ($member in $family_members) {
                Write-Host "- $member"
            }

    Write-Host "Favorite hobbies:"
        $favorite_hobbies = "Walking", "Bible", "Golfing"
            for ($i = 0; $i -lt $hobbies; $i++) {
                Write-Host "- $($favorite_hobbies[$i])"
            }

# Uses `Select-String` for similar functionality to `grep`
    Write-Host "Walking my dog is one of my favorite hobbies." | Select-String "Walking my dog"

# Two operators (logical and arithmetic)
    Write-Host "I have told you my family size of $family_size and my $hobbies favorite hobbies."

# Switch statement
    switch ($hobbies) {
            1 {
                Write-Host "My first favorite hobby is to walk my dog."
              }
            2 {
                Write-Host "My second favorite hobby is to read my bible."
              }
            3 {
               Write-Host "My third favorite hobby is to go golfing."
              }
    }
