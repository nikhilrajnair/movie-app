import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultimage'
})
export class DefaultimagePipe implements PipeTransform {

  transform(imagePath:  string):  string  {
		return imagePath ===  "N/A"  ?  "https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"  : imagePath;
	}

}
