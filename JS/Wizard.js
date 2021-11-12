function next() {
    var y = document.getElementById('tab1');
    var x = document.getElementById('tab2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
    }
    else {
        x.style.display = 'none';
        y.style.display = 'block';
    }
}

function prev() {
    var y = document.getElementById('tab1');
    var x = document.getElementById('tab2');
    if (x.style.display === 'block') {
        x.style.display = 'none';
        y.style.display = 'block';
    }
    else {
        x.style.display = 'block';
        y.style.display = 'none';
    }
}

function nextTab() {
    var y = document.getElementById('tab1');
    var x = document.getElementById('tab2');
    var z = document.getElementById('tab3');
    if (z.style.display === 'none') {
        z.style.display = 'block';
        x.style.display = 'none';
        y.style.display = 'none';
    }
    else {
        z.style.display = 'none';
        x.style.display = 'block';
        y.style.display = 'block';
    }
}

function prevTab() {
    var x = document.getElementById('tab2');
    var z = document.getElementById('tab3');
    if (z.style.display === 'block') {
        z.style.display = 'none';
        x.style.display = 'block';
    }
    else {
        z.style.display = 'block';
        x.style.display = 'none';
    }
}