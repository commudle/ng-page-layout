import { Component } from '@angular/core';

@Component({
  selector: 'ng-page-layout',
  template: `
    <div>
      <div class="base-layout">
        <div class="container">
          <div class="two-column-layout">
            <div class="main-column">
              <ng-content select="[main-column]"></ng-content>
            </div>
            <div class="right-column">
              <ng-content select="[right-column]"></ng-content>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .base-layout {
        min-height: 100vh;
        max-width: 1280px;
        margin-left: auto;
        margin-right: auto;
      }

      .container {
        width: 100%;
        padding-right: 1rem;
        padding-left: 1rem;
        margin-right: auto;
        margin-left: auto;
      }

      .two-column-layout {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
      }

      @media (min-width: 1024px) {
        .two-column-layout {
          display: grid;
          grid-template-columns: repeat(24, 1fr);
        }

        .two-column-layout .right-column {
          grid-column: span 7;
        }

        .two-column-layout .main-column {
          grid-column: span 17;
        }
      }
    `,
  ],
})
export class NgPageLayoutComponent {}
