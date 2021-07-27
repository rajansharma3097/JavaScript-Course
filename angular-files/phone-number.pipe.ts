import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "phone" })
export class PhonePipe implements PipeTransform {
  transform(val: string, args) {
    let newStr = "";
    let valCount = 0;
    if (val) {
      val = val
        .toString()
        .replace("(", "")
        .replace(")", "")
        .replace("-", "")
        .replace(/\D/g, "");

      if (val.length > 0 && val.length < 4) {
        newStr = "(" + val;
      } else if (val.length >= 4 && val.length < 7) {
        newStr = "(" + val.substr(0, 3) + ") " + val.slice(3);
      } else if (val.length >= 7 && val.length < 11) {
        newStr =
          "(" + val.substr(0, 3) + ") " + val.slice(3, 6) + "-" + val.slice(6);
      }
    }

    return newStr;
  }
}
