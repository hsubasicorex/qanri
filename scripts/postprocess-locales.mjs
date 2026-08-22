import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const locales=["en","tr","es","de","fr","ja","ar"];
for(const locale of locales){
  const file=join(process.cwd(),"out",locale,"index.html");
  if(!existsSync(file))throw new Error(`Missing localized export: ${file}`);
  const dir=locale==="ar"?"rtl":"ltr";
  const html=readFileSync(file,"utf8").replace(/<html\s+lang="[^"]*"(?:\s+dir="[^"]*")?>/,`<html lang="${locale}" dir="${dir}">`);
  writeFileSync(file,html);
}
const root=join(process.cwd(),"out","index.html");
if(existsSync(root))writeFileSync(root,readFileSync(root,"utf8").replace(/<html\s+lang="[^"]*"(?:\s+dir="[^"]*")?>/,'<html lang="en" dir="ltr">'));
