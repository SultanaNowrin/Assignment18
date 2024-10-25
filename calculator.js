document.getElementById('submit').addEventListener('click', function(){

    const firstInput = document.getElementById('first').value;
    const SecondInput = document.getElementById('second').value;

    const convertFirst = parseInt(firstInput);
    const convertSecond = parseInt(SecondInput);

    const result = convertFirst + convertSecond;
    const span = document.getElementById('result')

    span.innerText = result;
})

document.getElementById('submit2').addEventListener('click', function(){

    const thirdtInput = document.getElementById('third').value;
    const fourthInput = document.getElementById('fourth').value;

    const convertthird = parseInt(thirdtInput);
    const convertfourth = parseInt(fourthInput);

    const result2 = convertthird - convertfourth;
    const span = document.getElementById('result2')

    span.innerText = result2;
})

document.getElementById('submit3').addEventListener('click', function(){

    const fifthtInput = document.getElementById('fifth').value;
    const sixthInput = document.getElementById('sixth').value;

    const convertfifth = parseInt(fifthtInput);
    const convertsixth = parseInt(sixthInput);

    const result3 = convertfifth * convertsixth;
    const span = document.getElementById('result3')

    span.innerText = result3;
})

document.getElementById('submit4').addEventListener('click', function(){

    const seventhInput = document.getElementById('seventh').value;
    const eightthInput = document.getElementById('eightth').value;

    const convertseventh = parseInt(seventhInput);
    const converteightth = parseInt(eightthInput);

    const result4 = convertseventh / converteightth;
    const span = document.getElementById('result4')

    span.innerText = result4;
})


document.getElementById('submit5').addEventListener('click', function(){

    const ninthInput = document.getElementById('ninth').value;
    const tenthInput = document.getElementById('tenth').value;

    const convertninth = parseInt(ninthInput);
    const converttenth = parseInt(tenthInput);

    const result5 = convertninth % converttenth;
    const span = document.getElementById('result5')

    span.innerText = result5;
})


