import { Component } from '@angular/core';

@Component({
selector: 'search',
template: `

	<div class="header">
            <h1 id="mainTitle">Search</h1>
    </div>
    
	<div class="component">
		<div class="search-input-group">
			<span>
				<button class="btn btn-default" type="button">Go!</button>
				<input  class="search-input" type="text">
			</span>
		</div>
	</div>
`

})

export class SearchComponent {
	
}
