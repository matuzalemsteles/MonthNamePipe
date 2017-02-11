# Month Name
Simple pipe to angular2, returns the name of the month.

## Installation
1. First do it the download or clone of the repository and use the file `month-name.ts` in your project.
2. Import in your main module.
``` typescript
import { NgModule } from '@angular/core';
//...

import { MonthNamePipe } from '../pipes/month-name';

@NgModule({
  imports: [],
  declarations: [ MonthNamePipe ]
  //...
})
export class AppModule {}
```

## Usage

### month
Return the name of the month.
``` html
<p> {{ monthNumber | month }} </p>
```

## License
[MIT](https://github.com/matuzalemsteles/MonthNamePipe/blob/master/LICENSE) © [Matuzalém Teles](https://github.com/matuzalemsteles)