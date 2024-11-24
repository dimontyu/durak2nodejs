 import { html} from 'lit';
 import {repeat} from 'lit/directives/repeat.js';
 import {
        animate,
        fadeIn,
        fadeInSlow,
        fadeOut,
        //transformProps,
      } from '@lit-labs/motion';
	  
function Animate(i,card,detail,ina,out,skp){
return animate({
 in:ina,	
 out:out,
 id: `${i.id}:${card}`,
 inId: `${i.id}:${detail}`,
 skipInitial:skp
})}	  
	  
	  
 
 export function Html(Text){
 
 return html`<div class="container">
            <ul class="cards fit">
              ${repeat(
                this.detail ? [] : this.data,
                (i) => i,
                (i, x) =>
                  html`<li
					${Animate(i,'card','detail',null,fadeOut,'')}
                  >
                    <div
                      class="card-background fit"
                      ${animate({
                        in: fadeInSlow,
                        skipInitial: true,
                      })}
                    ></div>
                    <div class="card-content" @click=${(e) => this.onClick(e, i)}>
                      <div
                        class="icon card-icon"
                        ${animate({
                          id: `${i.id}:card-icon`,
                          inId: `${i.id}:detail-icon`,
                          skipInitial: true,
                        })}
                      >
                        pets
                      </div>
                    </div>
                    <div
                      class="divider"
                      ${animate({
                        in: fadeInSlow,
                        skipInitial: true,
                      })}
                    ></div>
                    <div class="card-header hero-text">
                      <div 
                        ${animate({
                          id: `${i.id}:card-header`,
                          inId: `${i.id}:detail-header`,
                          skipInitial: true,
                        })}
                      >
                        <div class="card-header-title">${i.value}</div>
                        <div>${i.summary}</div>
                      </div>
                    </div>
                  </li>`
              )}
            </ul>
            ${this.detail
              ? html`<div
                  class="detail fit"
                  ${animate({
                    id: `${this.detail.id}:detail`,
                    inId: `${this.detail.id}:card`,
                  })}
                >
                  <div class="detail-header">
                    <div @click=${this.onClick} title="вернуться"
                      class="icon detail-header-icon"
                      ${animate({
                        id: `${this.detail.id}:detail-icon`,
                        inId: `${this.detail.id}:card-icon`,
                      })}
                    >
                      pets
                    </div>
                    <div
                      class="detail-header-text hero-text"
                      ${animate({
                        id: `${this.detail.id}:detail-header`,
                        inId: `${this.detail.id}:card-header`,
                      })}
                    >
                      <div class="detail-header-title">
                        ${this.detail.value}
                      </div>
                      <div>${this.detail.summary}</div>
                    </div>
                  </div>
                  <div
                    class="detail-content divider-top"
                    ${animate({
                      in: fadeInSlow,
                    })}
                  >
                    ${Text}
                </div>`
              : ''}
          </div>`;}