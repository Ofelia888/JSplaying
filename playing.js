let nr = document.getElementById("input");

function Check()
{
    if (nr.value > 0 && nr.value <= 200)
        {
        let divThree = nr.value % 3 === 0;
        let divFive = nr.value % 5 === 0;
        let divSeven = nr.value % 7 === 0;

        if (divThree && divFive && divSeven)
            document.getElementById("display").innerHTML = "FIZZBUZZDEZZ!!!";
        else if (divThree && divFive)
            document.getElementById("display").innerHTML = "FizzBuzz!";
        else if (divFive && divSeven)
            document.getElementById("display").innerHTML = "DezzBuzz!";
        else if (divSeven && divThree)
            document.getElementById("display").innerHTML = "FizzDezz!";
        else if (divThree)
            document.getElementById("display").innerHTML = "Fizz";
        else if (divFive)
            document.getElementById("display").innerHTML = "Buzz";
        else if (divSeven)
            document.getElementById("display").innerHTML = "Dezz";
        else
            document.getElementById("display").innerHTML = "";
        }
    else
        document.getElementById("display").innerHTML = "Error: out of range";
}

function SubtractOneBttnClicked()
{
    nr.value--;
    Check();
}

function AddOneBttnClicked()
{
    nr.value++;
    Check();
}