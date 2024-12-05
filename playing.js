function CheckBttnClicked()
{
    let nr = document.getElementById("input").value;
    if (nr > 0 && nr <= 100)
        {
        let nrString = nr.toString();
        let divThree = nr % 3 === 0;
        let divFive = nrString.endsWith(5) || nrString.endsWith(0);

        if (divThree && divFive)
            document.getElementById("display").innerHTML = "FizzBuzz!";
        else
            document.getElementById("display").innerHTML = nr;
        }
    else
        document.getElementById("display").innerHTML = "Error: out of range";
}