let nr = document.getElementById("input");

function CheckBttnClicked()
{
    if (nr.value > 0 && nr.value <= 100)
        {
        let nrString = nr.value.toString();
        let divThree = nr.value % 3 === 0;
        let divFive = nrString.endsWith(5) || nrString.endsWith(0);

        if (divThree && divFive)
            document.getElementById("display").innerHTML = "FizzBuzz!";
        else
            document.getElementById("display").innerHTML = nr.value;
        }
    else
        document.getElementById("display").innerHTML = "Error: out of range";
}

function SubtractOneBttnClicked()
{
    nr.value--;
    document.getElementById("display").innerHTML = nr.value;
}

function AddOneBttnClicked()
{
    nr.value++;
    document.getElementById("display").innerHTML = nr.value;
}