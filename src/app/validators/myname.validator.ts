import { AbstractControl, ValidatorFn } from '@angular/forms';

export function MyNameValidator(control: AbstractControl) {
  if (control.value.indexOf('ken') == 0 &&
      (control.value as string).endsWith('0')
  ) {
    return { errorName: true };
  }
}

export function ValidatorWithParams(params: string): ValidatorFn {
  return function(control: AbstractControl) {
      const name = control.value;
      let no = (name == params);
      return no ? { ouch: true } : null;
  }
}
