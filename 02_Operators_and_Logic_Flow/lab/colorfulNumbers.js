/**
 * Created by Ivaylo on 4/27/2018.
 */

function colorfulNumbers(n) {

    let html = "<ul>\n";
    for(let i = 1; i <= n; i++){
        let color = "blue";
        if(i % 2 === 0){
            color = "green"
        }
        html += ` <li><span style='color:${color}'>${i}</span></li>\n`
    }
    html += "</ul>";
    return html;
    
}

console.log(colorfulNumbers(10));