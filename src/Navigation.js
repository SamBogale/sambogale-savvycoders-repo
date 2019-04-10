import { lowerCase } from 'lodash';
/*function buildLinks(linkArr){
    var linkHTML = lonkArr.map((link) =>{
      var destinatio = ' ';
    if(link = 'Home'){
      destination = lowerCase(link);
    }
    return ` <li>
     <a data-navigo href="./${destination}">
              ${link}
            </a>
          </li>
        `;
  }).join(' ');
        console.log(typeof linkHTML);
        console.log(linkHTML);
        return linkHTML;
  }
      export default function Navigation(state){
    return `
  
**/
function buildLinks(links){
    var i = 0;
    var linkList = '' ;
    var destination = '';

    while(i < links.length){
        if(links[i] !== 'Home'){
            destination = lowerCase(links[i]);
        }

        linkList += `
          <li>
            <a data-navigo href="./${destination}">
              ${links[i]}
            </a>
          </li>
        `;

        i++;
    }

    return linkList;
}

export default function Navigation(state){
    return `
    <div id="navigation">
      <ul class="container">
        ${buildLinks(state.links)}
      </ul>
    </div>
  `;
}
