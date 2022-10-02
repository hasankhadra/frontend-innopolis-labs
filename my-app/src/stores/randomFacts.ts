export default async (num: number): Promise<Array<string>> => {
  let facts: Array<string> = [];

  for (let i = 0; i < num; i++) {
    const text = await fetch("http://numbersapi.com/random/math");

    facts.push(await text.text());
  }

  return facts;
};
