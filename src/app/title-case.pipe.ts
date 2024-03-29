import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): any {
    if (!value) return null;



    let words = value.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
      if (i > 0 && TitleCasePipe.isPreposition(word)) {
        words[i] = words[i].toLowerCase();
      } else {
        words[i] = TitleCasePipe.toTitleCase(word);
      }
    }
    return words.join(" ");

  }

  private static toTitleCase(word: string) :string {
    return word.substring(0, 1).toUpperCase() + word.substring(1).toLocaleLowerCase();
  }

  private static isPreposition(word: string) :boolean {
    let prepositions = [
      "of",
      "the"
    ];
    return  prepositions.includes(word.toLowerCase())
  }
}
