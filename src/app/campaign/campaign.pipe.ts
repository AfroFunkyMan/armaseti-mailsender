import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'campaign',
  pure: false
})
export class CampaignPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.filter(item => item.checked === true);
  }

}
